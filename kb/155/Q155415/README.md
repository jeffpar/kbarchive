---
layout: page
title: "Q155415: PCMCIA.SYS Fails to Load w/ Cirrus Logic CL-PD6730 Controller"
permalink: /kb/155/Q155415/
---

## Q155415: PCMCIA.SYS Fails to Load w/ Cirrus Logic CL-PD6730 Controller

{% raw %}

	Article: Q155415
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems using a Cirrus Logic CL-PD6730 PCMCIA controller(Intel-PCIC Chip) may
	cause Pcmcia.SYS to fail to load upon startup.
	
	CAUSE
	=====
	
	The problem occurs when the value of the Interrupt Line register is set to 255
	(OxFF) on systems using the above mentioned Cirrus Logic controller.
	
	According to the PCI Local Bus Specification Revision 2.1, the Interrupt Line and
	Interrupt Pin registers are defined as follows:
	
	Interrupt Line register:
	------------------------
	
	For x86 based personal computers, the values in this register correspond to the
	IRQ. 255 is defined as meaning "unknown" or "no connection" to the interrupt
	controller.
	
	Interrupt Pin register:
	-----------------------
	
	The Interrupt Pin register tells which interrupt pin the device (or device
	function) uses. Devices (or device functions) that do not use an interrupt pin
	must put a zero in this register.
	
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
