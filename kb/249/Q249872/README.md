---
layout: page
title: "Q249872: Cannot Remotely Edit Windows 95/98 Registry with Regedit/Poledit"
permalink: /kb/249/Q249872/
---

## Q249872: Cannot Remotely Edit Windows 95/98 Registry with Regedit/Poledit

	Article: Q249872
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv win95 win98
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to use Regedit or Poledit from a Windows NT-based computer to
	remotely edit the registry on a Windows 95-based or Windows 98-based computer
	running the Remote Registry service.
	
	CAUSE
	=====
	
	If you perform a network trace of the problem, you can see that Regedit and
	Poledit do not send a name query for the computer name with the correct NetBIOS
	suffix appended.
	
	RESOLUTION
	==========
	
	To work around this behavior, use Regedt32.exe instead of other registry tools.
	
	MORE INFORMATION
	================
	
	Regedt32 initially tries to resolve the name without the suffix but if that
	action is unsuccessful, Regedt32 tries again with the correct name. For example,
	if you try to connect to a computer called Test98, the following names are
	attempted:
	
	- Regedit or Poledit only attempt Test98.
	
	- Regedt32 attempts Test98 and then Test98 <00>.
	
	
	Additional query words: win98 remote registry regedt32
	
	======================================================================
	Keywords          : kbenv win95 win98 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
