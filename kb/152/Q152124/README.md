---
layout: page
title: "Q152124: USR-Megahertz 288 Ethernet/Modem Combo Card Fails"
permalink: kb/152/Q152124/
---

## Q152124: USR-Megahertz 288 Ethernet/Modem Combo Card Fails

	Article: Q152124
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The USR-Megahertz 288 Ethernet Combo card XJ/CCEM3288 is configured by default
	to function correctly on COM3 with Windows NT version 3.51. When the Combo card
	is configured for any other COM port, the LAN portion of the Combo card
	functions, but the MODEM may not. The Combo card configuration can be verified
	by looking in the Ethernet configuration window.
	
	CAUSE
	=====
	
	SERIAL.SYS and PCMCIA.SYS do not properly configure and share interrupts for
	this card.
	
	RESOLUTION
	==========
	
	To correct this problem, you must either:
	
	- Reconfigure the card to use COM3 only -or-
	
	- Replace your PCMCIA.SYS and SERIAL.SYS files with the fixed versions provided
	  by Microsoft. Instructions for downloading this fix are included below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The 288 Ethernet Combo Card XJ/CCEM3288 is manufactured by U.S. Robotics -
	Megahertz, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	Additional query words: prodnt new shell
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
