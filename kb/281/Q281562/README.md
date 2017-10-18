---
layout: page
title: "Q281562: A New Systems Management Server Installation Does Not Work"
permalink: kb/281/Q281562/
---

## Q281562: A New Systems Management Server Installation Does Not Work

	Article: Q281562
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbConfig kbServer kbsms200
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A newly installed Systems Management Server (SMS) may not work and the
	Smssetup.log that is located on the C:\Root folder may log the following error
	message:
	
	  Registering connects for ERSQL.
	  Registered the types.
	  Cannot get SQL connection to the SQL server.
	  Checking disk space for SQL devices (SMS database).
	
	CAUSE
	=====
	
	This behavior can occur if an incorrect SQL default network library is selected.
	SMS requires named pipes as a default network library.
	
	SMS may also not connect to Microsoft SQL Server if named pipes is either
	configured to use any server names or contains a period(.) on a server alias
	column that uses Transmission Control Protocol/Internet Protocol (TCP/IP) as
	connection parameters. SMS is configured to listen only on named pipes.
	
	WORKAROUND
	==========
	
	To work around this behavior:
	
	1. Click Start, click Programs, point to Microsoft SQL Server 7.0, and then
	  click "SQL 7 Client Network Utility".
	
	2. On the General tab, click Named Pipes in the Default Network Library list.
	
	3. If there are any aliases that uses TCP/IP as connection parameters, remove
	  them.
	
	4. Stop and start the Microsoft SQL Server service.
	
	If any programs require TCP/IP, create a new server alias (not using the server
	name or a period ".") with the TCP/IP library.
	
	MORE INFORMATION
	================
	
	The SQL Server uses a dynamic-link library (DLL) called a Net-Library to
	communicate with a particular network protocol. A matching pair of Net-Libraries
	must be active on client and server computers to support the desired network
	protocol (all of the SQL Server client and server Net-Libraries are installed
	during SQL Server Setup). For example, to enable a client program to communicate
	with a specific SQL Server across TCP/IP, the client TCP/IP Sockets Net-Library
	(Dbmssocn.dll) must be configured to connect to that server on the client, and
	the server TCP/IP Sockets Net-Library (Ssmsso70.dll) must be listening on the
	server.
	
	By themselves, a pair of Net-Libraries cannot support a client/server connection.
	Both the client and server must also be running a protocol stack that supports
	the Net-Libraries. For example, if the server TCP/IP Sockets Net-Library is
	listening on the server, and the client TCP/IP Sockets Net-Library is configured
	to connect to that server on the client, the client can only connect to the
	server if a TCP/IP protocol stack is installed on both computers.
	
	Additional query words: prodsms named pipes
	
	======================================================================
	Keywords          : kbinterop kbsetup kbConfig kbServer kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
