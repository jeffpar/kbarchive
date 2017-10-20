---
layout: page
title: "Q175937: Cannot Start More Than 100 Services"
permalink: /kb/175/Q175937/
---

## Q175937: Cannot Start More Than 100 Services

{% raw %}

	Article: Q175937
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The number of simultaneously running services is limited to 100 (excluding all
	shared services that run under the Services.exe process, such as Alerter,
	Browser, EventLog, LanmanServer, LanmanWorkstation, LMHOSTS, Messenger, and so
	on).
	
	Trying to start an additional service leads to the following error message:
	
	  All pipe instances are busy.
	
	NOTE: This does not apply to Microsoft Windows 2000. The MAX_INSTANCES constraint
	has been removed.
	
	CAUSE
	=====
	
	The Service Control Manager (that is, Services.exe) creates a pipe for each of
	the services it starts. This pipe is used for interprocess communication between
	the Service Control Manager and the process of the service. The maximum number
	of pipe instances is hard-coded to 100.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
