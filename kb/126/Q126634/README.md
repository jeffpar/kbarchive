---
layout: page
title: "Q126634: Disable Device Bitmap Support in Windows 3.1 Video Driver"
permalink: /kb/126/Q126634/
---

## Q126634: Disable Device Bitmap Support in Windows 3.1 Video Driver

{% raw %}

	Article: Q126634
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive general protection (GP) fault error messages in various applications
	in Microsoft Windows 95.
	
	CAUSE
	=====
	
	These errors can occur if, in Windows 95, you are using a Windows version 3.1
	video driver that supports bitmaps.
	
	WORKAROUND
	==========
	
	To work around this situation, use one of the following methods:
	
	- Use one of the video drivers supplied with Windows 95 (such as the standard
	  VGA driver).
	
	- Contact the manufacturer of the Windows 3.1 video driver about obtaining a
	  video driver for Windows 95.
	
	- If the video driver supports device bitmaps, disable this support. To do
	  this, you must run a utility that is shipped with your video card. Please
	  contact your video card manufacturer for more information.
	
	  NOTE: This method has worked on computers with the following video cards:
	
	  - Apian Renegade 1280 ISA
	
	MORE INFORMATION
	================
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows
	
	1. For more information about resolving this issue, contact your
	
	video card manufacturer.
	
	The products discussed here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: gpf wwt
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
