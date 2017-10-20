---
layout: page
title: "Q163055: DHCP Client May Fail with WinNT 4.0 SP2 Multinetted DHCP Server"
permalink: /kb/163/Q163055/
---

## Q163055: DHCP Client May Fail with WinNT 4.0 SP2 Multinetted DHCP Server

{% raw %}

	Article: Q163055
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A DHCP client may fail to obtain a DHCP lease if multiple logical subnets exist
	and there is a Windows NT 4.0 Service Pack 2 (SP2) DHCP server on the network.
	Also, you may receive the following error message when you run the IPCONFIG
	/RENEW command:
	
	  Access Denied - Renewing Adapter "xxxx"
	
	Prior to Service Pack 2, when multiple logical subnets existed, the DHCP client
	was able to receive the DHCPOFFER and send a DHCPREQUEST to the offering DHCP
	server. After applying Service Pack 2, the DHCP servers on other logical subnets
	issue a DHCPNACK, which forces the client to release the address and perform a
	DHCPDISCOVER again.
	
	In addition to the above error message, you may receive the following event log
	messages:
	
	On the Client
	-------------
	
	  Event ID: 1006
	  Source: Dhcp
	  Type: Warning
	  Category: None
	  Description: DHCP service is shutting down. The following error
	               occurred: Access is denied.
	
	On the Server
	-------------
	
	  Event ID: 1011
	  Source: DhcpServer
	  Type: Warning
	  Category: None
	  Description: The DHCP server issued a NACK to the client (MAC Address of
	               the Requesting Client) for the address (Requested IP
	               Address) request.
	
	CAUSE
	=====
	
	Windows NT 4.0 SP2 DHCP servers issue a DHCPNACK to any DHCPREQUEST that does
	not appear to be valid for the subnet. This problem occurs when you are using
	multiple logical IP subnets (multinetting) and two DHCP servers on the same
	physical network are serving two different logical subnets.
	
	For example, a client broadcasts DHCPREQUEST and receives ACK from server A and
	NACK from server B. Because there is no communication between server B and
	server A, server B is not aware of the existence of server A. If it does not
	send a NACK, then a client who has just moved to this network will never know
	that its old address is invalid.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	To workaround this issue, use one of the following:
	
	- Windows NT 4.0 SP2 includes the ability to create DHCP superscopes. After
	  creating a scope and defining each logical subnet in a superscope, the DHCP
	  server recognizes the DHCPREQUEST as valid and will not NACK the request.
	
	  For example, you have a multinet environment with the following DHCP servers
	  on a single LAN:
	
	  192.168.10.1
	  192.168.20.1
	  192.168.30.1
	
	  On each DHCP server you must create a superscope with a minimum of one IP
	  address from each of the 10.x, 20.x and 30.x scopes. Be sure not to duplicate
	  IP addresses in the scopes.
	
	  -or-
	
	- Another possibility is to take advantage of the superscoping feature and
	  create one DHCP server to serve all scopes.
	
	For more information on superscopes, please see the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q161571
	  TITLE : Using DHCP "Superscopes" to Serve Multiple Logical Subnets
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words: 4.00 prodnt sp2 multinet
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
