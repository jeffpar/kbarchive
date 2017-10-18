---
layout: page
title: "Q239917: Windows NT Server 4.0 Terminal Server Edition and DCOM"
permalink: kb/239/Q239917/
---

## Q239917: Windows NT Server 4.0 Terminal Server Edition and DCOM

	Article: Q239917
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use Distributed Component Object Model (DCOM) to run distributed
	programs across multiple computers in a network. A distributed program consists
	of multiple processes that cooperate to accomplish a task.
	
	MORE INFORMATION
	================
	
	The processes can run on one or more computers. DCOM has four activation
	models:
	
	- Launching user
	
	- Interactive user
	
	- This user
	
	- System
	
	Terminal Server only supports launching user. This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : :4.0,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
