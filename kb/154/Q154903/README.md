---
layout: page
title: "Q154903: Error Message: This Printer Could Not Be Upgraded"
permalink: /kb/154/Q154903/
---

## Q154903: Error Message: This Printer Could Not Be Upgraded

{% raw %}

	Article: Q154903
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a network printer during Windows 95 Setup using the
	Msbatch.inf file, you may receive the following error message:
	
	  This printer could not be upgraded. Please reinstall the printer from the
	  printers folder.
	
	CAUSE
	=====
	
	The Msbatch.inf file is configured to install a network printer, but you are not
	connected to the network for one of the following reasons:
	
	- The network is not configured properly.
	
	- You did not log on to the network during the Setup process.
	
	- You were not prompted to log on to the network during the Setup process.
	
	
	RESOLUTION
	==========
	
	To install a network printer after you receive the error message listed above,
	follow these steps:
	
	1. Close the error message window, and then continue with Windows 95 Setup.
	
	2. When Windows 95 Setup is finished, make sure that the network is configured
	  properly, and that you are logged on to the network.
	
	3. Click the Start button, point to Settings, and then click Printers.
	
	4. Double-click Add New Printer, and then follow the instructions on the screen.
	
	If you do not receive a prompt to log on to the network, see the following
	article in the Microsoft Knowledge Base:
	
	  Q141858 No Windows or Network Logon Dialog Box at Startup
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
