---
layout: page
title: "Q99374: Problems When a Network Drive Is Mapped Over a DblSpace Drive"
permalink: /kb/099/Q99374/
---

## Q99374: Problems When a Network Drive Is Mapped Over a DblSpace Drive

	Article: Q99374
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following problems occur when a network drive is mapped over a drive letter
	reserved for use by DoubleSpace.
	
	- If a network drive is mapped over a host drive letter, the full- screen
	  DoubleSpace maintenance program changes the LastDrive= line in the
	  DBLSPACE.INI file. No error message is displayed.
	
	- You may receive the following error message when you choose DoubleSpace Info
	  from the Tools menu in File Manager:
	
	  DblSpace Error - There was a problem reading the information from this
	  compressed drive.
	
	- After you mount a removable disk and use the same drive letter for the host
	  drive and a network drive you can't access the network drive. (To work around
	  this problem, unmount the compressed disk.)
	
	NOTE: This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and
	filenames.
	
	Additional query words: 6.00 6.20 double space dblspace floppy diskette net stop use error 3 "specified path is invalid"
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
