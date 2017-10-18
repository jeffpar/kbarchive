---
layout: page
title: "Q104534: MS-DOS Setup Err Msg (CD-ROM System): Hard Disk Not Readable"
permalink: kb/104/Q104534/
---

## Q104534: MS-DOS Setup Err Msg (CD-ROM System): Hard Disk Not Readable

	Article: Q104534
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have an Adaptec 1542B SCSI disk, a SCSI CD-ROM drive, and ASPI4DOS.SYS is
	loaded when you install MS-DOS, you may receive the following error message:
	
	  Hard disk not readable
	
	CAUSE
	=====
	
	This problem occurs when Setup thinks the CD-ROM drive is the boot drive. This
	problem occurs when you have the CD-ROM drive and the SCSI drive set to #0 and
	#1, respectively.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Remove the disk from the CD-ROM drive, restart your computer, and run Setup.
	
	- Remove ASPI4DOS.SYS from the CONFIG.SYS file, restart your computer, run
	  Setup, put ASPI4DOS.SYS back in the CONFIG.SYS file, and then restart your
	  computer again.
	
	- Reconfigure the CD-ROM drive so it uses a SCSI ID other than 0 or 1.
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
