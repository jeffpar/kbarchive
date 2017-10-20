---
layout: page
title: "Q273034: Cannot Share Printer if Spooler Service Not Using System Account"
permalink: /kb/273/Q273034/
---

## Q273034: Cannot Share Printer if Spooler Service Not Using System Account

{% raw %}

	Article: Q273034
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the Printers folder, it may be empty, and this may occur even
	though printers are installed. Also, you may receive the following error message
	in Event Viewer:
	
	  Event ID 19: Sharing printer failed, printer name\print share.
	
	CAUSE
	=====
	
	This issue can occur if the Startup value of the Spooler service is not set to
	use the "System Account" and is not set to interact with the desktop.
	
	RESOLUTION
	==========
	
	To resolve this issue, set the Spooler service to use the "System Account" and
	set it to interact with the desktop:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Click the Spooler service, and then click Startup.
	
	3. Set the Startup type to "automatic," set the Log On type to "System Account,"
	  and click to select the "Allow service to Interact with desktop" check box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
