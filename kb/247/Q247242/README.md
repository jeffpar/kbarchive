---
layout: page
title: "Q247242: Error Messages Installing DNS on Microsoft Windows NT Server"
permalink: kb/247/Q247242/
---

## Q247242: Error Messages Installing DNS on Microsoft Windows NT Server

	Article: Q247242
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you are installing the Microsoft Domain Name System (DNS) services, you may
	receive one or both of the following error messages:
	
	  The registry subkey already exists.
	
	  No end points available from end point mapper.
	
	CAUSE
	=====
	
	This behavior can occur if you previously uninstalled DNS in Windows NT. The
	uninstall process may leave registry entries behind.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue:
	
	1. Right-click Network Neighborhood, and then click Properties.
	
	2. On the Services tab, click Microsoft DNS Server, and then click Remove.
	
	3. Use Windows NT Explorer to locate the %SystemRoot%\System32\DNS folder.
	  Rename the DNS folder. If you will later need to restore previously
	  configured zones, the contents of this folder are important.
	
	  NOTE: When you reinstall Microsoft DNS Server, the DNS folder is automatically
	  re-created.
	
	4. Use Registry Editor (Regedt32.exe) to delete the following following registry
	  keys if they still exist:
	
	  HKEY_LOCAL__MACHINE\System\CurrentContolSet\Services\DNS
	  HKEY_LOCAL _MACHINE\Software\Microsoft\DNS
	  HKEY_LOCAL _MACHINE\Software\Microsoft\DNS Administrator
	  HKEY_CURRENT_USER\Software\Microsoft\DNS Administrator
	
	5. Restart your server.
	
	6. Reinstall Microsoft DNS Server by clicking Start, pointing to Settings,
	  clicking Control Panel, double-clicking Network, and then clicking the
	  Services tab.
	
	7. Reinstall your current Windows NT 4.0 service pack before rebooting the
	  server.
	
	MORE INFORMATION
	================
	
	If you need to add previously configured zones:
	
	1. Copy the zone files back to the %SystemRoot%\System32\DNS folder from the
	  folder you renamed in step 3 in the "Resolution" section.
	
	2. Start DNS Manager and add your server by adding its IP address.
	
	3. Add your new zone and specify the zone file that you copied into the DNS
	  folder. This repopulates DNS Manager with the information in your zone files.
	
	Additional query words: dns
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTS400 kbWinNTSEnt400SP6a
	Version           : winnt:4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
