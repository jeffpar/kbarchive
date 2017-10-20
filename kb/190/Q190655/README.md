---
layout: page
title: "Q190655: WD97: Error Creating New Image in Photo Editor"
permalink: /kb/190/Q190655/
---

## Q190655: WD97: Error Creating New Image in Photo Editor

{% raw %}

	Article: Q190655
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Photo Editor 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new image in Microsoft Photo Editor, you receive the following
	error message:
	
	  The image is too large (too many bytes).
	
	CAUSE
	=====
	
	There is a 32 megabyte (MB) memory allocation limitation when creating a new
	image.
	
	WORKAROUND
	==========
	
	Change the options for the image so that it requires fewer than 32 megabytes
	(MB) of memory. For example, the following options will require 34278 kilobytes
	(KB) of memory which will produce the error message:
	
	  
	
	- Image Type: True Color (24 Bit)
	- Resolution: 300 DPI
	- Width:      10 Inches
	- Height:     13 Inches
	
	Changing the height to 12 inches will require 31641 kilobytes (KB) of memory, and
	you will be able to create the image.
	
	MORE INFORMATION
	================
	
	When you create a new image in Photo Editor, you enter the image type,
	resolution, width, and height of the image. The memory allocation is determined
	by the options you set for the image. The options must not exceed the 32 MB
	limitation.
	
	Additional query words: err msg
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbHomeProdSearch kbPowerPtSearch kbWord97Search kbPowerPt97Search kbPhotoEd97
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
