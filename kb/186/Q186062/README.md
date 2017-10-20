---
layout: page
title: "Q186062: HOWTO: Use Custom System Colors Only When Your App Has Focus"
permalink: /kb/186/Q186062/
---

## Q186062: HOWTO: Use Custom System Colors Only When Your App Has Focus

{% raw %}

	Article: Q186062
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains two examples for retrieving and setting system colors:
	
	- The first example is a demonstration of retrieving and setting the color of a
	  specific aspect of the display.
	
	- The second example sets the colors of several items at once, and also manages
	  resetting the colors when the application loses or gains focus.
	
	MORE INFORMATION
	================
	
	To provide a consistent look to all Windows applications, the operating system
	provides and maintains global settings that define the colors of various aspects
	of the display. These settings as a group are sometimes referred to as a "color
	scheme." To view the current color settings, click Control Panel, double-click
	the Display icon, and then click the "Appearance" tab.
	
	The following list shows the display aspects for which Windows maintains global
	settings:
	
	  Name                  Description
	  ----------------------------------------------------------------------
	  ScrollBars            Scroll bar color
	  Desktop               Desktop color
	  ActiveTitleBar        Color of the title bar for the active window
	  InactiveTitleBar      Color of the title bar for the inactive window
	  MenuBar               Menu background color
	  WindowBackground      Window background color
	  WindowFrame           Window frame color
	  MenuText              Color of text on menus
	  WindowText            Color of text in windows
	  TitleBarText          Color of text in caption, size box, and
	                        scroll arrow
	  ActiveBorder          Border color of active window
	  InactiveBorder        Border color of inactive window
	  ApplicationWorkspace  Background color of multiple-document interface
	                        (MDI) applications
	  Highlight             Background color of items selected in a control
	  HighlightText         Text color of items selected in a control
	  ButtonFace            Color of shading on the face of command buttons
	  ButtonShadow          Color of shading on the edge of command buttons
	  GrayText              Grayed (disabled) text
	  ButtonText            Text color on push buttons
	  InactiveCaptionText   Color of text in an inactive caption
	  3DHighlight           Highlight color for 3-D display elements
	  3DDKShadow            Darkest shadow color for 3-D display elements
	  3DLight               Second lightest 3-D color after 3DHighlight
	  InfoText              Color of text in ToolTips
	  InfoBackground        Background color of ToolTips
	
	The Windows API functions, GetSysColor and SetSysColors, allow these settings to
	be programmatically viewed and/or altered.
	
	The GetSysColor API function is straightforward; you just pass a numeric value
	for the system setting whose color you seek, and the function returns the
	color.
	
	However, the SetSysColors API function is not as straightforward. This function
	requires the use of three parameters:
	
	- The first parameter indicates the total number of system colors you are
	  attempting to change.
	
	- The second parameter is an array of the numeric values for the display
	  aspects you want to change.
	
	- The third parameter is also an array whose elements are the new colors for
	  the display aspects defined by the first array. For example:
	
	     Array Element   Array1                Array2
	     ------------------------------------------------------------------
	
	     0               COLOR_SCROLLBAR       vbRed
	     1               COLOR_BTNSHADOW       vbGreen
	     2               COLOR_HIGHLIGHTTEXT   vbBlue
	
	If you use the settings in this table, you will set the scroll bar color to red,
	a command button's shadow to green, and highlighted text to blue.
	
	Example 1
	---------
	
	The following is a simple example of retrieving and changing one display color,
	the command button's caption, to a new, randomly generated color:
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add two CommandButtons to Form1.
	
	3. Paste the following into the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Declare Function SetSysColors Lib "user32" (ByVal nChanges _
	           As Long, lpSysColor As Long, lpColorValues As Long) As Long
	        Private Declare Function GetSysColor Lib "user32" (ByVal nIndex _
	           As Long) As Long
	
	        Dim OriginalColor As Long
	        Dim NewColor(0) As Long
	        Dim IndexArray(0) As Long
	
	        'Constant for screen aspects.
	        Private Const COLOR_BTNTEXT = 18
	
	        Private Sub Command1_Click()
	           'Specify the aspect being changed.
	           IndexArray(0) = COLOR_BTNTEXT
	
	           'Randomly pick a new color.
	           NewColor(0) = QBColor(Int(Rnd * 16))
	
	           'Inform windows of the new color setting.
	           SetSysColors 1, IndexArray(0), NewColor(0)
	        End Sub
	
	        Private Sub Command2_Click()
	           'Specify the aspect being changed.
	           IndexArray(0) = COLOR_BTNTEXT
	
	           'Reset the original color.
	           NewColor(0) = OriginalColor
	
	           'Inform Windows of the new color setting.
	           SetSysColors 1, IndexArray(0), NewColor(0)
	        End Sub
	
	        Sub Form_Load()
	           'Retrieve current color for a button's caption.
	           OriginalColor = GetSysColor(COLOR_BTNTEXT)
	
	           Command1.Caption = "Change Color"
	           Command2.Caption = "Reset Color"
	           'Begin random number generator.
	           Randomize
	        End Sub
	
	4. Save and run the sample.
	
	5. Click Command1. With each click of this button, a random color is generated
	  and set as the color of a CommandButton's caption.
	
	6. Click Command2. The original color is restored.
	
	Example 2
	---------
	
	The following example demonstrates setting multiple display colors to a randomly
	generated set of colors in such a way that these new colors are only active
	while the sample application has focus.
	
	NOTE: The following code sample uses a concept known as subclassing to allow you
	to detect when the WM_ACTIVATEAPP message occurs. This message occurs whenever
	an application gains or loses focus.
	
	For more information on subclassing, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q168795 : HOWTO: Hook into a Window's Messages Using AddressOf
	
	WARNING: Failure to unhook a window before its destruction results in application
	errors, Invalid Page Faults, or data loss. This occurs because the new WinProc
	function that is pointed to no longer exists, but the window has not been
	notified of the change. Always unhook the subclassed window upon unloading the
	subclassed form or exiting the application.
	
	This is especially important when you use Visual Basic to debug an application
	that includes subclassing. Clicking the End button or clicking End from the Run
	menu without unhooking causes an Invalid Page Fault and closes Microsoft Visual
	Basic.
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add a standard module to the project.
	
	3. Paste the following into the General Declarations section of Form1:
	
	        Option Explicit
	        Sub Form_Load()
	           'Begin random number generator
	           Randomize
	
	           'Store handle to this form's window.
	           gHW = Me.hwnd
	
	           'Call procedure to begin capturing messages for this window.
	           Hook
	
	           'Call procedure to generate the random new colors.
	           GenerateRandomColors
	
	           'Call procedure to save the original color settings.
	           SaveOriginalColors
	
	           'Call procedure to set the new colors as the ones in use.
	           SetNewColors
	        End Sub
	
	        Private Sub Form_Resize()
	           If Me.WindowState <> vbMinimized Then
	              SetNewColors
	           Else
	              RestoreColors
	           End If
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	           'Call procedure to restore colors to their original.
	           RestoreColors
	
	           'Call subprocedure to cease hooking into messages.
	           Unhook
	        End Sub
	
	4. Paste the following code into the module's code window:
	
	        Option Explicit
	        Declare Function SetSysColors Lib "user32" (ByVal nChanges As _
	           Long, lpSysColor As Long, lpColorValues As Long) As Long
	        Declare Function GetSysColor Lib "user32" (ByVal nIndex As Long) _
	           As Long
	        Declare Function CallWindowProc Lib "user32" Alias _
	           "CallWindowProcA" (ByVal lpPrevWndFunc As Long, _
	           ByVal hwnd As Long, ByVal Msg As Long, ByVal wParam As Long, _
	           ByVal lParam As Long) As Long
	        Declare Function SetWindowLong Lib "user32" Alias _
	           "SetWindowLongA" (ByVal hwnd As Long, ByVal nIndex As Long, _
	           ByVal dwNewLong As Long) As Long
	
	        Public Const WM_ACTIVATEAPP = &H1C
	        Public Const GWL_WNDPROC = -4
	
	        Public Const COLOR_SCROLLBAR = 0
	        Public Const COLOR_BACKGROUND = 1
	        Public Const COLOR_ACTIVECAPTION = 2
	        Public Const COLOR_INACTIVECAPTION = 3
	        Public Const COLOR_MENU = 4
	        Public Const COLOR_WINDOW = 5
	        Public Const COLOR_WINDOWFRAME = 6
	        Public Const COLOR_MENUTEXT = 7
	        Public Const COLOR_WINDOWTEXT = 8
	        Public Const COLOR_CAPTIONTEXT = 9
	        Public Const COLOR_ACTIVEBORDER = 10
	        Public Const COLOR_INACTIVEBORDER = 11
	        Public Const COLOR_APPWORKSPACE = 12
	        Public Const COLOR_HIGHLIGHT = 13
	        Public Const COLOR_HIGHLIGHTTEXT = 14
	        Public Const COLOR_BTNFACE = 15
	        Public Const COLOR_BTNSHADOW = 16
	        Public Const COLOR_GRAYTEXT = 17
	        Public Const COLOR_BTNTEXT = 18
	        Public Const COLOR_INACTIVECAPTIONTEXT = 19
	        Public Const COLOR_BTNHIGHLIGHT = 20
	
	        Global OriginalColors(20) As Long
	        Global NewColors(20) As Long
	        Global IndexArray(20) As Long
	        Global lpPrevWndProc As Long
	        Global gHW As Long
	
	        Public Sub Hook()
	           'Establish a hook to capture messages to this window.
	           lpPrevWndProc = SetWindowLong(gHW, GWL_WNDPROC, _
	              AddressOf WindowProc)
	        End Sub
	
	        Public Sub Unhook()
	           Dim temp As Long
	
	           'Reset the message handler for this window.
	           temp = SetWindowLong(gHW, GWL_WNDPROC, lpPrevWndProc)
	        End Sub
	
	        Function WindowProc(ByVal hw As Long, ByVal uMsg As Long, _
	           ByVal wParam As Long, ByVal lParam As Long) As Long
	           'Check for the ActivateApp message.
	           If uMsg = WM_ACTIVATEAPP Then
	              'Check to see if Activating the application.
	              If wParam <> 0 Then
	                 'Check to see if application is minimized.
	                 If Form1.WindowState <> vbMinimized Then
	                    'Use custom colors.
	                    SetNewColors
	                 End If
	              Else
	                 'Application is DeActivating so restore normal colors.
	                 RestoreColors
	              End If
	           End If
	
	           'Pass message on to the original window message handler.
	           WindowProc = CallWindowProc(lpPrevWndProc, hw, uMsg, wParam, _
	              lParam)
	        End Function
	
	        Public Sub RestoreColors()
	           SetSysColors 21, IndexArray(0), OriginalColors(0)
	        End Sub
	
	        Public Sub SetNewColors()
	           SetSysColors 21, IndexArray(0), NewColors(0)
	        End Sub
	
	        Public Sub GenerateRandomColors()
	           'Randomly pick and assign new colors.
	           IndexArray(0) = COLOR_SCROLLBAR
	           NewColors(0) = QBColor(Int(16 * Rnd))
	           IndexArray(1) = COLOR_BACKGROUND
	           NewColors(1) = QBColor(Int(16 * Rnd))
	           IndexArray(2) = COLOR_ACTIVECAPTION
	           NewColors(2) = QBColor(Int(16 * Rnd))
	           IndexArray(3) = COLOR_INACTIVECAPTION
	           NewColors(3) = QBColor(Int(16 * Rnd))
	           IndexArray(4) = COLOR_MENU
	           NewColors(4) = QBColor(Int(16 * Rnd))
	           IndexArray(5) = COLOR_WINDOW
	           NewColors(5) = QBColor(Int(16 * Rnd))
	           IndexArray(6) = COLOR_WINDOWFRAME
	           NewColors(6) = QBColor(Int(16 * Rnd))
	           IndexArray(7) = COLOR_MENUTEXT
	           NewColors(7) = QBColor(Int(16 * Rnd))
	           IndexArray(8) = COLOR_WINDOWTEXT
	           NewColors(8) = QBColor(Int(16 * Rnd))
	           IndexArray(9) = COLOR_CAPTIONTEXT
	           NewColors(9) = QBColor(Int(16 * Rnd))
	           IndexArray(10) = COLOR_ACTIVEBORDER
	           NewColors(10) = QBColor(Int(16 * Rnd))
	           IndexArray(11) = COLOR_INACTIVEBORDER
	           NewColors(11) = QBColor(Int(16 * Rnd))
	           IndexArray(12) = COLOR_APPWORKSPACE
	           NewColors(12) = QBColor(Int(16 * Rnd))
	           IndexArray(13) = COLOR_HIGHLIGHT
	           NewColors(13) = QBColor(Int(16 * Rnd))
	           IndexArray(14) = COLOR_HIGHLIGHTTEXT
	           NewColors(14) = QBColor(Int(16 * Rnd))
	           IndexArray(15) = COLOR_BTNFACE
	           NewColors(15) = QBColor(Int(16 * Rnd))
	           IndexArray(16) = COLOR_BTNSHADOW
	           NewColors(16) = QBColor(Int(16 * Rnd))
	           IndexArray(17) = COLOR_GRAYTEXT
	           NewColors(17) = QBColor(Int(16 * Rnd))
	           IndexArray(18) = COLOR_BTNTEXT
	           NewColors(18) = QBColor(Int(16 * Rnd))
	           IndexArray(19) = COLOR_INACTIVECAPTIONTEXT
	           NewColors(19) = QBColor(Int(16 * Rnd))
	           IndexArray(20) = COLOR_BTNHIGHLIGHT
	           NewColors(20) = QBColor(Int(16 * Rnd))
	        End Sub
	
	        Public Sub SaveOriginalColors()
	           Dim i As Long
	
	           'Retrieve all current color settings.
	           For i = 0 To 20
	              OriginalColors(i) = GetSysColor(i)
	           Next i
	        End Sub
	
	5. Save and run the project.
	
	RESULT: When you start the sample application, the current colors are saved and
	new colors are randomly selected and assigned. A call is made to "hook" the
	window's messages. As you switch from this application to another, the colors
	are restored to their original settings. As you switch back to this application,
	the colors are again set to the random colors.
	
	Note that if the machine crashes or if you close this application via the Windows
	Task Manager (by pressing CTRL+ALT+DEL), then the colors might be left in the
	randomly selected color scheme and would require resetting through the Windows
	Control Panel.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q168795 : HOWTO: Hook into a Window's Messages Using AddressOf
	
	Additional query words: kbDSupport kbDSD kbSDKWin32 kbAPI kbHook sub-class kbVBp500 kbVBp600 
	kbVBp sub class
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
