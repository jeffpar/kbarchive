---
layout: page
title: "Q71419: PC NAU StarLan Card and LAN Manager 2.0"
permalink: /kb/071/Q71419/
---

## Q71419: PC NAU StarLan Card and LAN Manager 2.0

	Article: Q71419
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The PCNAU StarLan Card currently does not work with Microsoft LAN Manager
	version 2.0. AT&T states that the driver (ATTCSMA.DOS) for this card is not
	2.0-compliant, and they plan to release a version 2.0 NDIS compatible driver in
	the version 3.5 release of AT&T StarLan.
	
	In addition, the AT&T driver is specific to the PC NAU StarLan Card from
	AT&T. Therefore, if you try to install the AT&T Stack (ATTISO.DOS) with
	NetBEUI dual stack on a card that is certified to work with LAN Manager, the
	driver will give a "Network card not found" error when executing NETBIND.
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
