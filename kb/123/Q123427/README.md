---
layout: page
title: "Q123427: Use FIXPROJ.EXE to Fix Project Errors in SourceSafe"
permalink: /kb/123/Q123427/
---

## Q123427: Use FIXPROJ.EXE to Fix Project Errors in SourceSafe

	Article: Q123427
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbpatch kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use Fixproj.exe to fix a variety of project errors, such as:
	
	- File Not Found: <filename.a or b>, where the file is a project log
	  file.
	
	- Error reading PRJ INT entry: <num> of 38 bytes read
	
	- Error in project file
	
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Fixproj.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	When you have the self-extracting file (Fixproj.exe), run it in an empty
	directory to obtain the Fixproj.exe file it contains. Fixproj.exe is compiled to
	run under MS-DOS.
	
	MORE INFORMATION
	================
	
	
	Use the following commands to fix the project file:
	
	1. Copy the database file to the directory containing Fixproj.exe.
	
	  For example, if the error "Cannot find file: xcgaaaaa.a" occurs, copy the file
	  DATA\X\XCGAAAAA (with no extension).
	
	  NOTE: The default location of the DATA directory is a subdirectory of the
	  SourceSafe directory. The SourceSafe administrator can move this location,
	  however. Please consult your local administrator if you have any questions
	  concerning the location of the SourceSafe DATA directory.
	
	2. Execute the following command:
	
	  FIXPROJ <filename> <path to data directory>
	
	  For example:
	
	  FIXPROJ xcgaaaaa f:\ss\data
	
	3. When successfully completed, a NEWPRJ.OUT file will exist in the current
	  directory. Copy this file to the missing/damaged database file's location.
	
	  For example:
	
	  COPY NEWPRJ.OUT f:\ss\data\x\xcgaaaaa.a
	
	  If the file NEWPRJ.OUT does not exist, contact Microsoft SourceSafe technical
	  support.
	
	Additional query words: 3.0x
	
	======================================================================
	Keywords          : kbfile kbpatch kbtool 
	Solution Type     : kbfix
	
	=============================================================================
	
