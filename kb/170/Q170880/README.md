---
layout: page
title: "Q170880: Diskdump.sys Common Buffer Size Is Changed"
permalink: /kb/170/Q170880/
---

## Q170880: Diskdump.sys Common Buffer Size Is Changed

{% raw %}

	Article: Q170880
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Windows NT computer generates a stop error, a crash dump may not be
	created if you are using a Symbios SYMC8xx driver.
	
	The Diskdump.sys driver only allows 8 KB for the common buffer, which may cause a
	problem with the Symbios Flint driver. In the Symbios Flint driver, the amount
	of NonCachedExtension required may grow significantly. This growth is necessary
	to provide all of the necessary tables and scripts storage used to support the
	one interrupt for each I/O scripts processing.
	
	
	CAUSE
	=====
	
	Diskdump.sys driver has a hard coded value of 8K for the common buffer.
	
	The Symbios driver was also corrected to resolve a problem with creating
	crashdumps on Compaq computers
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: For computers running Windows NT Server version 4.0, Terminal Server
	Edition, you only need to apply the Symc810.sys file from Service Pack 4.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: memory
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
