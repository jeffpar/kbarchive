---
layout: page
title: "Q163802: HOWTO: Retrieve Contact Names from Schedule+ Tasks"
permalink: /kb/163/Q163802/
---

## Q163802: HOWTO: Retrieve Contact Names from Schedule+ Tasks

{% raw %}

	Article: Q163802
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation kbOOP kbvfp300 kbvfp500 kbvfp600
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When processing Schedule+ Tasks via OLE Automation, the only reference to the
	Contact information is the ContactItemID property. This article shows how to
	retrieve the Contact information based on that property.
	
	MORE INFORMATION
	================
	
	The methods below show different ways of processing Schedule+ Tasks. The method
	you use depends on whether you know that all of your tasks have Contacts
	associated with them.
	
	Method 1
	--------
	
	The following works only if every task has a Contact. If you get the error,
	"Function argument value, type, or count is invalid," on the GetRows method
	call, then you know that not every task has a contact, so you have to process
	the tasks row by row instead, as shown in Method 2.
	
	  * BEGIN CODE
	     oSched = CREATEOBJECT("SchedulePlus.Application")
	     oSched.Logon
	     mySched = oSched.ScheduleLogged
	     myTasks = mySched.SingleTasks
	     IF myTasks.Rows > 0  && Make sure there are tasks to process
	        myContacts = mySched.Contacts
	        aTasks = myTasks.getrows(100,"text","contactitemid")
	        FOR x = 1 TO ALEN(aTasks,1)  && process the rows in the array
	           * The following line limits the Contacts table to the given
	           * criteria:  ItemId = <contactitemid from the task>
	           myContacts.SetRestriction("itemid",aTasks(x,2),"==")
	           oneContact = myContacts.Item
	           ?"Task Description: ", aTasks(x,1)
	           ?"Contact First Name: ", oneContact.GetProperty("FirstName")
	           ?"Contact Last Name: ", oneContact.GetProperty("LastName")
	        ENDFOR
	     ENDIF
	     oSched.Logoff
	     * END CODE
	
	Method 2
	--------
	
	The following method processes every task in the Schedule+ Task table. It
	verifies that there is a contact associated with the task before attempting to
	retrieve the contact information.
	
	     * BEGIN CODE
	     oSched = CREATEOBJECT("SchedulePlus.Application")
	     oSched.Logon
	     mySched = oSched.ScheduleLogged
	     myTasks = mySched.SingleTasks
	     myContacts = mySched.Contacts
	     DO WHILE !myTasks.IsEndofTable
	        oneTask = myTasks.Item
	        ?"Description: ", oneTask.GetProperty("Text")
	        * We must verify that there is a contact for the task; otherwise,
	        * the GetProperty call will cause an error.
	        IF TYPE('oneTask.GetProperty("ContactItemID")') = "C"
	           * The following line limits the Contacts table to the given
	           * criteria:  ItemId = <contactitemid from the task>
	           myContacts.SetRestriction("itemid",;
	              oneTask.GetProperty("contactitemid"),"==")
	           oneContact = myContacts.Item
	           ?"Contact Name: "
	           ??ALLTRIM(oneContact.GetProperty("FirstName")) + " "
	           ??ALLTRIM(oneContact.GetProperty("LastName"))
	        ELSE
	           ?"Contact Name: No Contact For This Task"
	        ENDIF
	        myTasks.Skip(1)
	     ENDDO
	     oSched.Logoff
	     * END CODE
	
	REFERENCES
	==========
	
	The Microsoft Developer Network Library, January 1997.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation kbOOP kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
