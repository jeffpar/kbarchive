---
layout: page
title: "Q137153: Problem Using Mach32 ISA Display Adapter on PCI Bus"
permalink: /kb/137/Q137153/
---

## Q137153: Problem Using Mach32 ISA Display Adapter on PCI Bus

{% raw %}

	Article: Q137153
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you replace an ATI PCI Mach32 display adapter with an ISA Mach32 display
	adapter on certain computers with a PCI bus, the computer may stop responding
	(hang) after the logo screen appears when you start Windows 95.
	
	CAUSE
	=====
	
	This problem occurs because of a hardware problem on the PCI bus.
	
	
	RESOLUTION
	==========
	
	The only workaround for this problem is to use the PCI Mach32 display adapter
	instead of the ISA display adapter.
	
	MORE INFORMATION
	================
	
	To determine whether a computer has this problem, follow these steps:
	
	1. Restart the computer at a command prompt. To do so, restart the computer,
	  press the F8 key when you see the "Starting Windows 95" message, and then
	  choose Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type the following line and then press ENTER:
	
	  " debug " (without the quotation marks)
	
	3. At the "-" prompt, type the following line and then press ENTER:
	
	  " I 3c0 " (without the quotation marks)
	
	  If the result is 0, the computer has the problem described in this article. A
	  typical result is 20h on most computers.
	
	4. Type "q" (without the quotation marks) and then press ENTER.
	
	5. Restart the computer normally.
	
	On computers that have this problem, the attribute controller does not preserve
	the bit flag indicating that the screen is in. It instead returns a flag
	indicating that the screen is off. When Windows 95 starts, the virtual display
	driver reads this value into memory and then later restores the value to the
	port. Since it reads a value of 0 and restores a value of 0, the screen is
	turned off.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
