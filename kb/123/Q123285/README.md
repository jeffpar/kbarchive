---
layout: page
title: "Q123285: IPCONFIG Displays Invalid Results"
permalink: /kb/123/Q123285/
---

## Q123285: IPCONFIG Displays Invalid Results

	Article: Q123285
	Product(s): Microsoft Windows NT
	Version(s): 3.00 2.20C
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	3.00 2.20C
	
	MS-DOS
	
	kbnetwork kbtool
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft LAN Manager, version 2.2c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The IPCONFIG utility displays invalid results for Microsoft Network Client for
	MS-DOS version 3.0 and Microsoft LAN Manager for MS-DOS version 2.2c.
	
	CAUSE
	=====
	
	This problem occurs when you configure your computer as a DHCP client and then
	later modify the IP configuration to be a non-DHCP client. If you execute the
	IPCONFIG utility, the results displayed will reflect the old DHCP configuration
	values and not the current statically assigned IP addresses.
	
	WORKAROUND
	==========
	
	To work around this problem, use the PROTOCOL.INI file to determine the current
	statically assigned IP addresses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Network Client for
	MS-DOS version 3.0 and Microsoft LAN Manager for MS-DOS version 2.2c. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodlm 2.20c
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbLanManSearch kbNetworkClientSearch kbLanMan220c kbNetworkClient300DOS
	Version           : 3.00 2.20C
	
	=============================================================================
	
