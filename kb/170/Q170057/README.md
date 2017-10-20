---
layout: page
title: "Q170057: Dr. Watson Dialog Box Stops Responding"
permalink: /kb/170/Q170057/
---

## Q170057: Dr. Watson Dialog Box Stops Responding

{% raw %}

	Article: Q170057
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application fails, the Dr. Watson dialog box is displayed and waits,
	indicating that it is building a log file, but the OK and Cancel buttons remain
	unavailable. Also, the log file, %systemroot%\Drwtsn32.log, is never written to.
	
	CAUSE
	=====
	
	On RISC platforms, the exception record contains the address of the instruction
	that actually caused the exception. For OS/2 historical reasons, however, x86
	exception records contain the address of the instruction that immediately
	follows the instruction that caused the exception. As a result, when
	Drwtsn32.exe attached to the failed process on a RISC platform, it retrieved the
	wrong address and the debugger process stopped responding.
	
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
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA PPC
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
