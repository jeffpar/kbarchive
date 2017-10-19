---
layout: page
title: "Q154485: Disabling Keep Alive Connections in IIS 1.0"
permalink: /kb/154/Q154485/
---

## Q154485: Disabling Keep Alive Connections in IIS 1.0

	Article: Q154485
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Internet Information Server (IIS) allows "keep alive connections"
	(that is, persistent connections) by default. If clients do not close keep alive
	connections, this may result in a large number of TCP connections in the
	ESTABLISHED state on the IIS server. These connections can be identified by
	running "netstat -n" to see whether a large number of connections exist in the
	ESTABLISHED state.
	
	Because IIS allows keep alive connections by default, any HTTP requests from a
	client can result in connections to the server that are not closed until they
	are either reset by the client, or timed out by the server. The default timeout
	for established connections in IIS is 900 seconds (15 minutes).
	
	CAUSE
	=====
	
	IIS allows keep alive connections by default.
	
	MORE INFORMATION
	================
	
	IIS allows keep alive connections as an optimization to reduce the total number
	of TCP connections a client needs to download all the elements (Images, Audio,
	etc.) defined on a page. Keep alive connections allow clients to re-use
	established TCP connections to the HTTP server to download several elements on a
	page. Without keep alive connections a separate TCP connection is established to
	get each element on a page, increasing the load on the HTTP server.
	
	NOTE: A description of the TCP state machine can be found in Internet RFC
	
	1. A description of the HTTP/1.0, and HTTP/1.1 protocol can be found
	
	on http://www.w3.org/pub/WWW/Protocols
	
	RESOLUTION
	==========
	
	Obtain the fix described below in the STATUS section, and then modify the
	registry according the following steps. W3svc.dll was modified to accept a
	registry entry that disables support for keep alive connections.
	
	The new registry entry is AllowKeepAlives.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run "Net Stop w3svc"
	
	2. Run Registry Editor (REGEDT32.EXE).
	
	3. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \SYSTEM\CurrentControlSet\Services\W3svc\Parameters
	
	  The parameters described below are located under this Registry subkey.
	
	  The following describes a new value for the W3SVC service parameters key that
	  can only be set by adding an entry in Registry Editor. This value entry does
	  not appear by default in the Registry, so you must add an entry if you want
	  to change its default value. The W3SVC service must be restarted for changes
	  to take effect.
	
	  AllowKeepAlives
	     Data Type = REG_DWORD
	     Value:
	              0 - Do not allow keep alive connections.
	    (Default) 1 - Allow keep alive connections.
	
	4. Run "Net Start w3svc"
	
	STATUS
	======
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
