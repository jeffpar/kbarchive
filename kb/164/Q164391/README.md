---
layout: page
title: "Q164391: WinNT 4.0 SP2 Atapi Claims IRQ for Unused IDE Channel"
permalink: /kb/164/Q164391/
---

## Q164391: WinNT 4.0 SP2 Atapi Claims IRQ for Unused IDE Channel

	Article: Q164391
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetupkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 2, you find that you no longer
	have available a previously unused IRQ normally reserved for the secondary IDE
	controller, which is usually IRQ 15.
	
	Another side effect may include IRQ conflicts between Atapi and another
	previously working adapter that was using the same IRQ prior to loading Service
	Pack 2.
	
	Use Event Viewer and Microsoft Diagnostics to verify which devices are
	conflicting and which IRQ each adapter is claiming.
	
	CAUSE
	=====
	
	The device driver Atapi.sys erroneously claims the IRQ for the empty IDE
	secondary controller.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt sp2
	
	======================================================================
	Keywords          : kbsetup kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	
