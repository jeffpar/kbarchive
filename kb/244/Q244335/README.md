---
layout: page
title: "Q244335: SMS: Network Discovery Causes Incorrect Names in Collections"
permalink: /kb/244/Q244335/
---

## Q244335: SMS: Network Discovery Causes Incorrect Names in Collections

	Article: Q244335
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbui kbsms200 kbsms200bug kbDiscovery
	Last Modified: 30-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Network Discovery is run in an environment where Domain Name Server (DNS)
	reverse lookup zones are used, the discovered data shown in the collections may
	not reflect the correct name for recently discovered systems.
	
	CAUSE
	=====
	
	When Network Discovery receives a list of Internet Protocol (IP) addresses from
	the Address Resolution Protocol (ARP) cache of a router, it uses DNS reverse
	lookup to determine the name of each device. If the first portion of the fully
	qualified domain name (FQDN) in the DNS reverse lookup table does not match a
	system's NetBIOS name, the name in the reverse lookup table could be incorrectly
	used as the system's NetBIOS name.
	
	WORKAROUND
	==========
	
	Network Discovery runs only on the Microsoft Systems Management Server when it
	is scheduled or requested.
	
	  NOTE: Windows Networking Logon Discovery can be used to discover clients on
	  the network as well.
	
	To work around this issue, do one of the following:
	
	- Ensure that the DNS reverse lookup tables contain accurate FQDNs for the
	  systems in your network environment.
	
	- Configure the Systems Management Server site's Transmission Control
	  Protocol/Internet Protocol (TCP/IP) properties not to use DNS servers. If
	  Dynamic Host Configuration Protocol (DHCP) is used to configure the server's
	  IP address and DNS server configuration, it may be necessary to disable DHCP
	  and define a static IP address for the server to control the DNS server
	  configuration.
	
	MORE INFORMATION
	================
	
	This issue can also occur if specifying a Microsoft Windows NT system's IP
	address as a Simple Network Management Protocol (SNMP) device under the Network
	Discovery properties.
	
	The following example shows how this problem can occur:
	
	NetBIOS name:  BIGBIRD
	IP address: 121.54.34.222 
	DNS PTR record:  121.54.34.222
	Returned name: sesame.street.com
	
	When Network Discovery asks the DNS server to return the name that matches the
	121.54.34.222 IP address, it receives "sesame.street.com". The portion of the
	name up to the first period is used as a resource name for this device. As a
	result, "sesame" appears as the name of this system, not "BIGBIRD".
	
	If Windows NT Remote Client Installation is enabled when this behavior occurs,
	the Systems Management Server Client Configuration Manager component may try to
	install the Systems Management Server client on systems that either do not exist
	or are incorrectly discovered.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbui kbsms200 kbsms200bug kbDiscovery 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
