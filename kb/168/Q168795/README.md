---
layout: page
title: "Q168795: HOWTO: Hook Into a Window's Messages Using AddressOf"
permalink: kb/168/Q168795/
---

## Q168795: HOWTO: Hook Into a Window's Messages Using AddressOf

	Article: Q168795
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKPlatform kbVBp500 kbVBp600
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Hooking into a Window (sometimes called sub-classing) is a technique that
	enables interception of the messages that are being sent to that Window.
	Microsoft Visual Basic allows sub-classing through the use of the AddressOf
	operator. This article's purpose is to demonstrate a hooked message stream.
	
	NOTE: It is beyond the scope of this article to describe any particular
	application of this technique.
	
	MORE INFORMATION
	================
	
	Microsoft Windows controls applications by sending messages to the windows that
	are created by each application. These messages alert the targeted window when
	it's time to redraw, when a mouse button is pressed, and all of the other
	information a window needs to know in order to act appropriately. Thus, a
	minimal Windows application consists of a function for which these messages are
	processed (called WindowProc). This function is registered into the system when
	the window is created so the system knows where to send messages.
	
	The following application consists of a simple form with two command buttons. The
	code is designed to intercept Windows messages being sent to the form and to
	print the values of those messages in the Immediate window.
	
	CAUTION: ANY USE OF THE SAMPLE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK.
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	WARNING: Failure to unhook a window before its imminent destruction will result
	in application errors, Invalid Page Faults, and data loss. This is due the fact
	that the new WindowProc function being pointed to no longer exists, but the
	window has not been notified of the change. Always unhook the sub-classed window
	upon unloading the sub-classed form or exiting the application. This is
	especially important while debugging an application that uses this technique
	within the Microsoft Visual Basic Development Environment. Pressing the End
	button or selecting End from the Run menu without unhooking will cause an
	Invalid Page Fault and close Microsoft Visual Basic.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add two CommandButtons and a Standard Module to the form.
	
	3. Add the following code to the Declarations section of Module1:
	
	        Declare Function CallWindowProc Lib "user32" Alias _
	        "CallWindowProcA" (ByVal lpPrevWndFunc As Long, _
	        ByVal hwnd As Long, ByVal Msg As Long, _
	        ByVal wParam As Long, ByVal lParam As Long) As Long
	
	        Declare Function SetWindowLong Lib "user32" Alias _
	        "SetWindowLongA" (ByVal hwnd As Long, _
	        ByVal nIndex As Long, ByVal dwNewLong As Long) As Long
	
	        Public Const GWL_WNDPROC = -4
	        Public IsHooked As Boolean
	        Global lpPrevWndProc As Long
	        Global gHW As Long
	
	        Public Sub Hook()
	            If IsHooked Then
	            MsgBox "Don't hook it twice without " & _
	              "unhooking, or you will be unable to unhook it."
	            Else
	            lpPrevWndProc = SetWindowLong(gHW, GWL_WNDPROC, _
	            AddressOf WindowProc)
	            IsHooked = True
	            End If
	        End Sub
	
	        Public Sub Unhook()
	            Dim temp As Long
	            temp = SetWindowLong(gHW, GWL_WNDPROC,lpPrevWndProc)
	            IsHooked = False
	        End Sub
	
	        Function WindowProc(ByVal hw As Long, ByVal uMsg As _
	        Long, ByVal wParam As Long, ByVal lParam As Long) As Long
	            Debug.Print "Message: "; hw, uMsg, wParam, lParam
	            WindowProc = CallWindowProc(lpPrevWndProc, hw, _
	            uMsg, wParam, lParam)
	        End Function
	
	4. Add the following code to the Declarations section of Form1:
	
	        Private Sub Form_Load()
	            gHW = Me.hwnd
	            Command1.Caption = "Hook"
	            Command2.Caption = "Unhook"
	        End Sub
	
	        Private Sub Command1_Click()
	            Hook
	        End Sub
	
	        Private Sub Command2_Click()
	            Unhook
	        End Sub
	
	        Private Sub Form_QueryUnload(Cancel As Integer, UnloadMode  _
	            As Integer)
	            If IsHooked Then
	            Cancel = 1
	            MsgBox "Unhook before closing, or the IDE will crash."
	            End If
	        End Sub
	
	5. Before running this sample, save your project.
	
	6. Press the F5 key to run the program, and click Hook. The Immediate window
	  starts filling with the messages the form is receiving, hooked through to
	  your new WindowProc function and then passed on to the Form's own handler.
	
	The Hook and Unhook procedures enable the code to hook into the stream of
	messages. In the first procedure (Hook) you make use of the SetWindowLong
	function. The SetWindowLong function changes an attribute of a specified window.
	It takes the following parameters:
	
	- hwnd: The handle of the Window you are going to change.
	- nIndex: The action you are going to do to the window.
	- dwNewLong: The new value you change to.
	
	In this example, you use the Form's hwnd property as the targeted window to
	change. You then use the GWL_WNDPROC constant to tell the SetWindowLong function
	that you want to change the address of the target window's WindowProc function.
	Finally you set dwNewLong to the address of a new WindowProc function (see next
	step). Notice that you store the previous WindowProc address in the
	lpPrevWndProc variable.
	
	The second procedure (UnHook) simply reverses what you have done and puts the
	address of the original window procedure back. Here WindowProc is the function
	that you are routing the window messages to when you "Hook" the form's
	WindowProc function. Note that you make use of the CallWindowProc function;
	using the lpPrevWndProc variable to send any unprocessed messages to the
	original handler. Hence, you are allowing a chain of window procedures to
	process all messages.
	
	REFERENCES
	==========
	
	Microsoft Visual Basic Books Online
	
	"Dan Appleman's Visual Basic Programmer's Guide to the Win32 API" by Dan
	Appleman
	
	Platform Software Development Kit (SDK) Online Help
	
	Win32 Programmer Reference: CallWindowProc; SetWindowLong
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKPlatform kbVBp500 kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
