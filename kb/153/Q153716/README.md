---
layout: page
title: "Q153716: Permissions Required to Perform RAS Administration"
permalink: /kb/153/Q153716/
---

## Q153716: Permissions Required to Perform RAS Administration

	Article: Q153716
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to perform full administration of a Windows NT Remote Access Service
	(RAS) server, you must be an Administrator or a member of both the Server
	Operators and Account Operators groups.
	
	MORE INFORMATION
	================
	
	To fully administer a RAS server in a domain, you must use a user account that
	is a member of the Domain Administrators group, or you must use a user account
	that is a member of both the Server Operators and Account Operators groups.
	
	A user in the Server Operators group is able to start and stop the RAS Server
	service, disconnect RAS clients, and send messages to connected RAS clients. A
	user who is only a member of the Server Operators group cannot grant or revoke
	RAS dial-in permission to a user account.
	
	A user in the Account Operators group is able to grant and revoke RAS dial-in
	permission to a user account. A user who is only a member of the Account
	Operators group cannot start and stop the RAS Server service, disconnect RAS
	clients, or send messages to connected RAS clients.
	
	A user who is a member of both the Server Operators group and Account Operators
	group has the same administrative abilities regarding a RAS server as a user who
	is a member of the Domain Administrators group.
	
	To perform any administration of a RAS server on a Windows NT Workstation or
	Windows NT stand-alone server using a local machine account, the account must be
	a member of the local Administrators group.
	
	Additional query words: prodnt security dun dial-up
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
