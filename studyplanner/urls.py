from django.conf.urls import url
from . import views

app_name = 'studyplanner'

urlpatterns = [
	url(r'^my-plans/$', views.my_plans, name='my-plans'),

	url(r'^archived-plans/$',views.archived_plans, name='archived-plans'),


	url(r'^create-plan/$', views.create_plan, name='create-plan'),

	url(r'^edit-plan/(?P<pk>\d+)/$',views.edit_plan, name='edit-plan'),

	url(r'^plan-detail/(?P<pk>\d+)/$', views.plan_detail, name='plan-detail'),

	url(r'^archive-plan/(?P<pk>\d+)/$',views.archive_plan, name='archive-plan'),

	url(r'^unarchive-plan/(?P<pk>\d+)/$',views.unarchive_plan, name='unarchive-plan'),

	url(r'^complete-plan/(?P<pk>\d+)/$',views.complete_plan, name='complete-plan'),

	url(r'^print-plan/(?P<pk>\d+)/$',views.print_plan, name='print-plan'),


	url(r'^add-subject/(?P<pk>\d+)/$',views.add_subject, name='add-subject'),

	url(r'^edit-subject/(?P<pk>\d+)/$',views.edit_subject, name='edit-subject'),

	url(r'^complete-subject/(?P<pk>\d+)/$',views.complete_subject, name='complete-subject'),

	url(r'^delete-subject/(?P<pk>\d+)/$',views.DeleteSubject.as_view(), name='delete-subject'),


	url(r'^add-subtopic/(?P<pk>\d+)/$',views.add_subtopic, name='add-subtopic'),

	url(r'^edit-subtopic/(?P<pk>\d+)/$',views.edit_subtopic, name='edit-subtopic'),

	url(r'^complete-subtopic/(?P<pk>\d+)/$',views.complete_subtopic, name='complete-subtopic'),

	url(r'^delete-subtopic/(?P<pk>\d+)/$',views.DeleteSubtopic.as_view(), name='delete-subtopic'),


	url(r'^add-path/(?P<pk>\d+)/$',views.add_path, name='add-path'),

	url(r'^edit-path/(?P<pk>\d+)/$',views.edit_path, name='edit-path'),

	url(r'^complete-path/(?P<pk>\d+)/$',views.complete_path, name='complete-path'),

	url(r'^delete-path/(?P<pk>\d+)/$',views.DeletePath.as_view(), name='delete-path'),


	url(r'^add-method/(?P<pk>\d+)/(?P<pathpk>\d+)/(?P<flag>[\w-]+)/$',views.add_method, name='add-method'),

	url(r'^edit-method/(?P<pk>\d+)/$',views.edit_method, name='edit-method'),

	url(r'^complete-method/(?P<pk>\d+)/(?P<flag>[\w-]+)/$',views.complete_method, name='complete-method'),

	url(r'^delete-method/(?P<pk>\d+)/$',views.DeleteMethod.as_view(), name='delete-method'),			
]