---
layout: page
title: "Q184408: How to Replace In-Use Windows NT System Files"
permalink: kb/184/Q184408/
---

## Q184408: How to Replace In-Use Windows NT System Files

	Article: Q184408
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to replace system files that are in use by using the
	Mv.exe tool included with the Windows NT 4.0 Resource Kit.
	
	MORE INFORMATION
	================
	
	The Mv.exe tool is a 32-bit version of the POSIX MV tool. Mv.exe has the
	following syntax:
	
	  mv [/x [/d]] <file1> [<file2> ...] <target>
	
	The command-line switches are:
	
	/x: Do not save files that are replaced.
	
	/d: Delay file move until system reboot.
	
	For example, to replace the Url.dll file in the Winnt\System32 folder with the
	Url.dll file located in the Temp folder at the next reboot without saving the
	replaced file, type the following line:
	
	  mv.exe /x /d c:\temp\url.dll c:\winnt\system32\url.dll
	
	There are two versions of Mv.exe in the Windows NT Resource Kit, a 32-bit
	Windows-based version and a Posix version. The correct version to use in this
	instance, the Windows version, is located on the Windows NT Resource Kit CD-ROM
	in the <platform>\filebat\mv.exe folder.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q228930 How to Replace Currently Locked Files with Inuse.exe
	
	Additional query words: busy access denied
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
