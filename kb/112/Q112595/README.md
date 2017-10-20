---
layout: page
title: "Q112595: Service Control Manager Event 7024 (2550)"
permalink: /kb/112/Q112595/
---

## Q112595: Service Control Manager Event 7024 (2550)

{% raw %}

	Article: Q112595
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.1,3.5,3.51,4.0; :3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start your computer, the following message appears:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	Event Viewer shows a Service Control Manager event number 7024. This is explained
	by the following:
	
	  The Computer Browser service terminated with service-specific error 2550.
	
	You can obtain further information by using the NET HELPMSG command. Error
	message 2550 is explained by the following:
	
	  The browser services was configured with MaintainServerList=No.
	
	CAUSE
	=====
	
	This error is the result of setting MaintainServerList=No in the registry while
	still having the Computer Browser service active.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To avoid this error, do one of the following:
	
	- Stop the Computer Browser service, using the Services tool in Control Panel.
	
	  -or-
	
	- Use the Registry Editor to change the MaintainServerList as described below:
	
	  1. Run Registry Editor (Regedt32.exe).
	
	  2. In the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  SYSTEM\CurrentControlSet\Services\Browser\Parameters\MaintainServerList
	
	  3. Change MaintainServerList to either Auto or Yes.
	
	  4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	In Windows 2000, to view the Services applet, click Start, click Programs, and
	then click Administrative Tools.
	
	Additional query words: prodnt err msg
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbwin2000ServSearch kbwin2000Search kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WINDOWS:2000; winnt:3.1,3.5,3.51,4.0; :3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
