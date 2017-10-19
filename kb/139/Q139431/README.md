---
layout: page
title: "Q139431: Spock.mpd SCSI Miniport Driver Supports Only IRQ 14"
permalink: /kb/139/Q139431/
---

## Q139431: Spock.mpd SCSI Miniport Driver Supports Only IRQ 14

	Article: Q139431
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
	
	When you install the driver for an IBM PS/2 Microchannel SCSI Host Adapter, you
	must configure the driver to use IRQ 14. Additionally, you cannot use the
	protected-mode driver if you have more than one of these adapters.
	
	CAUSE
	=====
	
	The protected-mode driver (Spock.mpd) for this adapter supports only one adapter
	using IRQ 14.
	
	
	RESOLUTION
	==========
	
	If you have only one IBM PS/2 Microchannel SCSI Host Adapter, configure it to
	use IRQ 14 to enable the protected-mode driver. To do so, follow these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, double-click the SCSI Adapter branch, and then
	  double-click Microchannel SCSI Host Adapter.
	
	3. On the Resources tab, click the Use Automatic Settings check box to clear it.
	
	4. Click Interrupt Request, and then click Change Setting.
	
	5. In the Value box, click 14.
	
	6. Click OK until you return to Control Panel.
	
	If you have multiple IBM PS/2 Microchannel SCSI Host Adapters, you must use
	real-mode drivers. For information about installing the real-mode drivers,
	please refer to the adapter's documentation or manufacturer.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
