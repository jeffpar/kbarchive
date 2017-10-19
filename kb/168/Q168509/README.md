---
layout: page
title: "Q168509: Setting Up WINS Replication Between Untrusting Domains"
permalink: /kb/168/Q168509/
---

## Q168509: Setting Up WINS Replication Between Untrusting Domains

	Article: Q168509
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up Windows Internet Name Service (WINS)
	replication between two or more WINS servers in separate, untrusting domains.
	
	MORE INFORMATION
	================
	
	It is possible to set up WINS replication between one or more WINS servers in
	untrusting domains without having a valid user account in the untrusting
	domain.
	
	To configure replication, the administrator for each WINS server must use WINS
	manager and set their respective server(s) to allow replication with the WINS
	server in the remote domain(s). (Note: The following steps must be performed at
	each WINS server.)
	
	To configure replication, perform the following steps:
	
	1. Start WINS manager and select the IP address of the WINS server that you
	  administer.
	
	2. On the Server menu, click Replication Partners, and then click Add.
	
	3. Type the IP address of the remote WINS server (with which replication will
	  occur).
	
	4. Click OK, and a Validate WINS Server message will appear. Type the computer
	  name of the opposite WINS server, and then click OK.
	
	5. Select the IP address of the computer just added (with which replication is
	  desired).
	
	6. Set the Replication options at the bottom of the screen (Set as Push, Pull
	  partner, or both), and then click OK.
	
	7. After each administrator has configured their respective WINS server and
	  clicked OK, it is possible to use the Replicate Now option to start
	  replication.
	
	NOTE: Replication will occur and the remote WINS server's database will be
	viewable under the Show Database option. However, without an account with proper
	permissions in all domains or servers involved, it is not possible to use WINS
	manager to make changes to the remote WINS database.
	
	Replication can also occur between two separate stand-alone servers that
	participate in a workgroup by using the procedures listed above.
	
	Additional query words: Replicate Domain trust relationship push pull partner untrusted replication
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
