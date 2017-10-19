---
layout: page
title: "Q272998: XADM: Setup Doesn't Work with 0XC103FC93"
permalink: /kb/272/Q272998/
---

## Q272998: XADM: Setup Doesn't Work with 0XC103FC93

	Article: Q272998
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to install an Exchange 2000 server into an existing Exchange Server
	5.5 site, you may receive the following error message:
	
	  ::ScFindLDAPPortNumberUsingDAPI
	  (K:\admin\src\libs\exsetup\dapiaccess.cxx:682)
	  Error code 0XC103FC93 (64659): Could not bind to the Microsoft Exchange
	  Directory server <servername>
	
	CAUSE
	=====
	
	This behavior occurs because the Exchange Server 5.5 computer is not using or
	does not have the correct Domain Name System (DNS) information.
	
	RESOLUTION
	==========
	
	Either configure the Exchange Server 5.5 computer to use DNS, or configure HOSTS
	files for the servers.
	
	MORE INFORMATION
	================
	
	How to identify:
	
	The error reports a bind issue; use LDP to bind to the Exchange Server 5.5
	directory. Then, install Network Monitor and perform a trace of the bind to the
	server. In this trace, you will see the endpoint=success (in the packet) and
	bind=success; remote procedure call (RPC) bindback success or failure from
	remote host is not seen.
	
	This behavior is a result of a DNS issue, which explains why there is not a
	bindback or bindback failure, because the request never made it from the server.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Component         : SRVRSetup
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
