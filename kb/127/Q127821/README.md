---
layout: page
title: "Q127821: Problems Using Event Viewer from Windows for Workgroups"
permalink: /kb/127/Q127821/
---

## Q127821: Problems Using Event Viewer from Windows for Workgroups

	Article: Q127821
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.11,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT Server Tools version of Event Viewer to access a
	backed up log file, located on a Windows NT 3.5 server, you may see the
	following problems:
	
	- The server service, workstation service, and RPC service fail. Other services
	  may also stop.
	
	- You cannot run Control Panel and choose Services.
	
	- The following message appears:
	
	  The RPC service is unavailable.
	
	- The server can still be used, but all network services are stopped and cannot
	  be restarted without shutting down and restarting Windows NT.
	
	- When you attempt to shutdown Windows NT, the computer stops responding
	  (hangs).
	
	CAUSE
	=====
	
	Two problems cause these symptoms:
	
	- Event Viewer assumes that the user has administrator privileges when it tries
	to convert the local drive to a UNC path. If this fails, a null log UNC name is
	passed to the server.
	
	- The server does not perform argument checking on the log UNC name.
	
	
	WORKAROUND
	----------
	
	To work around this problem, run Event View from a computer running Windows NT
	Workstation or Windows NT Server.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT Server Tools version
	1.0. This problem has been corrected in the latest U.S. Service Pack for Windows
	NT version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: 3.50 prodnt compact disc cd-rom wfw wfwg log name
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : :3.11,3.5
	
	=============================================================================
	
