---
layout: page
title: "Q90203: EXP16.DOS Configures Intel EtherExpress 16 in WFWG"
permalink: kb/090/Q90203/
---

## Q90203: EXP16.DOS Configures Intel EtherExpress 16 in WFWG

	Article: Q90203
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	When you change the adapter settings for the Intel EtherExpress 16 network
	adapter in Control Panel, changes are made only to the PROTOCOL.INI file--
	they are not written to the card. When you restart your computer, the
	EXP16.DOS driver reads the PROTOCOL.INI file for configuration information.
	If the PROTOCOL.INI file has settings that are different from those on the
	card, the EXP16.DOS driver reconfigures the adapter before initializing it.
	
	NOTE: If you are using two EtherExpress 16 cards in the same machine, you
	need to include the settings for both cards in the PROTOCOL.INI file and
	then run SoftSet to reconfigure the cards. This allows both cards to bind
	correctly when loading the protect mode (NDIS3) drivers.
	
	Additional query words: ether express 3.11 3.10 rebooting ethernet 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
