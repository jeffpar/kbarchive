---
layout: page
title: "Q252953: SMS:Use of Only Last Static IP Addrs on Mult IP Address w/ 1 NIC"
permalink: kb/252/Q252953/
---

## Q252953: SMS:Use of Only Last Static IP Addrs on Mult IP Address w/ 1 NIC

	Article: Q252953
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 10-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft NT client has multiple static IP addresses bound to a single
	Network Interface Card (NIC), Systems Management Server (SMS) only recognizes
	the last IP address in the list against the boundaries of the site.
	
	During a SMS client installation, it is not installed because the client being is
	not assigned to the site.
	
	WORKAROUND
	==========
	
	To work around this issue, use one of the following methods:
	
	- Upgrade to SMS Service Pack 2.
	
	- Change the order of the IP address so that the last one is within the SMS
	  site boundary.
	
	- If the IP address within SMS site boundary has to be the first one in the
	  order, then add another IP address to the end of the list which is also
	  within the site boundary.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in SMS 2.0 version SP1. This
	problem has been corrected in the latest U.S. service pack for SMS 2.0 version
	SP1. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
