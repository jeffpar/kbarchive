---
layout: page
title: "Q139732: Cannot Join Domain Using Network Peripherals NP-EISA/S FDDI"
permalink: kb/139/Q139732/
---

## Q139732: Cannot Join Domain Using Network Peripherals NP-EISA/S FDDI

	Article: Q139732
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT Server as a backup domain controller (BDC) or set up
	a Windows NT Workstation to join a domain using a Network Peripherals NP-EISA/S
	FDDI network adapter, the following error message appears:
	
	  Could not find domain controller for this domain.
	
	CAUSE
	=====
	
	This problem occurs when a primary domain controller (PDC) and BDC are connected
	using a Cabletron hub using the TCP/IP protocol.
	
	RESOLUTION
	==========
	
	Network Peripherals has a newer driver (Npeisa.sys) for this adapter that fixes
	this problem. The latest driver file can be obtained from the Network
	Peripherals bulletin board system (BBS) at (408) 321-9322.
	
	The third-party products discussed here are manufactured by Network Peripherals,
	a vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
