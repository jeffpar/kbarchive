---
layout: page
title: "Q195263: BUG: SavePicture Function Hangs VFP When Zero Disk Space"
permalink: /kb/195/Q195263/
---

## Q195263: BUG: SavePicture Function Hangs VFP When Zero Disk Space

{% raw %}

	Article: Q195263
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbvfp500bug kbvfp600bug kbXBase
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the SavePicture function to create a bitmap from a picture object
	reference and saving it to a storage media that has zero disk space hangs Visual
	FoxPro 5.x or 6.0.
	
	RESOLUTION
	==========
	
	Free up some disk space before using the SavePicture function to create a
	bitmap.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy some files onto a floppy disk until it reports 0 free space.
	
	2. In the Visual FoxPro Command window, type the following command:
	
	        oPicture = LOADPICTURE(HOME()+"fox.bmp")
	        ?
	        SAVEPICTURE(oPicture,"a:\foxtest.bmp")
	
	RESULT: Visual FoxPro hangs and you have to press Ctrl+Alt+Del to terminate
	Visual FoxPro.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500bug kbvfp600bug kbXBase 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
