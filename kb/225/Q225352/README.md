---
layout: page
title: "Q225352: Non-Computing Devices May Not Be Discovered by Network Discovery"
permalink: kb/225/Q225352/
---

## Q225352: Non-Computing Devices May Not Be Discovered by Network Discovery

	Article: Q225352
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Network Discovery may not be able to discover non-computing devices such as UNIX
	hosts and printers.
	
	For these types of non-Windows devices, there is no method to obtain the IP
	address. Without an IP address, Simple Network Management Protocol (SNMP) cannot
	talk to the device to verify its subnet mask (if Dynamic Host Configuration
	Protocol (DHCP) is not used).
	
	MORE INFORMATION
	================
	
	Essentially, the IP address of these devices must be manually discovered. You
	can add the IP address of a device you want to manually discover to the SNMP
	Devices tab in Network Discovery properties.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
