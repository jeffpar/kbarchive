---
layout: page
title: "Q242111: Windows NT does not recognize a new CD-ROM drive."
permalink: /kb/242/Q242111/
---

## Q242111: Windows NT does not recognize a new CD-ROM drive.

{% raw %}

	Article: Q242111
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a new CD-ROM drive on a computer running Microsoft Windows NT,
	the computer may not recognize the CD-ROM drive.
	
	CAUSE
	=====
	
	This behavior can occur if you installed the wrong CD-ROM driver.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the correct CD-ROM driver for your CD-ROM drive.
	To do this, follow these steps:
	
	NOTE: To identify the correct CD-ROM driver, you need to know the manufacturer
	and model of your CD-ROM drive. However, for some models, you can use a generic
	mass-storage controller driver to run the CD-ROM drive.
	
	1. In Control Panel, double-click SCSI Adapters.
	
	2. Click the Devices tab.
	
	3. In the list of SCSI adapters and connected devices, click the CD-ROM drive.
	
	4. On the Drivers tab, click Add.
	
	5. In the Manufacturers list, click the manufacturer of the CD-ROM drive.
	
	6. In the SCSI Adapter list, click the adapter name, and then do one of the
	  following:
	
	  a. If you have a driver disk from the manufacturer, click Have Disk, and then
	     follow the instructions for completing the installation.
	
	  b. If you do not have a driver disk from the manufacturer, click OK, and then
	     continue to install the driver.
	
	7. When you complete the installation, restart the computer.
	
	Additional query words: SCSI IDE device
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
