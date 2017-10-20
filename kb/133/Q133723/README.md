---
layout: page
title: "Q133723: STOP Message: 0x0000001E in TCPIP.SYS During Shutdown"
permalink: /kb/133/Q133723/
---

## Q133723: STOP Message: 0x0000001E in TCPIP.SYS During Shutdown

{% raw %}

	Article: Q133723
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During system shutdown, the following error message appears:
	
	  STOP: 0x0000001E
	
	CAUSE
	=====
	
	This problem occurs as a result of improperly initialized TCP/IP data structure
	referenced during shutdown.
	
	
	RESOLUTION
	==========
	
	TCPIP.SYS has been modified to correctly shutdown and access data structures
	involved.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 debug prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
