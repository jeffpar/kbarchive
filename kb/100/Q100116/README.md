---
layout: page
title: "Q100116: MS-DOS Applications That Use MSDOSDATA Environment Variable"
permalink: kb/100/Q100116/
---

## Q100116: MS-DOS Applications That Use MSDOSDATA Environment Variable

	Article: Q100116
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following MS-DOS programs use the MSDOSDATA environment variable to
	determine where to put their .INI files:
	
	  Microsoft Undelete
	  Microsoft Undelete for Windows
	  Microsoft Anti-Virus
	  Microsoft Backup
	
	If the MSDOSDATA environment variable is not set, the .INI file is created in the
	same directory as the .EXE file.
	
	MORE INFORMATION
	================
	
	Microsoft Backup for Windows
	----------------------------
	
	Microsoft Backup for Windows uses the WINDIR environment variable to determine
	where to place the MWBACKUP.INI file; however, all other files (DEFAULT.SET,
	catalog files, and so forth) go in the directory specified by MSDOSDATA, if that
	environment variable is set. If MSDOSDATA is not set, Microsoft Backup for
	Windows creates the MWBACKUP.INI file in the directory that contains the
	MWBACKUP.EXE file.
	
	Once the location of the files (other than the MWBACKUP.INI file) has been
	determined, the drive and directory path is saved in the MWBACKUP.INI file. This
	path is used to find the files in the future.
	
	
	Additional query words: 6.00 msav.exe mwav.exe mwbackup.exe 6.20 msbackup.exe "Cannot create the setup file" default.set
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
