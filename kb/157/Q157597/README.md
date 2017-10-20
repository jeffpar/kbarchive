---
layout: page
title: "Q157597: BUG: 16-bit RPC Problems with Novell's Client32 for Windows 95"
permalink: /kb/157/Q157597/
---

## Q157597: BUG: 16-bit RPC Problems with Novell's Client32 for Windows 95

{% raw %}

	Article: Q157597
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbAPI kbRPC kbSDKPlatform kbOSWin95bug kbGrpDSNet
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a 16-bit RPC application on Windows 95 uses SPX with the Client32 Netware
	Client from Novell, it may occasionally get RPC_CALL_FAILED errors (decimal 33)
	while making RPC calls to a server running on a Windows NT platform.
	
	CAUSE
	=====
	
	This error occurs on the return from the RPC call, when a large amount of data
	is being transferred. The packet size is negotiated incorrectly. As a result,
	when the size of the data to be transferred exceeds the underlying networks
	maximum frame size, the call fails.
	
	The frame sizes are dependent on the network architecture. For example, Ethernet
	networks use a size of approximately 1500 bytes, while Token Ring networks use
	4096 bytes.
	
	RESOLUTION
	==========
	
	As a workaround, programmers must ensure that the data they transfer does not
	exceed the MTU of any of the networks between the client and the server. For
	example, if a client on an Ethernet talks to a server on a Token Ring network,
	the data must be less than the Ethernet MTU per RPC call.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbAPI kbRPC kbSDKPlatform kbOSWin95bug kbGrpDSNet 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
