---
layout: page
title: "Q288237: Server for NIS Does Not Start After You Demote a DC"
permalink: kb/288/Q288237/
---

## Q288237: Server for NIS Does Not Start After You Demote a DC

	Article: Q288237
	Product(s): Microsoft Windows NT
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork kbtool w2000sfu
	Last Modified: 09-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run Dcpromo.exe on a Microsoft Windows 2000-based domain controller
	(DC), one or more of the following events may be logged in the event log, and
	the server for NIS and possibly the server for NFS services may not start or
	function correctly:
	
	  
	
	- Event Type: Error
	  Event Source: nissvc
	  Event Category: None
	  Event ID: 8210
	  Description:
	  Unable to create the RPC service.
	
	- Event Type: Error
	  Event Source: nissvc
	  Event Category: None
	  Event ID: 8198
	  Description:
	  Server for NIS yppush service has stopped.
	
	- Event Type: Error
	  Event Source: nissvc
	  Event Category: None
	  Event ID: 8211
	  Description:
	  Server for NIS did not start. Error: The specified server cannot perform the
	  requested operation. (0x3a)
	
	- Event Type: Error
	  Event Source: Service Control Manager
	  Event Category: None
	  Event ID: 7000
	  Description:
	  The NfsRdr service failed to start due to the following error:
	  The system cannot find the file specified.
	
	CAUSE
	=====
	
	This issue can occur after a Windows 2000-based DC (with the Services for Unix
	version 2.0 Server for NIS) is demoted to a member server by using Dcpromo.exe.
	NIS support requires that Services for Unix (SFU) be installed on a DC.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the SFU 2.0 MSI Wizard to remove Server for NIS
	before you demote the Windows 2000-based DC. If you have other SFU NIS DCs and
	you want to restore the computer as an SFU NIS server, promote the server back
	to a DC, and then reinstall SFU NIS to resolve the issue. Because the NIS data
	is stored in Active Directory, it will still be available from the other
	remaining DCs in your domain.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbtool w2000sfu 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch kbWinServiceUNIX300
	Version           : :2.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	
