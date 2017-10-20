---
layout: page
title: "Q156441: NetBIOS Applications Stop Receiving Data Running on TCP/IP 32"
permalink: /kb/156/Q156441/
---

## Q156441: NetBIOS Applications Stop Receiving Data Running on TCP/IP 32

{% raw %}

	Article: Q156441
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	NetBIOS applications running on Microsoft TCP/IP 32 for Windows For Workgroups
	may stop receiving data from server-side applications. The problem will only
	occur if the client pauses before receiving data for more than one NetBIOS
	Session KeepAlive interval.
	
	NOTE: The default NetBIOS Session KeepAlive interval for TCP/IP 32 is 60 minutes.
	
	CAUSE
	=====
	
	The problem occurs because of the NetBIOS over TCP/IP Vxd's (VNBT) handling of
	Session KeepAlive packets when application data is also pending in TCP. If VNBT
	posts a receive for application data pending in TCP and a NetBIOS Session
	KeepAlive packet also resides in the TCP pending queue, VNBT would incorrectly
	determine the state of the lower TCP connection resulting in all future NetBIOS
	Receives being placed in a pending state.
	
	RESOLUTION
	==========
	
	Vnbt.386 was modified to correctly handle NetBIOS KeepAlive packets in TCP's
	pending queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP 32 version 3.11B. A
	supported fix is now available, but is not fully regression tested and should be
	applied only to systems experiencing this specific problem. Contact Microsoft
	Product Support Services for more information.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
