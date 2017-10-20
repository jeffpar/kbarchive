---
layout: page
title: "Q161994: Querying Powered-Off PC Card Modem Hangs Computer"
permalink: /kb/161/Q161994/
---

## Q161994: Querying Powered-Off PC Card Modem Hangs Computer

{% raw %}

	Article: Q161994
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program attempts to identify or check the status of a PC Card modem, the
	program may stop responding (hang) or cause the computer to hang if the modem
	has been powered off using power management features.
	
	CAUSE
	=====
	
	If a PC Card modem is powered off with power management features, it is not
	powered on when card services calls are made. Tools making such calls do not
	work if the modem is powered off. This may cause a bus hang, causing the program
	or computer to hang.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	
	Additional query words: 95 pcmcia
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
