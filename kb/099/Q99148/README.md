---
layout: page
title: "Q99148: Microsoft Anti-Virus CHKLIST.MS Files Explained"
permalink: /kb/099/Q99148/
---

## Q99148: Microsoft Anti-Virus CHKLIST.MS Files Explained

	Article: Q99148
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Anti-Virus for MS-DOS (MSAV.EXE) and Microsoft Anti-Virus for Windows
	(MWAV.EXE) create CHKLIST.MS files in most, if not all, of your directories.
	
	MORE INFORMATION
	================
	
	CHKLIST.MS is a "checksum" file. A checksum is an error-detection scheme that
	involves creating a sum of the bits in a set of bytes of data and using that sum
	to later check for a change in the data. Checksums are commonly used in
	communications software to check for data transmission errors.
	
	In the case of Microsoft Anti-Virus, the CHKLIST file contains checksums for
	certain files in the directory containing the CHKLIST file. The checksums are
	based on the data contained in each file. The checksum is stored along with each
	file's size, attributes, date, and time. This information is used by Microsoft
	Anti-Virus during the Detect phase to check for changes to the files in the
	directory.
	
	The files are created (and updated) by Microsoft Anti-Virus during the Detect or
	Detect And Clean scanning process if the Create New Checksums option is selected
	in the Options dialog box.
	
	Checksums are created for files with the following extensions:
	
	  386
	  APP
	  BIN
	  CMD
	  COM
	  DLL
	  DRV
	  EXE
	  FON
	  OV*
	  PGM
	  PRG
	  SYS
	
	Deleting the CHKLIST.MS Files
	-----------------------------
	
	The CHKLIST files can be deleted. To do this, press F7 in Microsoft Anti-Virus
	for MS-DOS or choose Delete CHKLIST Files from the Scan menu in Microsoft
	Anti-Virus for Windows.
	
	If you disable the use of the CHKLIST.MS files, Microsoft Anti-Virus does not
	check for unexpected changes in files. (It can scan files for known virus
	signatures only.)
	
	Additional query words: 6.22 6.00 subdirectory sub-directory 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
