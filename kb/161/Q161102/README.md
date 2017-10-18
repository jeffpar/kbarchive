---
layout: page
title: "Q161102: Removing &quot;Unknown Device&quot; Network Adapter Hangs Computer"
permalink: kb/161/Q161102/
---

## Q161102: Removing &quot;Unknown Device&quot; Network Adapter Hangs Computer

	Article: Q161102
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you remove a network adapter listed as an unknown device in Device Manager
	after you manually add a network adapter using the driver disk provided by the
	manufacturer, the computer may stop responding (hang).
	
	RESOLUTION
	==========
	
	Remove the network adapter that you added in Network properties; do not remove
	the unknown device. Then, update the driver for the network adapter listed as an
	unknown device in Device Manager using the following steps:
	
	1. In Device Manager, click the unknown device, and then click Properties.
	
	2. Click the Driver tab.
	
	3. Click Update Driver.
	
	4. In the Update Device Driver Wizard, click "No, select driver from the list."
	
	5. Click Next.
	
	6. Click Have Disk.
	
	7. Type the path to the driver, and then click OK.
	
	8. Restart Windows 95 when you are prompted.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
