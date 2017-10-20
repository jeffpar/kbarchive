---
layout: page
title: "Q243054: Data Corruption in RPC Causes Tight Loop with RPC Programs"
permalink: /kb/243/Q243054/
---

## Q243054: Data Corruption in RPC Causes Tight Loop with RPC Programs

{% raw %}

	Article: Q243054
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run programs that use remote procedure calls (RPCs) on a computer
	running Windows NT 4.0 Server Service Pack 4 (SP4), the computer may become slow
	and unresponsive because of high processor usage.
	
	CAUSE
	=====
	
	This behavior occurs because data corruption in the RPC buffer is causing
	certain RPCs to run in a tight loop.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 SP4. This problem
	was first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q216766 FIX: Windows NT 4.0 w/ SP4 Causes Data Corruption in RPC Calls
	
	
	Additional query words: rpc
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
