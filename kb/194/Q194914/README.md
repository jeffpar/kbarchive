---
layout: page
title: "Q194914: HOWTO: Minimize All Windows From Visual Basic"
permalink: kb/194/Q194914/
---

## Q194914: HOWTO: Minimize All Windows From Visual Basic

	Article: Q194914
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbGrpDSUser kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
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
	
	Occasionally you would like to programmatically minimize all visible windows.
	Using the keybd_event API, this can easily be accomplished.
	
	MORE INFORMATION
	================
	
	The trick is to mimic the keyboard events required to bring the Taskbar popup
	menu and send it the letter "M" to select the "Minimize All Windows" option.
	This is accomplished with three calls to the keybd_event API.
	
	The second argument for the keybd_event call is the hardware scan code, and, in
	this case, you could use the value 91. However, because applications should not
	use the scan code, it has been left as 0.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Place a CommandButton onto Form1.
	
	3. Copy and paste the following code into Form1's Code Window.
	
	        Private Declare Sub keybd_event Lib "user32" ( _
	           ByVal bVk As Byte, _
	           ByVal bScan As Byte, _
	           ByVal dwFlags As Long, _
	           ByVal dwExtraInfo As Long)
	
	        Const KEYEVENTF_KEYUP = &H2
	        Const VK_LWIN = &H5B
	
	        Private Sub Command1_Click()
	           ' 77 is the character code for the letter 'M'
	           Call keybd_event(VK_LWIN, 0, 0, 0)
	           Call keybd_event(77, 0, 0, 0)
	           Call keybd_event(VK_LWIN, 0, KEYEVENTF_KEYUP, 0)
	        End Sub
	
	4. Press the F5 key to run the application and Click on Command1. All visible
	  windows will minimize.
	
	REFERENCES
	==========
	
	For more information, please Search on keybd_event in either the Win32
	Programmer's Reference or The Microsoft Developer Network (MSDN) Library CD-ROM.
	
	======================================================================
	Keywords          : kbAPI kbGrpDSUser kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
