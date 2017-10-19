---
layout: page
title: "Q164174: NET0133 Error When Loading TINYRFC"
permalink: /kb/164/Q164174/
---

## Q164174: NET0133 Error When Loading TINYRFC

	Article: Q164174
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2.2, 3.0,WFWG:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load TINYRFC (which is part of the TCP/IP 1.0 stack for MS-DOS
	clients), you may get the following error:
	
	  NET0133: Badly Formed IP Address
	
	CAUSE
	=====
	
	This error is caused by a corrupt LMHOSTS file.
	
	RESOLUTION
	==========
	
	To resolve this problem, create a new LMHOSTS file or strip the corrupt entries
	out of the original LMHOSTS file. Quite often, the corruption can be stripped
	from the LMHOSTS file by simply deleting the End Of File (EOF) marker.
	
	Additional query words: networking
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbLanManSearch kbWFWSearch kbNetworkClientSearch kbWFW311 kbLanMan220c kbNetworkClient300DOS
	Version           : 2.2, 3.0,WFWG:3.11
	
	=============================================================================
	
