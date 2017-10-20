---
layout: page
title: "Q105419: Sharing Printers on Serial Ports in Windows for Workgroups"
permalink: /kb/105/Q105419/
---

## Q105419: Sharing Printers on Serial Ports in Windows for Workgroups

{% raw %}

	Article: Q105419
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows for Workgroups does not support sharing communications (COM)
	ports. However, it is possible to share a printer connected to a COM port.
	
	When you share a printer, Windows for Workgroups does not share the printer port.
	The printer queue is shared. In other words, Windows for Workgroups is sharing
	the software supporting the port, not the device connected to the port.
	
	MORE INFORMATION
	================
	
	The mechanism for sharing a printer on a COM port is the same as it is for a
	printer on a parallel port:
	
	1. Install the appropriate printer driver and connect it to the desired COM
	  port.
	
	2. Open Print Manager.
	
	3. Select the printer on the COM port that you want to share.
	
	4. From the Printer menu, choose Share Printer As.
	
	5. Select Re-share At Startup if desired.
	
	The printer queue is now shared and can be accessed across the network by other
	machines.
	
	Additional query words: 3.10 3.1 3.11 sharing communications port
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
