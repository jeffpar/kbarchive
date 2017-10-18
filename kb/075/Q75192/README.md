---
layout: page
title: "Q75192: Zenith Multiboot Option and MS-DOS 5.0"
permalink: kb/075/Q75192/
---

## Q75192: Zenith Multiboot Option and MS-DOS 5.0

	Article: Q75192
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The setup/diagnostic shell built into ROM on Zenith computers normally allows
	you to select several different drives as the boot drive. Under MS-DOS 5.0, the
	only options that will work are the first hard disk (C) and the first floppy
	drive (A).
	
	MORE INFORMATION
	================
	
	The setup/diagnostic shell is invoked on some Zenith computers by pressing the
	CTRL+ALT+INSERT key combination. This shell will accept a number of commands,
	one of them being the command that switches the boot drive. The normal syntax of
	this command is as follows:
	
	  B [{F|W}][{0|1|2|3}][:<partition>]
	
	where
	
	  F = Floppy
	  W = Winchester (hard drive)
	  0 = the first drive
	  1 = the second drive, and so on
	
	For example, BW0 means boot from the first hard disk (C), and BF1 means boot from
	the second floppy (B). By design, MS-DOS 5.0 can only boot from the first hard
	drive (C) and the first floppy drive (A). Consequently, the only valid options
	under MS-DOS 5 are BW0 and BF0.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
