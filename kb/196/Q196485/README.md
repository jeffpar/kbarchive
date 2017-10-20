---
layout: page
title: "Q196485: Computer Loses Network Connectivity"
permalink: /kb/196/Q196485/
---

## Q196485: Computer Loses Network Connectivity

{% raw %}

	Article: Q196485
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers running Windows NT Server or Windows NT Workstation may lose network
	connectivity. The computer is fully operational from the console, but it cannot
	make network connections, be PINGed, or accessed across the network.
	
	This behavior has been exhibited when Network Monitor is started from the console
	or if Network Monitor is capturing the traffic in or out of this computer from
	another computer.
	
	CAUSE
	=====
	
	This problem has been experienced on computers with IBM token ring network
	adapters using the driver with the following date and time stamp:
	
	  Ibmtrp.sys   Tue May 21 15:31:12 1996
	
	This problem happens when the Microsoft Network Monitor driver, Bhnt.sys,
	attempts to place the token ring card in promiscuous mode.
	
	The same behavior would occur when Performance Monitor is started locally or when
	another computer remotely selects this computer as target.
	
	RESOLUTION
	==========
	
	Contact IBM for the latest version of Ibmtrp.sys.
	
	MORE INFORMATION
	================
	
	Both Network Monitor and Performance Monitor load Bhnt.sys when they are
	started.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: hang ping connectivity
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
