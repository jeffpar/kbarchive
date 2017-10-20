---
layout: page
title: "Q290522: DNR Local Network Priority Sorting Does Not Work"
permalink: /kb/290/Q290522/
---

## Q290522: DNR Local Network Priority Sorting Does Not Work

{% raw %}

	Article: Q290522
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the Domain Name Resolver (DNR) and how it does not
	perform local network priority sorting with some network configurations.
	
	MORE INFORMATION
	================
	
	This behavior can only occur if you have the following configurations:
	
	- You have a multihomed Domain Name System (DNS) client computer that has more
	  than 10 network interfaces configured.
	
	- Dynamic Host Configuration Protocol (DHCP) is enabled on at least one of
	  these network interfaces.
	
	- You use a remote DNS server (located in a separate Internet Protocol [IP]
	  segment).
	
	- You use a multihomed remote DNS client.
	
	DNR does not sort the list of IP addresses (returned by the DNS server) to select
	an address on the local subnet. Instead, DNR selects the first address on the
	list (the type of behavior DNR had before Windows NT 4.0 Service Pack 4 [SP4]).
	
	DNR in Windows NT 4.0 SP4 or later, sorts the list of IP addresses that it
	receives from the DNS server for a multihomed host into the "best" order by
	examining the route table of the computer on which it runs. For example, if any
	of the IP addresses in the list (returned by the DNR) are on a common subnet
	with the client, that IP address is moved to the top of the list.
	
	For additional information about this feature, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q182644 DNR Now Sorts IP Addresses for a multihomed Host Before Returning the
	  List to Winsock Applications
	
	If you change all network interfaces to static IP addresses or reduce the number
	of network interfaces to eight or less, your computer does not have the
	preceding behavior.
	
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q198550 SP4 Changes DNS Name Resolution
	
	  Q196500 New Registry Value to Disable DNR Local Network Priority Sorting
	
	Additional query words: Round Robin DNS many NIC
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
