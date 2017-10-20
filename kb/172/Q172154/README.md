---
layout: page
title: "Q172154: Service Starts Automatically Even Though Startup Type Is Manual"
permalink: /kb/172/Q172154/
---

## Q172154: Service Starts Automatically Even Though Startup Type Is Manual

{% raw %}

	Article: Q172154
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, the Client Services for Netware (CSNW) service may
	start automatically. This behavior may occur even if the Startup Type is set to
	manual.
	
	RESOLUTION
	==========
	
	To work around this problem, stop the service manually. To do so, use the
	following steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Click Client Services for Netware, and then click Stop.
	
	3. Click Yes, click Close, and then close Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: ipx
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
