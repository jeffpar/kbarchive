---
layout: page
title: "Q154712: Cannot Recognize Devices Attached to BusLogic BT-946c"
permalink: /kb/154/Q154712/
---

## Q154712: Cannot Recognize Devices Attached to BusLogic BT-946c

{% raw %}

	Article: Q154712
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the driver for the BusLogic BT-946c SCSI host adapter, the
	driver may load successfully but no devices attached to it may be recognized.
	
	CAUSE
	=====
	
	The BusLogic BT-946c adapter is supported with BIOS revision 4.92e and firmware
	revision 4.25j.
	
	RESOLUTION
	==========
	
	Contact BusLogic for BIOS and/or firmware updates.
	
	MORE INFORMATION
	================
	
	In addition, the BusLogic BT-946c adapter is not currently included on the
	Hardware Compatibility List for RISC platforms. BusLogic currently builds its
	adapter configuration tools into the adapter's firmware, which cannot be
	accessed on RISC platforms (DEC Alpha, MIPS, PowerPC). Adapters that cannot be
	configured while installed in a RISC platform are not certified for Windows NT
	as being compatible with that platform.
	
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
