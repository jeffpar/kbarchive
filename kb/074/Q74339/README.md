---
layout: page
title: "Q74339: Hyperdisk Conflicts with SETUP and FORMAT"
permalink: /kb/074/Q74339/
---

## Q74339: Hyperdisk Conflicts with SETUP and FORMAT

	Article: Q74339
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The current version of Hyperdisk 4.21 conflicts with Microsoft MS-DOS 5 Upgrade
	SETUP.EXE and FORMAT.COM.
	
	Hyperdisk fails to monitor the change of media BIOS call and fails to recognize a
	disk swap. This causes difficulties with SETUP and FORMAT.
	
	To resolve this problem, use the /OC switch on the Hyperdisk device driver line
	in the CONFIG.SYS file. For example:
	
	     DEVICE=C:\HYPERDK.EXE /OC
	
	MORE INFORMATION
	================
	
	For more information on this product, contact Hyperware.
	
	The product included here, Hyperdisk, is manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
