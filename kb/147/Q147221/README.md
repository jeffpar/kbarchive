---
layout: page
title: "Q147221: Sockets Application Can Cause STOP 0x0000000A"
permalink: /kb/147/Q147221/
---

## Q147221: Sockets Application Can Cause STOP 0x0000000A

{% raw %}

	Article: Q147221
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
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
	
	The following STOP error message appears in Windows NT:
	
	  STOP: 0x0000000A (0x0000000C,0x00000002,0x00000000,0xFE58F0B6)
	
	NOTE: The first and fourth parameter, such as 0x0000000C and 0xFE58F0B6, depend
	on your system configuration.
	
	CAUSE
	=====
	
	This problem occurs when a sockets application repeatedly opens and closes
	socket endpoints. The socket application server endpoints are closing before the
	socket application client process finishes processing the IRP.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt tcpip trap blue screen
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
