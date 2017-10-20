---
layout: page
title: "Q142566: How to Create a Check Box that Shows a Check Mark"
permalink: /kb/142/Q142566/
---

## Q142566: How to Create a Check Box that Shows a Check Mark

{% raw %}

	Article: Q142566
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a check box is displayed on a form, there is no property you can set to
	have the check box show a check mark that is larger or a dfferent shape than the
	small default check mark. Some users might prefer a larger or different style of
	check mark. This can be achieved by setting the check box Style Property to
	Graphical. This allows the Picture Property to be set to a bitmap that appears
	as a check mark. Then you can change the setting of the Picture Property to the
	bitmap when the check box is checked and set it to no bitmap when it is not
	checked.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example to Create a Bitmap with a Check Mark in It
	---------------------------------------------------------------
	
	1. In Windows 95:
	
	  Open Paint under Accessories. From the Image menu, choose Attributes. Set the
	  Units to Inches, and change the Height and Width to 0.15. Click the "A" tool
	  on the left side of Paint, and click the canvas. This will allow the Text
	  Toolbar to be chosen under the View menu. Select the Wingdings font with size
	  12 or 14 (depending on the size check mark needed), and choose Bold. After
	  closing the Text toolbar, make sure NumLock is on for the numeric key pad.
	  Click the "A" tool again and place the pointer (shaped as a cross-hair) on
	  the upper-left corner of the Paint canvas and lasso the whole area by holding
	  down the mouse button and dragging the mouse to the lower-right corner of the
	  canvas. This will be a very small area to work with.
	
	  Hold down the ALT key, and press the numbers 0252 on the numeric key pad. When
	  you release the ALT key, there will be a check mark on the canvas. Choose New
	  from the File menu, and start over if the check mark is not centered properly
	  on the canvas. After creating an acceptable check mark, choose Save from the
	  File menu, and save the bitmap with the name Chekmark.bmp.
	
	  In Windows 3.x:
	
	  Open Paintbrush in the Accessories group. From the Options menu, choose Image
	  Attributes. Set the Units to Inches and change the Height and Width to 0.15.
	  From the Text menu, choose Font. Select the Wingdings font with size 12 or 14
	  (depending on the size check mark needed), and choose Bold. After closing the
	  Font box, make sure NumLock is on for the numeric key pad. Click the "abc"
	  tool on the toolbar on the left side of the canvas and place the pointer on
	  the canvas by clicking the left side. Make sure the pointer is on the left
	  side of the canvas. Hold down the ALT key, and press the numbers 0252 on the
	  numeric key pad. When you release the ALT key, there will be a check mark on
	  the canvas. Choose New from the File menu, and start over if the check mark
	  is not centered properly on the canvas. After creating an acceptable check
	  mark, choose Save from the File menu, and save the bitmap with the name
	  chekmark.bmp.
	
	2. In Visual FoxPro, create a form, and place a check box on it. Change the
	  Style Property for the check box to Graphical. Select the Chekmark.bmp file
	  for the Picture Property, and delete the Check 1 Caption property. The check
	  box can be resized to a square if that's what you want.
	
	3. In the Click event for the check box, place this code:
	
	     IF THIS.VALUE = 1
	           THIS.PICTURE = "\(path)\chekmark.bmp"
	     ELSE
	           THIS.PICTURE = ""
	     ENDIF
	
	4. Select a label from the Form toolbar and place it beside the check box.
	  Change its caption to MyCheckBox.
	
	5. In the Init event of the form, place the following code to give the check box
	  a checked value of 1:
	
	     THISFORM.CHECK1.VALUE = 1
	
	6. Run the form, and click the check box. Because it has a check mark in it when
	  the form starts, clicking it the first time should blank out the check mark.
	
	If the check mark does not appear and disappear when clicked, it is possible that
	the path to the bitmap is wrong. No error message should appear when the Click
	event code executes if the bitmap doesn't exist where its path is given or if
	its name is misspelled.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
