---
layout: page
title: "Q228994: Smss.exe Does Not Resolve Forward References in Environment"
permalink: /kb/228/Q228994/
---

## Q228994: Smss.exe Does Not Resolve Forward References in Environment

{% raw %}

	Article: Q228994
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The COM servers on a Terminal Server client session inherit the environment
	either directly or indirectly (through some other process) from Smss.exe.
	
	CAUSE
	=====
	
	This problem occurs because Smss.exe is not resolving all the environment
	variables and because of this problem, the environment with unresolved variables
	is propagated to the processes that inherit the environment either directly or
	indirectly from Smss.exe.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition, Service Pack 5.
	
	
	Additional query words: tse wts
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
