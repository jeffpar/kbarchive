---
layout: page
title: "Q262390: Network Discovery Returns DHCP Reservation Name w/ Windows DHCP"
permalink: /kb/262/Q262390/
---

## Q262390: Network Discovery Returns DHCP Reservation Name w/ Windows DHCP

{% raw %}

	Article: Q262390
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbDiscovery
	Last Modified: 28-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an IP address is reserved in a Windows 2000 Domain Host Connection Protocol
	(DHCP) server, Network Discovery returns the DHCP reservation name instead of
	the computer's NetBIOS name.
	
	If the DHCP reservation name is not the same as the computer's NetBIOS name, the
	computer is incorrectly listed in the Systems Management Server Administrator
	console. The incorrect listing is corrected by the next logon or heartbeat
	discovery.
	
	WORKAROUND
	==========
	
	When specifying the reservation name in DHCP, use the computer's NetBIOS name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbDiscovery 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
