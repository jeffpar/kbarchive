---
layout: page
title: "Q142048: WinNT 3.51 SP2 Increases Performance and Resolves SQL Slowdowns"
permalink: kb/142/Q142048/
---

## Q142048: WinNT 3.51 SP2 Increases Performance and Resolves SQL Slowdowns

	Article: Q142048
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article points out the importance of Windows NT version 3.51 Service Pack 2
	(or greater) and it's impact upon SQL Server versions 4.21a SQL 6.0.
	
	MORE INFORMATION
	================
	
	The addition of Service Pack 2 (or greater) to Servers running Windows NT
	version 3.51 with Service Pack 1 dramatically improves SQL Server performance in
	several documented cases. Service Pack 2 contains a change to the Windows NT
	Kernel (for both single and multiprocessor computers) that resolves a temporary
	freeze condition that could have significant impact on SQL Server performance.
	Due to the resolution of this problem, it is very important that SP2 or higher
	be installed on computers running SQL Server.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest U.S. Service Pack for Windows NT Server
	version 3.51. For information on obtaining this update, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
