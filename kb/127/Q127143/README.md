---
layout: page
title: "Q127143: SMARTMON.EXE Does Not Report Cache Information"
permalink: /kb/127/Q127143/
---

## Q127143: SMARTMON.EXE Does Not Report Cache Information

	Article: Q127143
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the SMARTDrive Monitor tool (SMARTMON.EXE) that is shipped
	with Microsoft MS-DOS version 6.0 or higher, the tool does not report any
	caching information for SMARTDRV.EXE even though SMARTDRV.EXE is loaded
	properly.
	
	CAUSE
	=====
	
	The SMARTDrive Monitor tool does not show SMARTDrive caching information for the
	following types of drives:
	
	- Drives that are not cached.
	
	- Network drives.
	
	- CD-ROM drives.
	
	- Hard disks running in Windows for Workgroups version 3.11 with 32-bit file
	  access enabled.
	
	MORE INFORMATION
	================
	
	Drives That Are Not Cached
	--------------------------
	
	SMARTMON.EXE cannot report cache information for a drive if caching for that
	drive has been disabled.
	
	Network Drives
	--------------
	
	SMARTDrive does not cache network drives, so SMARTMON.EXE cannot report cache
	information for these drives.
	
	CD-ROM Drives
	-------------
	
	SMARTMON.EXE version 1.03 does not recognize the caching of CD-ROM drives because
	it was not designed to do so. SMARTMON.EXE 1.03 was originally released with
	Microsoft MS-DOS version 6.0, which includes SMARTDrive version 4.0. SMARTDrive
	version 4.0 does not cache CD-ROM drives.
	
	Hard Disks Using 32-Bit File Access
	-----------------------------------
	
	The 32-bit file access feature in Windows for Workgroups 3.11 uses a 32-bit
	protect-mode cache (VCACHE.386) that replaces SMARTDRV.EXE at the Windows level.
	When you use the 32-bit file access feature, SMARTDRV.EXE caches only floppy and
	CD-ROM drives. SMARTMON.EXE does not report caching information for hard disks
	using the 32-bit file access feature because VCACHE.386 has disabled the hard
	disk caching in SMARTDRV.EXE.
	
	The only way to work around this behavior is to not use the 32-bit file access
	feature in Windows for Workgroups 3.11. You may not want to disable the 32-bit
	file access feature, however, because doing so causes you to lose the
	performance increases that 32-bit file access and VCACHE.386 provide over
	SMARTDrive's real-mode caching.
	
	Additional query words: 3.11 wrk vfat 32bit cdrom
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.11
	
	=============================================================================
	
