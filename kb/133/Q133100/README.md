---
layout: page
title: "Q133100: FIX: Timer is Visible on a Form After Using Graphics Methods"
permalink: /kb/133/Q133100/
---

## Q133100: FIX: Timer is Visible on a Form After Using Graphics Methods

	Article: Q133100
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The timer control is visible on a form at run time when it should not be.
	
	WORKAROUND
	==========
	
	Set the coordinates of the timer control to an off-screen location. For example,
	add the following lines to the code in the form's Init event:
	
	     thisform.timer1.left = -100
	     thisform.timer1.top = -100
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form named Test.
	
	2. Add a timer control to the Test form.
	
	3. In the form's Init event, type:
	
	     thisform.width = 500
	     thisform.height = 500
	     thisform.fillstyle = 0
	     thisform.fillcolor = rgb(255,0,0)
	     thisform.box(0,0,thisform.width,thisform.height)
	
	4. Save and run the form.
	
	The form's Fillcolor property is set to a color other than the backcolor of the
	form, and a box is drawn around the area that contains the timer. When you run
	the form, a white rectangle appears where the timer is located.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
