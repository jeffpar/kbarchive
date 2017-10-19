---
layout: page
title: "Q151962: System Appears to Stop when Adding Users to Large Global Groups"
permalink: /kb/151/Q151962/
---

## Q151962: System Appears to Stop when Adding Users to Large Global Groups

	Article: Q151962
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Whenever users are added to user-defined global groups, CPU use for the LSASS
	service is taxed to its limit, causing the domain controller to come to a halt
	for a few minutes. The user-defined global groups must contain thousands of
	users for this to occur. This issue has been encountered with user-defined
	global groups that contain 2,000 to 4,000 users.
	
	CAUSE
	=====
	
	When Netlogon calls the security account manager (SAM) to enumerate the global
	group's attributes, the SAM enumerates the attributes for each user in the
	global group, causing an extreme load on the domain controller.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
