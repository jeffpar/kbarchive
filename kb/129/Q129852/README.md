---
layout: page
title: "Q129852: PRB: GetActiveWindow Behaves Differently Under Windows NT"
permalink: /kb/129/Q129852/
---

## Q129852: PRB: GetActiveWindow Behaves Differently Under Windows NT

{% raw %}

	Article: Q129852
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbWndw
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Visual Basic version 4.0 application running under a 32-bit operating
	system such as Windows NT calls the GetActiveWindow() API function and a window
	of some other application currently has the focus, the handle of that window is
	not returned; instead, a NULL is returned.
	
	CAUSE
	=====
	
	In Windows NT, each thread of execution can set or get the focus for only those
	windows created by the current thread. This prevents applications from
	interfering with each other. One application's delay in responding cannot cause
	other applications to suspend their response to user actions, as often happens
	in Windows 3.x. Consequently, the following API functions also work differently
	under Windows NT:
	
	  GetCapture (VOID)
	  GetFocus (VOID)
	  ReleaseCapture (VOID)
	  SetActiveWindow (HWND)
	  SetCapture(HWND)
	  SetFocus (HWND)
	
	These functions now return NULL when the target window is owned by an application
	other than the one that calls the function. Therefore, it is important to test
	the return value of these functions before using it.
	
	For example, if you call GetFocus and another thread's window has the input
	focus, then instead of returning the handle of a window that belongs to another
	thread, the function returns NULL. Similar considerations apply to GetCapture
	and GetActiveWindow.
	
	The Set functions can only specify a window created by the current thread. If you
	attempt to pass a window handle created by another thread, the call to the Set
	function fails.
	
	RESOLUTION
	==========
	
	You can use the functions GetForegroundWindow and SetForegroundWindow instead of
	GetActiveWindow and SetActiveWindow respectively, to manipulate windows created
	by another thread. Note that these are "32-bit only" API functions.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the General Declarations portion of Form1:
	
	     Private Declare Function GetActiveWindow Lib "user32" () As Long
	     Private Declare Function GetWindowTextA Lib "user32" (ByVal hwnd _
	        As Long, ByVal lpString As String, ByVal aint As Long) As Long
	     Private Declare Function GetForegroundWindow Lib "user32" () As Long
	
	3. Add a Command Button (Command1) to Form1.
	
	4. Add the following code to the Command1_Click event:
	
	     Dim myhwnd As Long
	     Dim s As String
	     Dim iret As Long
	     Dim nullhwnd As Long
	
	     s = Space(256)
	
	     myhwnd = GetActiveWindow()
	     iret = GetWindowTextA(myhwnd, s, 256)
	     Debug.Print myhwnd, s
	
	     Shell "Calc.exe", 1
	
	     ' Wait for CALC.EXE to launch under Windows NT:
	     DoEvents
	
	     nullhwnd = GetActiveWindow()
	     myhwnd = GetForegroundWindow()
	
	     s = Space(256)
	     iret = GetWindowTextA(nullhwnd, s, 256)
	     Debug.Print nullhwnd, s
	
	     s = Space(256)
	     iret = GetWindowTextA(myhwnd, s, 256)
	     Debug.Print myhwnd, s
	
	5. Press the F5 key to run the program. Click the Command1 button, and view the
	  Debug Window. The first print statement will print Form1's hWnd and its
	  Caption. The second print statement will merely print 0, because
	  GetActiveWindow returns a null window handle. The third print statement will
	  correctly print Calulator's hWnd and Caption.
	
	Additional query words: 4.00 vb4win vb432
	
	======================================================================
	Keywords          : kbWndw 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
