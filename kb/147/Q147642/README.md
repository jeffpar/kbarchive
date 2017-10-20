---
layout: page
title: "Q147642: NetWare Files Overwritten When Updating To Windows NT 3.51 SP4"
permalink: /kb/147/Q147642/
---

## Q147642: NetWare Files Overwritten When Updating To Windows NT 3.51 SP4

{% raw %}

	Article: Q147642
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run UPDATE.EXE in Windows NT 3.51 Service Pack 4 on the SYS volume of a
	NetWare server, some files in the \PUBLIC and \LOGIN directories are
	overwritten.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do not connect to the root of the SYS volume. For
	example, do not connect to \\NetWare\SYS. Instead, connect to \\NetWare\SYS\I386
	(assuming that the Windows NT 3.51 Service Pack 4 files reside in I386).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 4. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt gsnw csnw nwcs
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
