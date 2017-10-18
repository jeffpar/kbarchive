---
layout: page
title: "Q197488: Access Denied When Synchronizing or Promoting a BDC"
permalink: kb/197/Q197488/
---

## Q197488: Access Denied When Synchronizing or Promoting a BDC

	Article: Q197488
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive an "Access Denied" error message when you attempt to promote and/or
	synchronize a backup domain controller (BDC) to primary domain controller (PDC)
	after you apply Service Pack 4 to one or more domain controllers. This error
	message occurs if you attempt to perform the promotion from a domain controller
	running Windows NT 4.0 Service Pack 3 (SP3).
	
	This issue also occurs if you attempt to perform the synchronization from a PDC
	running SP3 to a BDC running Windows NT 4.0 Service Pack 4.
	
	CAUSE
	=====
	
	Windows NT 4.0 Service Pack 4 upgrades Windows NT 4.0 security making
	synchronization from a computer running Windows NT 4.0 Service Pack 3
	impossible. This upgrade also makes promoting a domain controller from a
	computer running Windows NT 4.0 Service Pack 3 impossible.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade the PDC to Windows NT 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Note that a Windows NT 3.51 SP5 backup domain controller will have the same
	behavior as a Windows NT 4.0 SP3 backup domain controller.
	
	Additional query words: SP3 SP4 Server Manager
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
