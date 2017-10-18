---
layout: page
title: "Q164763: CSNW Fails to Connect to Preferred Server"
permalink: kb/164/Q164763/
---

## Q164763: CSNW Fails to Connect to Preferred Server

	Article: Q164763
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Client Services for NetWare (CSNW) clients may fail to connect to their
	preferred server with the following error:
	
	  NetWare Authentication Failure
	
	  You cannot be authenticated on <server> due to the following reason: A
	  connection to the server could not be made because the limit on the number of
	  concurrent connections for this account has been reached.
	
	  Do you want to select another preferred server?
	
	CAUSE
	=====
	
	This problem only occurs if the following steps are used:
	
	1. A CSNW client creates a new printer, or prints to an existing printer during
	  a logon session.
	
	2. The CSNW client logs out.
	
	3. The CSNW client immediately logs back on as the same user without restarting
	  the workstation.
	
	The problem occurs because the previous preferred server connection is never
	closed. It may fail to close if the Logon User ID (LUID) for the previous logon
	session was not released after a new printer was created or if an existing
	printer was used.
	
	The previous logon session was not released because its LUID, which is maintained
	by the kernel, has a reference counter that is incremented when the user's
	credentials are impersonated (used) and decremented when the impersonation is
	released.
	
	When the reference counter for an LUID reaches 0, the kernel notifies the Local
	Security Authority (LSA) that the user has logged out. The LSA then notifies
	CSNW to disconnect the user's preferred connection to the NetWare server. In
	this case, the LUID for the user who is currently logged on is never decremented
	to 0, so the LSA is never notified, which causes CSNW to never be notified of
	the logout to disconnect from the preferred server.
	
	RESOLUTION
	==========
	
	Currently, only a workaround exists for this problem. To enable the workaround,
	use the following steps:
	
	For Windows NT 4.0
	------------------
	
	1. Whenever a new printer is created, shut down and restart the workstation at
	  the end of the day instead of logging out.
	
	2. Disable all spooler event logging using the following steps:
	
	  a. Open Printers in Control Panel.
	
	  b. Click File and select Server Properties.
	
	  c. Click the Advanced tab on the Print Server Properties page.
	
	  d. Disable all Log Spooler options.
	
	  e. Click OK, and then shut down and restart.
	
	For Windows NT 3.51
	-------------------
	
	1. Whenever a new printer is created, shut down and restart the workstation at
	  the end of the day instead of logging out.
	
	2. Disable all spooler event logging using the following steps:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  a. Run Registry Editor (regedt32.exe).
	
	  b. Go to the following key:
	
	     HKEY_Local_Machine\System\CurrentControlSet\Control\Print\Providers
	
	  c. Add the following value:
	
	     EventLog = REG_DWORD 0x00000000
	
	  d. Close Registry Editor, and then shut down and restart.
	
	For Windows 2000
	----------------
	
	Clear the following check boxes to work around this behavior:
	
	  Log Spooler error events
	  Log Spooler warning events
	  Log Spooler Information events
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbWinNTS351search kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
