---
layout: page
title: "Q259736: Partial RPC Entries May Cause Netlogon Error Messages"
permalink: /kb/259/Q259736/
---

## Q259736: Partial RPC Entries May Cause Netlogon Error Messages

{% raw %}

	Article: Q259736
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 06-AUG-2002
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you attempt to log on to the
	domain from a computer running Windows NT 4.0 Workstation:
	
	  The system could not log you on to this domain because the system's computer
	  account in its primary domain is missing or the password on that account is
	  incorrect.
	
	Resetting the machine account does not correct this problem.
	
	CAUSE
	=====
	
	This behavior can occur because of problems with the remote procedure call (RPC)
	registry information.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, make sure the registry key is correct:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\RPC\SecurityService
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: 68
	  Data Type: REG_SZ
	  Value: netlogon.dll
	
	4. Quit Registry Editor.
	
	5. Restart the computer.
	
	MORE INFORMATION
	================
	
	The following error messages may be displayed in the event log:
	
	  Event Type: Error
	  Event Source: NETLOGON
	  Event Category: None
	  Event ID: 3224
	  Description:
	  Changing machine account password for account <computername>;$ failed
	  with the following error: The authentication service is unknown.
	
	  Event Type: Error
	  Event Source: NETLOGON
	  Event Category: None
	  Event ID: 3210
	  Description:
	  Failed to authenticate with \\<domaincontroller>, a Windows NT domain
	  controller for domain <domainname>.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
