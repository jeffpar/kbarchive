---
layout: page
title: "Q74453: Load NEC CD-ROM Driver 2.1 and Earlier Before HIMEM.SYS"
permalink: /kb/074/Q74453/
---

## Q74453: Load NEC CD-ROM Driver 2.1 and Earlier Before HIMEM.SYS

	Article: Q74453
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.22,6.x; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NEC CD-ROM drivers versions 2.1 and earlier (NECCDR.SYS) must be installed
	before HIMEM.SYS. NEC CD-ROM driver versions 2.12 and later will allow the
	driver to be installed after HIMEM.SYS in the CONFIG.SYS file. The driver may
	then be installed high with the DEVICEHIGH= command.
	
	The product included here, NECCDR.SYS, is manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20 3rdparty 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.22,6.x; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
