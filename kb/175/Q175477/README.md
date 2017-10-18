---
layout: page
title: "Q175477: Batch Files Run from Within Other Folders May Fail"
permalink: kb/175/Q175477/
---

## Q175477: Batch Files Run from Within Other Folders May Fail

	Article: Q175477
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a batch file from a different folder that contains non- alphabetic
	characters, you will receive the following error message:
	
	  The name specified is not recognized as an internal or external command,
	  operable program or batch file.
	
	Steps to reproduce the problem:
	
	1. Create a folder named test(2) off your root directory.
	
	2. Create a batch file in the test(2) folder called test.bat.
	
	3. Insert the following lines in test.bat:
	
	        echo off
	        pause
	
	4. Save test.bat.
	
	5. From the root directory at a command prompt, run the batch file with the
	  following line:
	
	  \test(2)\test.bat
	
	Notice the error message received:
	
	  The name specified is not recognized as an internal or external command,
	  operable program or batch file.
	
	WORKAROUND
	==========
	
	Although the batch file does not run from the root directory, the command will
	run if you enclose the command line within quotes. For example, for the above
	situation, a user should enter the following line in a command prompt:
	
	  "\test(2)\test.bat"
	
	This command will run the batch file normally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: program
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	
	=============================================================================
	
