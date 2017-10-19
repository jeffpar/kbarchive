---
layout: page
title: "Q152136: HOWTO: Know if Large/Small Font Is in Use Under Win95/98/Me/NT"
permalink: /kb/152/Q152136/
---

## Q152136: HOWTO: Know if Large/Small Font Is in Use Under Win95/98/Me/NT

	Article: Q152136
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbAPI kbPrinting kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSuppo
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Determining whether Windows 95, Windows 98, Windows Me, or Windows NT 3.51 is
	using large or small fonts can be done from Visual Basic through Windows API
	calls. The API that retrieves information about the physical font selected for a
	device context is GetTextMetrics().
	
	MORE INFORMATION
	================
	
	The theory of determining whether a large or small font is used under Windows
	95, Windows 98, Windows Me, or Windows NT 3.51 is based on the assumption that
	the Windows display driver uses the default value VGASYS.FON for Small Fonts and
	8514SYS.FON for Large Fonts. If the user changes the default system font
	manually to any other value, this theory will not apply.
	
	Step-by-Step Example
	--------------------
	
	1. Get the handle of the Desktop window.
	
	2. Get the Device Context for the entire Desktop window (including borders,
	  scroll bars, captions, menus, and so on).
	
	3. Set the mapping mode to pixels.
	
	4. Get the size of the system font.
	
	5. Reset the mapping mode to its original setting.
	
	6. Release the device context obtained through a call to GetWindowDC.
	
	If the system font is more than 16 pixels high, then large fonts are being used.
	
	Sample Code
	-----------
	
	     '** TYPES **
	     Type TEXTMETRIC
	       tmHeight As Integer
	       tmAscent As Integer
	       tmDescent As Integer
	       tmInternalLeading As Integer
	       tmExternalLeading As Integer
	       tmAveCharWidth As Integer
	       tmMaxCharWidth As Integer
	       tmWeight As Integer
	       tmItalic As String * 1
	       tmUnderlined As String * 1
	       tmStruckOut As String * 1
	       tmFirstChar As String * 1
	       tmLastChar As String * 1
	       tmDefaultChar As String * 1
	       tmBreakChar As String * 1
	       tmPitchAndFamily As String * 1
	       tmCharSet As String * 1
	       tmOverhang As Integer
	       tmDigitizedAspectX As Integer
	       tmDigitizedAspectY As Integer
	     End Type
	
	     '** Win32 API DECLARATIONS **
	     Declare Function GetTextMetrics Lib "gdi32" Alias "GetTextMetricsA" _
	      (ByVal hdc As Long, lpMetrics As TEXTMETRIC) As Long
	     Declare Function GetDesktopWindow Lib "user32" () As Long
	     Declare Function GetWindowDC Lib "user32" (ByVal hwnd As Long) As Long
	     Declare Function ReleaseDC Lib "user32" (ByVal hwnd As Long, ByVal hdc _
	      As Long) As Long
	     Declare Function SetMapMode Lib "gdi32" (ByVal hdc As Long, ByVal _
	     nMapMode As Long) As Long
	
	     '** CONSTANTS **
	     Global Const MM_TEXT = 1
	
	     '** Function **
	     Public Function gbl_GetFontRes$()
	     Dim hdc, hwnd, PrevMapMode As Long
	     Dim tm As TEXTMETRIC
	
	       ' Set the default return value to small fonts
	       gbl_GetFontRes$ = "VGA"
	
	       ' Get the handle of the desktop window
	       hwnd = GetDesktopWindow()
	
	       ' Get the device context for the desktop
	       hdc = GetWindowDC(hwnd)
	       If hdc Then
	         ' Set the mapping mode to pixels
	         PrevMapMode = SetMapMode(hdc, MM_TEXT)
	
	         ' Get the size of the system font
	         GetTextMetrics hdc, tm
	
	         ' Set the mapping mode back to what it was
	         PrevMapMode = SetMapMode(hdc, PrevMapMode)
	
	         ' Release the device context
	         ReleaseDC hwnd, hdc
	
	         ' If the system font is more than 16 pixels high,
	         ' then large fonts are being used
	         If tm.tmHeight > 16 Then gbl_GetFontRes$ = "8514"
	       End If
	
	     End Function
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbAPI kbPrinting kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
