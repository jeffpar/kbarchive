---
layout: page
title: "Q106424: Turtle Beach Sound Card: No Sound After Running MemMaker"
permalink: /kb/106/Q106424/
---

## Q106424: Turtle Beach Sound Card: No Sound After Running MemMaker

	Article: Q106424
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Turtle Beach sound card may not function correctly after you run MemMaker.
	
	CAUSE
	=====
	
	MemMaker does not detect the memory range used by the Turtle Beach sound card
	ROM.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Edit your CONFIG.SYS file and add X= parameters to exclude the memory ranges
	  used by your sound card. For example:
	
	  device=c:\dos\emm386.exe noems highscan x=d000-d1ff x=d600-d7ff
	
	  NOTE: To determine what the memory address your card uses, consult your
	  hardware documentation or contact Turtle Beach.
	
	2. Run MemMaker, choosing Custom Setup.
	
	3. Choose Yes in response to the prompt "Keep current EMM386 memory exclusions
	  and inclusions?"
	
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
