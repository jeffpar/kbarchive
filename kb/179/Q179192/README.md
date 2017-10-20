---
layout: page
title: "Q179192: HOWTO: Limit Cursor Movement Inside a Form"
permalink: /kb/179/Q179192/
---

## Q179192: HOWTO: Limit Cursor Movement Inside a Form

{% raw %}

	Article: Q179192
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ClipCursor API function allows you to limit cursor movement to a predefined
	area, such as a form. This article includes instructions and sample code to
	create a project that uses the ClipCursor API function.
	
	MORE INFORMATION
	================
	
	You might want to limit the cursor movement area if you have drag-and-drop
	functionality within a form and you only want the user to drag an item inside a
	form.
	
	The ClipCursor function confines the cursor to a rectangular area on the screen.
	If a subsequent cursor position (set by the SetCursorPos function or the mouse)
	lies outside the rectangle, Windows automatically adjusts the position to keep
	the cursor inside the rectangular area.
	
	The form borders serve as the rectangular area for the ClipCursor function. To
	get the size of the form, use the GetClientRect function. This function
	retrieves the coordinates of a window's client area. The coordinates are
	relative to the upper-left corner of a window's client area; the coordinates of
	the upper-left corner are (0,0). This means you will have to convert the client
	coordinates to screen coordinates.
	
	The ClientToScreen function converts the client coordinates of a specified point
	to screen coordinates. The last function used is the OffsetRect function. The
	OffsetRect function moves the specified rectangle by the specified offsets.
	
	NOTE: If you unload the form after executing the ClipCursor function, the cursor
	will still be limited to the last coordinates of the now-unloaded form. To
	prevent this behavior, calling the ClipCursor function with a null argument in
	the Form_Unload event is recommended.
	
	The next section shows you how to create a sample project that uses these
	functions.
	
	Steps to Create Project
	-----------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add two CommandButtons to Form1.
	
	3. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Private Type RECT
	           left As Integer
	           top As Integer
	           right As Integer
	           bottom As Integer
	        End Type
	
	        Private Type POINT
	           x As Long
	           y As Long
	        End Type
	
	        Private Declare Sub ClipCursor Lib "user32" (lpRect As Any)
	        Private Declare Sub GetClientRect Lib "user32" _
	                                              (ByVal hWnd As Long, _
	                                               lpRect As RECT)
	        Private Declare Sub ClientToScreen Lib "user32" _
	                                              (ByVal hWnd As Long, _
	                                               lpPoint As POINT)
	        Private Declare Sub OffsetRect Lib "user32" (lpRect As RECT, _
	                                            ByVal x As Long, _
	                                            ByVal y As Long)
	
	        Private Sub Form_Load()
	           Command1.Caption = "Limit Cursor Movement"
	           Command2.Caption = "Release Limit"
	        End Sub
	
	        Private Sub Command1_Click()
	        'Limits the Cursor movement to within the form.
	           Dim client As RECT
	           Dim upperleft As POINT
	
	           GetClientRect Me.hWnd, client
	           upperleft.x = client.left
	           upperleft.y = client.top
	           ClientToScreen Me.hWnd, upperleft
	           OffsetRect client, upperleft.x, upperleft.y
	           ClipCursor client
	        End Sub
	
	        Private Sub Command2_Click()
	        'Releases the cursor limits
	           ClipCursor ByVal 0&
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	        'Releases the cursor limits
	           ClipCursor ByVal 0&
	        End Sub
	
	4. On the Run menu, click Start or press the F5 key to start the program. Click
	  "Limit Cursor Movement" and note that the cursor is limited to the borders of
	  the form. Click "Release Limit" and the cursor can move anywhere on the
	  screen.
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
