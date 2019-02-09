from django.db import models
from django.utils import timezone
import datetime

# Create your models here.

class Plan(models.Model):
	name = models.CharField(max_length=100,null=False,blank=False)
	is_completed = models.BooleanField(default=False)
	description = models.TextField(default='')
	deadline = models.DateField(default=datetime.date.today)
	completed_subjects = models.IntegerField(default=0)
	completed_paths = models.IntegerField(default=0)
	completed_on = models.DateField(default=datetime.date.today)
	archived = models.BooleanField(default=False)

	class Meta:
		ordering = ['is_completed']

	def __str__(self):
		return self.name

class Subject(models.Model):
	name = models.CharField(max_length=500,null=False,blank=False)
	plan = models.ForeignKey(Plan, on_delete=models.CASCADE, null=False)
	description = models.TextField(default='')
	is_completed = models.BooleanField(default=False)
	deadline = models.DateField(default=datetime.date.today)
	completed_subtopics = models.IntegerField(default=0)
	completed_methods = models.IntegerField(default=0)
	completed_on = models.DateField(default=datetime.date.today)

	class Meta:
		ordering = ['is_completed','deadline']

	def __str__(self):
		return self.name

class Path(models.Model):
	name = models.CharField(max_length=500,null=False,blank=False)
	plan = models.ForeignKey(Plan, on_delete=models.CASCADE, null=True)
	description = models.TextField(default='')
	is_completed = models.BooleanField(default=False)
	deadline = models.DateField(default=datetime.date.today)
	completed_methods = models.IntegerField(default=0)
	completed_on = models.DateField(default=datetime.date.today)

	class Meta:
		ordering = ['is_completed']

	def __str__(self):
		return self.name

class Subtopic(models.Model):
	name = models.CharField(max_length=500,null=False,blank=False)
	subject = models.ForeignKey(Subject, on_delete=models.CASCADE, null=False)
	description = models.TextField(default='')
	is_completed = models.BooleanField(default=False)
	deadline = models.DateField(default=datetime.date.today)
	completed_methods = models.IntegerField(default=0)
	completed_on = models.DateField(default=datetime.date.today)

	class Meta:
		ordering = ['is_completed','deadline']

	def __str__(self):
		return self.name

class Method(models.Model):
	name = models.CharField(max_length=100,null=False,blank=False)
	path = models.ForeignKey(Path, on_delete=models.CASCADE,null=True)
	subject = models.ForeignKey(Subject, on_delete=models.CASCADE,null=True,blank=True)
	subtopic = models.ForeignKey(Subtopic, on_delete=models.CASCADE,null=True,blank=True)
	description = models.TextField(default='')
	is_completed = models.BooleanField(default=False)
	deadline = models.DateField(default=datetime.date.today)
	completed_on = models.DateField(default=datetime.date.today)

	class Meta:
		ordering = ['is_completed','deadline']

	def __str__(self):
		return self.name