---
layout: page
title: "Q140309: BUG: Recordset Update Error Differs Between 16-Bit and 32-Bit"
permalink: kb/140/Q140309/
---

## Q140309: BUG: Recordset Update Error Differs Between 16-Bit and 32-Bit

	Article: Q140309
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbDatabasekbbuglist
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
	
	When running Update method on a recordset, the error message displayed for
	16-bit Visual Basic and 32-bit Visual Basic are completely different. However,
	the cause of the error is the same. You didn't use the AddNew or Edit method
	before trying to save changes to a record.
	
	16-Bit Error
	------------
	
	  Run-time error '3426':
	  The action was canceled by an associated object.
	
	32-Bit Error
	------------
	
	  Run-time error '3020':
	  Update or CancelUpdate without AddNew or Edit.
	
	CAUSE
	=====
	
	The 16-bit error message is actually a Jet version 2.5 error message.
	
	WORKAROUND
	==========
	
	To workaround this bug, use the Edit method before the Update method, prior to
	saving the changes to a recordset, as shown below:
	
	     Data1.RecordSet.Edit
	     Data1.RecordSet.Update
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the 16-bit version of Visual Basic
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Error in Visual Basic 4.0 16-Bit
	-------------------------------------------------------
	
	1. Start 16-bit Visual Basic 4.0, or if it is already running, click New Project
	  on the File menu.
	
	2. Place a Data control on the Form1 form.
	
	3. Set the Data control's DatabaseName property to Biblio.mdb.
	
	4. Set the Data control's RecordSource property to Authors.
	
	5. Add a TextBox control to the Form1 form. First set the TextBox control's
	  DataSource property to Data1 and then set the DataField property to Authors.
	
	6. Add a command button to the Form1 form.
	
	7. Copy the following code sample to the Form1 code window:
	
	         Private Sub Command1_Click()
	            'To prevent the bug, uncomment the next line
	            'Data1.RecordSet.Edit
	            Data1.RecordSet.Update
	         End Sub
	
	8. Press the F5 key or click Start on the Run menu to start the program.
	
	9. Enter some text in the text box.
	
	10. Click the command button. The following error message appears in the
	  Microsoft Visual Basic Dialog Box:
	
	  Run-time error '3426':
	  The action was canceled by an associated object.
	
	  Click the End button to close the dialog box and end the program.
	
	11. Save the project. The project can be used to re-create the 32-bit error.
	
	Steps to Reproduce the Error in Visual Basic 4.0 32-Bit
	-------------------------------------------------------
	
	1. Start 32-bit Visual Basic 4.0 or if it is already running, click Open Project
	  on the File menu.
	
	2. Open the project that you just saved in step 12 above.
	
	3. Press the F5 key or click Start on the Run menu to start the program.
	
	4. Enter some text in the text box.
	
	5. Click the command button. The following error message appears in the
	  Microsoft Visual Basic dialog box:
	
	  Run-time error '3020':
	  Update or CancelUpdate without AddNew or Edit.
	
	  Click the end button to close the dialog box and end the program.
	
	REFERENCES
	==========
	
	For additional information on Visual Basic 4.0 error messages, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q136250 LONG: List of Trappable Errors for Visual Basic 4.0
	
	Additional query words: 4.00 vb4win vb4all buglist4.00
	
	======================================================================
	Keywords          : kbDatabase kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	
