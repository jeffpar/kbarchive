---
layout: page
title: "Q78441: EMM386.EXE Hangs on GoldStar 386SX Model GT316"
permalink: kb/078/Q78441/
---

## Q78441: EMM386.EXE Hangs on GoldStar 386SX Model GT316

	Article: Q78441
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
	
	When loading certain programs, the GoldStar 386SX Model GT316 stops responding
	(locks up or hangs) if EMM386.EXE is also loaded, regardless of the EMM386.EXE
	switch settings.
	
	RESOLUTION
	==========
	
	Goldstar technical support states that adding NOMOVEXBDA to EMM386.EXE resolves
	the problem.
	
	MORE INFORMATION
	================
	
	EMM386.EXE provides expanded memory (EMS) emulation and upper memory block (UMB)
	management.
	
	When EMM386.EXE is used on a GoldStar 386SX Model GT316, certain programs cause
	the system to lock up. The system locks up when EMM386.EXE is loaded. This will
	happen regardless of exclude statements (X=nnnn-nnnn) and regardless of what
	services are being performed (NOEMS, RAM, and no switches).
	
	HIMEM.SYS machine switches also do not seem to have any effect.
	
	This information also applies to the GoldStar GF318 Plus and the GoldStar GS335.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty hang lockup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
