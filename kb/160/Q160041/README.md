---
layout: page
title: "Q160041: HOWTO: Modify the Windows Default Cursor"
permalink: /kb/160/Q160041/
---

## Q160041: HOWTO: Modify the Windows Default Cursor

	Article: Q160041
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbVBp kbVBp400 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MousePointer property in Visual Basic (which applies to Form, MDIForm, and a
	set of selected controls) allows you to modify the cursor's shape for a Visual
	Basic application. However, if the cursor is moved away from the Visual Basic
	application, its shape is determined by other applications or by the Desktop.
	
	This article describes how to modify the cursor's default settings so that these
	changes are reflected throughout the Desktop.
	
	NOTE: Due to a bug in Windows NT, this article only applies to Windows 95 and
	Windows 98. Microsoft is researching this issue and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	On Windows 2000, this program works but not as expected. In the code that
	follows, in Command1_Click toggles the pointer between an arrow and an
	arrow/hourglass icon. And the code in Command2_Click has no affect.
	
	MORE INFORMATION
	================
	
	At times, you may want to design an application in Visual Basic that allows the
	user to run other applications or tasks within the same application while a task
	is running.
	
	A simple way to inform the user that this particular state exists is to modify
	the cursor to be both an arrow and an hourglass until the first task is
	completed. You can accomplished this easily with the SetSystemCursor API.
	
	Step-by-Step Example
	--------------------
	
	The following example simulates starting a task with the first CommandButton and
	halting it with the second CommandButton:.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the General Declarations section of Form1:
	
	     Private Const IDC_APPSTARTING = 32650&
	     Private Const IDC_ARROW = 32512&
	     Private Const OCR_NORMAL = 32512&
	
	     Private Declare Function LoadCursor Lib "user32" Alias "LoadCursorA"
	     (ByVal hInstance As Long, ByVal lpCursorName As Long) As Long
	     Private Declare Function SetSystemCursor Lib "user32" (ByVal hcur As
	     Long, ByVal id As Long) As Boolean
	
	3. Add two CommandButtons, Command1 and Command2, to Form1.
	
	4. Add the following code to the Click event of Command1:
	
	     Private Sub Command1_Click()
	     Dim hcursor As Long, ret_val As Long
	
	         hcursor = LoadCursor(0, IDC_APPSTARTING)
	         ret_val = SetSystemCursor(hcursor, OCR_NORMAL)
	
	     End Sub
	
	5. Add the following code to the Click event of Command2:
	
	     Private Sub Command2_Click()
	     Dim hcursor As Long, ret_val As Long
	
	         hcursor = LoadCursor(0, IDC_ARROW)
	         ret_val = SetSystemCursor(hcursor, OCR_NORMAL)
	
	     End Sub
	
	6. Run the project by pressing the F5 key. Click on Command1 to modify the
	  cursor. Move the cursor around over other applications and click on them for
	  activation. Finally, click on Command2 to restore the cursor to its original
	  shape.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbVBp kbVBp400 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
