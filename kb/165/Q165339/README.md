---
layout: page
title: "Q165339: Non-administrator Users Cannot Remotely Monitor IIS"
permalink: kb/165/Q165339/
---

## Q165339: Non-administrator Users Cannot Remotely Monitor IIS

	Article: Q165339
	Product(s): Internet Information Server
	Version(s): Winnt:2.0
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are a non-administrative user, you cannot administrate Internet
	Information Server (IIS) on a remote computer.
	
	WORKAROUND
	==========
	
	Please see the following article for instructions on how you can see the
	counters for the FTP service:
	
	  Q153183 : How to Restrict Access to NT Registry from a Remote Computer
	
	NOTE: The other counters for the HTTP and GOPHER service will still be absent.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	In regedt32 go to the following key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W3SVC\Performance
	
	Click Security, then Permissions. Add in the users that will access this server
	with performance monitor.
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbiisSearch kbiis200
	Version           : Winnt:2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
