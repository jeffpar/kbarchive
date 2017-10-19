---
layout: page
title: "Q119375: Shiva Remote 3.1.0 and TCP/IP-32"
permalink: /kb/119/Q119375/
---

## Q119375: Shiva Remote 3.1.0 and TCP/IP-32

	Article: Q119375
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The ODI drivers (DIALODI) that are provided with Shiva Remote version 3.1.0 do
	not work with Microsoft TCP/IP-32. The Shiva Remote NDIS driver (SDIALIN) does
	function properly with TCP/IP-32.
	
	MORE INFORMATION
	================
	
	When a system is configured using Microsoft TCP/IP-32 and Shiva's DIALODI
	driver, you will only be able to PING the loopback address (127.0.0.1) and the
	workstation's own IP Address. PING will fail with all other addresses. In order
	for Shiva Remote to function properly with TCP/IP-32, the Shiva NDIS driver must
	be used.
	
	For additional information on Shiva Remote, call Shiva Technical Support at (617)
	270-8400.
	
	
	Shiva Remote is manufactured by Shiva, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: wfw wfwg prodtcp32 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : 1.00
	
	=============================================================================
	
