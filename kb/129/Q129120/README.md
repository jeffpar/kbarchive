---
layout: page
title: "Q129120: MAPI Unable to Run as a Windows NT Service"
permalink: /kb/129/Q129120/
---

## Q129120: MAPI Unable to Run as a Windows NT Service

	Article: Q129120
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop SMapiCMC kbSMAPICMC
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT, if you attempt to start a program as a service that uses Windows
	NT Mail MAPI, the service fails to start the Mail spooler with MAPI error code 3
	- MAPI_E_LOGIN_FAILURE.
	
	CAUSE
	=====
	
	MAPI for Windows NT does not support being started as a service.
	
	WORKAROUND
	==========
	
	Use one of these techniques to work around the problem:
	
	- Start the Mail client before starting the service.
	
	- Start the program from the command line instead of starting it as a service.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt SQLSERVER SQL MSMAIL
	
	======================================================================
	Keywords          : kbinterop SMapiCMC kbSMAPICMC 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
