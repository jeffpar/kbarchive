---
layout: page
title: "Q141999: HOWTO: Use DrawFrameControl API in Visual Basic"
permalink: /kb/141/Q141999/
---

## Q141999: HOWTO: Use DrawFrameControl API in Visual Basic

	Article: Q141999
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 18-FEB-2002
	
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
	
	The Win32 API includes a handy function called DrawFrameControl. This function
	is useful for drawing many of the standard Windows 95, Windows 98, or Windows Me
	3D controls as graphic objects on your forms. The function only draws the
	controls on your form. To make these drawings behave like controls, you must add
	code to provide this functionality.
	
	MORE INFORMATION
	================
	
	This sample demonstrates how to use the DrawFrameControl function. You create a
	module that declares the necessary constants and the DrawFrameControl function.
	The form contains code to call the function and draw the controls on your form.
	When you run the program, control drawings appear on the form.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a BAS module to the project and add the following code to the module:
	
	        '*****************************************************************
	        ' DrawFram.bas - Contains API declarations and constants for the
	        '                DrawFrameControl API function.
	        '*****************************************************************
	        Option Explicit
	
	        Public Type RECT
	           Left As Long
	           Top As Long
	           Right As Long
	           Bottom As Long
	        End Type
	
	        '  flags for DrawFrameControl
	
	        Public Const DFC_CAPTION = 1            'Title bar
	        Public Const DFC_MENU = 2               'Menu
	        Public Const DFC_SCROLL = 3             'Scroll bar
	        Public Const DFC_BUTTON = 4             'Standard button
	
	        Public Const DFCS_CAPTIONCLOSE = &H0    'Close button
	        Public Const DFCS_CAPTIONMIN = &H1      'Minimize button
	        Public Const DFCS_CAPTIONMAX = &H2      'Maximize button
	        Public Const DFCS_CAPTIONRESTORE = &H3  'Restore button
	        Public Const DFCS_CAPTIONHELP = &H4     'Windows 95 only:
	                                                'Help button
	
	        Public Const DFCS_MENUARROW = &H0       'Submenu arrow
	        Public Const DFCS_MENUCHECK = &H1       'Check mark
	        Public Const DFCS_MENUBULLET = &H2      'Bullet
	        Public Const DFCS_MENUARROWRIGHT = &H4
	
	        Public Const DFCS_SCROLLUP = &H0               'Up arrow of scroll
	                                                       'bar
	        Public Const DFCS_SCROLLDOWN = &H1             'Down arrow of
	                                                       'scroll bar
	        Public Const DFCS_SCROLLLEFT = &H2             'Left arrow of
	                                                       'scroll bar
	        Public Const DFCS_SCROLLRIGHT = &H3            'Right arrow of
	                                                       'scroll bar
	        Public Const DFCS_SCROLLCOMBOBOX = &H5         'Combo box scroll
	                                                       'bar
	        Public Const DFCS_SCROLLSIZEGRIP = &H8         'Size grip
	        Public Const DFCS_SCROLLSIZEGRIPRIGHT = &H10   'Size grip in
	                                                       'bottom-right
	                                                       'corner of window
	
	        Public Const DFCS_BUTTONCHECK = &H0      'Check box
	
	        Public Const DFCS_BUTTONRADIO = &H4     'Radio button
	        Public Const DFCS_BUTTON3STATE = &H8    'Three-state button
	        Public Const DFCS_BUTTONPUSH = &H10     'Push button
	
	        Public Const DFCS_INACTIVE = &H100      'Button is inactive
	                                                '(grayed)
	        Public Const DFCS_PUSHED = &H200        'Button is pushed
	        Public Const DFCS_CHECKED = &H400       'Button is checked
	
	        Public Const DFCS_ADJUSTRECT = &H2000   'Bounding rectangle is
	                                                'adjusted to exclude the
	                                                'surrounding edge of the
	                                                'push button
	
	        Public Const DFCS_FLAT = &H4000         'Button has a flat border
	        Public Const DFCS_MONO = &H8000         'Button has a monochrome
	                                                'border
	
	        Public Declare Function DrawFrameControl Lib "user32" (ByVal _
	           hDC&, lpRect As RECT, ByVal un1 As Long, ByVal un2 As Long) _
	           As Boolean
	
	3. Copy the following code to the Form1 Code Window:
	
	        '********************************************************************
	        ' DrawFram.frm - Demonstrates how to use DrawFrameControl
	        '********************************************************************
	        Option Explicit
	
	        '********************************************************************
	        ' Helper function that allows a you to load a rect on one line
	        '********************************************************************
	        Private Function MakeRect(l As Long, t As Long, w As Long, _
	                                  h As Long) As RECT
	           With MakeRect
	              .Left = l
	              .Top = t
	              .Right = l + w
	              .Bottom = t + h
	           End With
	
	        End Function
	
	        Private Sub Form_Load()
	           ScaleMode = vbPixels
	           AutoRedraw = True
	
	        'Captions
	        DrawFrameControl hDC, MakeRect(10, 10, 15, 15), DFC_CAPTION, _
	           DFCS_CAPTIONCLOSE
	
	        DrawFrameControl hDC, MakeRect(10, 30, 15, 15), DFC_CAPTION, _
	           DFCS_CAPTIONRESTORE
	
	        DrawFrameControl hDC, MakeRect(10, 50, 15, 15), DFC_CAPTION, _
	           DFCS_CAPTIONMAX Or DFCS_INACTIVE
	
	        ' Menus
	        DrawFrameControl hDC, MakeRect(30, 10, 15, 15), DFC_MENU, _
	           DFCS_MENUARROW
	
	        DrawFrameControl hDC, MakeRect(30, 30, 15, 15), DFC_MENU, _
	           DFCS_MENUCHECK
	
	        DrawFrameControl hDC, MakeRect(30, 50, 15, 15), DFC_MENU, _
	           DFCS_MENUBULLET
	
	        ' Scrollbars
	        DrawFrameControl hDC, MakeRect(50, 10, 15, 15), DFC_SCROLL, _
	           DFCS_SCROLLUP
	
	        DrawFrameControl hDC, MakeRect(50, 30, 15, 15), DFC_SCROLL, _
	           DFCS_SCROLLSIZEGRIP
	
	        DrawFrameControl hDC, MakeRect(50, 50, 15, 15), DFC_SCROLL, _
	           DFCS_SCROLLRIGHT Or DFCS_INACTIVE
	
	        ' Checkboxes
	        DrawFrameControl hDC, MakeRect(70, 10, 15, 15), DFC_BUTTON, _
	           DFCS_BUTTONCHECK
	
	        DrawFrameControl hDC, MakeRect(70, 30, 15, 15), DFC_BUTTON, _
	           DFCS_BUTTONCHECK Or DFCS_CHECKED
	
	        DrawFrameControl hDC, MakeRect(70, 50, 15, 15), DFC_BUTTON, _
	           DFCS_BUTTONCHECK Or DFCS_CHECKED Or DFCS_BUTTON3STATE
	
	        ' Option Buttons
	        DrawFrameControl hDC, MakeRect(90, 10, 15, 15), DFC_BUTTON, _
	           DFCS_BUTTONRADIO
	
	        DrawFrameControl hDC, MakeRect(90, 30, 15, 15), DFC_BUTTON, _
	           DFCS_BUTTONRADIO Or DFCS_CHECKED
	
	        DrawFrameControl hDC, MakeRect(90, 50, 15, 15), DFC_BUTTON, _
	           DFCS_BUTTONRADIO Or DFCS_CHECKED Or DFCS_FLAT
	
	        ' Push Button
	        DrawFrameControl hDC, MakeRect(110, 10, 50, 20), DFC_BUTTON, _
	           DFCS_BUTTONPUSH
	
	        DrawFrameControl hDC, MakeRect(110, 40, 50, 20), DFC_BUTTON, _
	           DFCS_BUTTONPUSH Or DFCS_PUSHED
	
	        End Sub
	
	4. On the Run menu, click Start or press the F5 key to start the program. The
	  form appears with drawings of the controls.
	
	Additional query words: THREED DRAWFRAMECONTROL kbCtrl DRAWEDGE WIN95 KBWIN32SDK
	
	======================================================================
	Keywords          : kbAPI kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
