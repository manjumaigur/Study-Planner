from django import forms
import datetime
from .models import Plan, Subject, Subtopic, Path, Method

class PlanForm(forms.Form):
	name =  forms.CharField(max_length=100,label="Plan Name")
	deadline = forms.DateField(label="Deadline",widget=forms.SelectDateWidget(years=range(2018,2031),attrs={'placeholder':datetime.date.today}))

class SubjectForm(forms.Form):
	name =  forms.CharField(max_length=100,label="Subject Name",widget=forms.TextInput(attrs={'class':'subjectname'}))
	deadline = forms.DateField(label="Deadline",widget=forms.SelectDateWidget(years=range(2018,2031),attrs={'placeholder':datetime.date.today}))

class SubtopicForm(forms.Form):
	name =  forms.CharField(max_length=100,label="Subtopic Name",widget=forms.TextInput(attrs={'class':'subtopicname'}))
	deadline = forms.DateField(label="Deadline",widget=forms.SelectDateWidget(years=range(2018,2031),attrs={'placeholder':datetime.date.today}))

class PathForm(forms.Form):
	name =  forms.CharField(max_length=100,label="Path Name",widget=forms.TextInput(attrs={'class':'pathname'}))
	deadline = forms.CharField(label="Deadline",widget=forms.SelectDateWidget(years=range(2018,2031),attrs={'placeholder':datetime.date.today}))

class MethodForm(forms.Form):
	name =  forms.CharField(max_length=100,label="Method Name",widget=forms.TextInput(attrs={'class':'methodname'}))
	description = forms.CharField(label='Description',widget=forms.Textarea(attrs={'placeholder':'add description','class':'description'}))
	deadline = forms.DateField(label="Deadline",widget=forms.SelectDateWidget(years=range(2018,2031),attrs={'placeholder':datetime.date.today}))

class EditPlanForm(forms.ModelForm):
	name =  forms.CharField(max_length=100,label="Plan Name")
	deadline = forms.DateField(label="Deadline",widget=forms.SelectDateWidget(years=range(2018,2031),attrs={'placeholder':datetime.date.today}))
	class Meta:
		model = Plan
		fields = ['name','deadline']

class EditSubjectForm(forms.ModelForm):
	name =  forms.CharField(max_length=100,label="Subject Name",widget=forms.TextInput(attrs={'class':'subjectname'}))
	deadline = forms.DateField(label="Deadline",widget=forms.SelectDateWidget(years=range(2018,2031),attrs={'placeholder':datetime.date.today}))
	class Meta:
		model = Subject
		fields = ['name','deadline']

class EditSubtopicForm(forms.ModelForm):
	name =  forms.CharField(max_length=100,label="Subtopic Name",widget=forms.TextInput(attrs={'class':'subtopicname'}))
	deadline = forms.DateField(label="Deadline",widget=forms.SelectDateWidget(years=range(2018,2031),attrs={'placeholder':datetime.date.today}))
	class Meta:
		model = Subtopic
		fields = ['name','deadline']

class EditPathForm(forms.ModelForm):
	name =  forms.CharField(max_length=100,label="Path Name",widget=forms.TextInput(attrs={'class':'pathname'}))
	deadline = forms.CharField(label="Deadline",widget=forms.SelectDateWidget(years=range(2018,2031),attrs={'placeholder':datetime.date.today}))
	class Meta:
		model = Path
		fields = ['name','deadline']

class EditMethodForm(forms.ModelForm):
	name =  forms.CharField(max_length=100,label="Method Name",widget=forms.TextInput(attrs={'class':'methodname'}))
	description = forms.CharField(label='Description',widget=forms.Textarea(attrs={'placeholder':'add description','class':'description'}))
	deadline = forms.DateField(label="Deadline",widget=forms.SelectDateWidget(years=range(2018,2031),attrs={'placeholder':datetime.date.today}))
	class Meta:
		model = Method
		fields = ['name','deadline','description']