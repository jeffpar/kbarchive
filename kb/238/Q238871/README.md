---
layout: page
title: "Q238871: PCI Resource Conflicts When You Resume from Suspend Mode"
permalink: /kb/238/Q238871/
---

## Q238871: PCI Resource Conflicts When You Resume from Suspend Mode

{% raw %}

	Article: Q238871
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On Windows 95 Service Release 2 (OSR 2, 2.1, and 2.5), after a computer
	suspends, and then resumes, PCI devices with option ROM, that are installed
	behind a PCI to PCI bridge, may show a resource conflict (code 12) in Device
	Manager.
	
	MORE INFORMATION
	================
	
	During POST (Power On Self Test), when the BIOS assigns resources to a device,
	it does not allocate a memory window for the option ROM; but it does allocate
	memory windows, as requested in the device's configuration space, and maps them
	to high memory (above the top of system RAM).
	
	When the computer resumes after being in Suspend mode, Windows 95 reenumerates
	the PCI devices, and reallocates the memory windows (as the BIOS did during
	POST). Windows also allocates an additional memory window for access to the
	option ROM.
	
	Windows 95 cannot allocate any memory windows for the device below 1MB; because
	the PCI bridge memory aperture "cannot be" programmed to access low memory. The
	option ROM window must be below 1MB in order to work correctly, and the result
	is a resource conflict for the memory window.
	
	Unlike Microsoft Windows 98, Microsoft Windows 95 does not support the necessary
	PCI to PCI bridging functionality. It is possible to overcome this problem by
	checking "Override Bridges" in the PCI bus properties of Device Manager. This
	causes Windows 95 to override the PCI bridge settings and reprogram the bridge
	to accommodate the additional memory window mapped below 1MB. If this is done,
	other boot devices behind the PCI to PCI bridge (such as SCSI drives) may fail,
	if their option ROM cannot accommodate Windows 95 reprogramming the PCI bridge.
	
	
	Additional query words: pci resume resource conflict
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
