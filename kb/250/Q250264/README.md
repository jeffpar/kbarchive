---
layout: page
title: "Q250264: Event ID 2022 with Norton Speed Disk and Norton Auto Protect"
permalink: /kb/250/Q250264/
---

## Q250264: Event ID 2022 with Norton Speed Disk and Norton Auto Protect

{% raw %}

	Article: Q250264
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Microsoft Windows NT Server 4.0, the primary domain
	controller (PDC) may randomly stop responding (hang). Event Viewer records the
	following event:
	
	  Event ID: 2022
	  Source: SRV
	  Type: Error
	  Description: The server was unable to find a free connection [number] times in
	  the last [seconds] seconds.
	
	CAUSE
	=====
	
	This behavior can occur when you are using Symantec's Norton Speed Disk and
	Norton AntiVirus AutoProtect services.
	
	RESOLUTION
	==========
	
	To work around this behavior, disable the Norton Speed Disk and Norton
	AutoProtect services, and then restart the server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
