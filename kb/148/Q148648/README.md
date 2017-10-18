---
layout: page
title: "Q148648: Stopping the Browser Service Causes STOP: 0x0000000A Error"
permalink: kb/148/Q148648/
---

## Q148648: Stopping the Browser Service Causes STOP: 0x0000000A Error

	Article: Q148648
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Stopping the Computer Browser services in the Control Panel on multi- processor
	machines may cause the following STOP error:
	
	  STOP: 0x0000000A (00000000, 00000002, 00000000, f8a71fe0)
	
	NOTE: The first and fourth parameters, such as 0x00000000 and f8a71fe0, are
	specific to your system configuration.
	
	
	CAUSE
	=====
	
	This problem has to do with timing in kernel mode processes on multi-processor
	computers only. This problem does not occur on uni-processor computers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.51 prodnt ntblue
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
