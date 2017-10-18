---
layout: page
title: "Q124551: INFO: Configuring Parsing of the AUTOEXEC.BAT File"
permalink: kb/124/Q124551/
---

## Q124551: INFO: Configuring Parsing of the AUTOEXEC.BAT File

	Article: Q124551
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	Windows parses the AUTOEXEC.BAT file during startup by default, which
	results in the appending of the path statement in the AUTOEXEC.BAT file to
	the system path created by Windows.
	
	You can configure parsing of the AUTOEXEC.BAT file in the Registry by doing
	the following:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems that may require you to reinstall your operating system. Microsoft cannot guarantee that you can solve problems that result from using Registry Editor incorrectly. Use Registry Editor at your own risk.
	
	1. Run REGEDT32.EXE.
	
	2. Modify the following value within HKEY_CURRENT_USER:
	
	  Software\Microsoft\Windows NT\CurrentVersion\Winlogon\ParseAutoexec
	
	  1 = autoexec.bat is parsed
	  0 = autoexec.bat is not parsed
	
	This has no effect on the parsing of AUTOEXEC.NT or CONFIG.NT by the MS-DOS
	or 16-bit Windows environments (VDMs).
	
	NOTE: Support for configuring the parsing of the AUTOEXEC.BAT file is also
	provided via the REGKEY.EXE file included with the Windows NT 3.5 Resource
	Kit.
	
	SUMMARY
	=======
	
	
	
	Additional query words: Winlogon boot ParseAutoexec
	
	======================================================================
	Keywords          : kbOSWinNT350 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
