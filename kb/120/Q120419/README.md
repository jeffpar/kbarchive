---
layout: page
title: "Q120419: IBM Token Ring II EISA Card Not Supported"
permalink: kb/120/Q120419/
---

## Q120419: IBM Token Ring II EISA Card Not Supported

	Article: Q120419
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbhw kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The IBM Token Ring II EISA card is not supported in the final release of Windows
	NT Workstation and Windows NT Server version 3.5, although it was supported in
	the beta versions.
	
	NOTE: It was also not supported by Windows NT 3.1.
	
	MORE INFORMATION
	================
	
	When you install the final release of Windows NT 3.5, you will not see a
	selection for the IBM Token Ring II EISA card. You must install a different
	network adapter.
	
	If a driver for this card was part of a beta installation, and you install the
	final release as an upgrade, the card may continue to work using the beta
	driver, but this configuration is not supported.
	
	NOTE: This does NOT affect the IBM Token Ring II ISA card or the IBM Token Ring
	16/4 card, both of which are supported.
	
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
