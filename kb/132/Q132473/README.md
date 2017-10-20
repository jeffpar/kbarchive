---
layout: page
title: "Q132473: PCMCIA.SYS Driver Fails to Load During Boot on NEC Versa P-75"
permalink: /kb/132/Q132473/
---

## Q132473: PCMCIA.SYS Driver Fails to Load During Boot on NEC Versa P-75

{% raw %}

	Article: Q132473
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.00 
	- Microsoft Windows NT Server versions 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you boot Windows NT on an NEC Versa P-75 or M-75 Laptop, event Id 7026 is
	written to the system log. A service fails to start. Using Event view to view
	Event Id 7026 shows:
	
	  The following boot-start or system-start driver(s) failed to load PCMCIA
	
	CAUSE
	=====
	
	This problem occurs when you turn off the PCMCIA power option in the auto setup
	power management menu. This disables the PCMCIA Bus. Consequently, none of the
	PC Cards work and the PCMCIA driver fails to load during startup.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, enable PCMCIA power on the Versa:
	
	1. Press F1 right after (on some computers, press F1 before) the memory count
	  has completed to start Auto Setup.
	
	2. Press ALT+P to go into the CMOS power management menu.
	
	3. Press A to go to the PCMCIA Power management option. To enable it, press
	  ALT+DOWN ARROW, highlight Enable, and then press ENTER.
	
	4. Press ENTER again to exit the power management menu.
	
	5. Press ALT+X.
	
	6. Select Exit and Save Changes and then press ENTER.
	
	7. Select "Enter to update your system" and then press ENTER.
	
	The system should now restart and load the PCMCIA driver properly.
	
	NOTE: Although Windows NT 3.51 does not support power management features built
	into the BIOS, this power management option must be enabled to support the PC
	Cards in the computer.
	
	
	Additional query words: pmccia vendor nec versa prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
