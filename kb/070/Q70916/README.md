---
layout: page
title: "Q70916: Screen Garbage on Tandon Laptop 386, VGA, QBasic Mode 13"
permalink: /kb/070/Q70916/
---

## Q70916: Screen Garbage on Tandon Laptop 386, VGA, QBasic Mode 13

	Article: Q70916
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
	
	When you use the MS-DOS version 5.0 or later QBasic SCREEN command to set the
	screen to mode 13 (320 x 200, 256-color resolution) on a Tandon Laptop 386 with
	a VGA card, meaningless characters may appear on the screen. When running in
	this mode, the VGA card ignores requests to set colors; therefore, anything
	displayed on the screen appears in unpredictable colors.
	
	CAUSE
	=====
	
	This behavior is caused by a problem in the VGA card itself, not the machine,
	monitor, or Qbasic.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 hardware 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
