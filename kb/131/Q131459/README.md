---
layout: page
title: "Q131459: INFO: MS-DOS-Based RPC Application Cannot Use TCP/IP"
permalink: /kb/131/Q131459/
---

## Q131459: INFO: MS-DOS-Based RPC Application Cannot Use TCP/IP

{% raw %}

	Article: Q131459
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbRPC kbSDKPlatform kbLanMan kbOSWin311 kbGrpDSNet
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An MS-DOS-based (16-bit) RPC application cannot use TCP/IP as the protocol
	sequence when running under Windows for Workgroup 3.11 with Microsoft's
	TCP/IP-32 driver or Windows NT's WOW layer.
	
	MORE INFORMATION
	================
	
	MS-DOS-based RPC applications that use TCP/IP as the protocol sequence to
	communicate are designed to run only over Microsoft's real mode TCP/IP driver
	for Microsoft LAN Manager client software for MS-DOS or any other compatible
	real-mode TCP/IP driver implementation.
	
	Windows for Workgroup's TCP/IP-32 protocol driver and Windows NT's WOW layer do
	not provide the same real-mode interface for TCP/IP as provided by the Microsoft
	LAN Manager TCP/IP driver.
	
	When an MS-DOS-based RPC application tries to use TCP/IP as the protocol sequence
	under Windows for Workgroups with Microsoft's TCP/IP-32 driver or Windows NT's
	WOW layer, RPC run time report exception 27(0x1b).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbRPC kbSDKPlatform kbLanMan kbOSWin311 kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK311
	Version           : WINDOWS:3.11
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
