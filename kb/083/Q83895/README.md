---
layout: page
title: "Q83895: Files Left Open Using CALL Command on .EXE File"
permalink: kb/083/Q83895/
---

## Q83895: Files Left Open Using CALL Command on .EXE File

	Article: Q83895
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the CALL command in a batch file to execute an .EXE file and use
	appending redirection (>>) to save the output to a report file, files
	remain open for the number of times the redirection is used.
	
	WORKAROUND
	==========
	
	Remove the CALL command from the batch file. The CALL command should only be
	used in batch files as described on page 377 of the "Microsoft MS-DOS User's
	Guide and Reference" for version 5.0, and MS-DOS online help for versions 6.0
	and 6.2.
	
	MORE INFORMATION
	================
	
	The above has been verified using Quarterdeck Manifest version 1.1.
	
	The following example batch file and steps demonstrate the problem:
	
	1. Create a TEST.BAT file (substitute your Quarterdeck directory for C:\QDECK):
	
	     ECHO **MANIFEST REPORT FILE**   >  C:\QDECK\REPORT.DAT
	     CALL C:\QDECK\MFT S O           >> C:\QDECK\REPORT.DAT
	     CALL C:\QDECK\MFT S C           >> C:\QDECK\REPORT.DAT
	     ECHO **END OF REPORT FILE**     >> C:\QDECK\REPORT.DAT
	
	2. Execute Manifest MFT.EXE and check number of files open under the DOS
	  section.
	
	3. Run TEST.BAT.
	
	4. Execute Manifest MFT.EXE and check number of files left open after the batch
	  file has run.
	
	There should be two more files left open (both REPORT.DAT) in step 4 than were in
	step 2. Adding more (CALL C:\QDECK\MFT >>) to the batch file or running
	the TEST.BAT file again will cause more files to be left open. To close the open
	file handles, you will have to restart your system.
	
	Additional query words: 6.22 msdos 5.00 5.00a 6.00 6.20 files open mft sharing violation call
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
