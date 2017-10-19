---
layout: page
title: "Q103544: DIR /C Fails to Report File Compression Ratio"
permalink: /kb/103/Q103544/
---

## Q103544: DIR /C Fails to Report File Compression Ratio

	Article: Q103544
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	The DIR /C command does not report a compression ratio for a file if one of the
	following is true:
	
	- The Microsoft DoubleSpace FAT (MDFAT) is damaged.
	
	- The file is open in another Windows virtual machine (VM), and the MDFAT has
	  not been updated.
	
	- The file was created by Microsoft Backup (or Microsoft Backup for Windows).
	
	To work around this problem, check the file compression ratio in File Manager or
	run ScanDisk.
	
	NOTE: The fact that a file does not have a compression ratio does not affect the
	ability of DoubleSpace to calculate an actual compression ratio (ACR) for the
	whole drive.
	
	MORE INFORMATION
	================
	
	
	Additional query words: MWBackup 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
