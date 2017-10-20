---
layout: page
title: "Q199921: SMS: Disk Serial Number Inventories as FFFF-FFFF"
permalink: /kb/199/Q199921/
---

## Q199921: SMS: Disk Serial Number Inventories as FFFF-FFFF

{% raw %}

	Article: Q199921
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbInventory smsinv smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some Microsoft Windows NT client NTFS hard drive partitions may have their
	Serial Number property incorrectly inventoried as FFFF-FFFF. This can happen if
	the user account does not have at least List permissions to the partition. This
	can also occur on Microsoft Windows NT clients if the Systems Management Server
	Inventory Agent service account does not have at least List permissions to the
	NTFS partition.
	
	CAUSE
	=====
	
	The problem occurs because the user context under which the Inventory Agent is
	running does not have adequate permissions to gather the Serial Number
	properties of the hard drive partition.
	
	WORKAROUND
	==========
	
	Ensure that the user account and Systems Management Server Service Account have
	at least List permissions to all NTFS partitions that need to have Serial Number
	information included in inventory.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbInventory smsinv smsdatabase 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
