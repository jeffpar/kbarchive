---
layout: page
title: "Q131931: Packard Bell Legend 820CD Hangs During Hardware Detection"
permalink: kb/131/Q131931/
---

## Q131931: Packard Bell Legend 820CD Hangs During Hardware Detection

	Article: Q131931
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
	
	After you install an Intel EtherExpress Pro 16 network adapter in a Packard Bell
	Legend 820CD computer, the computer may stop responding (hang).
	
	CAUSE
	=====
	
	The computer may not have a free IRQ (hardware interrupt).
	
	RESOLUTION
	==========
	
	To resolve this problem, configure the computer so that there is an available
	IRQ for each hardware device that requires one. For assistance in configuring
	IRQs, please contact Packard Bell Technical Support.
	
	MORE INFORMATION
	================
	
	Windows 95 Setup does not attempt to detect the network adapter when there are
	no available IRQs.
	
	
	If you install the network adapter in the computer and there are no available
	IRQs, you can run Windows 95 only in Safe mode. After you start Windows 95 in
	Safe mode, you can disable the network adapter and then run Windows 95 normally.
	Network support is disabled in this configuration.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
