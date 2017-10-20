---
layout: page
title: "Q140026: RECEIVE_ALLOCATE Hangs on Windows NT SNA Server Client"
permalink: /kb/140/Q140026/
---

## Q140026: RECEIVE_ALLOCATE Hangs on Windows NT SNA Server Client

{% raw %}

	Article: Q140026
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a 32-bit Windows APPC application on an SNA Server Windows NT
	client, the following symptoms occur:
	
	NOTE: These symptoms do not occur when you run the application on the SNA
	server.
	
	- A transaction program name of SASRMT is registered as an autostarted
	  invokable transaction program (with a service type of 0x05). An incoming
	  attach is received which starts up the application.
	
	- This application then issues a RECEIVE_ALLOCATE on the SASTP62 TP name, which
	  is configured as a queued operator started transaction program (with a
	  service type of 0x1A). However, this receive allocate hangs indefinitely.
	
	The SNA Server receives the attach request on the SASTP62 name, though it is
	never routed to the Windows NT client computer.
	
	This problem does not occur with autostarted invokable transaction programs.
	
	NOTE: It is possible to configure a Timeout value for the invokable transaction
	program within the Windows NT registry (for Win32 applications) or WIN.INI (for
	Win 3.x applications) so that the RECEIVE_ALLOCATE does not wait forever. See
	the SNA Server APPC and CPIC Programmer's Guide, Chapter 2 for information about
	the Timeout parameter.
	
	CAUSE
	=====
	
	The SNA Server Windows NT client does not promptly notify SNA Server that the
	operator started transaction program was started. When the attach request
	arrives at the SNA Server from the remote system, the server does not know which
	client to route the request to.
	
	RESOLUTION
	==========
	
	Install the latest SNA Server U.S. Service Pack.
	
	An update to the SNA Server Windows NT client software corrects this problem by
	reducing the time to send service table updates.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211
	Version           : WINDOWS:2.11
	
	=============================================================================
	

{% endraw %}
