---
layout: page
title: "Q149610: Instsrv.exe and Windows NT 3.51 SP4 Cause Dr. Watson Error"
permalink: kb/149/Q149610/
---

## Q149610: Instsrv.exe and Windows NT 3.51 SP4 Cause Dr. Watson Error

	Article: Q149610
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Instsrv.exe utility from the Windows NT 3.51 Resource Kit, if
	Service Pack 4 or later is installed on the computer, you may receive the
	following Dr. Watson access violation error:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  instsrv.exe Exception: access violation (0xc0000005), Address: 0x01001bf5
	
	Also, the Event Viewer Application Log will log the following error:
	
	  Event 4097 has Source = DrWatson with the following Description: The
	  application, instsrv.exe, generated an application error. The error occurred
	  on 4/3/1996 @ 16:51:26.272 The exception generated was c0000005 at address
	  01001bf5 (InstallService)
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	A fix to this problem has been made in the lastest version of the Windows NT
	Resource Kit for Windows NT version 4.0. This new INSTSRV.EXE will also work
	under Windows NT version 3.51.
	
	
	Additional query words: prodnt SRVANY
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
