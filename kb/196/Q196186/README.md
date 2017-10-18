---
layout: page
title: "Q196186: XADM: Move Server Fails if IP Address Used to Join Another Site"
permalink: kb/196/Q196186/
---

## Q196186: XADM: Move Server Fails if IP Address Used to Join Another Site

	Article: Q196186
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Server Move Server Wizard and choose Join an
	Existing Site, you are prompted for the name of an existing server in the
	destination site. If you specify an IP address instead of a NetBIOS name, the
	Move Server Wizard fails with the following error messages:
	
	  Some replication operations were not completed. Directories will be
	  updated during normal replication updates. In the meantime, some
	  directory services may not start or may fail. To view details of the
	  error, see the application event log in the Windows NT Event Viewer.
	
	  Microsoft Exchange Move Server Wizard
	  ID no. c1030b4b
	
	  An error occurred. Your server has not been moved. Exchange Move Server
	  will now attempt to restore your original settings. Error code:
	  c1030b4b"
	
	WORKAROUND
	==========
	
	The only workaround is to use the NetBIOS name to join sites, instead of using
	an IP address.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbprb
	
	=============================================================================
	
