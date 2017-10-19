---
layout: page
title: "Q141907: PRB: Cannot Set the Visible Property of the PicClip Control"
permalink: /kb/141/Q141907/
---

## Q141907: PRB: Cannot Set the Visible Property of the PicClip Control

	Article: Q141907
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the PicClip control is inserted as an OLE control in a form, it is not
	visible. The Visible property of the control cannot be set to true (.T.).
	
	CAUSE
	=====
	
	The PicClip control is designed to select an area of a source bitmap that other
	controls, such as the Outline control, can use. It is invisible at run time.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The PicClip control exposes properties that allow you to divide a source bitmap
	into a grid of smaller images, and to select an area of a source bitmap. It is
	efficient when you want to display a specific area of the bitmap at a given time
	because you do not have to load different bitmaps. The following step-by-step
	procedure illustrates how to use the PicClip control to select an area of a
	bitmap that is displayed in the Outline control.
	
	Step-by-Step Example
	--------------------
	
	1. Using a Paint program, change the image attributes to a width of 90 pixels
	  and a height of 40 pixels, and create a composite bitmap by filling in the
	  bitmap with three different colors. The finished bitmap should look like it
	  has three columns and each column has a different color.
	
	2. Create a new form.
	
	3. Select the OLE Container Control in the Form Controls toolbar, click Insert
	  control, and select the Picclip control to insert it on the form.
	
	4. Select the control on the form, and, from the Property sheet, change the
	  value of the Name property to Pic1.
	
	5. Select the Picture property, click the Browse button and select the bitmap
	  you created. This sets the value of the Picture property. In FoxPro 3.0b,
	  follow these steps to change the value of the Picture property.
	
	  a. Right-click the control, and select Properties.
	
	  b. Click the Pictures tab.
	
	  c. Select Picture from the Property Name list.
	
	  d. Click the Browse button, and select your bitmap.
	
	6. Set the Rows property of the control to 1 and the Cols property to 3.
	
	7. Using the OLE Container control, insert the Outline control on the form, and
	  set the Name property to Out1.
	
	8. Add a command button to the form, and place the following code in its Click
	  event handler:
	
	     THISFORM.Out1.ADDITEM("Microsoft")
	     =MessageBox("Picture on the Outline will change")
	     THISFORM.Out1.PictureClosed=THISFORM.Pic1.GraphicCell(2)
	
	9. Save the form and run it. When you click the command button, the picture of
	  the Outline control changes.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
