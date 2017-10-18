---
layout: page
title: "Q89722: Problems with MS-DOS 5.0 on Leading Edge Model M and Sperry HT"
permalink: kb/089/Q89722/
---

## Q89722: Problems with MS-DOS 5.0 on Leading Edge Model M and Sperry HT

	Article: Q89722
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
	
	After upgrading to MS-DOS on a Leading Edge Model M 8088 or a Sperry HT 8088
	computer, executing QBASIC or EDIT may produce unusual video display behavior
	(for example, horizontal scrolling or blinking) or unusual system behavior (for
	example, lock-ups).
	
	CAUSE
	=====
	
	The Leading Edge Model M and Sperry HT are 8088 machines. They originally
	shipped with a color video controller that does not conform to any standard
	supported by MS-DOS 5.0 and later (that is, monochrome, CGA, EGA, EGA mono, VGA,
	or 8514).
	
	The products included here, Leading Edge Model M and Sperry HT, are manufactured
	by vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
