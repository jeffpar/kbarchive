---
layout: page
title: "Q147620: Xircom CreditCard Ethernet + 28800 Modem Support"
permalink: /kb/147/Q147620/
---

## Q147620: Xircom CreditCard Ethernet + 28800 Modem Support

	Article: Q147620
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Xircom CreditCard Ethernet + Modem II adapter driver included in
	the \DRVLIB\NETCARD\X86\XCE10 directory of the Windows NT 3.51 compact disc with
	the Xircom CreditCard Ethernet + 28800 Modem adapter, the following events are
	logged in the Event Viewer:
	
	  Event ID: 7000
	  Description: The Xircom CreditCard Ethernet+Modem II Driver service failed to
	  start due to the following error: A device attached to the system is not
	  functioning.
	
	  Event ID: 5003
	  Description: The description for Event ID ( 5003 ) in Source ( CM2NDIS3 )
	  could not be found. It contains the following insertion string(s): ,
	  CM2NDIS32.
	
	CAUSE
	=====
	
	The Xircom CreditCard Ethernet + Modem II driver is not designed for the Xircom
	CreditCard Ethernet + 28000 Modem adapter. Currently, Windows NT 3.51 does not
	support this PCMCIA device.
	
	RESOLUTION
	==========
	
	The driver for the Xircom CreditCard Ethernet + 28800 Modem adapter is available
	on Disk 3 of the Xircom installation disk set. For more information, contact
	Xircom Technical Support at (805) 376-9200.
	
	The CreditCard Ethernet + 28000 Modem adapter is manufactured by Xircom, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
