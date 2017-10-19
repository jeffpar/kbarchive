---
layout: page
title: "Q108016: AccuLogic IDE Controller Incompatible with ScanDisk"
permalink: /kb/108/Q108016/
---

## Q108016: AccuLogic IDE Controller Incompatible with ScanDisk

	Article: Q108016
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	AccuLogic has confirmed that running MS-DOS 6.2 ScanDisk on a hard disk drive
	controlled by the AccuLogic Side 3 Plus IDE controller may result in data loss
	if you allow ScanDisk to perform a surface scan.
	
	CAUSE
	=====
	
	This problem occurs when the AccuLogic Side 3 Plus IDE controller is configured
	for an IDE drive type not directly supported by the ROM BIOS of the system and
	the AccuLogic ROM BIOS is enabled.
	
	NOTE: AccuLogic has confirmed that this problem occurs due to a limitation of the
	AccuLogic ROM BIOS. The potential for data loss on these controller cards is not
	limited to ScanDisk--it exists for other surface-scan programs that make
	interrupt 25h and interrupt 26h calls (absolute sector reads and writes). The
	AccuLogic ROM BIOS does not properly resolve these interrupt calls.
	
	
	RESOLUTION
	==========
	
	If your computers BIOS supports an IDE drive type that is similar to your IDE
	hard drive's actual or logical characteristics, it may be possible to disable
	the AccuLogic ROM BIOS and use your computer's ROM BIOS to support the drive.
	This would allow all ScanDisk functions to run successfully.
	
	If your IDE hard drive cannot be supported by your computer's ROM BIOS, you
	should not run the ScanDisk surface scan on that drive. All other ScanDisk
	features (media descriptor, file allocation tables, directory structure, and
	file system) should work properly.
	
	MORE INFORMATION
	================
	
	If you cannot successfully run the surface-scan portion of ScanDisk on your IDE
	drive, you should not install MS-DOS DoubleSpace. Also, you should not use
	Microsoft Defragmenter (Defrag) since it uses interrupt calls 25H and 26H to
	move the information stored in one cluster to another.
	
	For information on what drive types are supported by the ROM BIOS of your
	computer, contact your hardware vendor. For information on configuring the
	AccuLogic controller, call AccuLogic Technical Support at (714) 454-2441.
	
	
	Additional query words: dblspace 6.20 aculogic
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	
