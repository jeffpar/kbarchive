---
layout: page
title: "Q136831: Windows 95 May Not Detect ATI Graphics Pro Turbo PCI Mach64"
permalink: kb/136/Q136831/
---

## Q136831: Windows 95 May Not Detect ATI Graphics Pro Turbo PCI Mach64

	Article: Q136831
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
	
	When you install Windows 95 on a computer with an ATI Graphics Pro Turbo Mach64
	PCI display adapter and a PCI version 1.0 motherboard, Setup may install the
	driver for an ATI Graphics Pro Turbo Mach64 VLB display adapter instead of the
	ATI Graphics Pro Turbo Mach64 PCI display adapter.
	
	CAUSE
	=====
	
	This problem occurs because of an invalid string in the ATI BIOS revision 1.01.
	ATI has a new BIOS, revision 1.2, that supports PCI 1.0 and 2.0 specifications,
	and corrects the problem described above. For additional information, please
	contact ATI Customer Support.
	
	RESOLUTION
	==========
	
	To install the correct display driver, follow these steps:
	
	1. In Control Panel, double-click the Display icon.
	
	2. On the Settings tab, click Change Display Type.
	
	3. In the Adapter Type area, click Change.
	
	4. Click the Show All Devices option button.
	
	5. In the Manufacturers box, click ATI Technologies. In the Models box, click
	  ATI Graphics Pro Turbo PCI (Mach64).
	
	6. Click OK until you return to Control Panel.
	
	MORE INFORMATION
	================
	
	The only difference between the VLB and the PCI driver is that the VLB driver
	does not support some of the advanced PCI features, such as PCI Burst mode.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
