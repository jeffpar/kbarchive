---
layout: page
title: "Q158944: Text May Be Partially Displayed Using Cirrus Logic Driver"
permalink: kb/158/Q158944/
---

## Q158944: Text May Be Partially Displayed Using Cirrus Logic Driver

	Article: Q158944
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
	
	When you are using a Cirrus Logic GD5434-based display adapter, screen
	characters may be only partially displayed.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- Set the hardware acceleration to None. To do this, follow these steps:
	
	  1. In Control Panel, double-click Display.
	
	  2. Click the Settings Tab.
	
	  3. Click the Advanced Properties button.
	
	  4. Click the Performance Tab.
	
	  5. Move the Hardware Acceleration slider to None.
	
	  6. Click OK.
	
	  7. Click OK.
	
	- Use a standard display driver such as the Standard VGA driver. To change the
	  driver, follow these steps:
	
	  1. In Control Panel, double-click Display.
	
	  2. Click the Settings tab, and then click Advanced Properties.
	
	  3. Click the Adapter tab
	
	  4. Click the Change button and then click Show All Devices.
	
	  5. In the Manufacturers box, click (Standard Display Types).
	
	  6. In the Models box, click Standard Display Adapter (VGA), and then click
	     OK.
	
	  7. Click Close.
	
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
	
