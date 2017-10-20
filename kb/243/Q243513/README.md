---
layout: page
title: "Q243513: Unable to Install Personal Web Server"
permalink: /kb/243/Q243513/
---

## Q243513: Unable to Install Personal Web Server

{% raw %}

	Article: Q243513
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:1.0,1.0a,4.0,95
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbtool win95
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server versions 1.0, 1.0a, 4.0 for Windows 95 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Personal Web Server, you may receive error messages
	stating that the following files cannot be found: Wsock.vxd, Msshrui.dll,
	Rpcrt4.dll, Secur32.dll, and Svrapi.dll.
	
	CAUSE
	=====
	
	This behavior can occur if you install Windows over a network. When you do this,
	the Layout.inf file refers to the network installation point, but the Setup
	program for Personal Web Server does not use the network location for the files.
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the Layout.inf file:
	
	1. Open the C:\Windows\INF\Layout.inf file with any text editor (such as
	  Notepad).
	
	2. Place a semicolon (;) at the beginning of each line that contains any of the
	  following files:
	
	  Wsock.vxd
	  Msshrui.dll
	  Rpcrt4.dll
	  Secur32.dll
	  Svrapi.dll
	
	3. Save and close the file.
	
	4. Install Personal Web Server again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbtool win95 
	Technology        : kbWin95search kbPersWebServSearch kbZNotKeyword3 kbWin95 kbPersWebServ100Win95 kbPersWebServ100aWin95 kbPersWebServ400Win95
	Version           : WINDOWS:1.0,1.0a,4.0,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
