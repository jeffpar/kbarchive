---
layout: page
title: "Q325585: SMS: Software Inventory May Be Discarded from Offline Clients"
permalink: /kb/325/Q325585/
---

## Q325585: SMS: Software Inventory May Be Discarded from Offline Clients

{% raw %}

	Article: Q325585
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbInventory
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a computer that is running the Systems Management Server (SMS) 2.0 client
	agent with software inventory turned on cannot connect to the network to forward
	collected software inventory, and if that inability to connect continues for
	more than a single software inventory cycle, the resulting software inventory
	that is reported when the computer finally can connect may be inaccurate.
	Computers may be legitimately off the network or be unable to connect for many
	reasons, including Client Access Points (CAPs) that are offline for maintenance,
	temporary network problems, or laptop computers that may be disconnected from
	the network for days at time.
	
	CAUSE
	=====
	
	There is no ordering in the processing of software inventory files. If a
	computer has two inventory files queued up and both are forwarded at the same
	time, the most recent inventory file may be processed before the older file. If
	any inventory changes such as software addition or deletion are recorded in the
	older file, they are discarded and the software inventory processor records the
	following message in the Sinvproc.log file:
	
	  WARNING - This file is out-of-date and will be skipped.
	
	Because the older inventory is not processed, changes to inventory that are
	recorded in the older inventory file are not recorded in the database.
	
	WORKAROUND
	==========
	
	Delete the Sinv.his file from the client computer on which the inventory
	information is possibly inaccurate. Then, either wait for the next software
	inventory cycle or force a new cycle. This sends a complete inventory for the
	client that overrides any conflicting data in the database.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbInventory 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
