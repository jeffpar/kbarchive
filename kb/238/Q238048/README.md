---
layout: page
title: "Q238048: Encarta Dictionary 2000: Pronunciations Are Not Played"
permalink: /kb/238/Q238048/
---

## Q238048: Encarta Dictionary 2000: Pronunciations Are Not Played

{% raw %}

	Article: Q238048
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsound kbimu
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta World English Dictionary 
	- Microsoft Encarta World English Dictionary 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a pronunciation or sound effect in Microsoft Encarta World
	English Dictionary 2000, you may experience one or more of the following
	symptoms:
	
	- The sound may not be played.
	
	- You may receive the following error message:
	
	  No wave device that can play the audio files in the current format is
	  installed. To correct this, reinstall Encarta Dictionary from the Encarta
	  Dictionary disc.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- A sound card is not installed in your computer.
	
	- A sound card is installed in your computer, but the driver for the sound card
	  is disabled, damaged, or not installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Determine If a Sound Card Is Installed in Your Computer
	-------------------------------------------------------
	
	To determine if a sound card is installed in your computer:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System, and then click the Device Manager tab.
	
	3. Click the PLUS SIGN (+) next to "Sound, video, and game controllers" to
	  expand the branch. If a sound card is installed in your computer, the model
	  of the sound card is displayed in the branch.
	
	  If the "Sound, video, and game controllers" branch does not exist, a sound
	  card is not installed in your computer.
	
	Install the Driver for Your Sound Card
	--------------------------------------
	
	For instructions about how to install the driver for your sound card, consult the
	printed documentation provided with the sound card.
	
	Enable the Driver for Your Sound Card
	-------------------------------------
	
	If the issue continues to occur, check to make sure the driver for your sound
	card is enabled. If the driver is not enabled:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System, and then click the Device Manager tab.
	
	3. Click the PLUS SIGN (+) next to "Sound, video, and game controllers" to
	  expand the branch.
	
	4. Click to select your sound card, and then click Properties.
	
	5. Under "Device usage," click to clear the "Disable in this hardware profile"
	  check box.
	
	6. Click OK, and then click OK again.
	
	7. In Control Panel, double-click Multimedia.
	
	8. Click the Devices tab.
	
	9. Click the PLUS SIGN (+) next to Audio Devices to expand the branch.
	
	10. Click to select your sound card, and then click Properties.
	
	11. Click "Use audio features on this device."
	
	12. Click OK, and then click OK again.
	
	13. Close Control Panel, and then restart the computer.
	
	Remove and Reinstall the Driver for Your Sound Card
	---------------------------------------------------
	
	If the issue continues to occur, remove and reinstall the driver for your sound
	card. To do this, consult the printed documentation provided with the sound
	card, or contact your hardware manufacturer.
	
	Additional query words: multi multi-media media mm ewed speaks talks voice silence silent
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsound kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaWorldEngDict2001
	Version           : WINDOWS:; :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
