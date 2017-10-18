---
layout: page
title: "Q162617: How to Install Windows NT from Multiple Distribution Sources"
permalink: kb/162/Q162617/
---

## Q162617: How to Install Windows NT from Multiple Distribution Sources

	Article: Q162617
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Winnt32.exe program to install or upgrade to Windows NT version
	4.0, you can use multiple distribution servers as sources to copy files from.
	
	MORE INFORMATION
	================
	
	In some cases, you may want to specify multiple source servers for the program
	to copy files from when you are installing or upgrading to Windows NT 4.0. You
	can use up to ten different distribution servers at the same time. Using
	multiple distribution servers may decrease the amount of time required to copy
	the distribution files, because multiple sources can contribute. You can also
	specify a local path as a source path.
	
	If a connection cannot be established at the start of the file copy, the source
	will not be considered for the operation. To begin the file copy operation, you
	must have at least one available distribution source. However, if a source
	becomes unavailable during the file copy, errors may occur.
	
	The following command shows how to pull distribution files from three other
	servers and the local CD-ROM drive (for a total of four sources):
	
	WINNT32 /B /S:\\Srv1\i386 /S:\\Srv2\I386 /S:\\Srv3\I386 /S:F:\i386
	
	Additional query words: prodnt winnt
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
