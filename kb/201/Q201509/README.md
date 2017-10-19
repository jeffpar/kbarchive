---
layout: page
title: "Q201509: BUG: Textbox Can Be Sized To Less Than Minimum Height"
permalink: /kb/201/Q201509/
---

## Q201509: BUG: Textbox Can Be Sized To Less Than Minimum Height

	Article: Q201509
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbButton kbCtrl kbVBp kbVBp500 kbVBp600 kbForms kbIDEProject kbGrpDSVB kbDSupport
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you resize a TextBox control with the mouse at design time, you can make the
	height so small that some of the text is cut off.
	
	RESOLUTION
	==========
	
	To work around this problem, try to set the Height property of the TextBox
	control to a tiny value (for example, one Twip) in the Properties window. This
	assigns the TextBox control to its correct minimum height value, which allows
	one line of text to be visible.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The minimum height of the TextBox control should always allow at least one line
	of text to be visible. At design time, a TextBox control can be resized such
	that the height of one line of text within the control is not completely
	visible.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. In the Toolbox, double-click TextBox to add a TextBox control to Form1.
	
	3. With the mouse, select one of the sizing handles along the bottom of the
	  TextBox control, and resize the control to its minimum height.
	
	4. With the mouse, select one of the sizing handles along the bottom of the
	  TextBox control. Notice that the control can be resized to a height that is
	  smaller than the minimum height that you specified in the previous step.
	
	NOTE: If an application requires functionality that allows the height of an edit
	control to be sized smaller than the height of one line of text, you can use the
	Microsoft Rich Textbox Control.
	
	Additional query words: font
	
	======================================================================
	Keywords          : kbButton kbCtrl kbVBp kbVBp500 kbVBp600 kbForms kbIDEProject kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
