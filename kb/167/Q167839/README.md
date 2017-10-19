---
layout: page
title: "Q167839: BUG: PopupMenu on Modal Form Not Displayed"
permalink: /kb/167/Q167839/
---

## Q167839: BUG: PopupMenu on Modal Form Not Displayed

	Article: Q167839
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an application contains at least two forms and one of those forms is
	displayed modally by using a PopupMenu on another form, a PopupMenu on the modal
	form will not be displayed.
	
	RESOLUTION
	==========
	
	A Timer control can be used to work around this problem:
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. Add a Timer control (Timer1) to Form1.
	
	3. Add another form (Form2) to the project.
	
	4. On Form1, create a menu (mnuFile) with a caption of "File" that has a submenu
	  (mnuOpen) with a caption of "Open." On Form2, create a menu (mnuEdit) with a
	  caption of "Edit" that has a submenu (mnuFind) with a caption of "Find."
	
	5. Add the following code to the General Declarations section of Form1:
	
	        Private Sub Form_Load()
	           Timer1.Enabled = False
	           Timer1.Interval = 1
	        End Sub
	
	        Private Sub Form_Click()
	           PopupMenu mnuFile
	        End Sub
	
	        Private Sub Timer1_Timer()
	           Form2.Show 1
	           Timer1.Enabled = False
	        End Sub
	
	        Private Sub mnuOpen_Click()
	           Timer1.Enabled = True
	        End Sub
	
	6. Add the following code to the General Declarations section of Form2:
	
	        Private Sub Form_Click()
	           PopupMenu mnuEdit
	        End Sub
	
	7. Press the F5 key to run the program. Click on Form1 and the Open PopupMenu
	  will be displayed. Click on the Open PopupMenu and Form2 is shown modally.
	  Click on Form2 and the Edit PopupMenu is displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. Add another form (Form2) to the project.
	
	3. On Form1, create a menu (mnuFile) with a caption of "File" that has a submenu
	  (mnuOpen) with a caption of "Open." On Form2 create a menu (mnuEdit) with a
	  caption of "Edit" that has a submenu (mnuFind) with a caption of "Find."
	
	4. Add the following code to the General Declarations section of Form1:
	
	        Private Sub Form_Click()
	           PopupMenu mnuFile
	        End Sub
	
	        Private Sub mnuOpen_Click()
	           Form2.Show 1
	        End Sub
	
	5. Add the following code to the General Declarations section of Form2:
	
	        Private Sub Form_Click()
	           PopupMenu mnuEdit
	        End Sub
	
	6. Press the F5 key to run the program. Click on Form1 and the Open PopupMenu
	  will be displayed. Click on the Open PopupMenu and Form2 is shown modally.
	  Click on Form2 and the Edit PopupMenu is not displayed.
	
	Additional query words: kbVBp500bug kbVBp600bug kbVBp400bug kbVBp kbdsd kbDSupport kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Issue type        : kbbug
	
	=============================================================================
	
