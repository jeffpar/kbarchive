---
layout: page
title: "Q133132: Suspend Mode Causes Network Transfer Problems on ZNote-Flex"
permalink: kb/133/Q133132/
---

## Q133132: Suspend Mode Causes Network Transfer Problems on ZNote-Flex

	Article: Q133132
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
	
	If you are using a Zenith ZNote-Flex Notebook computer to copy files across a
	network, the files may be lost or damaged if the computer switches into Suspend
	mode while the files are being copied.
	
	CAUSE
	=====
	
	The Zenith ZNote-Flex Notebook computer has a Suspend Time-out setting. When
	this option is enabled, it ignores interrupts from the hard disk and PCMCIA
	controllers and switches the computer into Suspend mode after the selected
	interval.
	
	If the computer switches into Suspend mode while you are copying files across a
	network, the network connection is suspended, possibly resulting in lost or
	damaged files.
	
	RESOLUTION
	==========
	
	Disable the Suspend Time-out setting in the computer's CMOS settings. For
	information about configuring the computer's CMOS settings, please refer to your
	computer documentation or manufacturer.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
