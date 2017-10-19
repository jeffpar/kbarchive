---
layout: page
title: "Q185768: Baseball 3D Err Msg: You Do Not Have a 3D Display Adapter"
permalink: /kb/185/Q185768/
---

## Q185768: Baseball 3D Err Msg: You Do Not Have a 3D Display Adapter

	Article: Q185768
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kberrmsg kbimu msgame bball3dkbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Baseball 3D, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Baseball 3D, you may receive an error
	message stating that you do not have a 3D display adapter that can support the
	3D features in the game.
	
	CAUSE
	=====
	
	This problem can occur if you are using a Diamond Stealth 3D video adapter with
	version 4.02.012 of the Diamond Stealth 3D video driver.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the Diamond Stealth 3D video driver included on
	the Baseball 3D CD-ROM. To do this, follow these steps:
	
	1. Insert the Baseball 3D CD-ROM into the CD-ROM drive. Press and hold down the
	  SHIFT key when you insert the CD-ROM to prevent Baseball 3D from starting
	  automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\drivers\diamond\siis220\sii95104.exe
	
	  where <cd-rom> is the drive letter for the CD-ROM drive.
	
	4. Follow the instructions on the screen to install the updated Diamond Stealth
	  3D video driver.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Baseball 3D, version
	1.0.
	
	MORE INFORMATION
	================
	
	Baseball 3D does not detect 3D functionality in the Diamond Stealth 3D video
	adapter if version 4.02.012 of the retail driver is installed because Baseball
	3D checks for 3D features that this version of the video driver does not
	support.
	
	In addition, Baseball 3D does not prompt you to update the Diamond Stealth 3D
	video driver to the version included on the Baseball 3D CD-ROM.
	
	Additional query words: 1.00 msgame base ball crash hang kbfaq
	
	======================================================================
	Keywords          : kbdisplay kberrmsg kbimu msgame bball3d kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch kbBaseBall3D
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
