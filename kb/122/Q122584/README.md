---
layout: page
title: "Q122584: Intel TokenExpress Driver Settings"
permalink: kb/122/Q122584/
---

## Q122584: Intel TokenExpress Driver Settings

	Article: Q122584
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the driver for the Intel TokenExpress 16/4 token ring adapter,
	using the default values results in an error in the Event Viewer stating that
	the necessary resources could not be allocated. Event Viewer shows Event ID
	5001, and the description states:
	
	  OcTk16: Could not allocate the resources necessary for operation.
	
	There is no network connectivity because the card is not being initialized.
	
	CAUSE
	=====
	
	According to Intel, the default settings in the Windows NT driver do not work
	with this network interface card (NIC).
	
	RESOLUTION
	==========
	
	The settings recommended by Intel for this card are:
	
	  RECEIVE BUFFERS :  18
	  TRANSMIT BUFFERS:  12
	  FRAME SIZE :  4K
	
	
	TokenExpress is manufactured by Intel Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
