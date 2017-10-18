---
layout: page
title: "Q176027: Event ID 2026 Logged by FPNW Server"
permalink: kb/176/Q176027/
---

## Q176027: Event ID 2026 Logged by FPNW Server

	Article: Q176027
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbinfo kbArtTypeINF
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NetWare clients are unable to log on to a Windows NT Server computer running
	File and Print Services for NetWare (FPNW), and the following error is recorded
	in the Event Log on the Windows NT Server:
	
	  Event ID 2026:
	  The server detected a request taking too long for client
	  not-logged-in on connection 52, the connection has been disconnected.
	
	NOTE: The connection number may vary with this error.
	
	CAUSE
	=====
	
	This error is caused when the FPNW service times out a request from a client
	because it is taking too much time to process the client's request.
	
	When the FPNW server can not complete the request, it will send a busy response
	to the client, and the client will resend the request. By default, FPNW will
	send 240 busy responses to a client before logging this error and disconnecting
	the client.
	
	This problem can occur when the FPNW server is unable to contact a domain
	controller from a trusted domain. When attempting to authenticate NetWare
	Compatible users, the FPNW server hands off the request to the local security
	authority (LSA). Because there is no domain name specified in a NetWare login
	request, the LSA will search its own account database, then the account
	databases on each trusted domain for a matching user account.
	
	When the LSA is unable to contact a domain controller from a trusted domain, the
	login process on the FPNW server will timeout, fail the login request, and log
	the error noted above in the Event Log.
	
	
	WORKAROUND
	==========
	
	To work around this problem, delete and recreate the trust relationships between
	the domain of the FPNW server and any of its trusted domains. If a trust cannot
	be established because a domain controller of the remote domain cannot be
	contacted, do not recreate this trust until proper communications with the
	remote domain can be established.
	
	======================================================================
	Keywords          : kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351 kbFPNW400
	Version           : WinNT:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
