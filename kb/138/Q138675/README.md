---
layout: page
title: "Q138675: How to Create Raised Text Boxes in Visual FoxPro"
permalink: kb/138/Q138675/
---

## Q138675: How to Create Raised Text Boxes in Visual FoxPro

	Article: Q138675
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
	
	In Visual FoxPro, a text box can have a recessed look to it by setting the
	SpecialEffect property to 3D-Effect. There is no setting to make the text box
	have a raised look. However, by using lines with contrasting colors on each side
	of the text box, you can give the text box a raised look on the form. The best
	colors for making a text box have a raised look are light gray for the left and
	top sides and dark gray for the bottom and right sides. Below are the steps to
	create a raised text box.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. Create a form and add a text box to it. Change the SpecialEffect property of
	  the text box to 1 - Plain.
	
	2. Select the Line tool from the Form Controls toolbar. Draw a line equal to the
	  length of the text box. You can press SHIFT+RIGHT ARROW or SHIFT+LEFT ARROW
	  to make it easy to adjust the line length.
	
	3. After making the line equal to the length of the text box, make a copy of it
	  by pressing CTRL+C and then pressing CTRL+V.
	
	4. Repeat steps 2 and 3 to create two lines equal to the width of the text box.
	
	5. Click the first long line, and change the Border Color property in the
	  Properties sheet to 192,192,192. Using the mouse or arrow keys, overlap this
	  line to the top border line of the text box.
	
	6. Repeat Step 5 for the first width line, using the mouse or arrow key to
	  overlap this line to the left border line of the text box.
	
	7. Click the second long line, changing the Border Color property in the
	  Properties sheet to 128,128,128 and the BorderWidth property to 2. Using the
	  mouse or arrow keys, place this line directly under the bottom border line of
	  the text box. Do not overlap the border line of the text box.
	
	8. Repeat Step 7 for the second width line, placing it just outside of the right
	  border line of the text box.
	
	9. Select another text box and place it on the form. The SpecialEffect property
	  should be set to 0 - 3D by default.
	
	Run the form, and note that the first text box has a raised look while the second
	textbox has a recessed look.
	
	If a darker shadow is desired on the raised textbox, change the Border Color
	property of the bottom and right lines in the Properties sheet to 75,75,75.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
