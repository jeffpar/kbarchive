---
layout: page
title: "Q136777: PCMCIA Token Ring Network Card May Not Work"
permalink: /kb/136/Q136777/
---

## Q136777: PCMCIA Token Ring Network Card May Not Work

	Article: Q136777
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following PCMCIA Token Ring network adapters may not work in your computer:
	
	- IBM Token-Ring Credit Card Adapter
	
	- IBM Token-Ring Credit Card Adapter II
	
	- Toshiba Noteworthy PCMCIA Token Ring Card
	
	- AST Token Ring Credit Card Adapter
	
	- Pure Data Token Ring Credit Card Adapter
	
	- Thomas-Conrad TC-Card PCMCIA Adapter
	
	- 3Com TokenLink III 16/4 (3C689) PCMCIA Adapter
	
	- Kingston Token Ring 16/4 PCMCIA Adapter (KTR-PCM16/4)
	
	- DEC Token Ring Auto 16/4 PCMCIA Adapter II
	
	CAUSE
	=====
	
	This problem may be caused by a combination of the following conditions:
	
	- The Token Ring network adapter requires an I/O address in the A20-A2F range.
	
	- The computer has a sound adapter or other hardware device that is required to
	  have a port address in the 220-22F range. For example, the IBM ThinkPad 701
	  computer has a sound adapter that, according to the Plug and Play BIOS, is
	  required to have a port address in the 220-22F range.
	
	- When only the 10 least significant bits of each port address are used, the
	  two I/O addresses are resolved to an identical number. For example:
	
	  Address 220 = 00000010 00100000
	  Address A20 = 00001010 00100000
	
	  The Windows 95 I/O arbitrator pays attention only to the first 10 bits of any
	  I/O allocation. Devices that have I/O allocations that conflict in a 10-bit
	  decode are registered by the system as having an I/O address conflict.
	
	RESOLUTION
	==========
	
	You can work around this problem by manually configuring both devices. To do so,
	follow these steps:
	
	1. In Control Panel, double-click System.
	
	2. On the Device Manager tab, double-click "IBM Token-Ring Credit Card Adapter
	  II or compatibles."
	
	3. Click the Resources tab and note the resources the network adapter is using.
	  To change a resource, click the Use Automatic Settings check box to clear it,
	  click the resource, and then click Change Setting.
	
	  a. Change the Interrupt Request (IRQ) setting so that it does not conflict
	     with the IRQ used by any other device.
	
	  b. Change the first memory range to D4000-D5FFF. Change the second memory
	     range to E0000-EFFFF. (NOTE: If these values conflict with another device,
	     you may have to use different values. You must change them from the
	     default 10000-11FFF ranges.)
	
	  c. Click OK.
	
	4. Double-click Sound, Video, And Game Controllers, and then double-click the
	  sound card or the conflicting device.
	
	5. Make sure that the Use Automatic Settings check box does not contain a check
	  mark.
	
	6. Click OK until you return to Control Panel.
	
	7. Restart your computer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This behavior has been reported on the following computers:
	
	- IBM ThinkPad 701
	
	- NEC Versa 2000 with MediaDock docking station
	
	- NEC Versa 4000
	
	- Toshiba 2150cds
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
