---
layout: page
title: "Q185787: STOP 0x0000002E on Alpha with ISA Sound Card"
permalink: kb/185/Q185787/
---

## Q185787: STOP 0x0000002E on Alpha with ISA Sound Card

	Article: Q185787
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT system may stop with the following error:
	
	  STOP: 0x0000002E (0xFACEFEED, 0x00000000, 0x00000000, 0x80ADD9C8)
	  DATA_BUS_ERROR
	
	This problem only occurs on systems using the Alpha processor and containing an
	ISA sound card.
	
	CAUSE
	=====
	
	Direct Memory Access (DMA) data transfers to the sound card are done improperly,
	causing an error on the ISA bus.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
