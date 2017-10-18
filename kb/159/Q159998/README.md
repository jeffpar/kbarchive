---
layout: page
title: "Q159998: Error Message: Error Access Is Denied"
permalink: kb/159/Q159998/
---

## Q159998: Error Message: Error Access Is Denied

	Article: Q159998
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsgkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Who Am I on the Network Neighborhood context menu, you may
	receive the following error message:
	
	  NetWare Network
	  Error Access is denied.
	  occurred while trying to get connection information.
	
	CAUSE
	=====
	
	This error can occur if you are logged on as a user who is not a member of the
	Administrators group on the Windows NT-based computer, and you are logged in to
	an NDS tree.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt nw csnw gsnw novell
	
	======================================================================
	Keywords          : kberrmsg kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	
