---
layout: page
title: "Q134473: Cannot Configure Network with More than One Network Card"
permalink: kb/134/Q134473/
---

## Q134473: Cannot Configure Network with More than One Network Card

	Article: Q134473
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
	
	When you remove or disable a Plug and Play (PNP) network card and add a legacy
	(ISA) network card, the PNP network adapter is redetected the next time you
	restart the computer, or it may continue to run in real mode.
	
	CAUSE
	=====
	
	Legacy network card support is an all-or-nothing proposition. All cards in the
	system initialize in real mode if the NDIS2 network drivers are loaded. If you
	remove the card using the Network applet in Control Panel, but leave the card on
	the computer, Windows 95 automatically detects and configures the card again the
	next time you start the computer. If you disabled the card using Device Manager,
	the card still runs in real mode because its configuration is contained in the
	Protocol.ini with the other cards that are installed.
	
	RESOLUTION
	==========
	
	You can edit the Protocol.ini to remove information and bindings to the Plug and
	Play card, and you can disable the card using Device Manager. However, this is a
	temporary resolution; any time the network configuration is updated
	(automatically or by using one of the Control Panel applets), Protocol.ini is
	rewritten.
	
	MORE INFORMATION
	================
	
	This problem usually occurs on computers that have networking chipsets built
	into the motherboard. In other cases, you can physically remove the Plug and
	Play network card from the computer to solve the problem. If you can run the
	legacy card in protected mode only, then you can disable the Plug and Play card
	and the system will function correctly.
	
	Additional query words: pnp
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
