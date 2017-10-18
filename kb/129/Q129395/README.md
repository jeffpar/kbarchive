---
layout: page
title: "Q129395: Troubleshooting FTP Error 425"
permalink: kb/129/Q129395/
---

## Q129395: Troubleshooting FTP Error 425

	Article: Q129395
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FTP error 425 may be returned to an FTP client if the server is unable to open a
	socket for data transfer. This article explains the error and how to
	troubleshoot it.
	
	MORE INFORMATION
	================
	
	When using FTP to do directory listings, file transfers, etc. from a server, one
	session is maintained as a control connection. A separate connection is
	established from the server back to the client for each transfer of data. This
	is commonly referred to as a "back connection". For example, when an ftp user
	logs onto an ftp server and types DIR, the following sequence of events occurs:
	
	- The FTP client establishes a socket to listen on for the results of the
	  remote DIR command.
	
	- The FTP client sends a PORT command to the server, telling it what IP address
	  and TCP port it is listening on for the "back connection. This command is
	  sent over the control session that was established during the logon process.
	
	- The FTP client sends a LIST command to the server, telling it to list all
	  files in the current directory. Again, this is sent over the original control
	  session.
	
	- The FTP server executes the LIST command, and passes the results back to the
	  client by establishing a new connection to the callback address specified by
	  the previous PORT command.
	
	If an FTP error 425 occurs, this indicates that the server was unable to open the
	connection back to the client. The most likely cause for this is an FTP client
	application that is attempting to re-use a socket that is still in the TCP
	TIME-WAIT state due to an earlier connection that hasn't been timed out yet. Per
	RFC793, Windows NT 3.5 systems leave old connections in the TIME-WAIT state for
	2MSL (240 seconds). During this time they cannot be re-used.
	
	The socket that cannot be used is defined by a "5-tuplet":
	
	- The source IP address (that of the ftp server)
	
	- The source port (the ftp server data port)
	
	- The destination IP address (that of the ftp client)
	
	- The destination port (specified by the client in the PORT command)
	
	- The protocol (TCP/IP)
	
	You should not encounter this problem with the Microsoft FTP client because it
	allows Windows Sockets to select a socket that is not in use. However, some
	third-party FTP-based applications may do their own port management. When this
	is done, care must be taken by the application not to reuse the same socket
	twice within four minutes (2MSL or 240 seconds).
	
	
	To verify whether this is the cause of an FTP error 425, a network tracing tool
	can be used. More useful background information and definition of some of the
	terms used in this article may be found in RFC793.
	
	
	Additional query words: 3.50 prodnt tshoot trouble shoot shooting
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
