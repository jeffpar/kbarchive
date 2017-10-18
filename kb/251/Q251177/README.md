---
layout: page
title: "Q251177: XADM: Error Message: You Must Be Logged Into an NT Domain to..."
permalink: kb/251/Q251177/
---

## Q251177: XADM: Error Message: You Must Be Logged Into an NT Domain to...

	Article: Q251177
	Product(s): Microsoft Exchange
	Version(s): 5.5; WINDOWS:2000
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	While you are attempting to install Microsoft Exchange Server on a Windows 2000
	Server-based computer, you may receive the following error message:
	
	  You must be logged into an NT domain to run Microsoft Exchange Server Setup.
	
	This error can also occur if you are installing a new service pack through a
	terminal server session on a member server in a NT domain.
	
	WORKAROUND
	==========
	
	To attempt to work around this behavior:
	
	- Ensure that you are logged on to the server with a domain account, not a
	  local account.
	
	- If this does not correct the behavior, check the following registry key:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  1. Start Registry Editor (Regedt32.exe).
	
	  2. Locate the DefaultDomainName value under the following key in the
	     registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Winlogon
	
	  3. If DefaultDomainName is set to the local computer name, change it to the
	     domain name that the computer account is in, and then try to install
	     Exchange Server again.
	
	  4. Quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: fail failed
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOSWin2000 kbOSWinSearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5; WINDOWS:2000
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
