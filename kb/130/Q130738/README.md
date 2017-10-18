---
layout: page
title: "Q130738: Persistent NetWare Connections Unavailable After Upgrading"
permalink: kb/130/Q130738/
---

## Q130738: Persistent NetWare Connections Unavailable After Upgrading

	Article: Q130738
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT version 3.51, persistent NetWare connections are
	not available in File Manager. When you run NET USE from an MS-DOS Command
	Prompt, the NetWare connections appear as Unavailable.
	
	CAUSE
	=====
	
	When you use Gateway Service for NetWare (GSNW) or Client Service for NetWare
	(CSNW) in Windows NT version 3.5, the provider name for the NetWare network is
	NetWare Network. In Windows NT version 3.51, the NetWare network provider name
	has changed to NetWare Or Compatible Network. The provider name is stored in the
	user profile which precludes us from making the needed changes to allow the
	connections to carry over to the new version.
	
	RESOLUTION
	==========
	
	To correct this problem, remove the previous persistent connections and
	re-establish the connections again in Windows NT version 3.51.
	
	
	Additional query words: prodnt gray grayed out dimmed
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
