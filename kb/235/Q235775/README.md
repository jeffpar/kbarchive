---
layout: page
title: "Q235775: SMS: Network Discovery Using SNMP May Fail to Discover Device"
permalink: /kb/235/Q235775/
---

## Q235775: SMS: Network Discovery Using SNMP May Fail to Discover Device

	Article: Q235775
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
	
	When using Simple Network Management Protocol (SNMP) to discover resources with
	Network Discovery in Systems Management Server 2.0, you may notice that not all
	clients are discovered as expected. If partial data has already been discovered
	for the client through SNMP, then a Discovery Data Record will not be created
	even if Network Discovery can obtain complete discovery information from the
	Address Resolution Protocol (ARP) cache of a device through SNMP.
	
	This means that if initial SNMP discovery process does not get the subnet mask
	from a client through SNMP, it will discard information retrieved from a devices
	ARP cache even if it contains this information.
	
	CAUSE
	=====
	
	This is caused by a flag being set during the Network Discovery cycle when a
	client is first discovered. This flag causes Network Discovery to discard any
	other information retrieved through SNMP.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
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
	
