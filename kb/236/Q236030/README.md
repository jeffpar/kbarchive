---
layout: page
title: "Q236030: PCI Video Adapter May Not Function on Secondary PCI Bus"
permalink: /kb/236/Q236030/
---

## Q236030: PCI Video Adapter May Not Function on Secondary PCI Bus

{% raw %}

	Article: Q236030
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw win98 multimon kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer with two PCI buses that are joined by a PCI-to-PCI bridge, a PCI
	video adapter that is placed on the secondary PCI bus may not function properly.
	You may experience any of the following symptoms:
	
	- The video adapter is not recognized at the hardware level.
	
	- Windows NT 4.0 may report parity errors while it is loading the video
	  drivers.
	
	- Video distortion may occur.
	
	- The secondary video adapter is not detected while you are configuring
	  multiple monitor support in Windows 2000 or Windows 98.
	
	CAUSE
	=====
	
	This behavior can occur if the computer's BIOS does not correctly set the VGA
	Enable and ISA Enable bits on the PCI bridges. If the BIOS does not correctly
	set these bits on the PCI bridges, a resource conflict can occur between the
	bridges.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact the manufacturer of the BIOS to inquire about
	obtaining a BIOS revision that configures the VGA Enable bit and the ISA Enable
	bit properly for the PCI bridges.
	
	As a workaround, you may be able to install the PCI video adapter in one of the
	slots on the primary PCI bus. Consult your computer documentation to determine
	which PCI slots make up the primary bus on your computer.
	
	MORE INFORMATION
	================
	
	The issue discussed in this article is a hardware problem; contact your hardware
	manufacturer for additional information. The hardware manufacturer may not
	support certain PCI devices beyond the PCI-to-PCI bridge.
	
	The industry-standard PCI bus architecture limits a single bus to three PCI
	slots. Additional PCI slots are on a separate PCI bus and must go through a
	PCI-to-PCI bridge. On a computer that has a primary and secondary bus joined by
	a PCI-to-PCI bridge, the primary bus has only two PCI slots available; one slot
	is used for the PCI-to-PCI bridge. The PCI-to-PCI bridge is actually a PCI
	translator that decodes and encodes address calls that are being passed upstream
	from, or downstream to, the secondary PCI bus. This process is managed by the
	computer's BIOS.
	
	For additional information about configuring the PCI-to-PCI bridge, visit the
	following Microsoft Web site:
	
	  http://www.microsoft.com/hwdev/pci/vgacard.htm
	
	For additional information about preventing PCI resource conflicts and
	troubleshooting multiple monitors, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q148501 Preventing PCI Resource Conflicts on Intel-Based Computers
	
	  Q170922 How PCI Devices Are Detected and Why They May Fail
	
	  Q238886 How to Set Up and Troubleshoot Multiple Monitors in Windows 2000
	
	Additional query words: multimon display
	
	======================================================================
	Keywords          : kbenv kbhw win98 multimon kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin98search kbWin98
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
