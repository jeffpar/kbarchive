---
layout: page
title: "Q291123: XFOR: Error Message When Installing the Internet Mail Service"
permalink: /kb/291/Q291123/
---

## Q291123: XFOR: Error Message When Installing the Internet Mail Service

	Article: Q291123
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Internet Mail Service for Exchange Server 5.5 on a Windows
	2000 member server, the installation may fail, and you may receive the following
	error messages:
	
	  4067
	  The Internet Mail Service cannot start because the TCP/IP domain name was not
	  found during initialization.
	
	  -and-
	
	  4058
	  The Internet Mail Service cannot start because the name resolver cannot be
	  initialized. Check your network settings in the Control Panel to ensure that
	  you have set a domain name in the DNS dialog box of the TCP/IP configuration.
	
	RESOLUTION
	==========
	
	To resolve this issue, set the primary DNS suffix for this server:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  System.
	
	2. Click the Network identification tab, click Properties, and then click More.
	
	3. Type the new domain or subdomain for this computer in the "Primary DNS
	  suffix" box, click OK, click OK, and then click OK.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q247063 XFOR: DNS Error Installing Internet Mail Service on Windows 2000
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
