---
layout: page
title: "Q243085: Performance Problems with Shortcuts After Using SYSPREP"
permalink: kb/243/Q243085/
---

## Q243085: Performance Problems with Shortcuts After Using SYSPREP

	Article: Q243085
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you use the System Preparation Tool (SYSPREP) to clone a "master computer"
	and you double-click the shortcuts on the cloned computer, the associated
	programs may take a long time to start.
	
	CAUSE
	=====
	
	This issue can occur if the shortcut is resolving the path on the master
	computer and not on the cloned computer.
	
	This issue occurs because shortcuts you create on a computer automatically embed
	a Universal Naming Convention (UNC) path in the .lnk file. The default shortcut
	resolution method is to resolve the link to the original location of the file
	before it looks at another path where the file exists.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, make the following changes in the Windows registry before
	you run the System Preperation Tool.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Add the Explorer key to the following registry key if it does not exist:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Policies\
	
	3. Add the following value to the Explorer registry key:
	
	Value Name: LinkResolveIgnoreLinkInfo
	Data Type: REG_DWORD
	Data: 1 (enable)
	
	4. Click OK.
	
	5. restart the computer.
	
	For additional information about shortcuts, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q158682 Shortcuts Created Under Windows NT 4.0 Resolve to UNC Paths
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
