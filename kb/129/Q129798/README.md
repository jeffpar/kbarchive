---
layout: page
title: "Q129798: How to Display a Task Modal Dialog from a 32-Bit DLL"
permalink: /kb/129/Q129798/
---

## Q129798: How to Display a Task Modal Dialog from a 32-Bit DLL

{% raw %}

	Article: Q129798
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a Message box is displayed from a 32-bit DLL by calling it from Visual Basic
	version 4.0, the Message box does not behave as if it were a task modal dialog.
	In other words, Visual Basic allows you to change the focus to other forms in
	the application by clicking them.
	
	On the other hand, a MsgBox displayed from Visual Basic itself always behaves as
	if it were a task modal dialog. This article shows by example how to force a
	Message box invoked from a 32-bit DLL to behave as a Visual Basic MsgBox
	behaves.
	
	MORE INFORMATION
	================
	
	All Visual Basic applications have a background window that handles all messages
	for the application and all calls to the VB40032.DLL. This background window is
	also the owner and parent of all non-MDI child forms. You can use the GetWindow
	API function to get the handle of this background window, and subsequently pass
	this handle to the Message box called from the 32-bit DLL, so that it is also
	owned by the Visual Basic background window.
	
	NOTE: You can also make the Message box task-modal in the DLL itself by calling
	it with a hWndOwner (first parameter) of NULL and a fuStyle (last parameter) of
	MB_TASKMODAL.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add another form (Form2) by choosing Form from the Insert menu.
	
	3. Add the following code to the General Declarations section of Form1:
	
	     Private Declare Function GetWindow Lib "user32" (ByVal hWnd As _
	        Long, ByVal wCmd As Long) As Long
	
	     Private Declare Sub ShowTaskModal Lib "appmodal" (ByVal hWnd As Long)
	
	     Private hWndVBOwner As Long
	     Private Const GW_OWNER As Long = 4
	
	4. Add the following code to the Form1_Load event:
	
	     Form2.Show
	     hWndVBOwner = GetWindow(Me.hWnd, GW_OWNER)
	
	5. Add the following code to the Form_Click event:
	
	     ShowTaskModal hWndVBOwner
	
	6. Using Microsoft Visual C++ version 2.x:
	
	  a. Compile a 32-bit DLL that contains the following function:
	
	        #include <windows.h>
	
	        //prototype of exported function
	        void _stdcall ShowTaskModal (HWND hWnd);
	
	        void _stdcall ShowTaskModal (HWND hWnd)
	        {
	           MessageBox (hWnd, "Hi! I am Task Modal!",
	              "Task Modal Dialog From 32-bit DLL", MB_OK);
	        }
	    
	
	  b. Use a definition file (.DEF) for the DLL as follows:
	
	        LIBRARY AppModal
	
	        CODE PRELOAD MOVEABLE DISCARDABLE
	        DATA PRELOAD SINGLE
	
	        EXPORTS
	        ShowTaskModal @1
	    
	
	  c. Build the DLL. Call it APPMODAL.DLL, and move it to the system directory.
	
	7. Go back to Visual Basic, and press the F5 key to run the program. Click
	  Form1. The Message box from the DLL display. Try to click Form2 or any other
	  window belonging to the Visual Basic design environment itself. You will hear
	  a beep prohibiting you from doing so until you click the OK button of the
	  Message box.
	
	Additional query words: 4.00 vb4win vb432
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	
	=============================================================================
	

{% endraw %}
