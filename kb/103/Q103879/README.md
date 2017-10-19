---
layout: page
title: "Q103879: Overview: Read Server Message Block Request and Response"
permalink: /kb/103/Q103879/
---

## Q103879: Overview: Read Server Message Block Request and Response

	Article: Q103879
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	READ SMB (REQUEST)
	
	The read server message block (sometimes called read byte range)
	provides the server with all of the information needed to read a
	specific range of bytes from a disk file--file handle, number of bytes
	to read, and so on.
	
	The file offset provided is based on a "seek pointer" that the
	redirector keeps locally for the file. The server's seek pointer
	for this file handle is not valid in this case because many remote
	workstation processes may be accessing the same server operating system
	file handle.
	
	The "est'd total," parameter (estimated total bytes to be read,
	including those read by this request) is optional. The server can use
	this information for read-ahead or to optimize buffer allocation.
	
	READ SMB (RESPONSE)
	
	The response to the read SMB, returned from the server, carries
	with it the data requested. The multiplex identifier (MID) keeps
	the SMB response labeled for the corresponding the SMB request.
	
	WHAT IT LOOKS LIKE
	
	Here is how the process works:
	
	- An application submits an I/O request to operating system through an
	  application programmer interface (API) call.
	
	- The operating system (or the redirector by way of the int 21 hook) determines
	  that the request is for a remote resource, and passes it to the redirector.
	
	- The redirector formats the I/O request as an SMB request and sends it to the
	  server through the network.
	
	- The server receives the SMB and submits the I/O request to the server's local
	  operating system, according to the parameters included in the SMB request.
	
	- The server formats the operating system response (data returned if read,
	  return code if write, etc.) as an SMB response and sends it to the requesting
	  workstation through the network.
	
	- The redirector passes the response back to the operating system.
	
	- The operating system passes the response to the calling application.
	
	Please see Q102738 for additional reference material and book suggestions
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
