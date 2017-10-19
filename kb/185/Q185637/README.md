---
layout: page
title: "Q185637: HOWTO: Use APIs to Check, Enable, or Disable Full Window Drag"
permalink: /kb/185/Q185637/
---

## Q185637: HOWTO: Use APIs to Check, Enable, or Disable Full Window Drag

	Article: Q185637
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 27-JAN-2001
	
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
	
	SUMMARY
	=======
	
	Normally, when a window is moved or sized, the operating system informs the
	window by posting the appropriate messages at the end of the move or size
	operation. These messages include WM_MOVE, WM_WINDOWPOSCHANGED, WM_PAINT, and
	WM_SIZE among others. Windows 2000, Windows NT 4.0, and Windows 95 (with the
	Microsoft Plus! add-in), Windows 98, and Windows Me offer the ability to show
	the entire contents of a window as it is moved or resized. The operating system
	accomplishes this by continuously sending these messages to the window during
	moving or resizing, not just at the end of the operation. This causes the window
	to redraw itself multiple times during one resize or move operation.
	
	At times, you may want to disable this feature to avoid possible flickering of
	the screen or to prevent code in an event like the ReSize event from occurring
	multiple times during one resize operation. Using the SystemParametersInfo API
	function, the status of this feature can be checked, enabled, or disabled as
	needed. This technique is demonstrated in the sample code below for both the 16-
	and 32-bit Visual Basic development environments.
	
	MORE INFORMATION
	================
	
	Steps to Create Sample 32-Bit Project
	-------------------------------------
	
	1. Create a new Visual Basic project. Form1 is created by default.
	
	2. Paste the following code into the code module for Form1:
	
	        Option Explicit
	
	        Private Declare Function SystemParametersInfo Lib "user32" _
	           Alias "SystemParametersInfoA" (ByVal uAction As Long, _
	           ByVal uParam As Long, ByRef lpvParam As Any, _
	           ByVal fuWinIni As Long) As Long
	
	        Private Const SPI_GETDRAGFULLWINDOWS = 38
	        Private Const SPI_SETDRAGFULLWINDOWS = 37
	        Private Const SPIF_SENDWININICHANGE = 2
	
	        Private Function IsFullWindowDragOn() As Boolean
	            Dim result As Long
	
	            'Call API and check for successful call.
	            If SystemParametersInfo(SPI_GETDRAGFULLWINDOWS, 0&, result, 0&) _
	                   <> 0 Then
	                'Feature supported now check value of result.
	                If result = 0 Then
	                    IsFullWindowDragOn = False
	                Else
	                    IsFullWindowDragOn = True
	                End If
	
	            'Call failed, feature not supported.
	            Else
	                IsFullWindowDragOn = False
	            End If
	        End Function
	
	        Private Sub Form_Click()
	            Dim result As Long
	
	            'Toggle the setting.
	            If IsFullWindowDragOn Then
	                'Turn full window drag off.
	                result = SystemParametersInfo(SPI_SETDRAGFULLWINDOWS, 0&, _
	                   ByVal vbNullString, SPIF_SENDWININICHANGE)
	            Else
	                'Turn full window drag on.
	                result = SystemParametersInfo(SPI_SETDRAGFULLWINDOWS, 1&, _
	                   ByVal vbNullString, SPIF_SENDWININICHANGE)
	            End If
	        End Sub
	
	3. Save and run the project.
	
	4. Click the form. This toggles full window dragging.
	
	5. Move or resize the window to test the full window dragging state.
	
	  RESULT: Full window dragging is toggled on and off with each click of the
	  form.
	
	Steps to Create Sample 16-Bit Project
	-------------------------------------
	
	Repeat steps 1-5 above but replace the code in step 2 with the following code:
	
	     Option Explicit
	
	     Private Declare Function SystemParametersInfo Lib "user" ( _
	        ByVal uAction As Integer, ByVal uParam As Integer, _
	        ByRef lpvParam As Any, ByVal fuWinIni As Integer) As Integer
	
	     Private Const SPI_GETDRAGFULLWINDOWS = 38
	     Private Const SPI_SETDRAGFULLWINDOWS = 37
	     Private Const SPIF_SENDWININICHANGE = 2
	
	     Private Function IsFullWindowDragOn() As Boolean
	         Dim result As Integer
	
	         'Call API and check for successful call.
	         If SystemParametersInfo(SPI_GETDRAGFULLWINDOWS, 0, result, 0) _
	                <> 0 Then
	             'Feature supported now check value of result.
	             If result = 0 Then
	                 IsFullWindowDragOn = False
	             Else
	                 IsFullWindowDragOn = True
	             End If
	
	         'Call failed, feature not supported.
	         Else
	             IsFullWindowDragOn = False
	         End If
	     End Function
	
	     Private Sub Form_Click()
	         Dim result As Integer
	
	         'Toggle the setting.
	         If IsFullWindowDragOn Then
	             'Turn full window drag off.
	             result = SystemParametersInfo(SPI_SETDRAGFULLWINDOWS, 0, _
	                ByVal vbNullString, SPIF_SENDWININICHANGE)
	         Else
	             'Turn full window drag on.
	             result = SystemParametersInfo(SPI_SETDRAGFULLWINDOWS, 1, _
	                ByVal vbNullString, SPIF_SENDWININICHANGE)
	         End If
	     End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
