---
layout: page
title: "Q90325: Intel EtherExpress (EE) 16 Network Card Configuration"
permalink: kb/090/Q90325/
---

## Q90325: Intel EtherExpress (EE) 16 Network Card Configuration

	Article: Q90325
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Intel EtherExpress (EE) 16 network card that ships with Windows for
	Workgroups is a software configurable card. This card is shipping in the
	following Windows for Workgroups packages:
	
	- Windows for Workgroups Starter Kit
	
	- Windows for Workgroups User Kit
	
	- Windows for Workgroups add-on for 2 users of Microsoft Windows version 3.1
	
	- Windows for Workgroups add-on for 1 user of Microsoft Windows version 3.1
	
	The settings for the card can be configured and tested in MS-DOS using the
	program SOFTSET.
	
	
	MORE INFORMATION
	================
	
	SOFTSET is a utility program that allows you to configure and test the Intel EE
	16 card. The Inel EE 16 works with thick or thin Ethernet cable. The board has a
	DIX(15 pin, D-shaped) and a BNC Connector.
	
	If you suspect there is a hardware conflict with the Intel EE 16 card, you may
	want to place the card in 8-bit mode. To do this within Windows for Workgroups,
	take the following steps:
	
	1. From Control Panel, choose Network.
	
	2. Choose the Adapters button.
	
	3. Select the Intel EE 16 Adapter, then choose the Setup button.
	
	4. Choose the Advanced button.
	
	5. Set I/O Channel Ready to NEVER. This changes the IOCHRDY= line in the
	  PROTOCOL.INI to NEVER.
	
	You can also configure other settings on the Intel EE 16 card (that is, IRQ, I/O,
	and RAM addresses). For more information on changing the software configurable
	settings, consult the documentation for the card.
	
	Additional query words: appnote Intel adapter 3.11 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
