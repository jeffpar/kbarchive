---
layout: page
title: "Q171779: Enabling User Profile Editor On a Windows NT 3.51 Workstation"
permalink: /kb/171/Q171779/
---

## Q171779: Enabling User Profile Editor On a Windows NT 3.51 Workstation

	Article: Q171779
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install the User Profile Editor (Upedit.exe) on a
	computer running Windows NT 3.51 Workstation rather than on the server.
	
	MORE INFORMATION
	================
	
	Expand the following files from the Windows NT Server 3.51 CD into the
	%SystemRoot%\System32 subdirectory of the Windows NT Workstation:
	
	  Upedit.ex_ (Upedit.exe)
	  Upedit.hl_ (Upedit.hlp)
	  Upedit.cn_ (Upedit.cnt)
	  Upedit.ft_ (Upedit.fts)
	
	The format of the expand command is:
	
	  EXPAND <source-filename> <destination-filename>
	
	For example:
	
	  EXPAND D:\I386\UPEDIT.EX_ %SYSTEMROOT%\SYSTEM32\UPEDIT.EXE
	
	After you expand the four files, create an icon in Program Manager for the User
	Profile Editor pointing to the executable file. For example,
	
	  %SystemRoot%\System32\Upedit.exe
	
	Additional query words: roaming mandatory
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	
	=============================================================================
	
