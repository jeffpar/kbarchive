---
layout: page
title: "Q132104: FIX: Background Color in Text Box Does Not Use Dithered Colors"
permalink: kb/132/Q132104/
---

## Q132104: FIX: Background Color in Text Box Does Not Use Dithered Colors

	Article: Q132104
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
	
	When using a dithered color (other RGB color pairs may also exhibit the same
	behavior) as a background color in a text box, edit region, grid, or check box
	(other controls may exhibit the same behavior), you see only the solid side of
	the RGB color pair as your background color.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Create a program containing the following code and run it:
	
	    PUBLIC myform
	     myform = CREATEOBJECT('form')
	     myform.ADDOBJECT("mytext", "textbox")
	     WITH myform.mytext
	       .LEFT = 15
	       .TOP = 6
	       .VISIBLE = .T.
	       .BACKCOLOR = rgb(128,255,255)  && Should change the back color to a
	       ** light blue
	     ENDWITH
	     myform.ADDOBJECT("mycheckbox", "checkbox")
	     WITH myform.mycheckbox
	       .LEFT = 15
	       .TOP = 50
	       .VISIBLE = .T.
	       .CAPTION = "Check 1"
	       .BACKCOLOR = RGB(128,255,255) && Should change the back color to a
	       ** light blue
	     ENDWITH
	     myform.ADDOBJECT("myedit", "editbox")
	     WITH myform.myedit
	       .LEFT = 200
	       .TOP = 40
	       .VISIBLE = .T.
	       .BACKCOLOR = rgb(128,255,255) && Should change the back color to a
	       ** light blue
	     ENDWITH
	     myform.ADDOBJECT("mylabel", "label")
	     WITH myform.mylabel
	       .LEFT = 200
	       .TOP = 6
	       .VISIBLE = .T.
	       .BACKCOLOR = rgb(128,255,255) && Should change the back color to a
	       **light blue
	     ENDWITH
	     myform.SHOW
	
	The solid side of your RGB color pair may vary due to your video driver. To see
	what the solid and color side of your RGB color pair is, go to the Control Panel
	in Windows, and double-click the Colors icon. Click the Color Palette button,
	and then click the Define Custom Color button. Then enter 128 for Red, 255 for
	Green, and 255 for Red. You will see that the Color side of RGB(128,255,255) is
	a light blue but the solid side is Gray, White, or Blue Gray depending on your
	video driver. (You can also use the Custom Color Palette in Visual FoxPro to do
	this.)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
