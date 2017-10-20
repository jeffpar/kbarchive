---
layout: page
title: "Q115101: IP Counter Disappears from Performance Monitor"
permalink: /kb/115/Q115101/
---

## Q115101: IP Counter Disappears from Performance Monitor

{% raw %}

	Article: Q115101
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Performance Monitor to track the performance of IP counters, the IP
	counter disappears. No error messages are displayed, but the following message
	may appear in the Event Viewer:
	
	  Open of IP failed. The IP protocol table full.
	  Event ID 4185
	  Source: TCPIP.SYS
	  Type: Error
	
	This problem may be intermittent.
	
	CAUSE
	=====
	
	This problem occurs due to the RPC service of Performance Monitor sending
	multiple load/free library calls to the file INETMIBL.DLL. The file does not
	close its handles when it receives a termination call as the result of a free
	library.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	Additional query words: prodnt tcp tcpip perfmon
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
