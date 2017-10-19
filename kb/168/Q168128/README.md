---
layout: page
title: "Q168128: XADM: Err Msg: DS_E_COMMUNICATIONS_PROBLEM"
permalink: /kb/168/Q168128/
---

## Q168128: XADM: Err Msg: DS_E_COMMUNICATIONS_PROBLEM

	Article: Q168128
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure the Directory Replication Connector between two untrusted
	domains, you may see one of the following error messages:
	
	  DS_E_COMMUNICATIONS_PROBLEM
	
	-OR-
	
	  DS_E_INSUFFICIENT_ACCESS_RIGHTS
	
	Sample configuration:
	
	  DOMAINa/SiteA/ServerA - Exchange Server (Windows NT PDC)
	  DOMAINb/SiteB/ServerB - Exchange Server (Windows NT Member Server)
	
	You can successfully configure a Directory Replication Connector on the member
	ServerB (Site2) if you select NOT to configure the directory replication
	connector on Server A. When you attempt to create the directory replication on
	ServerA (Windows NT PDC) to ServerB (Windows NT member server) you may receive
	the following error:
	
	  DS_E_COMMUNICATIONS_PROBLEM.
	
	RESOLUTION
	==========
	
	1. Configure both directory replication connectors from ServerB.
	
	2. Create a duplicate account with the same name and password on ServerA (the
	  Windows NT PDC) that also resides on ServerB. This account will be used to
	  configure the Directory Replication Connector on Server A from Server B.
	
	3. On ServerA, give the newly created user account permissions at the
	  Organization, Site and Configuration containers. Select role of Permissions
	  Admin at each level.
	
	4. Log on to ServerB with the account that was created on ServerA.
	
	5. On ServerB (the Windows NT member server), in the Exchange Server
	  Administrator program, create a new directory replication connector. Click
	  Yes to configure the directory replication connector on ServerA.
	
	MORE INFORMATION
	================
	
	Ensure that mail is flowing from SiteA to SiteB and from SiteB to SiteB before
	you attempt to set up the directory replication connector.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
