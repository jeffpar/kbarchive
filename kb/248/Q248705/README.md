---
layout: page
title: "Q248705: PRB: Quality of Service and Wake on LAN"
permalink: kb/248/Q248705/
---

## Q248705: PRB: Quality of Service and Wake on LAN

	Article: Q248705
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbNDIS kbOSWin2000 kbDSupport kbACPI kbPowerMan
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With QOS (Quality of Service) installed, any changes made in the Power
	Management tab of a Wake on LAn (WOL) capable adapter does not take effect
	immediately.
	
	RESOLUTION
	==========
	
	If you make any changes in the Power Management tab you must disable and
	re-enable the adapter in the Device Manager or in the "Network and Dial-up
	Connections" control-panel applet for the WOL feature to work.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the product listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbNDIS kbOSWin2000 kbDSupport kbACPI kbPowerMan 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
