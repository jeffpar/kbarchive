---
layout: page
title: "Q187049: Active Sessions Cannot Have Related Clients"
permalink: /kb/187/Q187049/
---

## Q187049: Active Sessions Cannot Have Related Clients

{% raw %}

	Article: Q187049
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	To open active sessions without clients connected to them: Start as many
	connections you want, and do nothing in your connections (no clock in taskbar).
	Minimize all your clients and switch off your client computer (to simulate a
	power outage). Now, restart your client computer. All of your lost connections
	will be reported as active by Terminal Server.
	
	This behavior is also observed when the Win16 client stops responding (hangs) in
	stress. The connection is no longer active. Yet, the server does not detect the
	loss of the connection. The session remains active and, thereby, does not allow
	a reconnect.
	
	
	CAUSE
	=====
	
	Expected behavior is that the session should change from an active to a
	disconnected status when the server no longer receives acknowledgement of packet
	receipt from the client. With the NetBEUI or IPX/SPX protocols, there are
	watchdog packets that get sent periodically. When these fail, they will mark the
	session as disconnected. TCP has a similar concept (KeepAlive packets). However,
	these are not used for several reasons. This includes the fact that the
	connection may be across a WAN link which may or may not always be up. In fact,
	in the case of a WAN link that is brought up on demand use of the KeepAlive
	packets might cause the link to be brought up and down when it is not really
	needed.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
