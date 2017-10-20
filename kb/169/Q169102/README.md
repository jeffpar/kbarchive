---
layout: page
title: "Q169102: BUG: REQUERY() Problem with Private Datasessions Sharing a Table"
permalink: /kb/169/Q169102/
---

## Q169102: BUG: REQUERY() Problem with Private Datasessions Sharing a Table

{% raw %}

	Article: Q169102
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a multi-user application, if you have two forms with private DataSessions
	that include cursors that are based on the same table, the REQUERY() function
	returns old data on a form opened after the update of data on another session of
	the application.
	
	CAUSE
	=====
	
	The problem is in the buffering of data, and the fact that REQUERY() is not
	overriding the SET REFRESH timing. If the form is creating a second DataSession
	with a cursor pointing to the same table as the first DataSession, the new
	DataSession uses the data from the existing cursor.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: This is a multi-user test. References to User1 and User2 indicate two
	separate instances of Visual FoxPro. This can be on separate machines, or two
	sessions of Visual FoxPro on the same machine.
	
	In a project with at least one table ('Table1' in this example), create the
	following:
	
	1. Two local views based on Table1.
	
	2. Filter the views to return one record. Ensure it is the same record in both
	  views.
	
	3. Create two forms: Form1 and Form2.
	
	4. Place one view in the DataEnvironment of Form1.
	
	5. Place the second view in the DataEnvironment of Form2.
	
	6. Place two or three text boxes on each form bound to fields in the respective
	  views
	
	7. Set the DATASESSION property to Private on both forms.
	
	8. Set the BUFFERMODE of each form to anything but None.
	
	9. On Form1, create a command button with the following code:
	
	        TABLEUPDATE()
	        FLUSH
	
	10. Create a second command button on Form1 with the following code:
	
	        DO FORM FORM2
	
	11. Create a command button on Form2 with the following code:
	
	        REQUERY(THISFORM.DATAENVIRONMENT.CURSOR1.ALIAS)
	        THISFORM.REFRESH
	
	12. User1: Run Form1.
	
	13. User2: Run Form1.
	
	14. User1: Modify the data in Field1, and click the TableUpdate button.
	
	15. User2: Click the Form2 button on Form1, and click the Requery button.
	
	Notice that it does not update with the updated information from User1. Waiting
	more than 5 seconds, assuming the REFRESH is set to the default '0,5', then
	clicking the Requery button populates the fields with the updated information.
	
	Additional query words: Multi-User Requery Refresh
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
