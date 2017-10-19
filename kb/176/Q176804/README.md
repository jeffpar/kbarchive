---
layout: page
title: "Q176804: Getdrive.exe: How To List the Drives on a Win32 System"
permalink: /kb/176/Q176804/
---

## Q176804: Getdrive.exe: How To List the Drives on a Win32 System

	Article: Q176804
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbsample kbnokeyword kbvfp300 kbvfp500 kbvfp600 kbDSupport
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This code example uses Windows Application Programming Interface (API) functions
	to return information on the drives installed or mapped to the local computer.
	These drives include both CD-ROM devices and network hard drives.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Getdrive.exe
	  (http://download.microsoft.com/download/vfox60/sample18/1/WIN98/EN-US/Getdrive.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	This code example provides information about the drives installed and mapped to
	a given computer, including CD-ROM drives. The following information about each
	individual drive appears within a window created by the MessageBox() function:
	
	- Drive letter
	
	- Drive type
	
	- Volume name
	
	- Volume
	
	- Serial number
	
	- Maximum file name length
	
	- File system flags
	
	- File system name
	
	The program also provides specific physical information about the drive, such as
	sectors/clusters, bytes/sector, free clusters, and total clusters.
	
	To run the program, type the following command in the Visual FoxPro Command
	window:
	
	       DO GetDrive.prg
	
	Additional query words: Getdrive API drives
	
	======================================================================
	Keywords          : kbcode kbfile kbsample kbnokeyword kbvfp300 kbvfp500 kbvfp600 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
