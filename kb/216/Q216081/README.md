---
layout: page
title: "Q216081: Installing C2 Security Configuration Manager on Terminal Server"
permalink: /kb/216/Q216081/
---

## Q216081: Installing C2 Security Configuration Manager on Terminal Server

	Article: Q216081
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install the C2 Security Configuration Manager on Windows
	Terminal Server, you may encounter one of the following error messages:
	
	  ERROR: Couldn't find file: c2ntflow.inf Exiting.
	
	  ERROR: Couldn't find file: c2ntfmed.inf Exiting.
	
	  ERROR: Couldn't find file: c2ntfhi.inf Exiting.
	
	RESOLUTION
	==========
	
	To install the C2 Security Configuration Manager on Windows Terminal Server,
	perform the following steps:
	
	1. Copy all files from the Support\Sectool\I386 or ALPHA directory from the
	  Terminal Server compact disc to the %SystemRoot%\System32 directory on the
	  Terminal Server computer.
	
	2. Select all C2*.* files in the System32 folder, right-click the selected
	  files, click Properties, click to remove the Read Only attribute, and then
	  click OK.
	
	3. Right-click the C2config.inf file and click Edit. Change [C2 Security Items]
	  to [Security Items] and save the file.
	
	C2 Security Configuration Manager should now run successfully.
	
	Additional query words: terminsrv C2 install
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
