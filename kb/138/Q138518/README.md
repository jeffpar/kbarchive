---
layout: page
title: "Q138518: How to Pass a Point Structure to the Windows API by Value"
permalink: /kb/138/Q138518/
---

## Q138518: How to Pass a Point Structure to the Windows API by Value

{% raw %}

	Article: Q138518
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WindowFromPoint and ChildWindowFromPoint API functions require that a Point
	structure be passed by value. Visual Basic is not capable of passing a structure
	by value, only by reference. However, it is possible to pass the elements of the
	user-defined type in the correct order so that these API functions can be used.
	This article explains and demonstrates how to pass the Point structure by value
	to the API in the 16-bit and 32-bit editions of Visual Basic.
	
	MORE INFORMATION
	================
	
	The Windows 16-bit API is unusal because it allows you to pass the Point
	structure to the WindowFromPoint functions by value. Typically, user- defined
	types are passed to functions by reference because passing them by value can use
	up a lot of stack space and be much slower than passing the address of the
	structure. An exception was made for the Point structure in certain functions
	(such as ChildWindowFromPoint and WindowFromPoint) because in 16-bit programming
	the size of the structure was only 32 bits long, which is the same length as a
	far address anyway.
	
	However, on a 32-bit operating system, this structure becomes 64 bits. To
	preserve compatibility, Microsoft decided that the Point structure should still
	be passed by value for these two API functions in the 32-bit user dynamic link
	library (DLL).
	
	Visual Basic is not capable of passing structures by value, but the value of the
	elements of the structure can be placed on the stack in the correct order.
	Therefore, when passing the elements of the Point structure in 32-bit
	programming, two long values should be passed. When passing the elements in
	16-bit programming, two integers should be passed to the function.
	
	Another important consideration is that 32-bit Visual Basic uses the C convention
	(stdcall) of passing parameters. This convention specifies that arguments are
	placed on the stack from right to left. 16-Bit Visual Basic maintains the Pascal
	convention of passing parameters from left to right. (API functions are declared
	using the Pascal calling convention.) As a result, the elements of the structure
	must be listed in reverse order (that is, element y followed by x) when calling
	the WindowFromPoint function using 32-Bit Visual Basic. When using 16-bit Visual
	Basic, element x is passed to the API function before element y.
	
	Step-by-Step Example of How to Call the WindowFromPoint API
	-----------------------------------------------------------
	
	The code in the following example uses conditional compilation so that the code
	can be placed in either the 16-bit or 32-bit version of Visual Basic.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Change the ScaleMode of the form to 3 - Pixels. (The coordinates of the Point
	  must be passed in pixels.)
	
	3. Insert a new code module in the project (on the Insert menu, click New
	  Module). Place the following code in the new module:
	
	     #If Win32 Then
	     Declare Function WindowFromPointXY Lib "User32" _
	         Alias "WindowFromPoint" (ByVal xPoint As Long, _
	         ByVal yPoint As Long) As Long
	     #Else
	     Declare Function WindowFromPointYX Lib "User" _
	         Alias "WindowFromPoint" (ByVal yPoint As Integer, ByVal _
	         xPoint As Integer) As Integer
	     #End If
	
	     Function VBWindowFromPoint(ByVal x As Long, ByVal y As Long) As Long
	     #If Win32 Then
	         VBWindowFromPoint = WindowFromPointXY(x, y)
	     #Else
	         VBWindowFromPoint = WindowFromPointYX(y, x)
	     #End If
	     End Function
	
	4. Place the following code in the MouseDown event of Form1:
	
	     ' Convert form coordinates to screen coordinates
	     screenX = X + Form1.Left / Screen.TwipsPerPixelX
	     screenY = Y + Form1.Top / Screen.TwipsPerPixelY
	
	     ' Retrieve the window handle
	     hWindow = VBWindowFromPoint(screenX, screenY)
	
	     If hWindow = Form1.hWnd Then
	     MsgBox "Success"
	     End If
	
	5. Run the code by pressing the F5 key. Click Form1. The message box should
	  appear indicating that the API call successfully returned the window handle
	  of Form1.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	
	=============================================================================
	

{% endraw %}
