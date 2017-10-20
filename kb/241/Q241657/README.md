---
layout: page
title: "Q241657: Client's Valid &lt;x&gt;.&lt;x&gt;.&lt;x&gt;.0 Host Address Disallowed on Network"
permalink: /kb/241/Q241657/
---

## Q241657: Client's Valid &lt;x&gt;.&lt;x&gt;.&lt;x&gt;.0 Host Address Disallowed on Network

{% raw %}

	Article: Q241657
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbWinNT4sp6fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Dynamic Host Control Protocol (DHCP) client is issued an
	<x>.<x>.<x>.0 address from a DHCP server on which the scope
	allows for a valid <x>.<x>.<x>.0 address (even though another
	address may be excluded) and receives the address successfully as an active DHCP
	client, the DHCP client's network connectivity may not function properly. Error
	messages may be generated when the DHCP client, or other network resources or
	services, attempt to establish a network connection.
	
	You may see the following error message when other network resources or services
	try to communicate across the network with the DHCP client:
	
	  Destination specified is invalid
	
	You may see the following error message when the DHCP client attempts to
	establish a connection with other network resources:
	
	  Request timed out
	
	CAUSE
	=====
	
	Although the DHCP client receives the address from the DHCP server, the address
	it receives is viewed as a "network address" instead of a client address on the
	network. The use of the <x>.<x>.<x>.0 address is disallowed as
	a client address even though it is a valid host address.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	For additional information about DHCP, scopes, and TCP/IP addressing and
	subnetting, please refer to the following Request for Comment (RFC) documents:
	
	- 950: Internet Standard Subnetting Procedure
	- 1918: Address Allocation for Private Internets
	- 2131: Dynamic Host Configuration Protocol
	- 2151: A Primer on Internet and TCP/IP Tools and Utilities
	- 1180: A TCP/IP Tutorial
	- 1219: On the Assignment of Subnet Numbers
	
	For information about obtaining RFCs, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q185262 How to Obtain Request for Comments Documents from the Internet
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
