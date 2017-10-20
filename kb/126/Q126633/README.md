---
layout: page
title: "Q126633: Network Card IRQ Conflicts with Another Device"
permalink: /kb/126/Q126633/
---

## Q126633: Network Card IRQ Conflicts with Another Device

{% raw %}

	Article: Q126633
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a network interface card (NIC) in your computer, the IRQ that
	is set may conflict with another device in your system.
	
	CAUSE
	=====
	
	This problem can occur with NICs that are software configurable. If Windows 95
	cannot detect the NIC resources (for example, if there is no PROTOCOL.INI file,
	NDIS 2 driver, or Novell NetWare ODI configuration) it defaults to the first
	available logical configuration, regardless of IRQ assignments.
	
	RESOLUTION
	==========
	
	Use Control Panel to change the IRQ setting for the NIC to its original setting.
	To do so, follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Network icon.
	
	3. On the Configuration tab, double-click the NIC in your computer.
	
	4. On the Resources tab, change the IRQ setting so that it matches the setting
	  on the NIC.
	
	5. Click OK.
	
	NOTE: Not all NICs that are software configurable can be set by Windows 95. You
	may need to run the NIC's configuration software from an MS-DOS prompt.
	
	MORE INFORMATION
	================
	
	During Setup, Windows 95 tries to determine the NIC's configuration from
	existing network information. If no network configuration information exists,
	Setup tries to detect the configuration. If you are using a software
	configurable NIC, Setup detects the I/O address, not the IRQ. Setup then assigns
	an IRQ from the first logical configuration Windows 95 has for it, even though
	the IRQ may already be assigned to another device.
	
	For example, if you install an Intel EtherExpress 16 NIC configured to use IRQ 10
	in a computer with no previous network files, Setup assigns IRQ 3 to the NIC
	when it cannot find the NIC's IRQ. This creates an IRQ conflict, because IRQ 3
	is already assigned to COM2.
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
