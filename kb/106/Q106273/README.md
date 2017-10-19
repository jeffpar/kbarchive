---
layout: page
title: "Q106273: NE1500T Network Card Cannot Talk to Network"
permalink: /kb/106/Q106273/
---

## Q106273: NE1500T Network Card Cannot Talk to Network

	Article: Q106273
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you exit and then restart Microsoft Windows on a system with an older AMD
	NE1500T network interface card (NIC), you cannot communicate over the network.
	
	CAUSE
	=====
	
	This behavior occurs on AM1500T NICs that use the Lance chip. AM1500T NICs that
	use the PC-NET chip do not exhibit this behavior.
	
	WORKAROUND
	==========
	
	You need to power your system off and then on (cold boot) before restarting
	Windows. You should then be able to communicate over the network.
	
	
	Additional query words: 3.11 NE1500T hangs locks
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
