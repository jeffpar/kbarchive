---
layout: page
title: "Q128760: High Resolutions with Diamond Stealth 64 2 MB Video Card"
permalink: kb/128/Q128760/
---

## Q128760: High Resolutions with Diamond Stealth 64 2 MB Video Card

	Article: Q128760
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use a video resolution higher than 640 x 480 x 16.7 million
	(24-bit) colors, you receive the following error message:
	
	  Your display adapter is not configured properly. To correct the problem,
	  click OK to start the Hardware Installation Wizard.
	
	CAUSE
	=====
	
	The Windows 95 S3 video driver runs a 32-bit TrueColor mode requiring 4
	megabytes (MB) of video RAM. Using the setting "Truecolor=24" in the [display]
	section of the SYSTEM.INI file turns on a 24-bit mode that requires less video
	RAM.
	
	NOTE: This mode may not work correctly on all video adapters.
	
	RESOLUTION
	==========
	
	To use the "Truecolor=24" setting, use any text editor (such as Notepad) to open
	the SYSTEM.INI file. Add the line "Truecolor=24" (without quotation marks) to
	the [display] section of the file. Save and close the file, then shut down and
	restart Windows 95.
	
	Additional query words: diamond stealth pro
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
