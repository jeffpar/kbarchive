---
layout: page
title: "Q201781: SMS: Clients with Static IP Addresses Not Network Discovered"
permalink: /kb/201/Q201781/
---

## Q201781: SMS: Clients with Static IP Addresses Not Network Discovered

{% raw %}

	Article: Q201781
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbDiscovery smsinstkbfaq
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Systems Management Server tries to discover devices through network
	discovery by querying the DHCP server, it is able to find devices with dynamic
	IP addresses, but not those with static addresses.
	
	MORE INFORMATION
	================
	
	If static IP addresses are used in your environment, there are two ways to
	discover these devices:
	
	- Use network discovery and leave the computer on the network constantly. As a
	  result, it should appear in the NetToMediaTable of its local router. When the
	  router is detected, it will be added to SNMP devices and the computer with
	  the static address will be discovered.
	
	- Use domain discovery in the computer's domain. Domain discovery will
	  enumerate the client machines through the domain master browser and will
	  discover machines regardless of how they receive their IP address.
	
	
	Additional query words: prodsms netdisc
	
	======================================================================
	Keywords          : kbsms200 kbDiscovery smsinst kbfaq
	Technology        : kbSMSSearch kbSMS200 kbSMSI200
	Version           : WINDOWS:2.0; winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
