---
layout: page
title: "Q141172: PRB: Database Errors Not Shown When Closing Form"
permalink: /kb/141/Q141172/
---

## Q141172: PRB: Database Errors Not Shown When Closing Form

{% raw %}

	Article: Q141172
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbDatabase
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a form with one or more data controls on it is closed, all changed
	information in bound data controls is, by default, written to the database
	before the database is closed. However, any errors that result from this default
	update are not displayed. For example, if a field has its Required property set
	to True, and a form that contains an empty text box bound to that field is
	closed, no error will be shown.
	
	RESOLUTION
	==========
	
	Placing a call to the data control's UpdateRecord method in the form's Unload
	event causes all errors to be shown and also makes it possible to trap for these
	errors and act accordingly.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic, or if it is already running, click New Project on the
	  File menu.
	
	2. Double click the data control button in the Toolbox to add a new data
	  control, named Data1, to the form.
	
	3. Set the following properties of Data1:
	
	      DatabaseName: <path to your VB directory>\biblio.mdb
	
	  Leave the RecordSource property blank for now.
	
	4. Click and drag two text boxes onto the form.
	
	5. Set the DataSource property of both text boxes to Data1; also set the
	  DataField property of Text1 to "Au_ID" and the DataField property of Text2 to
	  Author.
	
	6. Click and drag a command button, named Command1 by default, onto the form.
	
	7. Add the following code to the Command1_Click procedure. This tells Jet that
	  the Au_ID field must have a non-null value before it is committed to the
	  database.
	
	         Private Sub Command1_Click()
	         Data1.Database.TableDefs("Authors").Fields("Au_ID").Required = True
	         Data1.RecordSource = "Authors"
	         Data1.Refresh
	      End Sub
	
	  The line setting the Required property can't be placed in the Form_Load event
	  because the connection to the database is not guaranteed to be valid until
	  the Form_Load event is finished.
	
	8. On the Run menu, click Start (ALT, R, S) or press F5 to start the
	  application.
	
	9. Press the Command1 button to set the Required property of the Au_ID field to
	  True.
	
	10. Select and delete the 1 in the Au_ID field of the first record. Now
	  double-click the control box in the upper-left corner of the form to close
	  the form. The database will be closed and no error will be raised.
	
	  If you changed the current record or did an update after deleting the value
	  in the Au_ID field, Visual Basic would have returned a "Data type conversion
	  error." Open the database again and examine the Au_ID field of the first
	  record; the 1 was never deleted (although this behavior is not guaranteed).
	  Add the "Data1.UpdateRecord" line to the Form1_Unload event to allow the
	  error to be shown and/or trapped.
	
	The Biblio.mdb database is used in many examples and should not be permanently
	changed. After experimenting with this problem, remember to change the Required
	value of the Au_ID field back to its original value of False. This can be done
	by rerunning the above program and clicking the command button after changing
	the code in the Command1_Click procedure to:
	
	     Private Sub Command1_Click()
	     Data1.Database.TableDefs("Authors").Fields("Au_ID").Required = False
	     End Sub
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbDatabase 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
