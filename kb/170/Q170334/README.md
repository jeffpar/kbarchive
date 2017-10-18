---
layout: page
title: "Q170334: XADM: Troubleshooting Intrasite Directory Replication"
permalink: kb/170/Q170334/
---

## Q170334: XADM: Troubleshooting Intrasite Directory Replication

	Article: Q170334
	Product(s): Microsoft Exchange
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes steps for troubleshooting intrasite (multiple servers in
	one site) directory replication for Exchange Server.
	
	MORE INFORMATION
	================
	
	First, allow enough time. Even if you have run knowledge consistency checks,
	Update Now, and Request Now, directory replication can still take several hours
	to fully complete.
	
	If enough time has passed for replication to complete, use the following
	procedure to help determine where the problem is.
	
	1. Are the servers in the site in one domain or in different domains?
	
	  If the servers are in different Windows NT domains, there may be a security or
	  permissions problem. Confirm that the service account is in a domain that is
	  trusted by the domain or domains into which all other servers are installed.
	  This may have changed since Exchange was installed. Confirm that the trust is
	  working by performing some other cross-domain operation such as printing,
	  copying a file, and so on. You may even want to try breaking and
	  re-establishing the trust as a test.
	
	  If the servers are all in one Windows NT domain, then you may want to check
	  whether NTFS file system is being used. If NTFS partition is used, then
	  confirm that the service account has the proper permissions to access the
	  Exchsrvr directory.
	
	2. Can the servers in the site communicate properly (using PING and RPCPING)?
	
	  If Windows NT security is not the problem, probably there is a communications
	  problem. Make sure that the PING command, between the servers involved,
	  successfully returns the IP address if TCP/IP is being used. Make sure to
	  PING the servername, because Exchange also uses the servername when
	  contacting another Exchange Server computer.
	
	  Set up RPCPING with security to test RPC communications between the servers.
	  The Exchange directory communicates directly with other directories in the
	  site using RPC calls.
	
	  If PING or RPCPING fails, then the problem is more than likely with the
	  network. Check the protocols being used; the network configuration/topology
	  including media, routers, bridges, and frame relays; and so on.
	
	3. Are there any other error messages or anything in the event log?
	
	  Check the event viewer to see whether there are any warnings or stop messages
	  pertaining to replication. Also check the Microsoft Knowledge Base for
	  possible information pertaining to the event ID or the description of the
	  event IDs found in the event viewer.
	
	4. Turn up the diagnostics logging for MSExchangeDS on replication to Maximum.
	  This will increase the amount of information written to the event log and may
	  provide information that will help to solve the problem.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 1.00
	Issue type        : kbhowto
	
	=============================================================================
	
