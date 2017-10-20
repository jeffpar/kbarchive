---
layout: page
title: "Q132766: Plug and Play ISA Adapter Not Automatically Recognized"
permalink: /kb/132/Q132766/
---

## Q132766: Plug and Play ISA Adapter Not Automatically Recognized

{% raw %}

	Article: Q132766
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
	
	If you insert a Plug and Play ISA adapter in a computer without PCI slots,
	Windows 95 may not recognize the new adapter automatically. Also, Device Manager
	may display the PCI bus with an exclamation point in a yellow circle, with the
	status "No Plug and Play ISA bus was found. (Code 29)."
	
	CAUSE
	=====
	
	This problem is caused by a Plug and Play BIOS that is not supported by Windows
	95 on computers that have a PCI BIOS but not a PCI bus.
	
	On PCI computers, it is the PCI driver that starts the Plug and Play ISA driver.
	If the PCI driver fails, the ISA driver is not loaded, and Plug and Play ISA
	adapters are not automatically recognized or configured.
	
	RESOLUTION
	==========
	
	To add a Plug and Play adapter so that Windows 95 automatically recognizes it,
	enable the ISA Plug and Play bus using the following steps:
	
	1. In Control Panel, double-click the Add New Hardware icon, and then click
	  Next.
	
	2. Click No, and then click Next.
	
	3. Click System Devices, and then click Next.
	
	4. Click ISA Plug And Play Bus, and then click Next.
	
	5. Click Finish.
	
	6. When you are prompted to restart your computer, do so.
	
	You may also want to contact your computer manufacturer to inquire about
	obtaining an updated Plug and Play BIOS that is supported by Windows 95.
	
	MORE INFORMATION
	================
	
	A supported Plug and Play BIOS correctly reports an ISA bus instead of a PCI
	bus.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
