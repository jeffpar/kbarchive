---
layout: page
title: "Q100622: Err Msg: Sector Size Too Large with Corel Drivers"
permalink: /kb/100/Q100622/
---

## Q100622: Err Msg: Sector Size Too Large with Corel Drivers

{% raw %}

	Article: Q100622
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The device driver for Corel optical drives may generate the following error
	message when restarting a system:
	
	  Sector size too large
	
	To correct this problem, run the PATCH.EXE program supplied with optical drives
	by Corel Corporation. PATCH.EXE modifies the IO.SYS file to allow the
	recognition of a sector size greater than 512 bytes.
	
	MORE INFORMATION
	================
	
	According to Corel Technical Support, the PATCH.EXE program executes
	automatically the first time you install the optical device driver. However, any
	time you upgrade the MS-DOS version, reformat your hard disk drive, or perform
	any function that replaces the "patched" IO.SYS file, you must run PATCH.EXE
	again.
	
	For more information, call Corel Technical Support.
	
	The products included here are manufactured by Corel Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 6.22 system 3rdparty cdrom cd rom 3.0 SCSI 3.00 4.0 4.00 5.0 5.0a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0,6.0,6.2
	
	=============================================================================
	

{% endraw %}
