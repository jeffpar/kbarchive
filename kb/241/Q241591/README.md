---
layout: page
title: "Q241591: HOWTO: Change the Cursor in a VBCE/eVB Application"
permalink: kb/241/Q241591/
---

## Q241591: HOWTO: Change the Cursor in a VBCE/eVB Application

	Article: Q241591
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to use the SetCursor and LoadCursor API calls to
	change the cursor in a Windows CE Toolkit for Visual Basic(VBCE) application.
	This approach is necessary because the Screen object in VBCE does not have a
	MousePointer property. Please note that this code works only on the Windows CE
	devices with a touch screen and not in the emulation environment.
	
	MORE INFORMATION
	================
	
	Step by Step Example
	
	1. Start a new Windows CE project in Visual Basic.
	
	2. Select default device as the target in the properties dialog.
	
	3. Place two command buttons on Form1.
	
	4. Paste the following code into Form1:
	
	  Const IDC_WAIT = 32514
	
	  Public Declare Function LoadCursor Lib "Coredll" _
	      Alias "LoadCursorW" ( _
	      ByVal hInstance As Long, _
	      ByVal lpCursorName As Long) As Long
	
	  Public Declare Function SetCursor Lib "Coredll" ( _
	      ByVal hCursor As Long) As Long
	
	  Function WaitCursor(bWait As Boolean) As Long
	
	      'Obtain the handle to the cursor
	      If bWait Then
	          'Get handle to the wait cursor
	          hCursor = LoadCursor(0, IDC_WAIT)
	      Else
	          'Restore default cursor
	          hCursor = LoadCursor(0, 0)
	      End If
	      
	      'Set the cursor based on the cursor handle
	      WaitCursor = SetCursor(hCursor)
	
	  End Function
	
	  Private Sub Command1_Click()
	      WaitCursor True
	  End Sub
	
	  Private Sub Command2_Click()
	      WaitCursor False
	  End Sub
	
	  Private Sub Form_Load()
	      Command1.Caption = "Hourglass"
	      Command2.Caption = "Default"
	  End Sub
	
	5. Run the application.
	
	6. Click the command buttons and notice that the cursor changes.
	
	Additional query words: vbce vbce6 wce
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600 kbVBeMb300
	Version           : :1.0,3.0
	Issue type        : kbhowto
	
	=============================================================================
	
