---
layout: page
title: "Q126355: Intel EtherExpress Pro Detected as 82595-Based Ethernet"
permalink: /kb/126/Q126355/
---

## Q126355: Intel EtherExpress Pro Detected as 82595-Based Ethernet

	Article: Q126355
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
	
	When you install an Intel EtherExpress Pro network interface card in your
	computer, Windows 95 detects the card as an Intel 82595-based Ethernet card.
	
	CAUSE
	=====
	
	Windows 95 cannot safely query the EPROM on the Intel EtherExpress Pro card
	while attempting to detect the network interface card that is installed because
	the EtherExpress Pro card may be in use. As a result, the detection routine
	cannot determine the card's Vendor ID and cannot identify the card beyond the
	fact that it is an 82595-based card.
	
	RESOLUTION
	==========
	
	Do not try to redetect the network interface card. Windows 95 uses the same
	drivers and configuration for EtherExpress Pro cards and 82595-based Ethernet
	cards. The only difference is the description of the card. None of the
	EtherExpress Pro card's functionality is lost.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
