---
layout: page
title: "Q126742: VB3 How to Size a Picture Box Dynamically to Fit an AVI Image"
permalink: /kb/126/Q126742/
---

## Q126742: VB3 How to Size a Picture Box Dynamically to Fit an AVI Image

	Article: Q126742
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbcode kbWndw
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To size a picture box to fit an AVI image at run time, you must first get the
	dimensions of the AVI file. This article shows you how to do it.
	
	MORE INFORMATION
	================
	
	The example uses the mciSendCommand function to get the dimensions of the AVI
	file currently referenced by an MCI control.
	
	Step-by-Step Example Demonstrates How to Get the Dimensions of an AVI file
	--------------------------------------------------------------------------
	
	1. Start a new project in Visual Basic. Add a module (.BAS) file, and make sure
	  the MCI control is included in the project. Add a MCI control (MMControl1), a
	  Command Button (Command1), and a Picture box (Picture1) to Form1. Set Form1's
	  ScaleMode property to Pixels (3).
	
	2. In the General declarations section of the .BAS file, add this code:
	
	     Type RECT
	        left As Integer
	        top As Integer
	        right As Integer
	        bottom As Integer
	     End Type
	
	     Type MCI_OVLY_RECT_PARMS
	        dwCallback As Long
	        rc As RECT
	     End Type
	
	     Global Const MCI_OVLY_WHERE_SOURCE = &H20000
	     Global Const MCI_OVLY_WHERE_DESTINATION = &H40000
	     Global Const MCI_WHERE = &H843
	
	     ' Enter the following Declare statement on one, single line:
	     Declare Function mciSendCommand Lib "mmsystem" (ByVal udeviceid As
	        Integer, ByVal uMessage As Integer, ByVal dwParam1 As Long, dwParam2
	        As Any) As Long
	
	     ' Enter the following Declare statement on one, single line:
	     Declare Function mciGetErrorString Lib "mmsystem" (ByVal wError As
	        Long, ByVal lpstrBuffer As String, ByVal uLength As Integer) As
	        Integer
	
	3. In the Command1_Click() method for the command button on Form1, enter this
	  code:
	
	     Sub Command1_Click ()
	        Const MB_OK = 0
	        Const MB_ICONSTOP = 16
	
	        Dim Retval&, Buffer$
	        Dim dwParam2 As MCI_OVLY_RECT_PARMS
	
	        MMControl1.Command = "Close"
	        MMControl1.Filename = "WndSurf1.avi"  ' Sample AVI file to be played.
	
	        ' Get the MCI control to display the video in Picture1:
	        MMControl1.hWndDisplay = Picture1.hWnd
	
	        MMControl1.Command = "Open"
	
	        ' Initialize the structure being passed with mciSendCommand, and
	        ' set it in case you want to use the Notify property:
	        dwParam2.dwCallback = MMControl1.hWnd
	        dwParam2.rc.left = 0
	        dwParam2.rc.top = 0
	        dwParam2.rc.right = 0
	        dwParam2.rc.bottom = 0
	
	        ' Send the message:
	        ' Enter the following two lines as one, single line of code:
	        Retval& = mciSendCommand(MMControl1.DeviceID, MCI_WHERE,
	           MCI_OVLY_WHERE_SOURCE, dwParam2)
	
	        If Retval& <> 0 Then  ' An error occurred.
	           Buffer$ = Space$(100)
	           ' Get a description of the error:
	           Retval& = mciGetErrorString(Retval&, Buffer$, Len(Buffer$))
	           MsgBox Trim$(Buffer$), MB_OK + MB_ICONSTOP, "ERROR"
	        Else
	           ' Resize the picture box:
	           Picture1.Width = dwParam2.rc.right - dwParam2.rc.left
	           Picture1.Height = dwParam2.rc.bottom - dwParam2.rc.top
	
	           ' Play the video:
	           MMControl1.Wait = True ' Wait for the next command to complete
	           MMControl1.Command = "play" 'Play the video clip
	           MMControl1.Command = "close"
	        End If
	     End Sub
	
	4. Test the program. Press F5 to run it, and click the command button. The AVI
	  file will play back in the picture box, which will have been resized to fit
	  the video clip exactly.
	
	Additional query words: 3.00 MCI AVI
	
	======================================================================
	Keywords          : kbcode kbWndw 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	
	=============================================================================
	
