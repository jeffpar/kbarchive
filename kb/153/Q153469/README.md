---
layout: page
title: "Q153469: Policy Editor Causes Page Fault in Comctl32.dll"
permalink: /kb/153/Q153469/
---

## Q153469: Policy Editor Causes Page Fault in Comctl32.dll

{% raw %}

	Article: Q153469
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2
	Operating System(s): 
	Keyword(s): kberrmsg kbpolicy kbtool osr2 win95kbfixlist
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Policy Editor (Poledit.exe) and add numerous programs to the list
	of allowed programs, you may receive the following error message:
	
	  PAGEFAULT at <address> in comctl32.dll
	
	CAUSE
	=====
	
	This problem occurs because the list box is being updated even if there is no
	change to the information.
	
	RESOLUTION
	==========
	
	To work around this issue in Microsoft Windows 95 OSR version 2.1 with Microsoft
	Internet Explorer 4.0 installed, disable support for Universal Serial Bus (USB)
	if it is not required. To do so, use the following steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  System.
	
	2. On the Device Manager tab, double-click Universal Serial Bus, double-click
	  Universal Host Controller, and then click the Disable In This Profile check
	  box to select it.
	
	STATUS
	======
	
	This issue is resolved in Microsoft Windows 98.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbpolicy kbtool osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2
	Version           : :2
	
	=============================================================================
	

{% endraw %}
