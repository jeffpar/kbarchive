---
layout: page
title: "Q74815: Screen Display Errors on AT&amp;T 6300"
permalink: /kb/074/Q74815/
---

## Q74815: Screen Display Errors on AT&amp;T 6300

	Article: Q74815
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The screen display on your AT&T 6300 doesn't write to or clear the screen
	correctly. Common problems include the following:
	
	- Failure to write to the screen correctly (using DIR, and so forth).
	
	- Failure to clear the screen correctly (using CLS).
	
	- MS-DOS Shell fails to display or displays incorrectly.
	
	Both text-based screen writes and clear screen commands affect only the top half
	(1/2) of the screen. Most applications work correctly, but from the MS-DOS
	command prompt or inside MS-DOS Shell, the screen may not update correctly.
	
	CAUSE
	=====
	
	AT&T has confirmed that these problems occur under ROM BIOS versions earlier
	than 1.43.
	
	RESOLUTION
	==========
	
	According to AT&T, if the ROM BIOS version is earlier than version 1.43,
	then you should upgrade to ROM BIOS version 1.43 to solve these problems.
	
	Customers can order the BIOS update though AT&T's National Parts Hotline at
	(800) 222-7278 ([800] 222-PART). The 1.43 ROM BIOS part number is 105-203-780.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty video att partial
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
