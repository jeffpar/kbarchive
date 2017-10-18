---
layout: page
title: "Q109119: Large File Copy Failures Using File Manager"
permalink: kb/109/Q109119/
---

## Q109119: Large File Copy Failures Using File Manager

	Article: Q109119
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you transfer files 20 megabytes (MB) or larger through File Manager, the
	transfer takes a long time, and in some cases the transfer fails.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Use stripe sets across multiple physical drivers, with NTFS on all drives, to the
	following:
	
	1. Create a share on the first stripe set (drive E) and name it TEST. Include a
	  28 MB text file called TEST.TXT.
	
	2. On the second drive (drive F), create a share called PUBLIC.
	
	3. Use the NET USE command to connect to both shares.
	
	4. From File Manager, select drive E, and then select the TEST.TXT file.
	
	5. From the File menu, choose Copy.
	
	6. In the Copy dialog box, enter "F:\" (without the quotation marks) in the To
	  field.
	
	7. From the server, open a command prompt and do a Dir on drive F. The TEST.TXT
	  file is in this directory with a size of 0 bytes.
	
	8. Open a second window on Server Manager. From the Properties menu, choose
	  Server, and then select In Use. The following four sessions are open between
	  the workstation and the server:
	
	  - A read from drive E
	  - A read from drive F
	  - A read from drive E
	  - A write to drive F
	
	It appears the Copy command is being carried out at this time. Disk activity
	stops on the server after approximately four minutes. The sessions are closed,
	if you quickly do a Dir from the command prompt, the file appears in the drive F
	directory, and the size is correct. Do a Dir again and the file is gone. On the
	workstation, from File Manager, a STOP sign appears, with the message saying the
	session was closed, and the copy command could not be carried out. If the same
	command is done from the command line, it is carried out fine:
	
	  C:\copy e:\test.txt f:\ 
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
