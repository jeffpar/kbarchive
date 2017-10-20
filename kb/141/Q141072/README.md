---
layout: page
title: "Q141072: How To Size a Picture Box Dynamically to Fit an AVI Image"
permalink: /kb/141/Q141072/
---

## Q141072: How To Size a Picture Box Dynamically to Fit an AVI Image

{% raw %}

	Article: Q141072
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbcode kbWndw
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To size a picture box to fit an AVI image at run time, you must first get the
	dimensions of the AVI file. This article demonstrates how to do it.
	
	MORE INFORMATION
	================
	
	The example uses the mciSendCommand function to get the dimensions of the AVI
	file currently referenced by an MCI control.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Add a module (.BAS) file, and make sure
	  the MCI control is included in the project. Add a MCI control (MMControl1), a
	  Command Button (Command1), and a Picture box (Picture1) to Form1. Set Form1's
	  ScaleMode property to Pixels (3).
	
	2. In the General declarations section of the .BAS file, add this code:
	
	     Type RECT
	        Left As Long
	        Top As Long
	        Right As Long
	        Bottom As Long
	     End Type
	
	     Type MCI_OVLY_RECT_PARMS
	        dwCallback As Long
	        rc As RECT
	     End Type
	
	     Global Const MCI_OVLY_WHERE_SOURCE = &H20000
	     Global Const MCI_OVLY_WHERE_DESTINATION = &H40000
	     Global Const MCI_WHERE = &H843
	
	     'Enter the following Declare statement:
	
	     Declare Function mciSendCommand Lib "winmm.dll" _
	        Alias "mciSendCommandA" ( _
	           ByVal wDeviceID As Long, _
	           ByVal uMessage As Long, _
	           ByVal dwParam1 As Long,
	           dwParam2 As Any) As Long
	
	     ' Enter the following Declare statement:
	     Declare Function mciGetErrorString Lib "winmm.dll" _
	        Alias "mciGetErrorStringA" ( _
	           ByVal dwError As Long, _
	           ByVal lpstrBuffer As String, _
	           ByVal uLength As Long) As Long
	
	3. In the Command1_Click() method for the Command button on Form1, enter this
	  code:
	
	     Sub Command1_Click ()
	        Const MB_OK = 0
	        Const MB_ICONSTOP = 16
	
	        Dim Retval&, Buffer$
	        Dim dwParam2 As MCI_OVLY_RECT_PARMS
	
	        MMControl1.Command = "Close"
	        MMControl1.Filename = "WndSurf1.avi"  'Sample AVI file to be
	                                                 'played.
	
	        'Get the MCI control to display the video in Picture1:
	        MMControl1.hWndDisplay = Picture1.hWnd
	
	        MMControl1.Command = "Open"
	
	        'Initialize the structure being passed with mciSendCommand, and
	        'set it in case you want to use the Notify property:
	        dwParam2.dwCallback = MMControl1.hWnd
	        dwParam2.rc.Left = 0
	        dwParam2.rc.Top = 0
	        dwParam2.rc.Right = 0
	        dwParam2.rc.Bottom = 0
	
	        'Send the message:
	        'Enter the following two lines as one, single line of code:
	        Retval& = mciSendCommand(MMControl1.DeviceID, MCI_WHERE,
	                  MCI_OVLY_WHERE_SOURCE, dwParam2)
	
	        If Retval& <> 0 Then  ' An error occurred.
	           Buffer$ = Space$(100)
	           'Get a description of the error:
	           Retval& = mciGetErrorString(Retval&, Buffer$, Len(Buffer$))
	           MsgBox Trim$(Buffer$), MB_OK + MB_ICONSTOP, "ERROR"
	        Else
	           'Resize the picture box:
	           Picture1.Width = dwParam2.rc.right - dwParam2.rc.left
	           Picture1.Height = dwParam2.rc.bottom - dwParam2.rc.top
	
	           'Play the video:
	           MMControl1.Wait = True ' Wait for the next command to complete
	           MMControl1.Command = "play" 'Play the video clip
	           MMControl1.Command = "close"
	        End If
	     End Sub
	
	4. Test the program by pressing the F5 key to run it, and clicking the command
	  button. The AVI file will play back in the picture box, which will have been
	  resized to fit the video clip exactly.
	
	Additional query words: 3.00 4.00 MCI AVI vb4win vb432
	
	======================================================================
	Keywords          : kbcode kbWndw 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.00
	
	=============================================================================
	

{% endraw %}
