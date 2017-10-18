---
layout: page
title: "Q90993: Problems Caused by Setup Changing LASTDRIVE= Statement"
permalink: kb/090/Q90993/
---

## Q90993: Problems Caused by Setup Changing LASTDRIVE= Statement

	Article: Q90993
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups Setup changes the "LASTDRIVE=" setting in CONFIG.SYS to
	LASTDRIVE=Z when no other network is present, or to LASTDRIVE=P when installed
	with Novell NetWare as the "other" network.
	
	If your custom network setup depends on certain drive letters always being
	available, the above changes may cause problems.
	
	MORE INFORMATION
	================
	
	For example, if your existing LAN Manager logon script depends on being able to
	use certain high drive letters during the logon, and the Windows for Workgroups
	Setup changed "LASTDRIVE" from "W" to "P", you may receive the following
	errors:
	
	- Error 85 - local device name already in use
	
	- Error 15 - System cannot find drive specified
	
	Changing the LASTDRIVE= statement does not ordinarily cause problems like this.
	If you are running Novell NetWare and LAN Manager, and experience drive mapping
	problems after installing Windows for Workgroups, try setting the LASTDRIVE
	statement in the CONFIG.SYS file to the previous value, which should be in
	CONFIG.00x.
	
	The NetWare product included here is manufactured by Novell, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 3.10 net ware novell last drive
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
