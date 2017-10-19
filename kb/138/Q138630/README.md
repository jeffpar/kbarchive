---
layout: page
title: "Q138630: PRB: AMD PCNET Family Ethernet Adapter Cannot Be Installed Unatt"
permalink: /kb/138/Q138630/
---

## Q138630: PRB: AMD PCNET Family Ethernet Adapter Cannot Be Installed Unatt

	Article: Q138630
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbOPK kbSBK
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although you are performing an unattended setup of Windows NT 4.0, a dialog box
	appears requesting user input.
	
	CAUSE
	=====
	
	The .inf file (Oemnadap.inf) for the AMD PCNET Family Ethernet Adapter cannot
	run in unattended mode.
	
	RESOLUTION
	==========
	
	For information on how to resolve this problem, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q143134 OEMSETUP.INF Modifications for Automated Windows NT Setup
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The AMD PCNET Family Ethernet Adapter is manufactured by Advanced Micro Devices,
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: prodnt opk amdpcn amdpci SBK Unattended Setup
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
