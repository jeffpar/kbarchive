---
layout: page
title: "Q157511: Setup Detects NCR 53c810 PCI SCSI Adapter as Symbios c810"
permalink: kb/157/Q157511/
---

## Q157511: Setup Detects NCR 53c810 PCI SCSI Adapter as Symbios c810

	Article: Q157511
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT 4.0 Setup, your NCR 53c810 SCSI adapter is detected as a
	Symbios c810 adapter.
	
	CAUSE
	=====
	
	The NCR 53c810 PCI SCSI adapter is now owned by Symbios.
	
	RESOLUTION
	==========
	
	Setup has correctly identified the adapter despite the apparent name error. The
	driver should function correctly. Contact the adapter's manufacturer for
	additional information.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
