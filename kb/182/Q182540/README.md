---
layout: page
title: "Q182540: WinNT x86 MPS HAL Can Fail To Map System Relative IRQs"
permalink: /kb/182/Q182540/
---

## Q182540: WinNT x86 MPS HAL Can Fail To Map System Relative IRQs

{% raw %}

	Article: Q182540
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under very specific circumstances, Windows NT may fail to assign a system-
	relative Interrupt Request Level (IRQL) to a Peripheral Component Interconnect
	(PCI) device.
	
	A driver first calls HalAssignSlotResources to retrieve the bus-relative IRQL for
	the PCI device. When the driver calls HalGetInterruptVector to map the
	bus-relative IRQL, the call may fail.
	
	CAUSE
	=====
	
	This problem is caused when a multiprocessor hardware-abstraction layer (HAL) is
	used on a specific PCI configuration. For any non-zero bus, if a PCI device is
	at Device #0 and it is the only PCI device on that bus, the interrupt assignment
	fails. If there is more than one PCI device on the bus, this problem does not
	occur.
	
	This problem has occurred on systems with PCI Accelerated Graphics Port (AGP)
	video devices because they are typically the only devices on the bus and they
	are not on bus zero. Also, systems with multiple PCI buses might have this
	problem.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	Hardware developers writing device drivers under multiple PCI bus systems may
	experience this problem. If your PCI device drivers are configured as described
	above and you experience this failure when calling HalGetInterruptVector,
	contact Microsoft Technical Support to obtain a hotfix.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
