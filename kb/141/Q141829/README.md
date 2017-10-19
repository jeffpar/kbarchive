---
layout: page
title: "Q141829: PRB: Error Running Windows NT Cmd.exe in Windows 95"
permalink: /kb/141/Q141829/
---

## Q141829: PRB: Error Running Windows NT Cmd.exe in Windows 95

	Article: Q141829
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 | 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have Windows NT and Windows 95 on the same computer and run Cmd.exe in
	Windows 95, the following error message appears:
	
	  <unknown> caused an invalid page fault in module user.exe
	
	If you connect to a computer that's running Windows NT and run Cmd.exe in Windows
	95, the following error message appears:
	
	  The CMD.EXE file is linked to a missing export
	  KERNEL32.DLL:GetVDMCurrentDirectories
	
	CAUSE
	=====
	
	The Windows NT Cmd.exe program is not designed for Windows 95.
	
	WORKAROUND
	==========
	
	Use the Windows 95 MS-DOS Command Prompt (Command.com).
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: prodnt win95x
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : 3.5 3.51 | 4.0
	Issue type        : kbprb
	
	=============================================================================
	
