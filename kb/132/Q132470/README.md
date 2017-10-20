---
layout: page
title: "Q132470: STOP Msg: 0x0000000A or 0x0000001E When Using PING"
permalink: /kb/132/Q132470/
---

## Q132470: STOP Msg: 0x0000000A or 0x0000001E When Using PING

{% raw %}

	Article: Q132470
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	When you use PING similar to "PING -l 65527 -s 1 <target computer>"
	(without quotes) in Windows NT 3.51, the target computer stops responding
	(hangs) and one of the following STOP messages may appear on your computer:
	
	  STOP: 0X0000001E
	  KMODE_EXCEPTION_NOT_HANDLED - TCPIP.SYS
	
	  -or-
	
	  STOP: 0x0000000A
	  IRQL_NOT_LESS_OR_EQUAL - TCPIP.SYS
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt death
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
