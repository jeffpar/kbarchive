---
layout: page
title: "Q235772: SMS: DHCP Server Has Unlimited Leases NetDisc Fails to Retrieve"
permalink: /kb/235/Q235772/
---

## Q235772: SMS: DHCP Server Has Unlimited Leases NetDisc Fails to Retrieve

{% raw %}

	Article: Q235772
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200fix kbDiscovery
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network Discovery can use Microsoft Dynamic Host Configuration Protocol (DHCP)
	servers to discover clients that have been granted IP addresses by that
	particular server. However, if the DHCP lease date is set to unlimited, and DHCP
	is the only discovery method, the clients will not be discovered.
	
	After the Network Discovery cycle has executed you will not see any discovered
	clients if DHCP was the only discovery module being used. Another Discovery
	module must be used to discover the clients such as Simple Network Management
	Protocol (SNMP) or by enabling the "Windows Networking Logon Discovery" method.
	
	CAUSE
	=====
	
	Network Discovery does not process the unlimited lease information correctly and
	will not create a discovery data record for the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200fix kbDiscovery 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
