---
layout: page
title: "Q130974: WFW Err Msg: Unable to Contact IP Driver, Error Code 0"
permalink: kb/130/Q130974/
---

## Q130974: WFW Err Msg: Unable to Contact IP Driver, Error Code 0

	Article: Q130974
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 3rdpartynet msnets kb3rdPartyNetClient
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install TCP/IP-32 3.11a, you may experience the following problems:
	
	- When you use the PING utility, you receive the following error message:
	
	  Unable to contact IP driver, error code 0
	
	- When you use the IPCONFIG utility, you receive the following error message:
	
	  Error: Failed to retrieve required information from TCP/IP
	
	CAUSE
	=====
	
	These errors can occur for either of the following reasons:
	
	- You are using the TCP/IP-32 3.11a and NetBEUI protocols together on an IPXODI
	  support driver (Ethernet, Token Ring, or ArcNet).
	
	- The TCP/IP protocol is not configured correctly.
	
	RESOLUTION
	==========
	
	To work around this problem, remove the NetBEUI protocol, or configure the
	TCP/IP protocol correctly.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.11 tcpip
	
	======================================================================
	Keywords          : 3rdpartynet msnets kb3rdPartyNetClient 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
