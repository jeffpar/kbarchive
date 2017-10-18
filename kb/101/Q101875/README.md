---
layout: page
title: "Q101875: How to Enable ANSI.SYS in a Command Window"
permalink: kb/101/Q101875/
---

## Q101875: How to Enable ANSI.SYS in a Command Window

	Article: Q101875
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ANSI.SYS can be loaded and used from the command prompt, with the restriction
	that it can run only in the context of the MS-DOS subsystem. Windows NT does not
	support ANSI escape sequences in Win32 Console applications. To load ANSI.SYS,
	add "device=c:\winnt\system32\ansi.sys" to the CONFIG.NT file in the Windows NT
	SYSTEM32 directory.
	
	MORE INFORMATION
	================
	
	Once ANSI.SYS is loaded, you can use any MS-DOS-based program that makes use of
	this driver. However, if you want to use ANSI.SYS to change the look of the
	command prompt, you may have to perform some additional steps.
	
	For example, to highlight the prompt in MS-DOS command prompt, you must add
	"dosonly" to your CONFIG.NT file, and run COMMAND (not CMD) from MS-DOS Command
	Prompt. You can then run a batch file that includes the PROMPT command with ANSI
	escape sequences to highlight the prompt.
	
	NOTE: While this gives the command prompt the same appearance as an MS-DOS
	prompt, you are now in a DOS-based command prompt, and you can no longer start
	non-DOS programs from the command line.
	
	ANSI.SYS, being an MS-DOS-based device driver, can be used only in the context of
	the MS-DOS subsystem.
	
	VT52.SYS may be used in the same manner as ANSI.SYS, with the same restrictions.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.1,3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
