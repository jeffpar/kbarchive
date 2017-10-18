---
layout: page
title: "Q161301: HOWTO: Pass a Point Structure to the Windows API by Value"
permalink: kb/161/Q161301/
---

## Q161301: HOWTO: Pass a Point Structure to the Windows API by Value

	Article: Q161301
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WindowFromPoint and ChildWindowFromPoint API functions require that a Point
	structure be passed by value. Visual Basic is not capable of passing a structure
	by value, only by reference. However, it is possible to pass the elements of the
	user-defined type in the correct order so that these API functions can be used.
	This article explains and demonstrates how to pass the Point structure by value
	to the API.
	
	MORE INFORMATION
	================
	
	To preserve compatibility with previous Windows APIs, Microsoft decided that the
	Point structure should continue to be passed by value for the WindowFromPoint
	and ChildWindowFromPoint API functions in the 32-bit user dynamic link library
	(DLL).
	
	Visual Basic is not capable of passing structures by value, but the value of the
	elements of the structure can be placed on the stack in the correct order.
	Therefore, when passing the elements of the Point structure, two long values
	should be passed.
	
	Another important consideration is that Visual Basic uses the C convention
	(stdcall) of passing parameters. This convention specifies that arguments are
	placed on the stack from right to left. API functions are declared using the
	Pascal calling convention where the elements of the structure must be listed in
	reverse order (that is, element y followed by x) when calling the
	WindowFromPoint function using 32-Bit Visual Basic.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic 5.0 and select Standard EXE. If it is already running,
	  click New Project on the File menu and select Standard EXE. Form1 is created
	  by default.
	
	2. Change the ScaleMode of the form to 3 - Pixel. (The coordinates of the Point
	  must be passed in pixels.)
	
	3. Insert a new code module in the project (on the Project menu, click Add
	  Module). Place the following code in the new module:
	
	        Declare Function WindowFromPointXY Lib "User32" _
	            Alias "WindowFromPoint" (ByVal xPoint As Long, _
	            ByVal yPoint As Long) As Long
	
	        Function VBWindowFromPoint(ByVal x As Long, ByVal y As Long) As Long
	            VBWindowFromPoint = WindowFromPointXY(x, y)
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
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
