---
layout: page
title: "Q200344: SMS: Defining Site Boundaries in Systems Management Server 2.0"
permalink: /kb/200/Q200344/
---

## Q200344: SMS: Defining Site Boundaries in Systems Management Server 2.0

{% raw %}

	Article: Q200344
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbsms200kbfaq
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server 2.0 now uses TCP/IP subnets or IPX networks to define
	the site boundaries, rather than Windows NT domains. If the site server is a
	domain controller, the subnet of the site server is used by default.
	
	When the TCP/IP subnet for the site boundary is entered into the site properties,
	a subnet mask is not needed. The client's subnet mask is used to determine if
	the client resides within the site server's boundaries.
	
	MORE INFORMATION
	================
	
	If the network that the Systems Management Server Site resides on is using
	subnet masks to segment the network throughout the enterprise, each subnet must
	be entered into the Site Boundaries tab.
	
	For example, if the default site boundary is set to 198.162.157.0, and you have
	two clients configured as follows:
	
	  Client 1
	  IP address : 198.162.157.19
	  Subnet mask: 255.255.255.128
	
	  Client 2
	  IP address : 198.162.157.132
	  Subnet mask: 255.255.255.128
	
	Client 1 would reside inside the site boundaries, and therefore be assigned to
	the Systems Management Server site. Client 2 would not be a member of the site.
	
	This is due to the fact that with a subnet mask of 255.255.255.128, you get two
	subnets: 198.162.157.1-127, and 198.162.157.130-254, with two subnet IDs of
	198.162.157.0 and 198.162.157.129. The only subnet listed in the site boundary
	is 198.162.157.0.
	
	To make Client 2 reside within the site, you would have to add the other subnet
	to the site boundary table. In this example, you would add 198.162.157.129.
	
	For more information, look under "Site Boundaries" in the Systems Management
	Server 2.0 Administrator's Guide index.
	
	
	Additional query words: prodsms dc DCs PDCs BDCs pdc bdc sub net subnetwork smsfaqtop
	
	======================================================================
	Keywords          : kbsetup kbConfig kbsms200 kbfaq
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
