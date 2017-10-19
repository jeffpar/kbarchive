---
layout: page
title: "Q104889: DoubleSpace Doesn't Support Logical Drive B on Single Floppy"
permalink: /kb/104/Q104889/
---

## Q104889: DoubleSpace Doesn't Support Logical Drive B on Single Floppy

	Article: Q104889
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	DoubleSpace does not work correctly if you mount two DoubleSpace- compressed
	floppy disks on drive letters A and B if you only have one physical floppy disk
	drive.
	
	MORE INFORMATION
	================
	
	If you have one floppy disk drive (A) but can access it as A or B, you will
	encounter problems with DoubleSpace if you manually mount a
	DoubleSpace-compressed floppy disk on both drives A and B.
	
	NOTE: The DoubleSpace Automount code disables itself for logical drive B if you
	have only one floppy disk drive.
	
	To avoid this problem, do not use the logical drive B to manually mount a
	DoubleSpace-compressed floppy disk.
	
	Additional query words: 6.20 phantom auto-mount for insert diskette
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
