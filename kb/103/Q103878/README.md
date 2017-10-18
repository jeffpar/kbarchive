---
layout: page
title: "Q103878: Overview: Network I/O Redirection"
permalink: kb/103/Q103878/
---

## Q103878: Overview: Network I/O Redirection

	Article: Q103878
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	NETWORK I/O REDIRECTION
	
	When a device identifier (for example: f:, p:, lpt1:) is redirected to a
	remote resource in a network command such as
	
	  NET USE F: \\SERVER\SHARENAME
	
	the network software that carries out the redirection sets flags in
	the operating system's internal device table indicating that the
	device is remote. File handles for files that are subsequently created
	or opened on these remote devices are likewise flagged as remote.
	
	When the operating system receives an I/O request--by way of an MS-DOS
	interrupt x21 or OS/2 API call--directed to a remote device or file,
	it passes the request to the network redirector instead of calling a
	local device driver. The redirector formats the I/O request so that it
	can be understood by the owner of the remote device, the server, and
	sends it on its way through the network.
	
	The network services provided by the operating system and the
	redirector generally map to the OSI application layer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
