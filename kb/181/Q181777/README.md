---
layout: page
title: "Q181777: Sockets Programs May Not Work After Suspend and Resume"
permalink: /kb/181/Q181777/
---

## Q181777: Sockets Programs May Not Work After Suspend and Resume

{% raw %}

	Article: Q181777
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0,2.0,2.1,2.5
	Operating System(s): 
	Keyword(s): kbenv kbnetwork osr1 osr2 win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Socket-based programs running on a Windows 95-based computer may be unable to
	communicate over a network after the computer is suspended and then resumed from
	suspended mode.
	
	CAUSE
	=====
	
	Network protocol drivers are unloaded by NDIS when the computer is suspended.
	When the TCP/IP protocol is unloaded, the state of any open sockets is changed
	and are not restored when the computer is resumed.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	Additional query words: APM LanDesk
	
	======================================================================
	Keywords          : kbenv kbnetwork osr1 osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :1.0,2.0,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
