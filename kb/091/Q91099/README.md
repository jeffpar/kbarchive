---
layout: page
title: "Q91099: Upgrading LAN Manager 2.1 to WFWG 3.1 with EtherExpress Card"
permalink: kb/091/Q91099/
---

## Q91099: Upgrading LAN Manager 2.1 to WFWG 3.1 with EtherExpress Card

	Article: Q91099
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When upgrading from Microsoft LAN Manager version 2.1 to Windows for Workgroups
	version 3.1, Setup uses the default settings for the network card. Windows for
	Workgroups takes the network card settings used by LAN Manager 2.1, and finds
	that no setting is specified for the IRQ. Windows for Workgroups then uses the
	default IRQ for the network card. When the system is restarted, the following
	message is displayed if the default IRQ is not correct for your machine:
	
	  Protocol Manager did not accept EtherExpress 16 driver.
	  NDIS environment invalid, Driver not loaded.
	
	CAUSE
	=====
	
	If Setup detects that LAN Manager 2.1 was previously installed, it attempts to
	take the safest route of using settings from LAN Manager. Unfortunately, some of
	the settings used in Windows for Workgroups are not required for LAN Manager,
	particularly for the EtherExpress card.
	
	WORKAROUND
	==========
	
	To correct the problem, use the Network option in Control Panel to adjust the
	IRQ setting for the card to its proper value.
	
	Additional query words: 3.10 lanman
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
