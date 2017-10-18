---
layout: page
title: "Q154061: SFM Fails to Bind to a Newly Installed Network Card"
permalink: kb/154/Q154061/
---

## Q154061: SFM Fails to Bind to a Newly Installed Network Card

	Article: Q154061
	Product(s): Microsoft Windows NT
	Version(s): 3.1; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Services for Macintosh (SFM) on a new installation, you need to
	specify a network adapter during the initial setup. If you install SFM without
	an adapter, you need to remove and then reinstall the service after the network
	adapter has been added.
	
	RESOLUTION
	==========
	
	For Services for Macintosh to bind to a newly installed network card, SFM must
	be removed and reinstalled.
	
	MORE INFORMATION
	================
	
	Steps to Remove Services for Macintosh
	--------------------------------------
	
	1. In Control Panel, double-click Network.
	
	2. In the Installed Network Software list, click Services for Macintosh.
	
	3. Click Remove, and then click Yes in the Network Settings dialog box.
	
	4. Restart the computer running Windows NT Server.
	
	After the computer restarts, reinstall Services for Macintosh.
	
	NOTE: If a Windows NT service pack has been applied, you will need to reapply it
	after reinstalling Services for Macintosh.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : :3.1; winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
