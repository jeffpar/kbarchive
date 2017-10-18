---
layout: page
title: "Q120744: Pro-Audio Spectrum SCSI on DELL Omniplex -&gt; STOP Message"
permalink: kb/120/Q120744/
---

## Q120744: Pro-Audio Spectrum SCSI on DELL Omniplex -&gt; STOP Message

	Article: Q120744
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kb3rdparty kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to install a MediaVision Pro Audio Spectrum 16-bit (PAS16) sound
	card (with the Trantor SCSI adapter) in a DELL Omniplex 560 (with an NCR810 SCSI
	controller for the internal C disk), you receive the following STOP Message on
	the first boot:
	
	  STOP: INACCESSIBLE_BOOT_DEVICE.
	  Remove the MV PAS16 card. Install. Re-insert the card.
	
	CAUSE
	=====
	
	On the first boot of install, Windows NT automatic hardware detection looks for
	the boot device on the Trantor SCSI controller on the PAS16 card, cannot find
	it, and freezes. On later reboots, Windows NT has recorded in the registry that
	the NCR SCSI has the boot device, so it does not perform the auto-detection that
	causes the stop message.
	
	RESOLUTION
	==========
	
	1. Remove the MediaVision PAS16 card.
	
	2. Install Windows NT.
	
	3. Shutdown.
	
	4. Re-insert the card.
	
	5. Reboot.
	
	6. Use the Control Panel's Drivers option to activate the PAS16 card.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
