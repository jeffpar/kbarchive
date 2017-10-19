---
layout: page
title: "Q164856: XCON: MTA Fails to Pick Up DN of Servers with Similar Site Names"
permalink: /kb/164/Q164856/
---

## Q164856: XCON: MTA Fails to Pick Up DN of Servers with Similar Site Names

	Article: Q164856
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you calculate the routing on a server, the Distinguished Name (DN) for
	servers in other sites may be missing.
	
	CAUSE
	=====
	
	The site names are very similar. For example, suppose you set up three servers
	in a manner similar to the following:
	
	  Server1: organization name to Microsoft, site name to test40
	  Server2: organization name to Microsoft, site name to test40F
	  Server3: organization name to Microsoft, site name to test40G
	
	Connect Server 1 to Server 2 by means of the site connector, and replicate the
	directory. Connect Server 2 to Server 3 by means of the IMC connector, and
	replicate the directory.
	
	If you calculate the routing on Server 1, you will notice that the DN is missing
	for Server 3. The downstream sites are compared to the local site and there is a
	match, so the downstream sites are discarded.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem was corrected in the latest Microsoft
	Exchange Server 4.0 and 5.0 U.S. Service Packs. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
