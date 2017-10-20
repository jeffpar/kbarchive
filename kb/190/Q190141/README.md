---
layout: page
title: "Q190141: IIS Administrator Service Fails to Stop"
permalink: /kb/190/Q190141/
---

## Q190141: IIS Administrator Service Fails to Stop

{% raw %}

	Article: Q190141
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you shut down the Microsoft Internet Information Server (IIS) Administrator
	service, you may receive an error stating that the service could not be stopped,
	or that it did not respond in time. If you try to stop it again, you will either
	receive a Dr. Watson in Inetinfo.exe or another error from the Service Control
	Manager stating that the service cannot be controlled in its current state.
	
	CAUSE
	=====
	
	The IIS Administrator service fails to stop because it is in an endless loop
	waiting on open connections to drain.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	Additional query words: IIS hotfix hot fix qfe quick fix engineering
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
