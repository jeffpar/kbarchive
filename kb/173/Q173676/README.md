---
layout: page
title: "Q173676: Client Cannot Resolve MX Record via Microsoft DNS Server"
permalink: kb/173/Q173676/
---

## Q173676: Client Cannot Resolve MX Record via Microsoft DNS Server

	Article: Q173676
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Microsoft Windows NT version 4.0 Domain Name Service (DNS)
	server, your clients may not be able to successfully resolve mail server names
	to IP addresses.
	
	CAUSE
	=====
	
	The DNS client is sending a recursive query to the Microsoft DNS server, which
	is forwarding that query to a BIND-based DNS server. Some BIND-based DNS servers
	return a Start of Authority (SOA) record with a Responsible Authoritative
	Mailbox field instead of a Mail eXchange (MX) record. If the authoritative DNS
	server for the domain in which the mail server resides is one of these
	BIND-based DNS servers, the Microsoft DNS server will not return that record to
	the client.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
