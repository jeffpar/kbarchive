---
layout: page
title: "Q137884: Workgroups and Windows 95 Clients Not Validated with DNS"
permalink: kb/137/Q137884/
---

## Q137884: Workgroups and Windows 95 Clients Not Validated with DNS

	Article: Q137884
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows 95 and Windows for Workgroups 3.11 clients are not validated across a
	router on a domain using DNS.
	
	CAUSE
	=====
	
	The clients send out numerous DNS Standard Query packets to resolve the Domain
	name defined during logon. They receive the correct IP address for the domain
	controller if it is correctly defined in DNS, but do not send a Query for PDC
	packet until after the following error has already been received:
	
	  No Domain Server was available to validate your password. You may not be able
	  to gain access to some network resources.
	
	Even if an LMHOSTS file is correctly defined, the logon validation fails.
	
	WORKAROUND
	==========
	
	Use a WINS server for NetBIOS name resolution, or do not use DNS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95 and Windows for
	Workgroups version 3.11. We are researching this problem and will post new
	information herein the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
