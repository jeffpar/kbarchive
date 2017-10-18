---
layout: page
title: "Q240140: Incorrect Domain Logon List After Moving Users to New Domain"
permalink: kb/240/Q240140/
---

## Q240140: Incorrect Domain Logon List After Moving Users to New Domain

	Article: Q240140
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you move multiple users to a new account domain, some of the users may not
	be able to view the list of available domains when they attempt to log on to the
	new assigned domain.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, delete the registry keys that cache the outdated domain
	list:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Dcache value in the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Winlogon
	
	3. Click the Dcache value, press DELETE, and then click Yes.
	
	4. Click the DcacheUpdate value, press DELETE, and then click Yes.
	
	5. Quit Registry Editor.
	
	6. Restart the computer to rebuild the cached domain list with the new assigned
	  domain.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
