---
layout: page
title: "Q164568: SMS: Network Inventory Missing on Some Win95 NetWare Clients"
permalink: /kb/164/Q164568/
---

## Q164568: SMS: Network Inventory Missing on Some Win95 NetWare Clients

	Article: Q164568
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinvkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MS-DOS Inventory Agent (Invdos.exe) may fail to get the network adapter card
	information on client computers running Windows 95 that are using Microsoft's
	NetWare redirector. The Systems Management Server Administrator program shows
	'No Data Available' when you view the Manufacturer, IRQ, Port Address, and so
	on, of the client's Network group under the Personal Computer Properties window.
	
	CAUSE
	=====
	
	This problem is caused by the NetWare network adapter card information test
	occasionally failing to obtain an SPX socket, due to the timing of the client
	computer. As a result, the network adapter card test does not get valid network
	adapter card configuration data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms win95 novell inventory
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
