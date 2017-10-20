---
layout: page
title: "Q274499: Error Message Is Generated When Starting Account Joiner Utility"
permalink: /kb/274/Q274499/
---

## Q274499: Error Message Is Generated When Starting Account Joiner Utility

{% raw %}

	Article: Q274499
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Account Joiner utility on your computer, you may receive the
	following error message:
	
	  ExceptionJoiner
	
	  Failed to retrieve MA's information
	
	CAUSE
	=====
	
	This behavior may occur because a Management Agent (MA) is not present on the
	server.
	
	RESOLUTION
	==========
	
	To resolve this behavior, you must create at least one MA and place it on the
	server.
	
	MORE INFORMATION
	================
	
	The Account Joiner utility is designed to be used with Management Agents.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
