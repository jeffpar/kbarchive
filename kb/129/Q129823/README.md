---
layout: page
title: "Q129823: Windows NT Server 3.5 Cannot Browse A LAN Manager Domain"
permalink: kb/129/Q129823/
---

## Q129823: Windows NT Server 3.5 Cannot Browse A LAN Manager Domain

	Article: Q129823
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Browser service in Windows NT Server version 3.5 allows you to browse other
	domains, such as a LAN Manager (only) domain. However, when you browse the LAN
	Manager domain using File Manager, the LAN Manager computers do not appear.
	
	
	WORKAROUND
	==========
	
	To work around this problem, include a computer running Windows for Workgroups
	version 3.11 or Windows NT Workstation version 3.5 in the LAN Manager domain.
	This computer will act as a browse master for the domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt 2.20 LM lanman
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	
	=============================================================================
	
