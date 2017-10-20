---
layout: page
title: "Q159005: CardBus PCMCIA Controller Disabled After Second Boot"
permalink: /kb/159/Q159005/
---

## Q159005: CardBus PCMCIA Controller Disabled After Second Boot

{% raw %}

	Article: Q159005
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
	
	After the second boot with a CardBus PCMCIA controller installed in your
	computer, Device Manager may display a red "X" for the two PCMCIA sockets
	(meaning they are disabled).
	
	CAUSE
	=====
	
	CardBus controllers are dynamically enumerated during the first boot after
	installation even though they are installed disabled. On the second boot,
	Windows 95 recognizes that the device is disabled and reports this in Device
	Manager.
	
	RESOLUTION
	==========
	
	Enable the PCMCIA controller. To do this, follow these steps:
	
	1. In Control Panel, double-click System.
	
	2. Click the PCMCIA controller, and then click Properties.
	
	3. In the Device Usage box, click the "(Current)" check box to select it.
	
	4. Click OK.
	
	5. Click Close. When you are prompted to restart the computer, do so.
	
	When Windows 95 restarts, the PCMCIA Wizard runs to help you configure the PCMCIA
	controller.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	CardBus controllers are PCI devices that are dynamically enumerated by the PCI
	enumerator. The drivers load during Setup, ignoring the Disable bit in the
	registry. During the second boot, Windows Configuration Manager recognizes the
	registry entry indicating that the device is disabled, displays a red "X" in
	Device Manager, and does not start the controller. CardBus controllers must be
	explicitly enabled to invoke the PCMCIA Wizard on the second boot.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}
