---
layout: page
title: "Q163855: STOP 0x0000001e May Occur in Srv.sys w/ Down Level Client"
permalink: /kb/163/Q163855/
---

## Q163855: STOP 0x0000001e May Occur in Srv.sys w/ Down Level Client

{% raw %}

	Article: Q163855
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT 4.0 Server can display a blue screen error message
	when using downlevel (LAN Man 1.0 or earlier) clients on the network.
	
	  Stop 0X0000001E (0xC0000005, 0xfcb6e8f7, 0x00000000, 0x0000004C)
	  KMODE_EXCEPTION_NOT_HANDLED*** Address fcb6e8f7 has base at fcb5d000 - SRV.SYS
	
	NOTE: The second parameter in parenthesis will depend on your system
	configuration and may be different but will fall in range with Srv.sys.
	
	CAUSE
	=====
	
	This error occurs because the session table connection is set to null.
	
	
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
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
