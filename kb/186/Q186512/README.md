---
layout: page
title: "Q186512: DEC Teamlinks Installation Notes"
permalink: /kb/186/Q186512/
---

## Q186512: DEC Teamlinks Installation Notes

	Article: Q186512
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	All users need to have a fixed home directory and a drive letter assigned to
	that directory.
	
	Create a directory called TeamLink in each user's home directory. Users should
	already have a WINDOWS subdirectory in their home directory. If not, create
	one.
	
	Install TeamLinks (these notes are based on version 2.7) using the CHANGE USER
	/INSTALL method or the Add/Remove Programs Control Panel tool.
	
	NOTE: If you run the CHANGE USER /INSTALL command before installing, be sure to
	run the CHANGE USER /EXECUTE command after installing.
	
	MORE INFORMATION
	================
	
	A file called Tlcvtvu.ini will be created in the SystemRoot. This file will need
	to be modified for each user. Check this file for correct user
	settings/directories. Copy this file to the WINDOWS subdirectory of the user's
	home directory.
	
	Another file called Office.ini will also be created in the SystemRoot. It too
	will need to be modified for each user. The file should contain the correct user
	logon name and a path to the user's .PAB file (for example,
	F:\Teamlink\A1mailpb.dat, where f: is the drive assigned to the user home
	directory).
	
	Create an empty file called A1mailpb.dat in the TEAMLINK subdirectory of the
	user's home directory.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
