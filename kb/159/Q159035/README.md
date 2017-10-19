---
layout: page
title: "Q159035: SMC 8016 PC Card May Not Work with NEC Versa 6000H/IBM 760ED"
permalink: /kb/159/Q159035/
---

## Q159035: SMC 8016 PC Card May Not Work with NEC Versa 6000H/IBM 760ED

	Article: Q159035
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have an SMC 8016 Ethernet PC card installed in a NEC Versa 6000H or an
	IBM 760ed ThinkPad laptop computer in CardBus mode, the computer may stop
	responding (hang), or the card may not function correctly.
	
	CAUSE
	=====
	
	The SMC 8016 Ethernet PC card has a problem with driver initialization in
	CardBus mode, which may cause the drivers not to load.
	
	RESOLUTION
	==========
	
	Use another Ethernet PC card, or the newer SMC 8020 Ethernet PC card.
	
	MORE INFORMATION
	================
	
	The combination of a TI 1130 CardBus controller and an SMC 8016 driver may have
	this problem.
	
	Contact SMC, Inc. for additional information.
	
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
