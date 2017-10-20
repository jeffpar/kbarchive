---
layout: page
title: "Q134508: External MIDI Devices Do Not Work with Sound Blaster Pro"
permalink: /kb/134/Q134508/
---

## Q134508: External MIDI Devices Do Not Work with Sound Blaster Pro

{% raw %}

	Article: Q134508
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
	
	External MIDI devices may fail to work with a Sound Blaster Pro sound card.
	
	CAUSE
	=====
	
	This problem can occur if the Windows 3.1 drivers are installed for the Sound
	Blaster Pro sound card instead of the Windows 95 drivers.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the Windows 3.1 drivers and install the Windows
	95 drivers for the sound card. To do so, follow these steps:
	
	1. In Control Panel, double-click the System icon.
	
	2. On the Device Manager tab, double-click the Sound, Video, And Game Controller
	  branch.
	
	3. Click the listed sound card, and then click Remove.
	
	4. Click OK until you return to Control Panel.
	
	5. In Control Panel, double-click the Add New Hardware icon.
	
	6. Click Next three times.
	
	The Add New Hardware Wizard will detect the sound card and install the
	appropriate Windows 95 drivers.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
