---
layout: page
title: "Q137071: Xircom PE3 Network Adapter Card Hangs on HP Omnibook 600"
permalink: /kb/137/Q137071/
---

## Q137071: Xircom PE3 Network Adapter Card Hangs on HP Omnibook 600

{% raw %}

	Article: Q137071
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 may stop responding (hang) on a Hewlett-Packard (HP) Omnibook 600
	computer using a Xircom Pocket Ethernet PE3 network adapter when you are using
	the Windows 95 protected-mode drivers for the network adapter.
	
	If you restart Windows 95 in Safe mode, Device Manager displays no errors for the
	Xircom PE3 network adapter.
	
	
	CAUSE
	=====
	
	The Windows 95 protected-mode Xircom network adapter card drivers are not
	compatible with the HP Omnibook 600 laptop computer.
	
	RESOLUTION
	==========
	
	Use the real-mode drivers supplied by the manufacturer with the network adapter
	card. To change the driver type in Windows 95, perform the following steps:
	
	1. In Control Panel, double-click the Network icon.
	
	2. Click the Xircom PE3 network adapter, and then click Properties.
	
	3. On the Driver Type tab, click the "Real mode (16-bit) NDIS driver" option
	  button, and then click OK.
	
	4. Click OK, and restart your computer when you are prompted.
	
	5. Install the real-mode network drivers using the disks supplied by the
	  manufacturer.
	
	For additional information about installing the real-mode drivers, please consult
	the documentation included with the network adapter, or contact the
	manufacturer.
	
	MORE INFORMATION
	================
	
	The Windows 95 protected-mode Xircom drivers are not known to cause this problem
	with any other computers.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
