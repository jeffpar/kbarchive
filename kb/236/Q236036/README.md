---
layout: page
title: "Q236036: SMS: NetDisc Fails to Discover Static IP Addresses Reserved and"
permalink: /kb/236/Q236036/
---

## Q236036: SMS: NetDisc Fails to Discover Static IP Addresses Reserved and

	Article: Q236036
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Network Discovery with Systems Management Server to locate system
	resources on a network, those clients that have DHCP reservations are not
	discovered.
	
	CAUSE
	=====
	
	Network Discovery interrogates the DHCP server for information regarding devices
	present on the network. The data requested does not include data corresponding
	to DHCP reservations.
	
	RESOLUTION
	==========
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Many organizations prefer to use DHCP reservations over static IP, for more
	information see:
	
	  Q170062 Advantages of DHCP Reservation over Static IP Assignment
	
	If your organization is using static IP rather than DHCP reservations see:
	
	  Q201781 SMS: Clients with Static IP Addresses Not Network Discovered
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
