---
layout: page
title: "Q238672: FIX: Mouse Hook Not Called When Used in User Controls"
permalink: kb/238/Q238672/
---

## Q238672: FIX: Mouse Hook Not Called When Used in User Controls

	Article: Q238672
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAPI kbCtrlCreate kbHook kbSDKWin32 kbVBp600bug kbWndwMsg kbGrpDSVB kbDSupport kbVS600
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a mouse hook to catch mouse events in a User Control module in
	Visual Basic, and then use the User Control module in a Standard EXE project,
	running the project in the IDE does not work the first time, but works as
	expected after that. However, running the project as a compiled EXE never works.
	
	CAUSE
	=====
	
	The User Control uses a mouse hook internally to display ToolTips. However, the
	mouse hook set by Visual Basic 6.0 does not call API CallNextHookEx most of the
	time. This results in all other mouse hooks at a later position in the hook
	chain not being called.
	
	RESOLUTION
	==========
	
	To work around the problem, you need to make sure that your mouse hook has an
	earlier position than the mouse hook in Visual Basic. One method to achieve this
	is to set your mouse hook after the User Control is loaded.
	
	NOTE: Using hooks is not recommended and must be used with caution.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project with Visual Basic 6.0. Form1 is created by
	  default.
	
	2. Under Project, select Add module to add a new standard module and Add User
	  Control to add a new user control to the project.
	
	3. Add the following code to the standard module:
	
	  Option Explicit
	
	  Public Declare Function CallNextHookEx Lib "user32" _
	     (ByVal hHook As Long, _
	     ByVal nCode As Long, _
	     ByVal wParam As Long, _
	     ByVal lParam As Long) As Long
	
	  Public Declare Function UnhookWindowsHookEx Lib "user32" _
	     (ByVal hHook As Long) As Long
	
	  Public Declare Function SetWindowsHookEx Lib "user32" _
	     Alias "SetWindowsHookExA" _
	     (ByVal idHook As Long, _
	     ByVal lpfn As Long, _
	     ByVal hmod As Long, _
	     ByVal dwThreadId As Long) As Long
	
	  Public Const WH_MOUSE = 7
	  Public Const HC_ACTION = 0
	  Public Const WM_RBUTTONDOWN = &H204
	
	  Public hHook As Long
	
	  Public Function MouseProc(ByVal nCode As Long, ByVal wParam As Long, _
	                                ByVal lParam As Long) As Long
	     If nCode >= 0 Then
	        If nCode = HC_ACTION And wParam = WM_RBUTTONDOWN Then
	           MsgBox "get WM_RBUTTONDOWN "
	        End If
	     End If
	     MouseProc = CallNextHookEx(hHook, nCode, wParam, lParam)
	  End Function
	
	4. Put the following code into the code window of the User Control module:
	
	  Option Explicit
	
	  Private Sub UserControl_Initialize()
	     hHook = SetWindowsHookEx(WH_MOUSE, _
	              AddressOf MouseProc, 0&, App.ThreadID)
	  End Sub
	
	  Private Sub UserControl_Terminate()
	     Call UnhookWindowsHookEx(hHook)
	  End Sub
	
	  Public Sub ResetHook()
	     Call UnhookWindowsHookEx(hHook)
	     hHook = SetWindowsHookEx(WH_MOUSE, _
	             AddressOf MouseProc, 0&, App.ThreadID)
	  End Sub
	
	5. Close the user control design window and put UserControl1 on the form.
	
	6. Build the project and run the EXE file generated. Right-click on the form and
	  note that nothing happens. Close the form to exit.
	
	  NOTE: If you run the application in the Visual Basic IDE, make sure you do not
	  click the Stop button. Always unload the form to exit the application,
	  otherwise you will get a General Protection Fault (GPF).
	
	Steps to Fix the Problem
	------------------------
	
	1. With the project created above, add the following code to the code window of
	  Form1:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	     UserControl11.ResetHook
	  End Sub
	
	2. Recompile the project and run the EXE again. This time, whenever you
	  right-click on the form, you get a pop-up message box.
	
	REFERENCES
	==========
	
	For additional information using hooks with UserControls, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q179398 HOWTO: Subclass a UserControl
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbAPI kbCtrlCreate kbHook kbSDKWin32 kbVBp600bug kbWndwMsg kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
