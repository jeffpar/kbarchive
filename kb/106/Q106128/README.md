---
layout: page
title: "Q106128: Backup Err Msg: Backup Requires Configuration for This..."
permalink: kb/106/Q106128/
---

## Q106128: Backup Err Msg: Backup Requires Configuration for This...

	Article: Q106128
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Starting Microsoft Backup for MS-DOS (MSBACKUP.EXE) opens the following
	configuration screen after an initial backup configuration has already been
	performed:
	
	  Backup requires configuration for this computer.
	
	CAUSE
	=====
	
	This message appears for one of three reasons:
	
	- This is the first time Backup has been run.
	
	- Backup cannot locate the MSBACKUP.INI file in the MS-DOS subdirectory.
	
	- The A and/or B drive(s) have been changed from high density to low density
	  (or vice versa).
	
	RESOLUTION
	==========
	
	To eliminate this error, perform the Backup configuration again.
	
	MORE INFORMATION
	================
	
	The first time you run Backup, you are required to perform a configuration
	setup. This creates the files MSBACKUP.INI, MSBACKUP.TMP, MSBACKUP.RST,
	MSBACKUP.LOG, DEFAULT.SET, DEFAULT.SLT, and DEFAULT.CAT in the MS-DOS
	directory.
	
	You must perform the configuration setup again if the MSBACKUP.INI file is
	removed from the MS-DOS directory or if the physical removable drive, A or B, is
	changed from high density to low density or vice-versa.
	
	Additional query words: 6.00 6.0 6.20 MSDOS MS-DOS ms DOS back-up back up error message err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
