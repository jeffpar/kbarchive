---
layout: page
title: "Q104948: Comprehensive List of MS-DOS 6.2 Documentation Errors"
permalink: kb/104/Q104948/
---

## Q104948: Comprehensive List of MS-DOS 6.2 Documentation Errors

	Article: Q104948
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and file names.
	
	This article contains information on the documentation errors in MS-DOS Help, the
	README.TXT file, SMARTDrive Monitor, and ScanDisk.
	
	
	The following topics are covered:
	
	MS-DOS Help Errors
	------------------
	
	- ScanDisk Notes Not Specific About "MS-DOS Boot Sector"
	
	- DBLSPACE /HOST Help is Difficult to Locate
	
	- Incorrect Information of Space Required to Compress
	
	MS-DOS README.TXT Errors
	------------------------
	
	- Section 3.1 Your Computer Uses a Windows 3.0 Permanent Swap File
	
	Microsoft Backup
	----------------
	
	- Microsoft Backup Reports Version 6.0
	
	SMARTDrive Monitor
	------------------
	
	- SMARTDrive Monitor Help Refers to SMARTDrive Version 4.0
	
	ScanDisk
	--------
	
	- SCANDISK /FRAGMENT Displays Incorrect Error Message
	
	MS-DOS Help Errors
	------------------
	
	ScanDisk Notes Not Specific About "MS-DOS Boot Sector"
	------------------------------------------------------
	
	The ScanDisk Notes section lists the types of problems that can be detected and
	fixed by ScanDisk. The list contains an entry for "MS-DOS boot sector."
	
	Problems with the MS-DOS boot sector can be detected and fixed on
	DoubleSpace-compressed drives only.
	
	DBLSPACE /HOST Help is Difficult to Locate
	------------------------------------------
	
	The DBLSPACE/ HOST command, which is used to change the host designation, is not
	listed under Help DblSpace, and incorrectly listed under Dblspace /?.
	
	Help for this command is correctly listed and available if you type
	
	  " help dblspace /host " (without the quotation marks)
	
	The correct command format is
	
	  dblspace drive1: /host=drive2
	
	Incorrect Information of Space Required to Compress
	---------------------------------------------------
	
	The Dblspace Compress section of MS-DOS Help does not correctly indicate how much
	space is required to compress a boot drive. For more information, query on the
	following words in the Microsoft Knowledge Base:
	
	  " compress and existing and boot and drive and sufficient " (without the
	  quotation marks)
	
	MS-DOS README.TXT Errors
	------------------------
	
	Section 3.1 Your Computer Uses a Windows 3.0 Permanent Swap File
	----------------------------------------------------------------
	
	Step 2 of section 3.1 states the following:
	
	Type the following at the command prompt:
	
	  " SPATCH [DRIVE]:[PATH]SWAPFILE.EXE " (without the quotation marks)
	
	For the DRIVE and PATH parameters, specify the location of your SWAPFILE.EXE
	file.
	
	Using this syntax results in the following error message:
	
	  Cannot find SWAPFILE.EXE in your WINDOWS\SYSTEM subdirectory.
	
	The correct syntax is:
	
	  SPATCH [DRIVE]:[PATH]
	
	For the DRIVE and PATH parameters, specify the location of your Windows
	directory. For example:
	
	  SPATCH C:\WINDOWS
	
	Microsoft Backup
	----------------
	
	Microsoft Backup Reports Version 6.0
	------------------------------------
	
	Microsoft Backup for Windows and Microsoft Backup (MS-DOS-based version) in
	MS-DOS 6.2 reports the version number as 6.0. The incorrect version number is
	displayed in the startup dialog box (Reading Directories) and the About dialog
	boxes.
	
	Microsoft Backup was not updated for MS-DOS version 6.2. For MS-DOS 6.21,
	compression code was removed. For MS-DOS 6.22, new compression code was added.
	
	ScanDisk
	--------
	
	SCANDISK /FRAGMENT Displays Incorrect Error Message
	---------------------------------------------------
	
	SCANDISK /FRAGMENT displays:
	
	  You specified too many parameters: X:",
	
	where X is the default drive letter. The correct command syntax is:
	
	  SCANDISK /FRAGMENT fname
	
	The error message should read "Missing parameter."
	
	SMARTDrive Monitor
	------------------
	
	SMARTDrive Monitor Help incorrectly refers to SMARTDrive version 4.0; it should
	refer to SMARTDrive version 5.0.
	
	NOTE: VSAFE Help, Microsoft Anti-Virus Help, and Defrag Help contain the same
	documentation errors as the MS-DOS 6.0 version. For more information on these
	documentation errors, query on the following words in the Microsoft Knowledge
	Base:
	
	  " comprehensive and ms-dos and docerr and 6.00 " (without the quotation
	  marks)
	
	Additional query words: 6.22 6.20 6.0 6.2 doc err docerr comprehensive
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
