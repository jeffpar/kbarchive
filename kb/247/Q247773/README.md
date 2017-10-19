---
layout: page
title: "Q247773: XADM: Cannot Use IMS After Exchange 5.0 Server SP2 Added to 5.0"
permalink: /kb/247/Q247773/
---

## Q247773: XADM: Cannot Use IMS After Exchange 5.0 Server SP2 Added to 5.0

	Article: Q247773
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a server running Microsoft Exchange Server 5.0 Service Pack 2 (SP2)
	to a site that contains only an Exchange Server 5.0 computer without SP2, and
	then attempt to administer the Internet Mail Service from any Microsoft Exchange
	Server Administrator program in the site, you may receive the following error
	message:
	
	  Extension SMTP could not be loaded.
	
	Event Viewer lists the following event in the application log:
	
	  Event ID: 2037
	  Source: MSExchangeSA
	  Description: The file version of '\add-ins\smtp\i386\imcadmin.dll' installed
	  on the local server is not current. Unable to locate a current version on any
	  server in the site.
	
	CAUSE
	=====
	
	This behavior can occur when the new version of the proxy address generators
	that comes with SP2 is installed in the directory but not yet replicated to the
	other server.
	
	RESOLUTION
	==========
	
	To resolve this behavior, perform one of the following procedures:
	
	- Apply SP2 to the Exchange Server 5.0-based computer.
	
	  -or-
	
	- Copy the proxy address generators (such as Inproxy.dll, X400prox.dll, and so
	  on) from the Exchange Server computer that is running SP2 to the Exchange
	  Server computer that is not running SP2.
	
	Additional query words: connector
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange500SP2
	Version           : winnt:5.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
