---
layout: page
title: "Q141830: NT Backup Cannot Back Up Microsoft Exchange Server"
permalink: /kb/141/Q141830/
---

## Q141830: NT Backup Cannot Back Up Microsoft Exchange Server

	Article: Q141830
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT server acting as a centralized backup server is unable to back up a
	Microsoft Exchange mail server in the Microsoft Exchange mail database
	(Information Store and Directory) format if the server is not a Microsoft
	Exchange mail server. This occurs using either the current Windows NT backup
	utility or Arcada's NTBackup software.
	
	CAUSE
	=====
	
	A Windows NT Server that is not running as a Microsoft Exchange mail server does
	not have the three required DLL files that are new in Microsoft Exchange Mail
	Server and the current NTBackup.exe cannot use these new DLLs.
	
	Currently, NT Backup has no capability to distinguish a Microsoft Exchange mail
	server from other computers and so cannot back up a Microsoft Exchange mail
	server's files in the Microsoft Exchange Mail Server Database (Information Store
	and Directory) format.
	
	RESOLUTION
	==========
	
	To allow NT Backup to recognize and back up Microsoft Exchange mail servers,
	close any opened backup window and do one of the following:
	
	- If you are copying files from an existing Exchange RC1 Mail Server:
	
	  1. Rename or delete the current WINNT-WINNT-ROOT\SYSTEM32\NTBACKUP.EXE from
	     the NT Backup Server.
	
	  2. Copy Winnt-Winnt-Root\System32\NTBackup.exe, Edbbcli.dll, and Msvcrt40.dll
	     from a Microsoft Exchange mail server to the Winnt- Root\System32
	     subdirectory of the Windows NT backup server.
	
	  3. Copy Exchsrvr\Bin\Edbback.dll from the Microsoft Exchange mail server to
	     the Winnt-Root\System32 subdirectory of the Windows NT backup server.
	
	-or-
	
	- If you are copying files from Exchange RC1 Mail Server CD-ROM:
	
	  1. Rename or delete the current Winnt-Winnt-Root\System32\NTBackup.exe of the
	     Windows NT backup Server.
	
	  2. Copy NTBackup.exe, Edbbcli.dll, Edbback.dll and Msvcrt40.dll files in
	     Setup\I386 (or MIPS or Alpha) on the Exchange Mail Server CD-ROM to the
	     Winnt-Root\System32 subdirectory of the Windows NT backup server.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
