---
layout: page
title: "Q198550: SP4 Changes DNS Name Resolution"
permalink: /kb/198/Q198550/
---

## Q198550: SP4 Changes DNS Name Resolution

{% raw %}

	Article: Q198550
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0a
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After applying Windows NT 4.0 Service Pack 4 (SP4), the DNS resolver (DNR)
	changes how it uses DNS servers to resolve names.
	
	MORE INFORMATION
	================
	
	With previous versions of Windows NT 4.0, the DNR sends a DNS request to the
	first DNS server address listed in the DNS server search order in the TCP/IP DNS
	Properties dialog box. If no response is received within 5 seconds, it then
	sends a DNS request to the second DNS server address configured. The total delay
	for DNS name resolution to timeout is typically 45 seconds or more.
	
	After Windows NT 4.0 SP4 is installed, the DNR sends a DNS query to the first DNS
	server(s) address configured in all of three possible lists. If no response is
	received within 1 second, the DNR requeries the first DNS server(s) and sends
	the same query to all other DNS server addresses configured on the client. If
	the DNS resolver does not get a response from any DNS server within 2 seconds,
	it resends the query to all DNS servers configured and waits for 4 seconds. If
	no response is received, the DNR resends the request again to all DNS servers
	configured and waits for 8 seconds. The total delay for DNS name resolution
	timeout is now 15 seconds.
	
	Depending on the name being resolved, it may repeat the process adding the domain
	name configured on the client and devolving the specified domain name two labels
	deep. Also if DNS fails and NetBIOS name resolution is used an additional 3
	seconds can be used.
	
	The DNS server(s) queried from these 3 possible DNS Server lists:
	
	- Static (configured through Control Panel)
	
	- DHCP (obtained through all DHCP-enabled Adapters)
	
	- RAS (obtained through dial-up networking)
	
	
	If you have multiple adapters of the same type, the above order is further
	controlled by the adapter binding order, controllable through the Bindings tab.
	
	A new (post SP4) version of the client DNR, which adds a 0.5 second delay between
	querying different DNS servers, is available. This allows strict adherence to
	the DNS search order, but adds (<N>-1)*.5 seconds to the overall timeout
	delay, where <N> is total number of DNS name servers configured on the
	client. With this fix the total time spent on DNS name timeout useS the
	following algorythm:
	
	Depending on the configuration the total timeouts for a particular query can vary
	from (1+2+4+8=15) seconds to at worst
	(0.5+0.5+1+0.5+0.5+2+0.5+0.5+4+0.5+0.5+8=19) seconds. For additional
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q195611 DNS Client Does Not Try All Servers in DNS Service List
	
	This fix also helpS in instances of nonconvergent namespace; that is, some name
	servers authoritative for the zone do not contain zone information and are
	replying with NX domain.
	
	Additional query words: smallbiz sp4
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : :4.0,4.0a
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
