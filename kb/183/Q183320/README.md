---
layout: page
title: "Q183320: XADM: Cannot View Internet Mail Service Properties"
permalink: /kb/183/Q183320/
---

## Q183320: XADM: Cannot View Internet Mail Service Properties

	Article: Q183320
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you view the Internet Mail Service properties in Microsoft Exchange Server
	5.0 administrative tools after adding a version 5.5 server to a site that
	contains only version 5.0 server, you may receive the following error message:
	
	  Extension 'SMTP' could not be loaded.
	
	  An error occurred during file replication. Unable to find the
	  extension .DLL file with the correct version number. To view details
	  of the error, see the application event log in the Windows NT Event
	  Viewer on the Microsoft Exchange Server computer.
	
	  Microsoft Exchange Administrator
	  ID no:c1030ad1
	
	The event log may contain the following error:
	
	   Event ID - 2037
	   The file version of '\add-ins\SMTP\i386\imcadmin.dll' installed on
	   the local server is not current. Unable to locate a correct version
	   on any server in the site.
	
	MORE INFORMATION
	================
	
	The Exchange Server 5.0 directory schema is changed after adding a computer
	running Microsoft Exchange Server version 5.5 to the site. To view the Internet
	Mail Service properties in Exchange Server 5.0, you must have version 5.5 of the
	Imcadmin.dll file.
	
	The first time you view the Internet Mail Service properties in version 5.0
	administrative tools, it will replicate the version 5.5 Imcadmin.dll file to
	your Exchange Server 5.0 in the following location:
	
	  \Exchsrvr\Add-Ins\Smtp\I386\Imcadmin.dll
	
	RESOLUTION
	==========
	
	Access the Internet Mail Service properties in each Microsoft Exchange Server
	version 5.0 in the site. This ensures that the version 5.5 Imcadmin.dll file has
	replicated to the server correctly.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbprb
	
	=============================================================================
	
