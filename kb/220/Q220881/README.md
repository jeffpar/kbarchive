---
layout: page
title: "Q220881: Repeated Logon Prompt in Windows NT 4.0"
permalink: /kb/220/Q220881/
---

## Q220881: Repeated Logon Prompt in Windows NT 4.0

{% raw %}

	Article: Q220881
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to log on to Windows NT 4.0, you may not be logged on. Instead,
	the logon prompt may be displayed again.
	
	CAUSE
	=====
	
	This behavior can be caused by an invalid registry entry.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, delete the registry value listed below.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE\SYSTEM subkey, go to the following key:
	
	  CurrentControlSet\Control\Session Manager\Environment
	
	3. Delete the following entry:
	
	  Value: <no name>
	  Type: REG_DWORD
	  Data: %systemroot%
	
	NOTE: You may need to gain access to this registry by first performing a parallel
	installation of Windows NT. For information about parallel installations, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q126690 Windows NT 4.0 Setup Troubleshooting Guide
	
	
	Additional query words: loop looping
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
