---
layout: page
title: "Q139523: Sound Blaster Mode Not Detected on Media Vision PAS 16"
permalink: /kb/139/Q139523/
---

## Q139523: Sound Blaster Mode Not Detected on Media Vision PAS 16

	Article: Q139523
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
	
	After you install Windows 95, sound may not be available on a system equipped
	with the Media Vision Pro Audio Spectrum 16 sound card because Sound Blaster
	compatibility mode is not detected or not listed in Device Manager.
	
	CAUSE
	=====
	
	Detection sets the Basic configuration listed to a value other than 2. Basic
	configuration 2 is required to enable the Sound Blaster compatibility mode
	resources.
	
	RESOLUTION
	==========
	
	To enable Basic configuration 2, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click the System icon.
	
	3. In System Properties, click the Device Manager tab, click the "Sound, video
	  and game controllers" option, and then click Properties.
	
	4. In "Sound, video and game controllers Properties," click the Resources tab,
	  and then click to clear the Automatic Settings check box.
	
	5. Change the Basic configuration to 2.
	
	6. Click Close, and then click OK. If prompted to do so, restart the computer.
	  Note that Sound Blaster compatibility mode now appears in Device Manager.
	
	MORE INFORMATION
	================
	
	When it is fully configured, the Media Vision PAS 16 with SCSI can have as many
	as four entries in Device Manager: Studio audio, Sound Blaster compatibility,
	PAS/w SCSI, and a game controller.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
