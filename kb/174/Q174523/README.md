---
layout: page
title: "Q174523: BUG: BMP Turns Black on a Disable Button under NT 4.0"
permalink: kb/174/Q174523/
---

## Q174523: BUG: BMP Turns Black on a Disable Button under NT 4.0

	Article: Q174523
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro version 3.0x and version 5.0x, some of the bitmaps will turn
	black instead of dim when the button is disabled.
	
	RESOLUTION
	==========
	
	Use Microsoft Paint or any image utility to open up the bitmap file and re- save
	the file to monochrome type instead of color.
	
	If you re-save the bitmap to a different file name, you need to re-load the
	Picture property with the newly saved bitmap in order for the newly saved bitmap
	to take in effect.
	
	However, if you save the bitmap back to the same file name in Visual FoxPro
	version 5.0x, perform the following steps:
	
	1. Unload the bitmap from the Picture property of the object.
	
	2. In the Command window, issue the following command:
	
	        CLEAR RESOURCE [bitmap filename include the full path]
	        * For example,  CLEAR RESOURCE C:\VFP5.0\TEST.BMP
	
	3. Reload the bitmap to the Picture property of the object again.
	
	In Visual FoxPro version 3.0x, one must re-start Visual FoxPro for the newly
	saved bitmap to take in effect in the object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem does not happen in Windows 95. This problem is pertaining only to
	Windows NT 4.0.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form with two command buttons.
	
	2. Select the picture property of the first command button and use the Save.bmp
	  file in the \Samples\Graphics\Bmps\Offctlbr\Small\Color folder. In Visual
	  FoxPro 6.0, the files are located under \Microsoft Visual
	  Studio\Common\Graphics\Bitmaps\OffCtlBr\Small\Color
	
	3. Put the following code in the Click event of the second button:
	
	        Thisform.Command1.Enabled = !Thisform.Command1.Enabled
	
	4. Save and run the form.
	
	NOTE: Click on the second command button to disable the first command button. The
	bitmap on the first command button turns black instead of dim.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
