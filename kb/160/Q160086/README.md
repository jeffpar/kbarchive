---
layout: page
title: "Q160086: GP Fault at Startup with Remove-IT 95 Installed"
permalink: /kb/160/Q160086/
---

## Q160086: GP Fault at Startup with Remove-IT 95 Installed

{% raw %}

	Article: Q160086
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your computer logs on to a Microsoft Windows NT server during startup, you
	may receive a general protection (GP) fault.
	
	CAUSE
	=====
	
	This behavior can occur if you have installed Remove-IT 95 on your computer.
	Remove-IT 95 installs two tools in the Startup folder that try to contact the
	foreign (Windows NT) file system when started.
	
	RESOLUTION
	==========
	
	Remove the two Remove-IT 95 tools from the Startup folder. Start the tools
	manually after Windows 95 has been running for a few minutes.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: gpf
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}
