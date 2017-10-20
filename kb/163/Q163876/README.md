---
layout: page
title: "Q163876: CSNW Clients Cannot Delete Print Jobs on NetWare Print Queue"
permalink: /kb/163/Q163876/
---

## Q163876: CSNW Clients Cannot Delete Print Jobs on NetWare Print Queue

{% raw %}

	Article: Q163876
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users using Client Services for NetWare (CSNW) cannot cancel print jobs that
	they have created on print queues on a NetWare server.
	
	CAUSE
	=====
	
	There is a problem in the CSNW print provider whereby it never issues the
	request to delete the print job to the NetWare server.
	
	RESOLUTION
	==========
	
	A fix is available from Microsoft Technical Support to resolve this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
