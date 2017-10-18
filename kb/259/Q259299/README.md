---
layout: page
title: "Q259299: 3270 LU/Pools Accumulate Using HIS 2000 with Active Directory"
permalink: kb/259/Q259299/
---

## Q259299: 3270 LU/Pools Accumulate Using HIS 2000 with Active Directory

	Article: Q259299
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Host Integration Server 2000 supports client connectivity using the
	Windows 2000 Active Directory for Windows 2000, Windows NT, Windows 98, and
	Windows 95 client computers, as well as the "sponsor" connection method
	supported by SNA Server. When a Host Integration Server 2000 client is
	configured to use the Active Directory, a 3270 application receives a user list
	that is inclusive of both user and group assignments.
	
	However, when the client is configured to use the "sponsor" method (in other
	words, locate servers using a subdomain), only the first match for the user is
	returned to the 3270 emulator (as in previous versions of SNA Server) in the
	following order:
	
	1. 3270 LU assignment to the specific user account.
	2. 3270 LU assignment to the first global group that the user is a member of.
	3. 3270 LU assignment to the first local group that the user is a member of.
	4. 3270 LU assignment to a well-known group (such as Everyone).
	
	MORE INFORMATION
	================
	
	The following configuration illustrates how the 3270 LU assignment works in Host
	Integration Server 2000:
	
	1. Windows 2000 User/Group configuration:
	
	  Domain: SERVER2000
	  User: User1
	  Group: Server2000Global1 (contains user = SERVER2000\User1)
	  Group: Server2000Global2 (contains user = SERVER2000\User1)
	  Group: Server2000Universal (contains group = Server2000Global1)
	
	2. Host Integration Server 2000 3270 LU assignments:
	
	  SERVER2000\User1:
	
	  LU00020 (specific 3270 LU)
	
	  Server2000Global1:
	
	  POOL1 (first session instance of 3270 LU Pool)
	  POOL1 (second session instance of 3270 LU Pool)
	
	  Server2000Global2:
	
	  POOL2 (session instance of 3270 LU)
	
	  Server2000Universal:
	
	  DEVPOOL (session instance of 3270 LU Pool)
	
	If a Host Integration Server 2000 client is configured to use the Active
	Directory, a 3270 emulator receives the following 3270 LU list when it runs
	under SERVER2000\User1:
	
	  LU00020
	  POOL1
	  POOL1
	  POOL2
	  DEVPOOL
	
	If the Host Integration Server 2000 client is configured to use a sponsor
	connection, the 3270 emulator receives the following 3270 LU list only:
	
	  LU00020
	
	The client can still open the other LUs assigned to them (for example, POOL1,
	POOL2, and DEVPOOL), but the user must manually request these LUs. This complies
	with the existing SNA Server 4.0 behavior.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q150454 INFO: Assigning Different LUs to Common Groups in SNA Server
	
	  Q158775 3270 Emulator Fails To Enforce SNA User/Group Assignments
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	
	=============================================================================
	
