---
layout: page
title: "Q135032: PC NTMMTA: Cannot Run as an Automatic Service w/ Banyan Vines"
permalink: /kb/135/Q135032/
---

## Q135032: PC NTMMTA: Cannot Run as an Automatic Service w/ Banyan Vines

	Article: Q135032
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Windows NT Multitasking MTA (NT MMTA) as a service
	set to Start up automatically, mail is not delivered. This may occur when the
	postoffices are located on a Banyan Vines server.
	
	CAUSE
	=====
	
	The NT MMTA cannot be set up as an automatic service when you use Banyan Vines
	Windows NT drivers due to the inability to make Universal Naming Convention
	(UNC) connections outside of a Banyan Vines login session.
	
	RESOLUTION
	==========
	
	Run the NT MMTA from the CMD prompt.
	
	Call Banyan Vines with any further questions on their redirector.
	
	
	MORE INFORMATION
	================
	
	For each additional type of network (Novell NetWare, Banyan Vines, etc.), a
	provider must be installed. The provider is the component that allows a Windows
	NT computer to communicate with the network.
	
	From the application's viewpoint, there are two sets of commands that can cause
	network traffic UNC commands and WNet (part of the Win32 API) commands.
	
	Although, it is enough to specify the servername to list a server's shared
	resources, a full UNC name is in the following form:
	
	  \\server\share\subdirectory\filename
	
	WNet is specifically designed to allow applications on Windows NT workstations to
	connect to multiple networks, browse the resources of computers on those
	networks, and transfer data between computers of various networks. For example,
	File Manager uses the WNet interface to provide its network browsing and
	connection facilities.
	
	The provider layer spans between kernel and user modes to manage commands that
	may cause network traffic. The provider layer also includes two components to
	route UNC and WNet requests to the appropriate provider:
	
	- The Multiple UNC Provider (MUP) receives UNC commands and locates the
	  redirector that can make a connection to the UNC name.
	
	- The Multiple Provider Router (MPR) receives WNet commands and passes the
	  request to each redirector in turn until one is found that can satisfy the
	  request.
	
	NOTE: I/O calls, such as Open, can contain both a UNC name and WNet calls.
	
	Multiple UNC Provider
	---------------------
	
	The MUP is a kernel-mode component that locates UNC names. When an application
	sends a command containing UNC names, MUP routes each UNC name to one of the
	registered UNC providers, including LanmanWorkstation and any others that may be
	installed. When a provider indicates that it can communicate with the server,
	MUP sends the remainder of the command to the provider.
	
	When applications make I/O calls that contain UNC names, the MUP directs them to
	the appropriate redirector file system driver. The call is routed to its
	redirector based on the handle on the I/O call.
	
	Multiple Provider Router
	------------------------
	
	Through the MPR, Windows NT provides an open interface that enables consistent
	access to third-party network file systems. The key to the MPR is that all file
	systems, regardless of type and physical location, are accessible through the
	same set of file system APIs.
	
	Applications, including File Manager, make file system requests through the
	Windows NT Win32 API. The MPR ensures that requests are directed to the proper
	file system. Local file requests are sent to the local disk; remote requests to
	Windows-based servers are sent to the proper server by the Windows redirector,
	and requests to NetWare-based servers are handled by the NetWare client for
	Windows NT and sent to the NetWare server, and so on.
	
	Because applications access all types of files through a single set of APIs, any
	application can access any kind of server without affecting the user.
	
	Additional query words: 3.20 3.50 redirecter logon
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
