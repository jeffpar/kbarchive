---
layout: page
title: "Q153939: WFW TCPIP32b Client Does Not Hold Lease if DHCP Not Available"
permalink: /kb/153/Q153939/
---

## Q153939: WFW TCPIP32b Client Does Not Hold Lease if DHCP Not Available

{% raw %}

	Article: Q153939
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.11a,3.11b
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A computer running Windows For Workgroups (WFWG) with TCPIP32 DHCP client
	installed and that is also running the Shiva Remote client that is supplied with
	Microsoft Exchange, is unable to access TCP/IP resources after being restarted.
	Carrying out an ipconfig command from an MS-DOS command prompt shows an IP
	address of 0.0.0.0. The client previously had a valid DHCP lease before
	restarting.
	
	CAUSE
	=====
	
	The client does not retain the previous lease after being restarted. Instead, it
	issues a new discover <request packet?> each time it is restarted. The
	DHCP server was temporarily unavailable when the WFWG client restarted and was
	unable to lease a new address.
	
	There are 2 files that may have been replaced as a hotfix, Vdhcp.386 and
	Vnbt.386. The file dates would be from 1996. These files are necessary for the
	Shiva remote client to accept a TCP/IP address from a PPP server. However, these
	files are the cause of the client not retaining a valid lease after restart.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups TCPIP32
	version 3.11b. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.11,3.11a,3.11b
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
