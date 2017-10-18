---
layout: page
title: "Q104535: DoubleSpace Maintenance Program Does Not Display All Drives"
permalink: kb/104/Q104535/
---

## Q104535: DoubleSpace Maintenance Program Does Not Display All Drives

	Article: Q104535
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	When you compress an existing drive or create a new compressed drive using the
	DoubleSpace maintenance program, some of your drives may not appear in the list
	of available drives.
	
	CAUSE
	=====
	
	The DoubleSpace maintenance program does not display drives that do not have
	sufficient free space to be compressed.
	
	RESOLUTION
	==========
	
	To work around this problem, ensure the disk you want to compress has enough
	free disk space. To determine how much space is required, refer to the following
	table:
	
	  Disk Type                                     Free Space Required
	  ---------                                     -------------------
	
	  Non-Boot Disk (compressed from command line)        1.13 MB
	  Non-Boot Disk (compressed from                      1.13 MB
	                 DoubleSpace Manager)
	  Boot Disk (compressed from command line)            1.45 MB
	  Boot Disk (compressed from command line)            1.63 MB
	  Floppy Disk                                         1.10 MB
	
	NOTE: MS-DOS 6.2 Help contains incorrect numbers for free space required if you
	are attempting to compress a boot disk.
	
	For more information, type "help dblspace /compress" (without the quotation
	marks) at the MS-DOS command prompt and then press ENTER.
	
	Additional query words: 6.20 docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
