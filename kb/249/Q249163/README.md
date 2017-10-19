---
layout: page
title: "Q249163: XADM: LDAP Commands Seen in a Network Trace"
permalink: /kb/249/Q249163/
---

## Q249163: XADM: LDAP Commands Seen in a Network Trace

	Article: Q249163
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Lightweight Directory Access Protocol (LDAP) consists of 16 commands, 8
	requests and 8 responses. An LDAP client makes a request to which the server
	responds. The following is a list of the LDAP commands:
	
	- BindRequest
	
	  This request initiates a session with the server. A session must be opened
	  before any directory functions can occur.
	
	- BindResponse
	
	  This response either allows or denies the bind request.
	
	- UnbindRequest
	
	  This request terminates a session with the server. No response is required.
	
	- SearchRequest
	
	  This request initiates a search for a specific entry in the directory.
	
	- SearchResponse
	
	  This response sends the search result to the client.
	
	- ModifyRequest
	
	  This is a request to modify a directory entry.
	
	- ModifyResponse
	
	  This response sends the result of a requested modification.
	
	- AddRequest
	
	  This is a request to add a directory entry.
	
	- AddResponse
	
	  This response sends the result of a request to add a directory entry.
	
	- DelRequest
	
	  This is a request made by the client to delete a directory entry.
	
	- DelResponse
	
	  This response sends the result of a delete request.
	
	- ModifyRDNRequest
	
	  This is a request made by the client to modify the Relative Distinguished
	  Name (RDN) of a directory object.
	
	- ModifyRDNResponse
	
	  This is a response sent by the server to the client with the result of a
	  requested RDN modification.
	
	- CompareDNRequest
	
	  This is a request made by the client to compare a string with the
	  Distinguished Name (DN) of a directory object.
	
	- CompareDNResponse
	
	  This is a response sent by the server to the client with the result of a DN
	  comparison.
	
	- AbandonRequest
	
	  This is a request made by the client to instruct the server to abandon a
	  request that is outstanding. No response is required from the server.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
