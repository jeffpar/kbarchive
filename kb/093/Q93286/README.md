---
layout: page
title: "Q93286: Harvard Graphics GP Faults Above Standard VGA Resolutions"
permalink: /kb/093/Q93286/
---

## Q93286: Harvard Graphics GP Faults Above Standard VGA Resolutions

	Article: Q93286
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive a general protection (GP) fault in Microsoft Windows when using
	Harvard Graphics for Windows version 1.0.
	
	CAUSE
	=====
	
	Harvard Graphics has confirmed that Harvard Graphics for Windows version 1.0 may
	cause GP faults when used with video drivers above the standard VGA (640 x 480
	16-colors) resolution.
	
	WORKAROUND
	==========
	
	To work around this problem, try the following:
	
	- Exclude Windows from using upper memory blocks; this may prevent the GP fault
	  error message.
	
	  To test this, start Windows by typing the following at the MS-DOS command
	  prompt:
	
	  WIN /D:X
	
	  This command is equivalent to adding the line "EMMExclude=A000-FFFF" to the
	  [386Enh] section of the SYSTEM.INI file. If this prevents the GP fault, try
	  to determine the exact memory area that needs to be excluded, rather than
	  excluding the entire upper memory area (A000- FFFF).
	
	- Use a lower-resolution video driver. If you are using a 1024 x 768 (any
	  number of colors) driver, or 800 x 600 256-color video driver, in many cases
	  you can prevent the GP fault by using a slightly lower resolution driver,
	  such as 800 x 600 16-color or 640 x 480 256-color video driver.
	
	  In all known instances, the standard VGA driver (640 x 480 16-colors) shipped
	  with Windows works properly.
	
	MORE INFORMATION
	================
	
	There are updates of Harvard Graphics available that correct problems with Adobe
	Type Manager and Bitstream FaceLift fonts. If you are using either of these
	products and are receiving GP faults when using the standard VGA video driver,
	contact Harvard Graphics to determine if you need an update.
	
	For more information, contact Software Publishing Corporation (Harvard Graphics)
	technical support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 telephone gp gpf XGA 8514 TIGA plus + 3rdparty third party akz
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
