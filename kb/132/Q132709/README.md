---
layout: page
title: "Q132709: Sybase SQLServer May Fail With NWLink and Window NT 3.5 SP2"
permalink: /kb/132/Q132709/
---

## Q132709: Sybase SQLServer May Fail With NWLink and Window NT 3.5 SP2

	Article: Q132709
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure Sybase SQLServer with Master Listeners to include the IPX/SPX
	Compatible Transport (NWLink) and install Windows NT 3.5 Service Pack 2 (SP2),
	one or all of the following error messages appear when you attempt to start
	Sybase SQLServer services:
	
	  Stop: Could not start the Sybase SQLServer_COMPUTERNAME service on
	  \\COMPUTERNAME.
	
	  -or-
	
	  Error 1067: The process terminated unexpectedly.
	
	  -or-
	
	  Stop: Could not start the Sybase MONServer_COMPUTERNAME_MS service on
	  \\COMPUTERNAME.
	
	  -or-
	
	  Error 1067: The process terminated unexpectedly.
	
	  -or-
	
	  Stop: Could not start the Sybase BCKServer_COMPUTERNAME_BS service on
	  \\COMPUTERNAME.
	
	  -or-
	
	  Error 1067: The process terminated unexpectedly.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Restore NTDLL.DLL from the original Windows NT 3.5 compact disc (CD) or
	  floppy disks to the %SYSTEMROOT%\SYSTEM32 directory.
	
	  -or-
	
	- Upgrade to Windows NT 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.5 Service Pack 2.
	This problem was corrected in Windows NT version 3.51.
	
	SQLServer is manufactured by Sybase, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt sql server local system
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
