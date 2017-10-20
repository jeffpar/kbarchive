---
layout: page
title: "Q177663: Problems with LAN Manager for Unix and Anti-virus Programs"
permalink: /kb/177/Q177663/
---

## Q177663: Problems with LAN Manager for Unix and Anti-virus Programs

{% raw %}

	Article: Q177663
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP5
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 SP5 
	- Microsoft Windows NT Workstation version 3.51 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view the contents of an LAN Manager for Unix (LM/X) network
	drive, File Manager or Explorer may not display the actual contents of the LM/X
	network drive. Also, if you try to access an LM/X network drive, you may receive
	one the following error messages:
	
	   - Unexpected network error
	
	- Wrong Network Resource type
	
	- (System Error 59) An unexpected network error has occurred
	
	CAUSE
	=====
	
	This behavior can occur if you are using an anti-virus program that is
	monitoring file input/output activities.
	
	RESOLUTION
	==========
	
	To work around this issue, uninstall the anti-virus program that is monitoring
	file input/output activities, or temporarily disable the anti-virus program
	before you work with an LM/X network drive. For information about how to disable
	your anti-virus program, consult the manufacturer's documentation that is
	included with your program.
	
	MORE INFORMATION
	================
	
	This issue does not occur in Microsoft Windows NT 4.0.
	
	Additional query words: 3.51 prodnt resourcetype antivirus
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTSsearch kbWinNTS351search kbWinNTS351sp5 kbWinNTW351sp5
	Version           : :3.51 SP5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
