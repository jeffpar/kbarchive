---
layout: page
title: "Q159038: P6 BIOS Must Configure Devices Behind PCI-to-PCI Bridge"
permalink: /kb/159/Q159038/
---

## Q159038: P6 BIOS Must Configure Devices Behind PCI-to-PCI Bridge

{% raw %}

	Article: Q159038
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
	
	Devices behind a PCI-to-PCI bridge on a P6-based computer will be disabled. The
	devices appear in Device Manager with either an exclamation point in a yellow
	circle or a red "X," indicating a problem with the device.
	
	CAUSE
	=====
	
	OEM Service Release 2 (OSR2) does not support the configuration of devices
	behind PCI-to-PCI bridges on P6-based computers. The BIOS in P6-based computers
	is required to configure the resources for devices behind the bridge.
	
	MORE INFORMATION
	================
	
	OSR2 can configure devices behind PCI-to-PCI bridges in protected mode on
	Pentium- or 80486-compatible x86 processor-based computers (processors prior to
	the P6). Therefore, it is possible to access devices behind the PCI-to-PCI
	bridge without BIOS support for resource configuration. Accessing the devices in
	real mode is not possible without the support of the BIOS.
	
	NOTE: The retail release of Windows 95 (version 950) does not support the
	configuration of devices behind PCI-to-PCI bridges, requiring the BIOS to
	configure all devices behind PCI-to-PCI bridges.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}
