---
layout: page
title: "Q140292: How to Create Blinking Text"
permalink: kb/140/Q140292/
---

## Q140292: How to Create Blinking Text

	Article: Q140292
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro version 2.x for MS-DOS, you could create blinking text within a
	screen. However, there is no property in Visual FoxPro that simulates this
	effect. Additionally, the SET BLINK ON command has no effect on Visual FoxPro
	objects. This article shows by example how to create a blinking label in a form.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	This example uses a timer object to create the blinking effect on a label
	object.
	
	1. Create a form called Test.scx.
	
	2. Place a label on the form, and change its Caption property to This Label
	  Blinks. Also, change the AutoSize property to true.
	
	3. Place a timer on the form. In the Timer event, type the following code:
	
	     THISFORM.Label1.Visible=! THISFORM.Label1.Visible
	
	4. Set the Interval property of the timer to 1000.
	
	5. Save the form, and run it. The code in the Timer event serves to toggle the
	  Visible property of the label on and off.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
