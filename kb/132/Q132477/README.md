---
layout: page
title: "Q132477: 3Com 3C619 TokenLink III Driver Does Not Install on ISA System"
permalink: kb/132/Q132477/
---

## Q132477: 3Com 3C619 TokenLink III Driver Does Not Install on ISA System

	Article: Q132477
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT 3.51 Hardware Compatibility List (HCL) states that the 3Com 3C619
	TokenLink III Adapter is an ISA network adapter. This information is incomplete.
	The 3Com 3C619 TokenLink III Adapter can be configured for either an ISA or EISA
	bus. The driver for this adapter, located in the
	\DRVLIB\NETCARD\{platform}\TLNK3 on the Windows NT 3.51 CD, only supports EISA
	based systems. It is listed in the Add Network Adapter list as a "3Com TokenLink
	III EISA Adapter."
	
	If you attempt to install this adapter in an ISA based computer, the following
	error message appears:
	
	  Network card is not present in this system.
	
	CAUSE
	=====
	
	The current OEMSETUP.INF and OEMNADZZ.INF files contain entries that only allow
	this adapter to function in EISA based computers.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	TokenLink is manufactured by 3Com Corporation. Token Ring is a trademark of IBM
	Corporation. These vendors are independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this product's performance or reliability.
	
	Additional query words: Token Link adapter 3c619 3com prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
