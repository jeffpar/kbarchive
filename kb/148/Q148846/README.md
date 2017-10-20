---
layout: page
title: "Q148846: RAS Port Instance Names in Performance Monitor Are Corrupted"
permalink: /kb/148/Q148846/
---

## Q148846: RAS Port Instance Names in Performance Monitor Are Corrupted

{% raw %}

	Article: Q148846
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51 SP2, 4.0 
	- Microsoft Windows NT Server version 3.51 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Normally, the Remote Access Service (RAS) Port Instance names are displayed as
	COM1 and COM2. However, in Windows NT 3.51, Performance Monitor displays the RAS
	Port Instance names as "C" (without quotation marks).
	
	CAUSE
	=====
	
	This problem occurs due to a change in Windows NT Service Pack 2 for ANSI
	formatted performance counters. This change causes a problem in the RAS counter
	DLL. For more information on a related problem that affects Microsoft SQL Server
	and Microsoft SNA Server, please see the following article here in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q133757
	  TITLE : Performance Monitor SQLServer-Log Object Corrupted
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51 perfmon counters instance names
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS351sp2 kbWinNTW351SP2
	Version           : :3.51 SP2,4.0
	
	=============================================================================
	

{% endraw %}
