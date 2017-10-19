---
layout: page
title: "Q101150: Operating Characteristics and Restrictions of Named Pipes"
permalink: /kb/101/Q101150/
---

## Q101150: Operating Characteristics and Restrictions of Named Pipes

	Article: Q101150
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2002
	
	SUMMARY
	=======
	
	Named pipes are provided as a LAN Manager or Windows for Workgroups redirector
	component. The redirector uses the NetBIOS session layer which may be
	implemented over many data communications protocols such as NetBEUI or TCP/IP
	(NetBIOS over TCP/IP is sometimes referred to as RFC NetBIOS). Named pipe
	applications may be restricted in their use by operating system and network
	protocols.
	
	On other network operating systems such as Novell Netware, named pipes are
	supported not by the redirector or NetBIOS session layer, but by a Novell
	IPX/SPX session layer.
	
	NAMED PIPE COMPONENTS
	---------------------
	
	Each application that makes use of named pipes has a "server" component and a
	"client" component. The server component creates named pipe instances and
	listens for requests. Clients call the named pipe and the two applications begin
	communicating.
	
	Named Pipe Server Component:
	
	The server component of a named pipe application creates named pipes using a
	DOSMakeNamedPipe API. Typically, this API is supported by network servers such
	as LAN Manager Servers, LAN Manager peer service, Windows NT or Windows NT
	Advanced Server--the only platforms in a LAN Manager or Windows NT environment
	that can share the InterProcess Communications resource IPC$ over which named
	pipes transactions are carried. The "server" component of a named pipes
	application is designed to run on one of these platforms, so that it can support
	any "client" named pipe application that uses these protocols to connect to the
	IPC$ resource.
	
	Novell Netware also enables named pipe "server" applications to be supported on
	OS/2 using the Novell Netware OS/2 requester. In this environment only clients
	using Novell's IPX/SPX protocols are supported. The Novell NT requester which is
	still in beta has not been shown to support named pipe server applications.
	
	Named Pipe Client Component:
	
	The client component of a named pipe application initiates a connection to a
	named pipe application using the DOSConnectNamedPipe API. In a LAN Manager or
	Windows NT environment this is supported once the client has established a
	connection to the server's InterProcess Communications shared resource (IPC$).
	This is typically done in a LAN Manager or Windows NT environment by the client
	performing a NET USE command (for example: NET USE \\SERVERNAME\IPC$).
	
	Therefore any client that can establish a connection to a server's IPC$ resource
	is capable of running a named pipe "client" application.
	
	In a Novell Netware environment, named pipe client applications communicate with
	named pipe server applications by establishing a session using the IPX/SPX
	protocols directly. There is no requirement for them to access a redirector
	resource such as IPC$.
	
	MULTIPLE CLIENTS
	----------------
	
	A named pipe server application can use named pipes to communicate with different
	types of networking clients simultaneously (Windows NT, Windows for Workgroups
	or DOS/Windows 3.1/LAN Manager) if the underlying protocols are all supported.
	For example, if the OS/2 LAN Manager server is running the named pipe server
	application and is using the TCP/IP protocol and all the clients are running
	TCP/IP, then they all can communicate.
	
	It has not been demonstrated whether a named pipe server application running on
	an OS/2 LAN Manager server or a Windows NTmachine, and using the appropriate
	requester, can support named pipe clients simultaneously over the redirector
	(IPC$ resource) and the Novell IPX/SPX session layer.
	
	MULTIPLE NETWORKS
	-----------------
	
	When two networks are connected by a router or bridge to form a wide area
	network, named pipe applications may be supported across it. For example, if the
	Microsoft LAN Manager TCP/IP (using RFC NetBIOS) is used as the data
	communications protocol on both LANs, and the routers are capable of routing
	TCP/IP data, then a named pipe client application can communicate to the named
	pipe server application across the WAN.
	
	Additional query words: wfw wfwg 2.00 2.1 2.10 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
