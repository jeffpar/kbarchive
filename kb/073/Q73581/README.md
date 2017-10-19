---
layout: page
title: "Q73581: Can't Exit from Lotus Agenda with EMM386.EXE"
permalink: /kb/073/Q73581/
---

## Q73581: Can't Exit from Lotus Agenda with EMM386.EXE

	Article: Q73581
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
	
	You can start and use Lotus Agenda version 2 with EMM386.EXE. However, it stops
	responding (hangs) when you exit if EMM386.EXE is installed in your CONFIG.SYS
	file.
	
	This problem occurs regardless of the parameters specified for EMM386.
	
	WORKAROUND
	==========
	
	Remove EMM386.EXE from your CONFIG.SYS file, and you can successfully exit to
	MS-DOS.
	
	The product included here is manufactured by Lotus, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
