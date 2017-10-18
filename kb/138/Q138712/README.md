---
layout: page
title: "Q138712: Command Window Does Not Close When TSR Issues INT5c For DLC"
permalink: kb/138/Q138712/
---

## Q138712: Command Window Does Not Close When TSR Issues INT5c For DLC

	Article: Q138712
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load any terminate-and-stay-resident (TSR) program from AUTOEXEC.NT
	that issues INT5c to do DLC work in the MS-DOS Command Prompt window, the window
	does not close.
	
	CAUSE
	=====
	
	The TSR is running in a win32 process (NTVDM.EXE) which has loaded VDMREDIR.DLL
	and DLCAPI.DLL. These DLLs should close the adapter when the program terminates.
	In either case, the adapter should be closed by the DLC device driver when the
	program terminates.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt DLC.SYS
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
