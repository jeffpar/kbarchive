---
layout: page
title: "Q119373: Using a Numeric Hostname with TCP/IP-32"
permalink: kb/119/Q119373/
---

## Q119373: Using a Numeric Hostname with TCP/IP-32

	Article: Q119373
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
	
	In order to use a Hostname that is numerical (for example, 1 ) you must use
	single quotation marks (for example, '1') on the command line and in the HOSTS
	file where the name is defined.
	
	MORE INFORMATION
	================
	
	Example
	-------
	
	If you want to assign the IP Address 44.44.45.1 to the Hostname 3 you would use
	the following command when you try to PING the Host:
	
	  PING '3'
	
	You also need to make sure the following entry is in the HOSTS file:
	
	  44.44.45.1 '3'
	
	If you do not use single quotation marks, TCP/IP-32 interprets the Hostname as an
	IP Address and the request will time-out.
	
	Additional query words: wfw wfwg prodtcp32 1.00 WFWG
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : 1.00
	
	=============================================================================
	
