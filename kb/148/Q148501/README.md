---
layout: page
title: "Q148501: Preventing PCI Resource Conflicts on Intel-Based Computers"
permalink: /kb/148/Q148501/
---

## Q148501: Preventing PCI Resource Conflicts on Intel-Based Computers

{% raw %}

	Article: Q148501
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On your Intel-based (x86-processor-based) computer running Windows NT, after you
	add another PCI device, the system stops responding (hangs) or the PCI device
	may fail to operate.
	
	CAUSE
	=====
	
	The Windows NT Hardware Abstraction Layer (HAL) HAL assigned an I/O port address
	or memory resource for the new PCI device that overlaps with an existing PCI
	device therefore causing a PCI resource conflict on your system.
	
	Under normal operation, the system BIOS is responsible for setting the PCI device
	resource requirements. When Windows NT loads, the Windows NT HAL sometimes moves
	the PCI device resources. PCI devices are dynamically configurable. However, the
	Windows NT HAL sometimes assigns overlapping I/O port addresses or memory
	resources for the PCI devices.
	
	WORKAROUND
	==========
	
	To resolve this problem, upgrade to Windows NT 4.0 and follow the instructions
	under Windows NT 4.0 Upgrade Information below. To work around this problem use
	one of the workarounds below.
	
	Windows NT 4.0 Upgrade Information
	----------------------------------
	
	Under Windows NT 4.0, an option has been added to the BOOT.INI file that the
	x86-based HALs can recognize. Note that only those HALs shipped by Microsoft
	will recognize this switch. When a HAL recognizes the /PCILOCK switch (option),
	the HAL does not allow the operating system to change the PCI device resources
	as long as the system BIOS settings appear to be correct and complete.
	
	If the adding of a PCI adapter causes a hang during boot, remove the offending
	PCI adapter card. Reboot the system and modify the BOOT.INI file by adding the
	/PCILOCK option. Shut down the system, add the new adapter card, and reboot the
	system.
	
	The Windows NT 4.0 HALs that currently have this fix in are: HAL.DLL, HALMPS.DLL,
	and HALAPIC.DLL.
	
	Workarounds
	-----------
	
	To work around this problem, do one of the following:
	
	- Insert the PCI adapter cards to a different PCI slot. This option does not
	  apply to PCI devices built in to the main system board (motherboard).
	
	  -or-
	
	- Change the driver load order for the conflicting PCI adapters. This is not
	  always possible when the types of drivers loaded have to be in a
	  pre-determined order. Be very careful when modifying the registry as an
	  incorrect setting may cause the system to become unstable or unbootable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. Microsoft has corrected this problem in Windows NT 4.0 and in the latest
	Windows NT 3.51 U.S. Service Pack. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When you write device drivers for Windows NT, remember that the call to
	HalAssignSlotResources is the API that moves the PCI resources. Some drivers use
	IoReportResourceUsage, as a HalAssignSlotResources alternative, with the current
	resource settings obtained from the configuration space of the PCI device. The
	calls to HalGetBusData and HalGetBusDataByOffset can be used to read the PCI
	device configuration space. This method should only be used as a last resort as
	it contradicts the purpose of having a dynamically configurable bus.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
