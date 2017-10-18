---
layout: page
title: "Q189920: PRB: Image Control Shows Only First Frame of Animated GIF"
permalink: kb/189/Q189920/
---

## Q189920: PRB: Image Control Shows Only First Frame of Animated GIF

	Article: Q189920
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using an animated GIF file with the Visual FoxPro image control, only the first
	frame of the animated GIF appears. This is also true for other areas of the
	product that support GIF images.
	
	CAUSE
	=====
	
	Visual FoxPro does not support the animated GIF format. Only the GIF version 89a
	file format is supported.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce the behavior, run the following code:
	
	     PUBLIC oForm
	
	     * Locate an animated GIF file
	     cMyAniGIF = GETPICT("GIF")
	
	     oForm=NewObject("form")
	     oForm.AddObject("MyImage","Image")
	     oForm.MyImage.Picture=cMyAniGIF
	     oForm.MyImage.Visible=.T.
	
	     oForm.Show
	
	NOTE: Only the first frame of the animated .gif file is displayed in the form.
	
	Additional query words: kbVFp600 kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
