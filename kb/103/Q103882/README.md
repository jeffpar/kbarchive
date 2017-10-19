---
layout: page
title: "Q103882: Overview: The Network Application Programmer Interface (API)"
permalink: /kb/103/Q103882/
---

## Q103882: Overview: The Network Application Programmer Interface (API)

	Article: Q103882
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	The network application programmer interface (API) is provided to
	allow applications to access and control network resources
	programmatically, and to communicate between processes running on
	different stations.
	
	EXAMPLES
	--------
	
	- NetUseAdd: redirects a local device identifier to a shared network resource.
	
	- NetShareAdd: shares a server resource.
	
	- NetWkstaSetUID2: logs on to the network.
	
	- NetServerEnum2: obtains a list of all servers of specified type(s) that are
	  active in specified domain(s).
	
	- DosMakeNmPipe: creates a "named pipe"--a two-way inter-process communication
	  device that can be used to communicate directly from a process on one station
	  to a process on another without using the file system.
	
	Most network API calls go directly to the redirector. Some (such as
	NetUseAdd) go to MS-DOS by way of interrupt x21, which may, in turn,
	pass the request to the redirector.
	
	The redirector resolves some API calls (such as NetServerEnum2)
	locally, without having to access the network. For other API calls
	(such as NetUseAdd and NetWkstaSetUID2) the redirector uses the server
	message block (SMB) protocol to communicate with remote stations in
	order to effect resolution.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin32sSearch kbWin32API
	Version           : :
	
	=============================================================================
	
