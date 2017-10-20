---
layout: page
title: "Q173537: Compex PNP NE2000 Compatible NIC May Cause Event ID 7000"
permalink: /kb/173/Q173537/
---

## Q173537: Compex PNP NE2000 Compatible NIC May Cause Event ID 7000

{% raw %}

	Article: Q173537
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbnetwork kbsetup kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Windows NT on a computer using the Compex NE2000-compatible
	network interface card (NIC), the network may not start and the system event log
	may contain the following error message:
	
	  Event ID: 7000
	  Source : Service Control Manager
	  Description: A device attached to the system is not functioning.
	
	CAUSE
	=====
	
	The default configuration for the Compex NE2000-compatible adapter is for Plug
	and Play functionality. For proper operation with Windows NT, the Compex NE2000
	must use explicit configuration settings.
	
	WORKAROUND
	==========
	
	To work around this problem, use the MS-DOS setup utilities that come with the
	adapter to disable the Plug and Play setting. Set the card to an available IRQ
	and base I/O address, then remove and reinstall the Windows NT network adapter
	driver.
	
	MORE INFORMATION
	================
	
	The third-party product discussed here is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding the product's
	performance or reliability.
	
	Additional query words: PNP
	======================================================================
	Keywords          : kberrmsg kbhw kbnetwork kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
