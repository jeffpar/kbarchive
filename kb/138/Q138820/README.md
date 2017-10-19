---
layout: page
title: "Q138820: BUG: Button Image on the Toolbar Appears Incomplete"
permalink: /kb/138/Q138820/
---

## Q138820: BUG: Button Image on the Toolbar Appears Incomplete

	Article: Q138820
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some portions of the image on a toolbar button do not appear and as a result the
	button image appears incomplete.
	
	CAUSE
	=====
	
	By default, the MaskColor property of the ImageList control is set to black.
	This causes the black portions of images on toolbar buttons (or any other
	control that uses an ImageList) to be masked out and not appear.
	
	RESOLUTION
	==========
	
	Use the color dialog box that appears when you change a color property to change
	the MaskColor property of the ImageList that is bound to the toolbar to color
	other than black. Toolbar buttons that have already been created will not change
	color at design time unless they are refreshed by having one of their properties
	modified. However, all buttons will appear correctly at run time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in the Visual
	Basic version 4.0a for Windows synchronization release.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Double-click the Toolbar button in the toolbox to create a new instance of
	  the Toolbar control, called Toolbar1.
	
	3. Double-click the ImageList button in the toolbox to create a new instance of
	  the ImageList control, called ImageList1.
	
	4. Right-click the toolbar control to bring up the Properties dialog box. Change
	  the ImageList property in the General tab to ImageList1. Click the Buttons
	  tab, and click Insert Button to add a button to the toolbar.
	
	5. Right-click the ImageList control to bring up its properties. Click the
	  Images tab, and then click Insert Picture to insert a button image. (Look in
	  \Vb\Bitmaps\Tlbr_w95 for sample bitmaps.)
	
	6. Right-click Toolbar1, and then click the Buttons Tab. The Image property of
	  the first button is set to 0 by default. Change it to a value of 1 to link
	  the first button with the first image in ImageList1.
	
	The image you have selected will appear on the toolbar; however, all black
	portions of the button will be masked out and will not appear. To fix this,
	change the MaskColor property of ImageList1 to a value other than black
	(remember that changes will only take effect if the toolbar is refreshed or if
	the program is run).
	
	Every image in an ImageList collection has a corresponding mask associated with
	it. The mask is a monochrome image derived from the image itself, automatically
	generated using the MaskColor property as the specific color of the mask. This
	mask is not used directly, but is applied to the original bitmap in graphical
	operations such as the Overlay and Draw methods. For example, the MaskColor
	property determines which color of an image will be transparent in the Overlay
	method.
	
	REFERENCES
	==========
	
	Custom Control Reference in the Visual Basic version 4.0 Help file.
	
	Additional query words: 4.00 4.00a ImageList MaskColor vb4all vb4win
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	
