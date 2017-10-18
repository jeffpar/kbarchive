---
layout: page
title: "Q77351: Samsung S-5200 Requires HIMEM /MACHINE:12"
permalink: kb/077/Q77351/
---

## Q77351: Samsung S-5200 Requires HIMEM /MACHINE:12

	Article: Q77351
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
	
	The automatic A20 handler detection scheme employed by HIMEM.SYS in MS-DOS may
	not install the proper A20 handler on SAMSUNG S-5200 computers.
	
	CAUSE
	=====
	
	On SAMSUMG S-5200 laptop computers, HIMEM.SYS may install A20 handler number 1.
	This may result in erratic behavior on the machine when extended memory is
	accessed.
	
	WORKAROUND
	==========
	
	To correct this problem, the A20 handler number 12 should be installed. Add the
	following line to the CONFIG.SYS file to install the proper handler:
	
	  device=c:\dos\himem.sys /machine:12
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, pages 610-613.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
