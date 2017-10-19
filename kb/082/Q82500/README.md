---
layout: page
title: "Q82500: TAPCIS Timing Problem While Running in the Background"
permalink: /kb/082/Q82500/
---

## Q82500: TAPCIS Timing Problem While Running in the Background

	Article: Q82500
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	When TAPCIS, an MS-DOS-based communications application used to access
	CompuServe, is run in the background and is instructed to pause for a
	finite amount of time, TAPCIS pauses eternally or until it is brought
	to the foreground.
	
	This can be corrected by creating a program information file (PIF) for
	TAPCIS with the Detect Idle Time option turned on (the box is checked)
	in the Advanced section of the PIF Editor.
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
