---
layout: page
title: "Q231465: BUG: WM_MOUSEWHEEL Message Ignored Adding UserControl to Form"
permalink: /kb/231/Q231465/
---

## Q231465: BUG: WM_MOUSEWHEEL Message Ignored Adding UserControl to Form

{% raw %}

	Article: Q231465
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbMouse kbVBp kbVBp500bug kbVBp600bug kbWndwMsg kbGrpDSVB kbDSupport
	Last Modified: 28-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After adding a User control to a Form, the Visual Basic design environment (IDE)
	ignores the WM_MOUSEWHEEL message when you roll the wheel of the mouse. This
	problem does not occur on Windows NT or Windows 2000.
	
	CAUSE
	=====
	
	The Visual Basic Design Environment (IDE) is not compatible with early versions
	of the Microsoft Intellimouse driver.
	
	RESOLUTION
	==========
	
	Download the latest driver update for the Microsoft Intellimouse from:
	
	  http://www.microsoft.com/products/hardware/mouse/download.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: Failure to unhook a window before its imminent destruction may result in
	application errors, Invalid Page Faults, and data loss. This is due the fact
	that the new WindowProc function being pointed to no longer exists, but the
	window has not been notified of the change. Always unhook the sub-classed window
	upon unloading the sub-classed form or exiting the application. This is
	especially important while debugging an application that uses this technique
	within the Microsoft Visual Basic Development Environment (IDE). Pressing the
	End button or selecting End from the Run menu without unhooking may cause an
	Invalid Page Fault and close Microsoft Visual Basic. Changes to the active
	project will be lost.
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add the following code to the General Declaration section of Form1:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	     Me.Show
	     Call SubClassHookForm
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	     Call SubClassUnHookForm
	  End Sub
	
	3. On the Project menu, select the Add Module menu option.
	
	4. Add the following code to the General Declaration section of Module1:
	
	  Option Explicit
	
	  Private MSWHEEL_ROLLMSG     As Long
	  Private m_PrevWndProc       As Long
	  Private Const GWL_WNDPROC = (-4)
	
	  Private Declare Function CallWindowProc Lib "user32" Alias _
	     "CallWindowProcA" (ByVal lpPrevWndFunc As Long, ByVal hwnd As Long, _
	     ByVal msg As Long, ByVal wParam As Long, ByVal lParam As Long) As Long
	  Private Declare Function SetWindowLong Lib "user32" Alias _
	     "SetWindowLongA" (ByVal hwnd As Long, ByVal nIndex As Long, _
	     ByVal dwNewLong As Long) As Long
	  Private Declare Function RegisterWindowMessage Lib "user32" _
	     Alias "RegisterWindowMessageA" (ByVal lpString As String) As Long
	
	  Public Sub SubClassHookForm()
	     MSWHEEL_ROLLMSG = RegisterWindowMessage("MSWHEEL_ROLLMSG")
	     ' On Windows NT 4.0, Windows 98, and Windows Me, change the above line to
	     ' MSWHEEL_ROLLMSG = &H20A
	     m_PrevWndProc = SetWindowLong(Form1.hwnd, GWL_WNDPROC, _
	                                   AddressOf WindowProc)
	  End Sub
	  Public Sub SubClassUnHookForm()
	     Call SetWindowLong(Form1.hwnd, GWL_WNDPROC, m_PrevWndProc)
	  End Sub
	
	  Public Function WindowProc(ByVal hwnd As Long, ByVal msg As Long, _
	     ByVal wParam As Long, ByVal lParam As Long) As Long
	
	     If msg = MSWHEEL_ROLLMSG Then
	        Debug.Print "Receive MSWHEEL_ROLLMSG"
	     End If
	     WindowProc = CallWindowProc(m_PrevWndProc, hwnd, msg, wParam, lParam)
	  End Function
	
	5. Press the F5 key to run the program and roll the wheel button while the mouse
	  pointer is positioned over Form1.
	
	6. You will see "Receive MSWHEEL_ROLLMSG" displayed in the Immediate Window.
	
	7. Stop the program. Do NOT use the END button on the toolbar per the warning
	  note at the beginning of this section.
	
	8. On the File menu, click Add Project... Select ActiveX Control in the Add
	  Project dialog and click OK. UserControl1 is created by default.
	
	9. Close the Project2 window and add a UserControl1 to Form1.
	
	10. Press the F5 key to start the program and roll the wheel button while
	  pointing the mouse on Form1.
	
	11. The string "Receive MSWHEEL_ROLLMSG" no longer occurs in the Immediate
	  Window.
	
	If you use Spy++ to detect all the Windows messages received by Form1, you will
	see that WM_MOUSEMOVE is received instead of WM_MOUSEWHEEL when you roll the
	wheel of the mouse after the UserControl is added.
	
	REFERENCES
	==========
	
	For additional information, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q168795 HOWTO: Hook Into a Window's Messages using AddressOf
	
	Additional query words: wm_mousewheel user control hook
	
	======================================================================
	Keywords          : kbMouse kbVBp kbVBp500bug kbVBp600bug kbWndwMsg kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
