---
layout: page
title: "Q103848: PC Gen: 3Com XNS and Mail May Cause Computer to Hang"
permalink: kb/103/Q103848/
---

## Q103848: PC Gen: 3Com XNS and Mail May Cause Computer to Hang

	Article: Q103848
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.0, 3.0b, or 3.2 of Microsoft Mail for PC Networks, the computer
	may stop responding (hang) when it is left unattended. This problem can occur if
	you are using a slower computer (8088/80286) with a slower 3Com network card
	(such as an 8-bit 3Com 3C503 or 3C505), over a 3Com XNS-based network.
	
	CAUSE
	=====
	
	This problem is caused by a known XNS timer interrupt chaining problem. The
	computer will hang if you have numerous timing related events running
	simultaneously (for example, the 3C503 driver, the LAN Manager redirector, Mail
	polling, Word autosaving, and 3Com XNS).
	
	RESOLUTION
	==========
	
	Possible solutions are to use a configuration that minimizes the amount of
	time-related events. Examples include:
	
	- Making the polling of the client/External less frequent
	
	- Using a 16-bit network card (3C507)
	
	- Making sure the interrupt setting of the network card is set to the lowest
	  value possible (for example, 2 or 3, rather than 11 or 12; the lower the IRQ
	  value, the higher the priority to your card).
	
	STATUS
	======
	
	3Com has confirmed this to be a problem in 3Com XNS. 3Com is researching this
	problem; Microsoft will post new information here in the Microsoft Knowledge
	Base as it becomes available.
	
	3Com XNS is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
