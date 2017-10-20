---
layout: page
title: "Q191284: STOP 0x0000001E in Netbt.sys"
permalink: /kb/191/Q191284/
---

## Q191284: STOP 0x0000001E in Netbt.sys

{% raw %}

	Article: Q191284
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
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
	
	You may receive the following STOP error message in Netbt.sys when a computer
	tries to connect to a multihomed host and the connection terminates
	prematurely:
	
	  STOP 0x0000001E (0xC0000005, 0xFD7A4A44, 0x00000000, 0x42000878)
	
	The second value may vary depending on where Netbt.sys was loaded. The forth
	value may also vary.
	
	CAUSE
	=====
	
	There was a race condition in Netbt.sys where a thread is preempted and memory
	that it was accessing is released before the thread resumes execution. This
	causes the thread to access the memory that was released.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: multi-homed multi homed
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
