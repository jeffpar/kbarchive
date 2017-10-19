---
layout: page
title: "Q131544: HP Fast Ethernet Network Adapters Fail with Incorrect Cabling"
permalink: /kb/131/Q131544/
---

## Q131544: HP Fast Ethernet Network Adapters Fail with Incorrect Cabling

	Article: Q131544
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Hewlett-Packard (HP) J2577A 10/100VG EISA LAN adapter or J2573A
	10/100VG ISA LAN adapter with Windows 95, your computer may stop responding
	(hang), or you may receive the following error message:
	
	  Your adapter is not working.
	
	CAUSE
	=====
	
	These HP network adapters run at 10 or 100 Mbps and have separate ports for the
	two speeds. If you start your computer with a 10-Mbps cable plugged into the
	100-Mbps port, a 100-Mbps cable plugged into the 10-Mbps port, or no network
	cable plugged into either port, the NDIS 2 driver hangs the computer after the
	NET START command. The NDIS 3 driver displays the error message stated above
	when Windows 95 starts.
	
	RESOLUTION
	==========
	
	To resolve this problem, connect the correct network cable to the appropriate
	port on the network adapter.
	
	Additional query words: 100-VG 100/VG
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
