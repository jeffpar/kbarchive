---
layout: page
title: "Q148377: Available Servers List Blank Running Rconsole 4.1 with FPNW"
permalink: kb/148/Q148377/
---

## Q148377: Available Servers List Blank Running Rconsole 4.1 with FPNW

	Article: Q148377
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Rconsole 4.1 in a File and Print Services for NetWare (FPNW) and
	NetWare network environment, the Available Servers list is not available (or
	blank).
	
	CAUSE
	=====
	
	This is a Netware Diagnostics Request, basically a remote SNMP-like request to
	remotely read off the diagnostics of the IPX stack. When Rconsole runs, the
	client requests the SPX socket number for diagnostics. The NetWare servers
	support this socket, but FPNW does not support this socket. RCONSOLE reads the
	list of available servers using the SPX connection. If it cannot make the SPX
	connection, it does not work. FPNW does not support RCONSOLE 4.1.
	
	RESOLUTION
	==========
	
	To work around this problem, make FPNW servers not answer GetNearestServer
	requests. To do this, clear the "Respond to Find Nearest Server" option in
	Control Panel FPNW.
	
	When you log on, a GetNearestServer request goes out if the FPNW server reponds
	it is OK. However, when Rconsole runs, the GetNearestServer is sent out and SAP
	requests to build its own table. If the FPNW server answers before a NetWare
	server answers, the list is unavailable because FPNW does not support SPX socket
	number for diagnostics.
	
	Additional query words: prodnt fpnw novell server list
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : 3.51 4.0
	
	=============================================================================
	
