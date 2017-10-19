---
layout: page
title: "Q158742: Cannot Open Halmps.dll"
permalink: /kb/158/Q158742/
---

## Q158742: Cannot Open Halmps.dll

	Article: Q158742
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbother kbui
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies to the 
	Korean version(s) of Windows NT Server.
	
	SYMPTOMS
	========
	
	When you apply Service Pack 2 for Windows NT Server Hangul version 3.5, the user
	receives the following message:
	
	  Non-Critical Error which cannot open Halmps.dll and Ntkrnlmp.exe.
	
	CAUSE
	=====
	
	Both of these files are not included in Service Pack 2, however, it can be found
	on the Windows NT Server Korean version 3.5 CD in the i386 directory.
	Halpmps.dll is the hardware abstraction layer for multiprocessor computers.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Copy both files to the existing Windows NT directory.
	
	2. Reapply the service pack.
	
	However, the files are actually not there in the specific directory (but found in
	the Windows NT 3.5 U.S. Service Pack 2). This is a noncritical error and
	apparently does not affect functionality.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Hangul version 3.5.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother kbui 
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	Issue type        : kbbug
	
	=============================================================================
	
