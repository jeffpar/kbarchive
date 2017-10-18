---
layout: page
title: "Q228900: SMS: How SMS 2.0 Network Discovery Sees Clients With Static IPs"
permalink: kb/228/Q228900/
---

## Q228900: SMS: How SMS 2.0 Network Discovery Sees Clients With Static IPs

	Article: Q228900
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbClient kbConfig kbServer kbSNMP kbsms200 kbDiscovery kbInventory
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server 2.0 Network Discovery may not report discovery data
	for computers that have static IP addresses. Viewing the Netdisc.log (logging
	must be enabled via Systems Management Server Service Manager) reveals that the
	computer is found and it's IP address is identified, but a Data Discovery Record
	(DDR) is not written. A DDR is not written unless the subnet mask of the
	computer can be positively determined.
	
	Systems Management Server 2.0 Network Discovery can determine the subnet mask of
	the client from the following sources:
	
	- A Microsoft DHCP Server. Network Discovery retrieves the active leases and
	  defined subnet lists that have been configured on the DHCP server. Note that
	  the Systems Management Server Service account requires at least Domain User
	  access to the DHCP server. Also, if the Site Server is installed on a Windows
	  NT Server with a static IP address, make sure that the IP address of the DHCP
	  server has been entered in the DHCP tab of Network Discovery Properties. Site
	  servers with a static IP address do not find the local DHCP server if the
	  "Use local DHCP servers" box is checked but no DHCP servers have been
	  entered.
	
	- An SNMP agent. Make sure that the community name is specified correctly in
	  the SNMP tab of Network Discovery Properties. Note that the site server's
	  default gateway is automatically included in the list of SNMP devices Network
	  Discovery contacts to gather information. Systems Management Server attempts
	  to gather information about other SNMP devices on the network, but it may be
	  necessary to add the IP address of SNMP devices (such as routers) to the SNMP
	  Devices tab of Network Discovery Properties.
	
	- The router ARP cache entry. To discover machines with static addresses, it is
	  necessary to have an SNMP agent installed on the client, or the client needs
	  to be in the local router's ARP cache. In general, entries only remain in the
	  ARP cache anywhere from 60 seconds to about 10 minutes, depending on the
	  router software and the TimeToLive value. Check the router configuration to
	  determine its cache.
	
	There are utilities available to view the ARP cache of a router such as the ARP
	command line utility. The following command should return the current contents
	of the router cache:
	
	"ARP -a routerIPaddress" (without the quotation marks)
	
	Since entries do age out of the ARP cache, it may be necessary to schedule
	network discovery to run multiple times to find all machines. Also, if a machine
	is especially "quiet" it may not appear in the ARP cache of the local router.
	Any communication across a router, such as a ping to a remote network, will add
	the machine to the ARP cache of the router.
	
	NOTE: When topology, topology and client, and topology, client and client
	operating system network discovery is enabled, Microsoft Windows 95, Windows 98,
	or Windows Millennium Edition clients only report discovery datas if they have
	File and Print sharing enabled.
	
	Computers that have statically assigned addresses can be added to a DHCPs
	RESERVED list and be successfully discovered with Network Discovery. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q236036 SMS: NetDisc Fails to Discover Static IP Addresses Reserved
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbClient kbConfig kbServer kbSNMP kbsms200 kbDiscovery kbInventory 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
