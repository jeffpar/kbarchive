---
layout: page
title: "Q103953: Basic Protocol Requirements in Microsoft Network Architecture"
permalink: kb/103/Q103953/
---

## Q103953: Basic Protocol Requirements in Microsoft Network Architecture

	Article: Q103953
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	Here are some basic protocol requirements within the Microsoft
	network architecture:
	
	- Each protocol layer offers one or more services to the functional layer above
	  it. For instance, the NetBEUI logical link control (LLC) layer offers
	  reliable connection oriented message services, as well as connectionless
	  datagram data transfer services.
	
	- Each protocol operates within a well-defined environment, with several
	  specific terms and objects. As an example, consider the Microsoft redirector
	  server message block (SMB) protocol with its process IDs (PIDs), tree IDs
	  (TIDs), multiplex IDs (MIDs) and more.
	
	- Each protocol has its own vocabulary of commands and associated responses
	  that it uses in performing its services. NetBEUI's transport layer, for
	  example, uses an "add.name.query" command to determine if a given name is
	  unique on the network.
	
	- Because each protocol layer needs to add its own header (and sometimes
	  trailer) to the network-bound frame, they all have a structured format by
	  which they build the frame that they will pass to the layer below.
	
	- For each command/response defined, there is an associated set of procedural
	  rules. For example, when the NetBEUI transport protocol "add.name.query"
	  command is issued, no response within a configurable time period indicates
	  that the specified name is unique on the network, whereas an
	  "add.name.response" response indicates that the name is not unique and
	  therefore cannot be used.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
