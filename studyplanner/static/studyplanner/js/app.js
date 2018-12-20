var modal = document.getElementById('add_modal');
var formModal = document.getElementById('formModal');
var actionModal = document.getElementById('actionModal');
var modalHeader = document.getElementById('modalHeader');
var subjectForm = document.getElementById('subjectForm');
var subtopicForm = document.getElementById('subtopicForm');
var pathForm = document.getElementById('pathForm');
var methodForm = document.getElementById('methodForm');
var modalForm = document.getElementById('modalForm');
var submitBtn = document.getElementById('submitBtn');
var closeBtn = document.getElementById('closeBtn');
var completeDeleteBtns = document.getElementById('completeDeleteBtns');
var xBtn = document.getElementById('xBtn');
var performBtn = document.getElementById('performBtn');
var modalMessage = document.getElementById('modalMessage');
var modType='';
var cFlag='';
var PK;
var pathPK;
var actType = '';
preURL = "http://localhost:8000/planner/"

function openFormModal(btnType,pk,pathpk='',customFlag='') {
	modal.style.display = "block";
	formModal.style.display = "block";
	cFlag = customFlag;
	PK=pk;
	pathPK=pathpk;
	modType = btnType;
	if (btnType == 'subject') {
		modalHeader.innerHTML = "Add Subject";
		modalForm.insertBefore(subjectForm,submitBtn);
		subjectForm.style.display = "block";
	}
	else if (btnType == 'subtopic') {
		modalHeader.innerHTML = "Add Subtopic";
		modalForm.insertBefore(subtopicForm,submitBtn);
		subtopicForm.style.display = "block";
	}
	else if (btnType == 'path') {
		modalHeader.innerHTML = "Add Path";
		modalForm.insertBefore(pathForm,submitBtn);
		pathForm.style.display = "block";
	}
	else if (btnType == 'subjectMethod') {
		modalHeader.innerHTML = "Add Subject Learning Method";
		modalForm.insertBefore(methodForm,submitBtn);
		methodForm.style.display = "block";
	}
	else if (btnType == 'subtopicMethod') {
		modalHeader.innerHTML = "Add Subtopic Learning Method";
		modalForm.insertBefore(methodForm,submitBtn);
		methodForm.style.display = "block";
	}
	else {
		closeModal();
	}
}

function openActionModal(btnType, actionType, title, pk, customFlag='') {
	modal.style.display = "block";
	actionModal.style.display = "block";
	modType = btnType;
	actType = actionType;
	PK = pk;
	cFlag = customFlag;
	if (btnType == 'subject') {
		if (actionType == 'view') {
			modalHeader.innerHTML = title;
		}
		else if (actionType == 'remove') {
			completeDeleteBtns.style.display = "block";
			modalHeader.innerHTML = "Remove "+title;
			modalMessage.innerHTML = "All subtopics and methods under this subject will be removed. \nAre you sure, you want to remove this?"
		}
		else if (actionType == 'markComplete') {
			completeDeleteBtns.style.display = "block";
			modalHeader.innerHTML = "Completed "+title+"?";
			modalMessage.innerHTML = "This action cannot reversed. \nAre you sure, you want to Mark as completed?";
		}
	}
	else if (btnType == 'subtopic') {
		if (actionType == 'view') {
			modalHeader.innerHTML = title;
		}
		else if (actionType == 'remove') {
			completeDeleteBtns.style.display = "block";
			modalHeader.innerHTML = "Remove "+title;
			modalMessage.innerHTML = "All methods under this subtopic will be removed. \nAre you sure, you want to remove this?";
		}
		else if (actionType == 'markComplete') {
			completeDeleteBtns.style.display = "block";
			modalHeader.innerHTML = "Completed "+title+"?";
			modalMessage.innerHTML = "This action cannot reversed. \nAre you sure, you want to Mark as completed?";
		}
	}
	else if (btnType == 'path') {
		if (actionType == 'view') {
			modalHeader.innerHTML = title;
		}
		else if (actionType == 'remove') {
			completeDeleteBtns.style.display = "block";
			modalHeader.innerHTML = "Remove "+title;
			modalMessage.innerHTML = "All methods under this path will be removed. \nAre you sure, you want to remove this?";
		}
		else if (actionType == 'markComplete') {
			completeDeleteBtns.style.display = "block";
			modalHeader.innerHTML = "Completed "+title+"?";
			modalMessage.innerHTML = "This action cannot reversed. \nAre you sure, you want to Mark as completed?";
		}
	}
	else if (btnType == 'subjectMethod') {
		if (actionType == 'view') {
			modalHeader.innerHTML = title;
		}
		else if (actionType == 'remove') {
			completeDeleteBtns.style.display = "block";
			modalHeader.innerHTML = "Remove "+title;
			modalMessage.innerHTML = "This method will be removed. \nAre you sure, you want to remove this?";
		}
		else if (actionType == 'markComplete') {
			completeDeleteBtns.style.display = "block";
			modalHeader.innerHTML = "Completed "+title+"?";
			modalMessage.innerHTML = "This action cannot reversed. \nAre you sure, you want to Mark as completed?";
		}
	}
	else if (btnType == 'subtopicMethod') {
		if (actionType == 'view') {
			modalHeader.innerHTML = title;
		}
		else if (actionType == 'remove') {
			completeDeleteBtns.style.display = "block";
			modalHeader.innerHTML = "Remove "+title;
			modalMessage.innerHTML = "This method will be removed. \nAre you sure, you want to remove this?";
		}
		else if (actionType == 'markComplete') {
			completeDeleteBtns.style.display = "block";
			modalHeader.innerHTML = "Completed "+title+"?";
			modalMessage.innerHTML = "This action cannot reversed. \nAre you sure, you want to Mark as completed?";
		}
	}
	else {
		modal.style.display = "none";
	}
}

function sendData() {
	var deadlineDate = document.getElementById('id_deadline_day');
	var deadlineMonth = document.getElementById('id_deadline_month');
	var deadlineYear = document.getElementById('id_deadline_year');
	var deadline = deadlineYear.value+" "+deadlineMonth.value+" "+deadlineDate.value;
	console.log(deadline);
	if (modType == 'subject') {
		var name = document.querySelectorAll('.subjectname');
		name=name[0].value;
		formData = {
			'name':name,
			'deadline':deadline,
		}
		sendFormData(preURL + "add-subject/" + PK + "/",formData);
	}
	else if (modType == 'subtopic') {
		var name = document.querySelectorAll('.subtopicname');
		name=name[0].value;
		formData = {
			'name':name,
			'deadline':deadline,
		}
		sendFormData(preURL + "add-subtopic/" + PK + "/",formData);
	}
	else if (modType == 'path') {
		var name = document.querySelectorAll('.pathname');
		name=name[0].value;
		formData = {
			'name':name,
			'deadline':deadline,
		}
		sendFormData(preURL + "add-path/" + PK + "/",formData);
	}
	else if (modType == 'subjectMethod') {
		var name = document.querySelectorAll('.methodname');
		name=name[0].value;
		var description = document.querySelectorAll('.description');
		description = description[0].value;
		formData = {
			'name':name,
			'deadline':deadline,
			'description':description,
		}
		sendFormData(preURL + "add-method/" + PK + "/" + pathPK + "/" + cFlag + "/",formData);
	}
	else if (modType == 'subtopicMethod') {
		var name = document.querySelectorAll('.methodname');
		name=name[0].value;
		var description = document.querySelectorAll('.description');
		description = description[0].value;
		formData = {
			'name':name,
			'deadline':deadline,
			'description':description,
		}
		sendFormData(preURL + "add-method/" + PK + "/" +  pathPK + "/" + cFlag + "/",formData);
	}
	else {
		closeModal();
	}
}

function performAction() {
	requestType = 'POST';
	if (modType == 'subject') {
		if (actType == 'view') {
			
		}
		else if (actType == 'remove') {
			sendAction(preURL + "delete-subject/" + PK + "/",requestType);
		}
		else if (actType == 'markComplete') {
			requestType = 'GET';
			sendAction(preURL + "complete-subject/" + PK + "/",requestType);
		}
	}
	else if (modType == 'subtopic') {
		if (actType == 'view') {
		}
		else if (actType == 'remove') {
			sendAction(preURL + "delete-subtopic/" + PK + "/",requestType);
		}
		else if (actType == 'markComplete') {
			requestType = 'GET';
			sendAction(preURL + "complete-subtopic/" + PK + "/",requestType);
		}
	}
	else if (modType == 'path') {
		if (actType == 'view') {
		}
		else if (actType == 'remove') {
			sendAction(preURL + "delete-path/" + PK + "/",requestType);
		}
		else if (actType == 'markComplete') {
			requestType = 'GET';
			sendAction(preURL + "complete-path/" + PK + "/",requestType);
		}
	}
	else if (modType == 'subjectMethod') {
		if (actType == 'view') {
		}
		else if (actType == 'remove') {
			sendAction(preURL + "delete-method/" + PK + "/",requestType);
		}
		else if (actType == 'markComplete') {
			requestType = 'GET';
			sendAction(preURL + "complete-method/" + PK + "/" + cFlag + "/",requestType);
		}
	}
	else if (modType == 'subtopicMethod') {
		if (actType == 'view') {
		}
		else if (actType == 'remove') {
			sendAction(preURL + "delete-method/" + PK + "/",requestType);
		}
		else if (actType == 'markComplete') {
			requestType = 'GET';
			sendAction(preURL + "complete-method/" + PK + "/" + cFlag + "/",requestType);
		}
	}
	else {
		closeModal();
	}	
}


closeBtn.onclick = function() {
	closeModal();
}

xBtn.onclick = function() {
	closeModal();
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

function closeModal() {
	modal.style.display = "none";
	formModal.style.display = "none";
	actionModal.style.display = "none";
	subjectForm.style.display = "none";
	subtopicForm.style.display = "none";
	pathForm.style.display = "none";
	methodForm.style.display = "none";
	completeDeleteBtns.style.display = "none";
	modalHeader.innerHTML = "";
	modalMessage.innerHTML = "";
	removeForms();
}

function removeForms() {
	modalForm.removeChild(subjectForm);
	modalForm.removeChild(subtopicForm);
	modalForm.removeChild(pathForm);
	modalForm.removeChild(methodForm);
}

var csrftoken = Cookies.get('csrftoken');
function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
  beforeSend: function(xhr, settings) {
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
      xhr.setRequestHeader("X-CSRFToken", csrftoken);
    }
  }
});

function sendFormData(actionURL,formData) {
  $.ajax({
    type: 'POST',
    url: actionURL,
    data: formData,
    dataType: "json",
    }).done(function (data) {
      if (data.success) {
        window.location.reload()
      }   
      else {
        window.location.reload()
      }
  });
}

function sendAction(actionURL,requestType) {
  $.ajax({
    type: requestType,
    url: actionURL,
    }).done(function (data) {
      if (data.success) {
        window.location.reload()
      }   
      else {
        window.location.reload()
      }
  });
}