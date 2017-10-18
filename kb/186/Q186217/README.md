---
layout: page
title: "Q186217: 3C509 Is Not Autodetected During Setup on ThinkPad 760EL &amp; XL"
permalink: kb/186/Q186217/
---

## Q186217: 3C509 Is Not Autodetected During Setup on ThinkPad 760EL &amp; XL

	Article: Q186217
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Windows NT on an IBM ThinkPad 760EL or XL, along with a
	SelectaDock II docking station and a 3COM 3c509 card, autodetection of the
	network adapter fails.
	
	CAUSE
	=====
	
	The cause is that the SelectaDock II docking station has a new PCI-to-PCI bridge
	that uses I/O address 100-110, which is also the default address of the 3C509
	card. When the detection software does not see a 3C509 card at I/O address
	100-100, it assumes there are no cards in the computer and does not continue
	looking for them at different addresses.
	
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
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
