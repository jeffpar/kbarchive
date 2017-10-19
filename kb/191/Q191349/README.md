---
layout: page
title: "Q191349: SMS: WinNT Servers Don't Display Resource Domain in Inventory"
permalink: /kb/191/Q191349/
---

## Q191349: SMS: WinNT Servers Don't Display Resource Domain in Inventory

	Article: Q191349
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Systems Management Server 1.2 does not identify the resource domain
	for computers running Windows NT Server in inventory.
	
	WORKAROUND
	==========
	
	To gather the resource information from a computer running Windows NT Server,
	apply Systems Management Server version 1.2 Service Pack 4 to the site. With
	Systems Management Server 1.2 Service Pack 4, inventory will now query the
	Windows NT Server computer and place in inventory the resource domain in which
	the Server resides. This information will appear under Network Class as a
	workgroup attribute.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sp sp4
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
