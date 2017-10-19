---
layout: page
title: "Q149984: Accessing Network Drives Created in Services Under Windows NT"
permalink: /kb/149/Q149984/
---

## Q149984: Accessing Network Drives Created in Services Under Windows NT

	Article: Q149984
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to access network drives created in services. Even
	though network drives are global system resources, they can only be accessed by
	processes running under the security context which was used to establish the
	network connection.
	
	In fact the rule is very simple. A network connection is always made with a set
	of credentials (such as, domain name, user name, and password.) A process can
	access a network drive only if it has already validated the credentials used to
	establish the connection.
	
	This article can also be used to understand how to create pseudo-permanent
	connections with the scheduler.
	
	MORE INFORMATION
	================
	
	For the purpose of this article, assume the following configuration:
	
	- 1 Server acting as Primary Domain Controller (PDC) of a domain "DOMAIN"
	
	- A share on an other machine of the domain "ASERVER"
	
	- 1 Service running as User1 (Service1)
	
	- An other user "Auser"
	
	This article considers the following two cases and explains, for each case, who
	can access the network driver:
	
	1. Network Connection made with Service1
	
	2. Network Connection made with the option /USER
	
	1.Network Connection made with Service1
	---------------------------------------
	
	When a network connection is established under "Service1," the "User1"
	credentials are used (such as, domain "DOMAIN," user "User1" and their
	password):
	
	  NET USE X: \\ASERVER\SHARE
	
	The drive X: is mapped to \\ASERVER\SHARE and can only be used by Processes which
	have validated this credentials of DOMAIN\User1. Therefore only the following
	processes can access the network drive X:
	
	- The service Service1
	
	- Any other service running under the security context of "User1"
	
	- Any process when logged on with the credentials of "User1"
	
	2.Network Connection made with the option NET USE /USER
	-------------------------------------------------------
	
	When a network connection is made with NET USE /USER:'Domain\Auser', the
	redirector sends an Server Message Block (SMB) frame "C Session setup" to the
	server in order to validate the credentials of "Domain\Auser." The server
	creates an access token for this user and replies to the redirector with an SMB
	frame "R Session setup" including a user ID that will be used in all consecutive
	SMB frames related to the connection.
	
	  NET USE X: \\ASERVER\SHARE /USER:DOMAIN\Auser
	
	The drive X: is mapped to \\ASERVER\SHARE and can only be used by processes which
	have validated the credentials of DOMAIN\AUser. Therefore only the following
	processes can access the network drive X:
	
	- The service Service1
	
	- Any other service running under the security context of "Auser"
	
	- Any process when logged on with the credentials of "Auser"
	
	Q103390 Network Access Validation Algorithm and Example
	
	Additional query words: prodnt schedule AT
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
