---
layout: page
title: "Q134894: LaserWave Futura 16 Sound Card Detected Incorrectly"
permalink: /kb/134/Q134894/
---

## Q134894: LaserWave Futura 16 Sound Card Detected Incorrectly

{% raw %}

	Article: Q134894
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
	
	When you install Windows 95, the LaserWave Futura 16 sound card in your computer
	may be incorrectly detected as a Media Vision Pro Audio Deluxe sound card. If
	you click the Media Vision sound card in Device Manager, and then click
	Properties, the following message is displayed in the Device Status box:
	
	  This device is not present, not working properly, or does
	  not have all the drivers installed. See your hardware
	  documentation (Code 10.)
	
	RESOLUTION
	==========
	
	To work around this problem, remove the Media Vision Pro Audio Deluxe drivers in
	Device Manager, and then install the Windows 3.1 drivers for the LaserWave
	Futura 16 sound card. For information about installing the Windows 3.1 drivers
	for the LaserWave sound card, contact the hardware manufacturer.
	
	To remove the Media Vision drivers in Device Manager, follow these steps:
	
	1. Use the right mouse button to click My Computer, and then click Properties on
	  the menu that appears.
	
	2. Click the Device Manager tab.
	
	3. Double-click the Sound, Video, And Game Controllers branch.
	
	4. Click the Media Vision Pro Audio Deluxe sound card, and then click Remove.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
