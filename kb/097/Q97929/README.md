---
layout: page
title: "Q97929: DoubleSpace on DTC 3280 SCSI Hangs System"
permalink: /kb/097/Q97929/
---

## Q97929: DoubleSpace on DTC 3280 SCSI Hangs System

	Article: Q97929
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If you install DoubleSpace on a DTC 3280 SCSI removable drive, your system may
	stop responding (hang).
	
	CAUSE
	=====
	
	This problem is probably caused by the DTC device driver, ASCSI.EXE.
	
	RESOLUTION
	==========
	
	If you have a DTC 3280 SCSI drive or this driver in your CONFIG.SYS file,
	contact DTC Technical Support.
	
	NOTE: If you have the DTC driver, GSCSI4, in your AUTOEXEC.BAT file, contact DTC
	for an upgrade at the number listed above or download the latest driver from the
	DTC bulletin board service at (408) 942-4010. The file you need to download is
	3280V14A.ZIP.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	and reliability.
	
	
	Additional query words: 6.00 Syquest Bernoulli double space 6.20 dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
