---
layout: page
title: "Q194076: XWEB: OWA Client Cannot Access Folders with Affinity"
permalink: kb/194/Q194076/
---

## Q194076: XWEB: OWA Client Cannot Access Folders with Affinity

	Article: Q194076
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user accessing the server using the Outlook Web Access component is unable to
	read or modify certain public folders. This problem is not encountered when
	logged on to a full Exchange client such as Outlook 97 or 98.
	
	CAUSE
	=====
	
	The public folder in question has been set to access by affinity. For an OWA
	client to access a public folder, a replica of the folder must exist on the
	local server. This is by product design.
	
	WORKAROUND
	==========
	
	Establish a replica of the public folder on the local (OWA) server.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
