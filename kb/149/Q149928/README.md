---
layout: page
title: "Q149928: Xircom Creditcard Ethernet+modem Fails After SP2 or 3"
permalink: /kb/149/Q149928/
---

## Q149928: Xircom Creditcard Ethernet+modem Fails After SP2 or 3

	Article: Q149928
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are using the driver supplied by Xircom for the Xircom Creditcard Ethernet+
	28800 modem under Windows NT 3.51 and after upgrading your laptop to Windows NT
	Service Pack 2 or 3, the driver fails to load with the following message
	registered in the event log:
	
	  Event ID: 7000
	
	     Description: The Xircom CreditCard Ethernet+Modem II Driver service
	     failed to start due to the following error: A device attached to the
	     system is not functioning.
	
	
	CAUSE
	=====
	
	The updated PCMCIA.sys driver set up by the Service Pack update appears to have
	prevented the Xircom driver from loading. This is the result of a regression
	introduced in Service Packs 2 and 3; the regression is fixed in Service Pack 4.
	
	RESOLUTION
	==========
	
	To solve the problem, either upgrade to Service Pack 4 or for a temporary
	solution, replace the PCMCIA.sys driver with the version shipped on the Windows
	NT 3.51 compact disc (which can also be found on disk 2 of the disk set) as
	follows:
	
	1. At the command prompt, change into the directory
	  %Systemroot%\System32\Drivers
	
	2. Rename PCMCIA.sys to PCMCIA.new.
	
	3. Expand PCMCIA.SY_ from the \I386 directory on the compact disc using the
	  following command line:
	
	  EXPAND <CD>:\I386\PCMCIA.SY_ PCMCIA.SYS
	
	  or, if you are expanding the copy from disk 2, the command is:
	
	  EXPAND A:\PCMCIA.SY_ PCMCIA.SYS
	
	After you have replaced PCMCIA.sys, shut down and restart the system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 2 and 3. This problem was corrected in the latest US Service Pack for
	Windows NT. For information on obtaining this update, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	The Xircom Creditcard Ethernet+ 28800 modem is manufactured by Xircom, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
