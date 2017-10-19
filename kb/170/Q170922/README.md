---
layout: page
title: "Q170922: How PCI Devices Are Detected and Why They May Fail"
permalink: /kb/170/Q170922/
---

## Q170922: How PCI Devices Are Detected and Why They May Fail

	Article: Q170922
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup kbhowto
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article attempts to:
	
	- Explain, on a high level, how PCI devices are detected.
	
	- Explain why some PCI devices are not detected or hang the computer.
	
	- Explain how the computer determines which PCI devices are assigned which
	  interrupt requests (IRQ).
	
	  NOTE: Windows NT expects all devices to be configured correctly before it
	  attempts to start so that it can load the appropriate driver for each device.
	  Windows NT does not utilize the Plug and Play specification; therefore, it
	  cannot dynamically reassign an IRQ.
	
	MORE INFORMATION
	================
	
	This article is divided into the following sections:
	
	- PCI Overview and Interrupt Assignment
	
	- Troubleshooting
	
	PCI Overview and Interrupt Assignment
	-------------------------------------
	
	The PCI specification allows the motherboard manufacturer to determine interrupt
	assignments. Because there is no single method to assign an IRQ to a PCI device,
	you may experience problems installing multiple PCI devices in Windows NT.
	
	Programmable Interrupt Controller (PIC):
	
	Every motherboard has a device called the Programmable Interrupt Controller
	(PIC). This is the central location all devices must use when they wish to be
	serviced by the central processing unit (CPU). The following is an example of
	one design:
	
	  PCI Int#A (PCI Slot 1)---      |===============|
	                           |     |Programmable   |
	  PCI Int#A (PCI Slot 2)---------|               | Interrupt Line to CPU
	                           |     |Interrupt      |========>
	  PCI Int#A (PCI Slot 3)---      |               |
	                                 |Controller     |
	                                 |===============|
	
	A problem with this design is that three PCI devices must share the same
	interrupt number and line. If any of the cards do not properly pass the
	interrupt (driver or hardware failure) to one of the other devices requesting
	attention, one of the cards may fail to be detected or will not be used by a
	driver.
	
	The following is an example of a newer design:
	
	  PCI Int#A (PCI Slot 1)----------|==============|
	                                  |Programmable  |
	  PCI Int#A (PCI Slot 2)----------|              | Interrupt Line to CPU
	                                  |Interrupt     |========>
	  PCI Int#A (PCI Slot 3)----------|              |
	                                  |Controller    |
	                                  |==============|
	
	Because each device has their own direct trace to the PIC, this design allows the
	PIC to assign a different IRQ for each PCI device. This allows assigning virtual
	IRQ's or allowing each device to have its own discreet IRQ.
	
	Troubleshooting
	---------------
	
	If the computer fails to boot, there is probably a hardware issue. Please contact
	the hardware manufacturer for more information.
	
	Perform one of the following steps if the computer boots, but Windows NT states a
	device failed:
	
	- Click the Start button, point to Programs, point to Administrative Tools,
	  click Windows NT Diagnostics, click the Resources tab, and then click IRQ.
	
	  If all PCI devices in question appear with their own separate IRQ's, but your
	  system shows them as sharing an IRQ, the problem is most likely system
	  related. Please check with your hardware manufacturer to see if a BIOS
	  upgrade is available.
	
	- Install the last PCI device that fails, but do not install its driver. If the
	  computer fails, it is most likely a hardware issue that should be resolved
	  with the manufacturer.
	
	- If possible, remove all PCI devices and install them in the reverse order to
	  see if IRQ sharing performs better. You can also try changing the slots where
	  the cards are installed.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q148501 Preventing PCI Resource Conflicts on Intel-Based Computers
	
	Additional query words: hardware apic
	
	======================================================================
	Keywords          : kbsetup kbhowto 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
