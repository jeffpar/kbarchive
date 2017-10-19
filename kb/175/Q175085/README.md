---
layout: page
title: "Q175085: Programs That Use RPC Cannot Connect to the RPC Server"
permalink: /kb/175/Q175085/
---

## Q175085: Programs That Use RPC Cannot Connect to the RPC Server

	Article: Q175085
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork win95 kbAPI kbRPC kbSDKPlatform kbGrpDSNetkbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 programs that use Remote Procedure Calls (RPCs), such as the Remote
	Registry or System Monitor tool, may be unable to connect to an RPC server.
	
	CAUSE
	=====
	
	This problem can occur if all of the following conditions exists:
	
	- Transmission Control Protocol/Internet Protocol (TCP/IP) is the only protocol
	  installed.
	
	- Domain Name Service (DNS) name resolution is enabled.
	
	- The Fully Qualified Domain Name (the DNS host name plus the DNS domain name)
	  contains more than 31 characters.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork win95 kbAPI kbRPC kbSDKPlatform kbGrpDSNet kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
