---
layout: page
title: "Q120829: XCOPY May Generate Incorrect Error Level"
permalink: /kb/120/Q120829/
---

## Q120829: XCOPY May Generate Incorrect Error Level

	Article: Q120829
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the XCOPY command to copy a group of files and the parameters you
	specify result in a File Not Found error message, the error level is incorrectly
	set to 0. The correct error level (1) is returned when you issue the same
	command on computer running Windows 95.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Windows NT help file correctly states the error level is 1 if you receive a
	File Not Found error message.
	
	  Xcopy exit codes
	
	The following list shows each exit code and a brief description of its meaning:
	
	  0 Files were copied without error.
	  2 The user pressed CTRL+C to terminate xcopy.
	  4 Initialisation error occurred. There is not enough memory or disk space, or
	  you entered an invalid drive name or invalid syntax on the command line.
	  5 Disk write error occurred.
	
	
	Additional query words: prodnt 4.00 docerr
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
