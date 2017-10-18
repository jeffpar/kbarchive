---
layout: page
title: "Q136328: How to Determine the Coordinates of an Object"
permalink: kb/136/Q136328/
---

## Q136328: How to Determine the Coordinates of an Object

	Article: Q136328
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to determine the coordinates of an object on a
	form in Visual FoxPro. This could be useful when you want to position the mouse
	pointer over an object programmatically, and then fire that object's Click
	event.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	You can use the Top, Left, Height, and Width properties to determine the exact
	area occupied by an object. Then position the mouse pointer in that area, and
	fire the object's Click event. The following procedure gives an example.
	
	1. Create a new form.
	
	2. Place a command button (Command1) on the form.
	
	3. Place the following five lines of code in the Debug window:
	
	     _SCREEN.ActiveForm.Command1.Top
	     _SCREEN.ActiveForm.Command1.Left
	     _SCREEN.ActiveForm.Command1.Height
	     _SCREEN.ActiveForm.Command1.Width
	     _SCREEN.ActiveForm.Command1.ScaleMode
	
	  These commands return numeric values indicating the coordinates of the
	  Command1 button relative to the form on which it is located. The Top property
	  indicates the distance between the top edge of the control and the top edge
	  of its parent object. (For form objects, Top give the distance between the
	  top edge of the form and the main Visual FoxPro window.)
	
	  The Left property indicates the left-most edge of an object relative to its
	  parent object. (For form objects, Left gives the distance between the left
	  edge of the form and the main Visual FoxPro window.)
	
	  The Height property indicates the height of the object on the screen.
	
	  The Width property indicates the width of the object.
	
	  The ScaleMode property indicates the unit of measurement for coordinates of an
	  object when using graphics methods or when positioning controls. The two
	  measurements Visual FoxPro uses are pixels and foxels. The ScaleMode property
	  uses foxels if set to 0 and pixels if set to 3.
	
	4. Run the form, and make a note of the values returned in the Debug window.
	  Knowing what these values represent, you can simulate clicking the Command1
	  button on this form by using this code:
	
	     tRow = _screen.activeform.command1.top
	     tCol = _screen.activeform.command1.left
	     MOUSE CLICK AT tRow, tCol PIXELS WINDOW (_SCREEN.ACTIVEFORM.Name)
	
	NOTE: This code fires the Command1 Click event. For more information on the
	syntax of the MOUSE CLICK command, please see the MOUSE Command topic in the
	Help file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
