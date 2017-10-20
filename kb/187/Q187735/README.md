---
layout: page
title: "Q187735: Delay in NetBIOS Connections from a Multihomed Computer"
permalink: /kb/187/Q187735/
---

## Q187735: Delay in NetBIOS Connections from a Multihomed Computer

{% raw %}

	Article: Q187735
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a NetBIOS connection is established from a multihomed computer running
	TCP/IP protocol to another computer, it might experience a delay in completing
	the connection.
	
	On versions of Windows NT earlier than Windows NT 4.0 Service Pack 3 (SP3), a
	multihomed computer will always try to establish a NetBIOS session using the
	primary transport bound to the redirector before it tries other transports.
	
	For additional information about this feature, please see the following article:
	
	  ARTICLE-ID: Q166159
	  TITLE : NetBIOS Connections from a Multihomed Computer
	
	CAUSE
	=====
	
	When the redirector accepts the first transport that responds to complete the
	call, it will issue cancel calls to the primary transport and all other
	transports if applicable. It will then wait until all cancels are returned
	before it continues with the session setup process on the accepted transport.
	NetBT does not respond to a cancel call immediately until its session setup is
	complete or times out (that is, going through all its name resolution methods).
	This will cause a redirector delay in the session setup on the accepted
	transport.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Windows NT service pack.
	
	This fix should have the following time stamp:
	
	+---------------------------------------------------+
	| 12/18/97 | 08:43p | 119,856 | Netbt.sys | (Intel) | 
	+---------------------------------------------------+
	| 12/18/97 | 08:40p | 220,048 | Netbt.sys | (Alpha) | 
	+---------------------------------------------------+
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	This problem and hotfix do not apply to Windows Sockets-based connections. When
	a Windows Sockets application places a call from a multi-homed host the best
	local source address is chosen automatically (using the route table), unless the
	application specifies otherwise by choosing a local IP address to use in the
	bind() call.
	
	This behavior was changed in Windows NT Service Pack 3, where you can set a
	registry parameter that causes the redirector to accept the first transport to
	complete a call, rather than waiting for success or failure on the primary
	transport.
	
	Additional query words: Netbios wait
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
