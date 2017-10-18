---
layout: page
title: "Q88571: DTC 3290 SCSI Controller and Windows 3.1"
permalink: kb/088/Q88571/
---

## Q88571: DTC 3290 SCSI Controller and Windows 3.1

	Article: Q88571
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use a DTC 3290 or DTC 3292 SCSI controller with Windows 3.1, the
	following lines must be present in the CONFIG.SYS file:
	
	     ASPI3X90.SYS   12-16-91   10809 bytes
	     ASCSI.SYS      12-16-91   7360 bytes
	
	Windows cannot run in 386 enhanced mode unless these drivers are loaded.
	
	MORE INFORMATION
	================
	
	According to DTC technical support, the SCSI drivers must be loaded right after
	the HIMEM.SYS line in the CONFIG.SYS file. The ASPI3X90.SYS driver must also
	include the "Q" switch.
	
	A typical CONFIG.SYS file looks as follows:
	
	     DEVICE = C:\WINDOWS\HIMEM.SYS
	     DEVICE = C:\ASPI3X90.SYS /Q
	     DEVICE = C:\ASCSI.SYS
	     FILES = 50
	     BUFFERS = 20
	
	These files are available on the DTC bulletin board service (BBS). Contact DTC
	for more information.
	
	Additional query words: 3.10 3.11 3rdparty data technology technologies tech
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
