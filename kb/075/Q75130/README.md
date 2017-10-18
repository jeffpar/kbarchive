---
layout: page
title: "Q75130: MS-DOS Shell Colors May Blink on CGA Display"
permalink: kb/075/Q75130/
---

## Q75130: MS-DOS Shell Colors May Blink on CGA Display

	Article: Q75130
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run MS-DOS Shell on a system using a CGA monitor, some colors may blink.
	
	RESOLUTION
	==========
	
	Possible solutions to this situation are to re-expand the video files, remove
	the "bright" color selections if they are unsupported, and to refresh the screen
	within Shell. These options are described below:
	
	- Expand the CGA files for MS-DOS Shell to the MS-DOS directory. In some cases,
	  Setup detects a different graphics card and expands the wrong graphics
	  support with MS-DOS Shell. Check to see what kind of monitor is present, then
	  expand the appropriate files. The proper files for each type of monitor are
	  listed in the MS-DOS 5.0 "Microsoft MS-DOS Getting Started" manual.
	
	- Some CGA cards don't support the bright colors. Any color scheme listed in
	  the DOSSHELL.INI file that has a bright prefix blinks if bright colors are
	  not supported by the CGA card. To prevent these colors from blinking, use a
	  color scheme that does not include bright colors, or edit the color schemes
	  in the DOSSHELL.INI file to remove the bright prefix on the colors.
	
	- If you have a screen saver loaded and task swapping is enabled, when you swap
	  applications, the colors may blink. Press SHIFT+F5 to refresh the screen and
	  eliminate the blinking.
	
	For more information on setting colors within Shell, query on the following words
	in the Microsoft Knowledge Base:
	
	  " dosshell and color " (without the quotation marks)
	
	Additional query words: 5.00 5.00a 6.00 3rdparty dosshell monitor vga
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	
