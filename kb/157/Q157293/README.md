---
layout: page
title: "Q157293: XADM: Err Msg: You Must Specify a Server in the Organization"
permalink: kb/157/Q157293/
---

## Q157293: XADM: Err Msg: You Must Specify a Server in the Organization

	Article: Q157293
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange administrator is trying to install a new site connector by
	selecting New on the File menu, and Site Connector under Other. The servers are
	in the same organization but in two different sites. When the administrator
	performs this operation, the following error message appears:
	
	  You must specify a server that is in the organization but not in the site.
	
	CAUSE
	=====
	
	The organization name is not exactly the same on the two Exchange Server
	computers. The organization name may be misspelled on one server or have
	additional punctuation (underscore, comma, and so forth) that makes it different
	from the other server's organization name.
	
	RESOLUTION
	==========
	
	One of the Exchange Servers must be reinstalled or the Exchange Administrator
	program is connected to the same server on which you are attempting to create a
	connector. Connect via the Administrator program to the correct server where the
	connector is to be created.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
