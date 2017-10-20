---
layout: page
title: "Q160972: Removing FPNW Does Not Remove The FPNW Icon in Control Panel"
permalink: /kb/160/Q160972/
---

## Q160972: Removing FPNW Does Not Remove The FPNW Icon in Control Panel

{% raw %}

	Article: Q160972
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A problem has occurred with File and Print Services for NetWare (FPNW) 4.0 which
	requires that it be removed and reinstalled.
	
	FPNW may be removed by going into Control Panel, Network, Services, highlight
	FPNW, select Remove. When the computer is restarted and Control Panel selected,
	the FPNW icon is still available, but double-clicking the icon produces no
	result or error messages.
	
	CAUSE
	=====
	
	The cause is under investigation.
	
	RESOLUTION
	==========
	
	To resolve this problem, reinstall FPNW. If FPNW will not install again, delete
	Fpnwmgr.cpl from the <%SystemRoot%>\System32 folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	To work around the problem, perform the following:
	
	1. Click the Start button, point to Settings, and click Control Panel.
	
	2. Double-click the Network icon, and then click the Services tab.
	
	3. Select the FPNW service, then click remove.
	
	4. Click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
