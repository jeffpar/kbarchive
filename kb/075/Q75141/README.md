---
layout: page
title: "Q75141: Using SMARTDRV.SYS and RAMDRIVE.SYS with QEMM's QEXT.SYS"
permalink: kb/075/Q75141/
---

## Q75141: Using SMARTDRV.SYS and RAMDRIVE.SYS with QEMM's QEXT.SYS

	Article: Q75141
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	According to Quarterdeck, MS-DOS version 5.0's RAMDRIVE.SYS and SMARTDRV.SYS may
	fail to load if they are placed after the line that loads QEMM 50/60's or QRAM's
	driver QEXT.SYS in the CONFIG.SYS file.
	
	WORKAROUND
	==========
	
	To work around this problem, modify the CONFIG.SYS file so that both lines that
	load RAMDRIVE.SYS and SMARTDRV.SYS appear before the line that loads QEXT.SYS.
	
	MORE INFORMATION
	================
	
	An updated version of QEXT.SYS is available that corrects this problem. It is
	available on the Quarterdeck bulletin board service (BBS) or from Quarterdeck
	Technical Support. Contact Quarterdeck for more information.
	
	The Quarterdeck products included here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 5.00 3rdparty bbs
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
