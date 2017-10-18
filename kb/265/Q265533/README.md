---
layout: page
title: "Q265533: Explanation of Chkdsk Status Codes in Cluster Log"
permalink: kb/265/Q265533/
---

## Q265533: Explanation of Chkdsk Status Codes in Cluster Log

	Article: Q265533
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you run Cluster services with cluster logging enabled, you may see the
	following error message:
	
	  FixCorruption: CHKDSK returned status of <error code>.
	
	The following error codes may be displayed:
	
	+---------------------------------------------------------------------------------------+
	| Code       | Meaning                                                                  | 
	+---------------------------------------------------------------------------------------+
	| 0          | Success, no errors found.                                                | 
	+---------------------------------------------------------------------------------------+
	| 1          | Success, CHKDSK has detected and fixed major errors.                     | 
	+---------------------------------------------------------------------------------------+
	| 2          | Success, CHKDSK has detected and fixed minor inconsistencies.            | 
	+---------------------------------------------------------------------------------------+
	| 3          | Error, CHKDSK could not complete.                                        | 
	+---------------------------------------------------------------------------------------+
	| 3221225786 | CHKDSK was aborted. 3221225786 is C000013A(hex) or STATUS_CONTROL_C_EXIT | 
	+---------------------------------------------------------------------------------------+
	
	MORE INFORMATION
	================
	
	For additional information about this issue, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q198513 Clustering Cannot Determine If a Shared Disk Is Working Properly
	
	  Q168801 How to Enable Cluster Logging in Microsoft Cluster Server
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
