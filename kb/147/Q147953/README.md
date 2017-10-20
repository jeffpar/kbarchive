---
layout: page
title: "Q147953: Last Software Scan Date Not Updated for Windows NT Clients"
permalink: /kb/147/Q147953/
---

## Q147953: Last Software Scan Date Not Updated for Windows NT Clients

{% raw %}

	Article: Q147953
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Last Software Scan date for a Windows NT client computer in Personal
	Computer Properties of Systems Management Server is not current or consistent
	with the Software Inventory Frequency set for the site. The Last Hardware Scan
	date is current.
	
	CAUSE
	=====
	
	If you do not have any Software Packages configured for Inventory, the Inventory
	Agent for Windows NT (INVWIN32.EXE) does not perform a Software Scan. This
	behavior does not occur with the Inventory Agent for MS-DOS clients
	(INVDOS.EXE).
	
	RESOLUTION
	==========
	
	To work around this problem, force the Inventory Agent for Windows NT
	(INVWIN32.EXE) to scan for software. To do this, configure at least one package
	for Software Inventory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. The problem has been fixed in Systems Management Server version 1.2
	
	Additional query words: prodsms workstation status
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
