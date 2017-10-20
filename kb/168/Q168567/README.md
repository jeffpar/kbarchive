---
layout: page
title: "Q168567: Clustering Information on IP Address Failover"
permalink: /kb/168/Q168567/
---

## Q168567: Clustering Information on IP Address Failover

{% raw %}

	Article: Q168567
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Cluster Server (MSCS) provides the ability to define an IP address
	resource within a cluster, and for it to failover from one node to another.
	
	IP address failover ability depends on two things:
	
	- Support for dynamic registration and deregistration of IP addresses.
	
	- Ability to update the network address translation caches of other systems
	  attached to the subnet on which an address is registered.
	
	Dynamic address registration and deregistration is already implemented within the
	Microsoft Windows NT operating system to support the lease of IP addresses using
	the Dynamic Host Configuration Protocol (DHCP).
	
	Microsoft Cluster Server uses existing features within Windows NT for IP address
	registration and deregistration. When the cluster component attempts to bring an
	IP Address resource online, the software sends a command to the TCP/IP driver to
	register the specified address. A similar command exists to unregister an
	address when the corresponding resource is taken offline.
	
	The cluster software updates the translation caches of other systems on the LAN
	through the Address Resolution Protocol (ARP) specification (RFC 826), which is
	implemented by Windows NT. The specification states that all systems receiving
	an ARP request must update their IP Address to physical address mapping for the
	source of the request (the source IP and physical network addresses are
	contained within the request).
	
	Further, as part of the IP address registration process, the Windows NT TCP/IP
	driver broadcasts an ARP request on the appropriate LAN several times. The
	request asks the owner of the specified IP address to respond with its physical
	network address. By sending these requests for the IP address being registered,
	Windows NT may detect IP address conflicts; if a response is received, the
	address cannot be safely used.
	
	When the driver sends these requests, Windows NT specifies the IP address being
	registered as the source of the request. Thus, all systems on the network will
	update their ARP cache entries for the specified address. Therefore, the
	registering system becomes the new owner of the address.
	
	NOTE: If an address conflict occurs, the responding system may send out another
	ARP request for the same address, forcing the other systems on the subnet to
	update their caches again. Windows NT does this when it detects a conflict with
	an address that it has successfully registered.
	
	MORE INFORMATION
	================
	
	For more information on the Address Resolution Protocol (ARP) as discussed in
	RFC 826, you may obtain a copy on the Internet from the following source:
	
	  ftp://ds.internic.net/rfc/rfc826.txt
	
	For additional information about related information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q244331 MAC Address Changes for Virtual Server During a Failover with
	  Clustering
	
	Additional query words: gratuitous
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbAudDeveloper kbClustServSearch kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
