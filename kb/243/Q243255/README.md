---
layout: page
title: "Q243255: PRB: Scroll Box on ActiveX Image Control Causes Image Distortion"
permalink: kb/243/Q243255/
---

## Q243255: PRB: Scroll Box on ActiveX Image Control Causes Image Distortion

	Article: Q243255
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbContainer kbCtrl kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Moving the scrollbars on an OLE Image control contained on a FoxPro form causes
	a part of the image to be distorted. Black areas might also appear on the form.
	If the left-mouse button is released while scrolling, the control acts as if the
	mouse button is still depressed. Moving the mouse causes the image to scroll
	even though the left button is not depressed. Clicking the left-mouse button on
	the form returns the control to normal.
	
	RESOLUTION
	==========
	
	As a workaround, avoid scrolling with scroll box. Use the scroll arrows located
	at the top and the bottom of the scrollbar to scroll the image.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code sample into a .PRG file (in this article, assume
	  that the file is named TEST.PRG):
	
	  ***Start of code
	  public xform
	  xForm=CREATE("form")
	  xForm.VISIBLE = .T.
	  xForm.HEIGHT = 350<BR/>
	  xForm.CAPTION = "Image Test"
	  * Kodak Image control available on Windows 98
	  * xForm.ADDOBJECT("image","olecontrol","imaging.editctrl.1")
	  * Wang Image control available on NT 4
	  xForm.ADDOBJECT("image","olecontrol","wangimage.editctrl.1")
	  xForm.IMAGE.VISIBLE=.T.
	  xForm.IMAGE.WIDTH = 300
	  xForm.IMAGE.HEIGHT = 300
	  xForm.IMAGE.LEFT = 25
	  xForm.IMAGE.TOP = 25
	  * Replace below with file to display. Must be big enough for scrollbars to appear.
	  xForm.IMAGE.IMAGE = 'tony1600.jpg'
	  xForm.IMAGE.DISPLAY
	  xForm.SHOW
	  ***End of code
	
	2. Execute the program from the Command window by typing:
	
	"DO TEST" (without the quotation marks)
	
	3. Release the left-mouse button while scrolling the image rapidly using the
	  mouse on the scroll box. Move the mouse without clicking the left button and
	  watch the image move and become distorted.
	
	4. Click anywhere on the form to release the scrollbar.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbContainer kbCtrl kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
