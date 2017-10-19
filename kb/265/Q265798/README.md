---
layout: page
title: "Q265798: HOW TO: Change the Cursor in an eMbedded Visual Basic Applicatio"
permalink: /kb/265/Q265798/
---

## Q265798: HOW TO: Change the Cursor in an eMbedded Visual Basic Applicatio

	Article: Q265798
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbOSWinCEsearch kbGrpDSVB kbDSupport kbVBM300 kbAudDeveloper kbHOWTOmaster
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Change Cursor in Visual Basic Application
	
	SUMMARY
	=======
	
	This article illustrates how to use the SetCursor and LoadCursor API function
	calls to change the cursor in an eMbedded Visual Basic 3.0 (eVB) application.
	This approach is necessary because the Screen.MousePointer property in eVB works
	only on the Pocket PC device. It does not work on the Handheld PC Professional
	Edition or the Palm-size PC devices.
	
	Change Cursor in Visual Basic Application
	-----------------------------------------
	
	1. Create a new Windows CE project in eMbedded Visual Basic. Form1 is created by
	  default.
	
	2. Place two Command buttons on Form1.
	
	3. Paste the following code into Form1:
	
	NOTE: This code works on the Windows CE devices with touch screens but it does
	not work in the emulation environment.
	
	  Const IDC_WAIT = 32514
	
	  Public Declare Function LoadCursor Lib "Coredll" _
	      Alias "LoadCursorW" ( _
	      ByVal hInstance As Long, _
	      ByVal lpCursorName As Long) As Long
	
	  Public Declare Function SetCursor Lib "Coredll" ( _
	      ByVal hCursor As Long) As Long
	
	  Function WaitCursor(bWait As Boolean) As Long
	      Dim hCursor As Long
	      
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
	      Command1.Move 120, 120, 2535, 375
	      Command2.Move 120, 600, 2535, 375
	      Command1.Caption = "Hourglass"
	      Command2.Caption = "Default"
	  End Sub
	
	4. Run the application.
	
	5. Click the Command buttons, and note that the cursor changes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWinCEsearch kbGrpDSVB kbDSupport kbVBM300 kbAudDeveloper kbHOWTOmaster 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	
