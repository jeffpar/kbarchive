---
layout: page
title: "Q168321: Creating a DNS Record for a Host with Two or More IP Addresses"
permalink: /kb/168/Q168321/
---

## Q168321: Creating a DNS Record for a Host with Two or More IP Addresses

{% raw %}

	Article: Q168321
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may have a computer with two or more network interface cards (NICs), or one
	NIC with more than one IP address, and need to add a record for the additional
	IP address(es) to your Domain Name Service (DNS) server. This article explains
	how to add this entry.
	
	MORE INFORMATION
	================
	
	An "A" record needs to be created for each IP address that the host uses.
	
	For example, you have a server whose DNS host name is <myserver> and DNS
	domain name is <mydomain.com>. This server has 2 IP addresses assigned to
	it: IPAddress1 and IPAddress2 (replace IPAddress1 and IPAddress2 with server's
	IP addresses).
	
	To add these IP addresses, create 2 A records in the <mydomain.com> zone:
	
	  Myserver   A   <IPAddress1>
	  Myserver   A   <IPAddress2>
	
	NOTE: The Microsoft DNS Server supports round robin, which is a technique used as
	a form of load balancing between servers (to get more information about this
	feature, refer to RFC 1794). This feature will make DNS send both IP addresses
	when a query is received for myserver.mydomain.com. The client (or Resolver)
	will always use the first one. The next time DNS receives a query for this name
	the order of the list of IP addresses is changed in a round robin fashion (the
	address that was first in the previous list will be last in the new list). Round
	Robin of Cname records is not supported because there should be only one
	canonical name for any one alias.
	
	If, for some reason, you need the Resolver to get the same IP address every time,
	create two more "A" records assigning a unique name to each address. For
	example, you can create:
	
	  Altname1   A   <IPAddress1>
	  Altname2   A   <IPAddress2>
	
	Using this method, a Resolver will always obtain IPAddress1 when sending a query
	for Altname1 and will always obtain IPAddress2 when sending a query for
	Altname2.
	
	NOTE: A "CNAME" record is not used, since DNS will look up the IP address of
	<Myserver>, returning the 2 IP addresses.
	
	See RFC 2181 for more information.
	
	Additional query words: DNS multi-homed multiple IP Addresses Multihomed multi homed
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
