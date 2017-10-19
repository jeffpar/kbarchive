---
layout: page
title: "Q142399: PRB: Line Drawn with Line Method Is Behind Form's Objects"
permalink: /kb/142/Q142399/
---

## Q142399: PRB: Line Drawn with Line Method Is Behind Form's Objects

	Article: Q142399
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the form's Line method to draw a line over an object during the form's
	initialization causes the line to be behind the object.
	
	CAUSE
	=====
	
	If the Line method is called from either the form's Init event, or any other
	event that fires when the form is initially started, the line will actually be
	drawn prior to the placement of the form's objects. On slower computers, this
	can be easily visualized. Because the line that is produced by using the Line
	method of a form is not an object and therefore lacks any properties that can be
	manipulated, it is not possible to force it to the front of the object.
	
	WORKAROUND
	==========
	
	Following are three possible workarounds, in order of preference:
	
	- Use either a Line or Shape object. These objects have properties that can be
	  manipulated at either design time or run time.
	
	-or-
	
	- Create a new property of the form to contain a logical false value: For
	  example, zLineDraw. Within the GotFocus Event of the first object in the
	  form's tab order, check the value of zLineDraw. If it is false, call the
	  form's Line method. Then set the zLineDraw property to true as in the
	  following example:
	
	     IF !ThisForm.zLineDraw
	        ThisForm.Line(<nXCoord2>, <nYCoord2>)
	        ThisForm.zLineDraw = .T.
	     ENDIF
	
	-or-
	
	- Use a Timer to call the Line method of the form. In this case, the Interval
	  can be set initially to 500 (milliseconds) and the Timer Event that calls the
	  form's Line method should reset the Interval to 0 so that it is triggered
	  only once.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and use the Form Controls toolbar to place a Shape on the
	  form and create a large rectangular area.
	
	2. Set the DrawWidth property of the form to 10. This will cause the line width
	  to be large enough to fully visualize the affect.
	
	3. With the Shape as the selected object on the form, change its BackColor
	  property to red (255,0,0).
	
	4. In the form's Init event, add the following code:
	
	     * The following code determines the x and y coordinates
	     * of the Shape1 object.
	     xLeft = This.Shape1.Left
	     yTop = This.Shape1.Top
	     xRight = This.Shape1.Left + This.Shape1.Width
	     yBottom = This.Shape1.Top + This.Shape1.Height
	
	     * The following code draws an "X" in the area of the Shape1 object.
	     ThisForm.Line(xLeft,yTop,xRight,yBottom)
	     ThisForm.Line(xRight,yTop,xLeft,yBottom)
	
	5. Save the form as linetest. Then close the form, and use the DO FORM command
	  to run it. Depending on the speed of the computer running the form, it may be
	  possible to see that the X appears before the red shape. The DrawWidth
	  property of 10 should result in a portion of the X protruding from each of
	  the shape's four corners.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
