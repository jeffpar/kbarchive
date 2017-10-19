---
layout: page
title: "Q158942: Windows NT Hangs with BIOS Power Management Enabled"
permalink: /kb/158/Q158942/
---

## Q158942: Windows NT Hangs with BIOS Power Management Enabled

	Article: Q158942
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT may seem to stop responding (hang) or may display a stop screen after
	being left idle.
	
	
	CAUSE
	=====
	
	Power Management is enabled on the computer.
	
	RESOLUTION
	==========
	
	Most computers allow you to disable Power Management features using the BIOS
	Setup tool. The BIOS Setup tool can usually be started by pressing certain keys
	after turning the computer on. Consult your computer's documentation or
	manufacturer for specific instructions for your computer.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 should not be used with BIOS Power Management features enabled.
	Power Management works by shutting down portions of the computer hardware during
	periods of low or no use.
	
	Windows NT 4.0 requires direct access to the hardware on a continual basis and is
	not currently designed to handle the delays associated with "powering up" of
	various hardware devices after periods of inactivity.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
