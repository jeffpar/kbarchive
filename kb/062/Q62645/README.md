---
layout: page
title: "Q62645: Windows 3.0 Enhanced Mode Hangs on a Toshiba 5200"
permalink: kb/062/Q62645/
---

## Q62645: Windows 3.0 Enhanced Mode Hangs on a Toshiba 5200

	Article: Q62645
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Toshiba 5200, Microsoft Windows version 3.0 Setup for a standard VGA may
	run in real mode and standard mode, but it stops responding (hangs) in enhanced
	mode.
	
	RESOLUTION
	==========
	
	Setting EMMEXCLUDE=C000-C7FF in the [386Enh] section of the SYSTEM.INI file
	enables Windows to run in enhanced mode.
	
	This line is automatically added to the SYSTEM.INI file if you choose "Toshiba
	5200" during the initial SETUP or using the maintenance SETUP or Windows SETUP
	icon after having installed Windows. This may be easier than manually editing
	the SYSTEM.INI.
	
	NOTE: The EMMEXCLUDE statement may solve memory address conflicts on the Toshiba
	5200, but removal of TSRs and standard troubleshooting should still be
	performed.
	
	Additional query words: 3.00 win30 3.00a KBHW 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
