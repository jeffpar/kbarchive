---
layout: page
title: "Q245723: SMS: Simple Schedule Inventory Always Runs at Midnight"
permalink: /kb/245/Q245723/
---

## Q245723: SMS: Simple Schedule Inventory Always Runs at Midnight

	Article: Q245723
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug kbInventory kbsms200preSP3fix kbsms200
	Last Modified: 07-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you configure a hardware or software inventory to run on a simple
	schedule, the Systems Management Server (SMS) clients all report inventory at
	midnight. If a computer is turned off when the inventory interval is reached,
	the inventory is taken after the computer is restarted.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	When you specify a simple schedule, it normally permits the inventory to be
	taken at a single, specific interval. While this permits less flexibility in
	scheduling, this method usually causes less network traffic because the time
	each client's MIF file is sent is initially based on that client's installation
	time. For subsequent inventories, it is based on the interval and the last time
	that inventory was taken on that computer.
	
	When this problem occurs, all clients can generate their inventory information
	close to the same time and the servers specified as Client Access Points (CAP)
	can be flooded with a large number of inventory files. This problem can cause
	the network redirector on the servers to generate the following Windows NT event
	error messages:
	
	  Event ID: 2022
	  Description: The server was unable to find a free connection x times in the
	  last 60 seconds.
	
	  Event ID: 3013
	  Description: The redirector has timed out to <system name>.
	
	This behavior can also occur when an inventory is configured to use a full
	schedule. This by-design behavior occurs because this type of schedule is
	intended to have all of your clients run inventory at exactly the same time.
	Ideally, a full schedule should not be used if the network environment and the
	number of client access points are not scaled high enough to support the
	additional load that is associated with this configuration.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug kbInventory kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS120 kbSMS200SP1 kbSMS200SP2
	Version           : :1.2,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
