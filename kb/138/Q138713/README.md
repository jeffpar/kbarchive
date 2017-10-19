---
layout: page
title: "Q138713: Err Msg: Driver Entry Point Not Found After Service Pack Upgrade"
permalink: /kb/138/Q138713/
---

## Q138713: Err Msg: Driver Entry Point Not Found After Service Pack Upgrade

	Article: Q138713
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to any one of the Windows NT 3.51 Service Packs (1 to 5) and
	restart your computer, the following error message appears:
	
	  System Process - Driver Entry Point Not Found popup The
	  \SystemRoot\System32\drivers\srv.sys device driver could not locate the entry
	  point RtllsNameLegalDOS8Dot3 in driver NTOSKRNL.EXE?.
	
	The following system events appear in the Event Viewer:
	
	  Event ID: 2508
	  Source: Server
	  Type: Error
	  Description: The server service was unable to load the server driver.
	
	  Event ID: 7023
	  Source: Service Control Manager
	  Type: Error
	  Description: The Server service terminated with the following error:
	
	  The system cannot find the file specified.
	
	CAUSE
	=====
	
	This problem occurs if the Service Pack UPDATE.EXE program does not copy the new
	NTOSKRNL.EXE file. When Windows NT 3.51 starts up after the Service Pack has
	been installed, the Service Pack SRV.SYS and the Windows NT 3.51 (Build 1057)
	NTOSKRNL.EXE are being used. These files do not work with each other.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Run the Windows NT 3.51 Service Pack UPDATE.EXE again.
	
	  -or-
	
	- For a single processor system, copy the NTOSKRNL.EXE file from the Windows NT
	  3.51 Service Pack to the %SystemRoot%\SYSTEM32 directory.
	
	- For a multi-processor system, copy and rename the NTKRNLMP.EXE (multi-
	  processor kernel) file from the Windows NT 3.51 Service Pack to the
	  %SystemRoot%\SYSTEM32 directory overwriting the NTOSKRNL.EXE.
	
	NOTE: Some single processor RISC computers, for example, Sables, Demi- Sables,
	Gamma, and the Alpha 2100, use a multiprocessor HAL and should use the
	multiprocessor kernel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt sp1 sp2 sp3
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
