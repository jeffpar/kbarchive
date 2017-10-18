---
layout: page
title: "Q190523: PRB: Automation Error (-2147417843) When You Use the Taskbar Not"
permalink: kb/190/Q190523/
---

## Q190523: PRB: Automation Error (-2147417843) When You Use the Taskbar Not

	Article: Q190523
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbAutomation kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbofficeprog
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Shell_NotifyIcon function or the SysTray control sample from
	the Visual Basic CD-ROM, you may receive the following error message:
	
	  Run-time error: -2147417843 (8001010d)
	  Automation Error
	
	CAUSE
	=====
	
	The run-time error occurs because you are trying to make an Automation call to
	an out-of-process (ActiveX) EXE from within the event notification of the
	Taskbar Notification Area callback. The value -2147417843 translates to the
	following error message:
	
	  An outgoing call cannot be made since the application is dispatching an
	  input-synchronous call.
	
	Automation clients are required by COM to process input-synchronous calls without
	interruption, and therefore are prevented from making outgoing Automation calls
	while processing such messages.
	
	RESOLUTION
	==========
	
	Avoid making outgoing Automation calls during the Taskbar Notification Area
	callback. If an Automation method needs to be called in response to a user event
	involving the Taskbar Notification Area, use a simple Timer to post yourself a
	message, and then let the callback function complete. When the Timer event
	fires, you can safely call your Automation method.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the SysTray control sample from the Tools\Unsupprt folder of the Visual
	  Basic 5.0 CD-ROM, or the Common\Tools\VB\Unsupprt folder of the Visual Basic
	  6.0 CD-ROM, to your hard drive.
	
	2. Open the project and compile the control. When complete, close the project.
	
	3. Create a new Standard EXE project. Form1 is created by default.
	
	4. From the Project menu, click Components, and check System Tray Icon Control.
	  Click OK.
	
	5. Select the SysTray control in the toolbox and add an instance to Form1.
	
	6. Add the following code into Form1's code window:
	
	  Option Explicit
	  Private oWord As Object
	
	  Private Sub Form_Load()
	     Set oWord = CreateObject("Word.Application")
	     Set cSysTray1.TrayIcon = Me.Icon
	     cSysTray1.InTray = True
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	     cSysTray1.InTray = False
	     Set oWord = Nothing
	  End Sub
	
	  Private Sub cSysTray1_MouseDblClick(Button As Integer, Id As Long)
	     oWord.Visible = True
	  End Sub
	
	7. Run the application by pressing the F5 key. The error occurs when you
	  double-click the application's icon in the System Tray. Press the END key to
	  stop the debugger.
	
	8. To avoid the error, add a Timer to Form1.
	
	9. Replace the code in Form1 with the following:
	
	  Option Explicit
	  Private oWord As Object
	
	  Private Sub Form_Load()
	     Set oWord = CreateObject("Word.Application")
	     Set cSysTray1.TrayIcon = Me.Icon
	     cSysTray1.InTray = True
	     Timer1.Enabled = False
	     Timer1.Interval = 10
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	     cSysTray1.InTray = False
	     Set oWord = Nothing
	  End Sub
	
	  Private Sub cSysTray1_MouseDblClick(Button As Integer, Id As Long)
	     Timer1.Enabled = True
	  End Sub
	
	  Private Sub Timer1_Timer()
	     Timer1.Enabled = False
	     oWord.Visible = True
	  End Sub
	
	10. Re-run the application by pressing the F5 key. This time no error should
	  occur.
	
	REFERENCES
	==========
	
	For additional information about input-synchronous calls in COM and this
	Automation error, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q131056 PRB: Synch OLE Call Fails in Inter-Process/Thread SendMessage
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q176085 HOWTO: Use the Taskbar Notification Area Directly from Visual Basic
	  5.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbAutomation kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbofficeprog 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
