---
layout: page
title: "Q125875: SHARE Functionality Different in Windows NT and WfW"
permalink: kb/125/Q125875/
---

## Q125875: SHARE Functionality Different in Windows NT and WfW

	Article: Q125875
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.11
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you open two windows in Windows NT and edit the same database file from each
	window (multiple accesses to the same record), the records are not updated
	properly. If you perform the same procedure in Windows for Workgroups using
	SHARE.EXE or VSHARE.386, the records are updated properly. However, if SHARE.EXE
	or VSHARE.386 are not used, the records are not updated properly.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1 and 3.5.
	This problem has been corrected in the latest U.S. Service Pack for in Windows
	NT versions 3.1 and 3.5. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW311
	Version           : 3.1 3.5 3.11
	
	=============================================================================
	
