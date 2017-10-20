---
layout: page
title: "Q126978: IBM Token Ring /A Adapter Fails To Start in Windows NT 3.5"
permalink: /kb/126/Q126978/
---

## Q126978: IBM Token Ring /A Adapter Fails To Start in Windows NT 3.5

{% raw %}

	Article: Q126978
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows NT version 3.5 using an IBM Token Ring /A network
	adapter, it may fail and cause the following error message to appear:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	The following event is written to the system log of Event Viewer:
	
	  Event: 5009
	  Source: IBMTOK
	  Type: Error
	  Description: IBMTOKMC1: Does not support the configuration supplied.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	The IBM Token Ring network adapters discussed here are manufactured by IBM
	Corporation, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding these products' performance or reliability.
	
	Additional query words: prodnt nic mac
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
