---
layout: page
title: "Q186617: Error 204: Terminal Server Client TCP Port error"
permalink: kb/186/Q186617/
---

## Q186617: Error 204: Terminal Server Client TCP Port error

	Article: Q186617
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
	
	When you try to connect to a Beta 2 Terminal Server using the Terminal Server
	Client, you may get a "Failure to connect: 204" error. The cause of this error
	is most likely that you are using a pre-Beta 2 version of the client. A change
	was made in Terminal Server so that it listens for traffic on port 3389, rather
	than on port 1503, as in pre-Beta 2 versions.
	
	RESOLUTION
	==========
	
	You can verify that this is the cause of your connection problem by capturing
	the network traffic with Network Monitor (included with Terminal Server) as you
	attempt to connect. After stopping the trace, the summary view screen will show
	the client attempting to connect. You should see the source port number (src:)
	and the destination port number (dst:3389) in the description field.
	
	Uninstall any client versions prior to Beta 2, and install the new version.
	
	If this is not the problem, the 204 error points to a TCP port problem. It means
	that the initial socket connection between the Terminal Server and the client
	could not be established. You might have a protocol problem on the client
	computer, particularly with Windows for Workgroups 3.11 clients. Be sure you are
	using the TCP/IP-32B version from the Clients subdirectory on the Terminal
	Server CD. For Windows 95 or Windows NT Clients, try reinstalling the TCP/IP
	protocol. Third, you could have a protocol problem on the Terminal Server.
	Reboot the server and then, if this doesn't resolve the problem, reinstall the
	TCP/IP protocol on the server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
