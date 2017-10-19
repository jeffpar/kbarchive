---
layout: page
title: "Q239424: Winsock Error: Can't Assign Requested Address"
permalink: /kb/239/Q239424/
---

## Q239424: Winsock Error: Can't Assign Requested Address

	Article: Q239424
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a new Web site in Internet Information Server (IIS) and you
	attempt to start the new site, the following error message may occur:
	
	  Winsock Error: Can't assign requested address
	
	CAUSE
	=====
	
	This error can occur because the IP address that was specified for the IP
	address of the new Web site is not bound to the Network Card on the server.
	
	RESOLUTION
	==========
	
	To resolve this issue, add the new IP address to the IP Protocol tab by
	performing the following steps:
	
	1. In Control Panel, open Network Properties and choose Protocols .
	
	2. Select TCP/IP Protocol and choose Properties.
	
	3. Click Advanced.
	
	4. Add the IP Address and the Subnet Mask.
	
	5. Click OK until you return to the desktop.
	
	6. Restart the Web server.
	
	MORE INFORMATION
	================
	
	If you have added all the IP addresses that you can through the interface, see
	the following article to add the additional IP addresses to the registry:
	
	  Q149426 Adding more than Five IP addresses to NIC in Windows NT
	
	The following article may also be of assistance regarding this issue:
	
	  Q150537 Windows Sockets Error Codes, Values, and Meanings
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
