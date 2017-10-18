---
layout: page
title: "Q103955: Overview: SMB Structure is Standard Vehicle for Requests"
permalink: kb/103/Q103955/
---

## Q103955: Overview: SMB Structure is Standard Vehicle for Requests

	Article: Q103955
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	The redirector's primary function is to format remote requests so that
	they can be understood by a remote station (such as a file server) and
	send them on their way through the network.
	
	The redirector uses the server message block (SMB) structure as the
	standard vehicle for sending these requests. The SMB is also the
	vehicle by which the remote station returns responses to redirector
	requests.
	
	Each SMB contains a header consisting of the command code (which
	specifies the task that the redirector wants the remote station to
	perform) and several environment and parameter fields (which specify
	how the command is to be carried out).
	
	In addition to the SMB header, the last field in the SMB may contain
	up to 64K of data to be sent to the remote station.
	
	SMB structure, environment, commands and associated protocols are
	documented in the publications below.
	
	REFERENCES
	==========
	
	Microsoft Networks/OpenNET File Sharing Protocol, V 1.9
	Microsoft Networks SMB File Sharing Protocol Extensions, V 2.0
	Microsoft Networks SMB File Sharing Protocol Extensions, V 3.0
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
