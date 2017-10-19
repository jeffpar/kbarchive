---
layout: page
title: "Q130943: Cannot Connect to NCP Server Without SAP Advertising Enabled"
permalink: /kb/130/Q130943/
---

## Q130943: Cannot Connect to NCP Server Without SAP Advertising Enabled

	Article: Q130943
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): Win2000:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork msnets win95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 includes the ability to act as a Novell NetWare server when you
	install the Microsoft "File and printer sharing for NetWare Networks" service.
	With this service installed, a Windows 95-based computer advertises itself on
	the network in one of two ways:
	
	- SAP Advertising (Service Advertising Protocol)
	
	- Workgroup Advertising
	
	By default, SAP advertising is disabled. Computers running Windows 95 with the
	Microsoft Client for NetWare Networks can connect to a Windows 95- based
	computer acting as a Novell NetWare server. However, Microsoft Windows NT and
	real-mode NETX or VLM clients require you to enable SAP advertising to connect
	to this server.
	
	MORE INFORMATION
	================
	
	SAP advertising is how Novell NetWare servers advertise their services (such as
	file server and print server services). If SAP advertising is enabled, the
	Microsoft "File and printer sharing for NetWare Networks" service advertises
	like a Novell NetWare server by sending a broadcast every 60 seconds.
	
	When a Novell NetWare client boots without a preferred NetWare server specified,
	it sends a request for the nearest NetWare server (GetNearestServer). The
	quickest NetWare server to respond is the one the client connects to. If SAP
	advertising is enabled on the Windows 95-based computer acting as a NetWare
	server, it may respond to this request before an actual NetWare server responds.
	While the Windows 95 server is designed to respond slowly, it may respond
	quicker than an actual NetWare server.
	
	When the "File and printer sharing for NetWare Networks" service is enabled, two
	new folders are created in the Windows folder: Nwsysvol and Login. The Login
	folder contains Login.exe. If a computer starts without specifying a preferred
	server and connects to a Windows 95 server, the Windows 95 server:
	
	1. Makes an implicit connection to the NETX/VLM client and maps the first drive
	  to sys:\login.
	
	2. Connects to a true Novell NetWare server and sets this server as the primary
	  and preferred server for the NETX/VLM client. The server it uses is based on
	  the following (in order of preference):
	
	   - Preferred server specified by the client with the "/ps=" or "Preferred
	     server" setting in the Net.cfg file.
	
	   - The pass-through server used by the Windows 95-based computer.
	
	3. Login.exe performs a global logout, remaps, and starts the login process with
	  the true NetWare server. There is a chain execution with Login.exe from the
	  true NetWare server using identical parameters to finish the connection for
	  the NETX/VLM client.
	
	  If the pass-through server used by the "File and printer sharing for NetWare
	  Networks" service does not have an account for you, enter
	
	  login <ServerName>
	
	  where <ServerName> is the name of a NetWare server on which you have an
	  account. In normal circumstances, NETX/VLM clients should always specify a
	  preferred server. The real-mode client does not detect any of these events,
	  it just receives the login connection it wanted with a NetWare server, even
	  though a Windows 95 server first answered its "GetNearestServer" broadcast.
	
	Windows NT
	----------
	
	In order for Windows NT computers with Client Service for NetWare to be able to
	connect to Windows 95-based computers acting as Novell NetWare servers, you must
	enable SAP advertising.
	
	To Enable SAP Advertising
	-------------------------
	
	To enable SAP advertising on a Windows 95-based computer, follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  Network.
	
	2. On the Configuration tab, click "File and printer sharing for NetWare
	  Networks", and then click Properties.
	
	3. In the Property box, click SAP Advertising.
	
	4. In the Value box, click Enabled, click OK and then click OK again.
	
	
	
	Additional query words: w95cn
	
	======================================================================
	Keywords          : kbenv kbnetwork msnets win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWin95search kbZNotKeyword3
	Version           : Win2000:95; winnt:3.51,4.0
	
	=============================================================================
	
