---
layout: page
title: "Q68130: PerStor #PS180-16FN RLL Hard Disk Controller and Windows 3.0"
permalink: kb/068/Q68130/
---

## Q68130: PerStor #PS180-16FN RLL Hard Disk Controller and Windows 3.0

	Article: Q68130
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PerStor Systems Inc. manufactures a RLL hard disk controller (model #PS180-16FN)
	that increases the capacity of normal hard drives by up to 100 percent. It does
	this by formatting the drive with 31 sectors per track, as opposed to the normal
	17 sectors per track.
	
	According to PerStor Systems, when you run Windows 3.0 in the 386 enhanced mode,
	the [386Enh] section of the SYSTEM.INI file may need to be modified to include:
	
	     virtualhdirq=off
	
	Factory settings load the card's BIOS at C800. This can be changed to D800 by
	removing the jumper that connects pins 9 and 10 on jumper 1 of the PerStor
	controller board. These are the only addresses that you can select.
	
	MORE INFORMATION
	================
	
	PerStor is no longer in business.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3rdparty KBHW 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
