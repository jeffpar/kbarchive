---
layout: page
title: "Q131960: Aztech Sound Galaxy Basic 16 Sound Card Detected Incorrectly"
permalink: /kb/131/Q131960/
---

## Q131960: Aztech Sound Galaxy Basic 16 Sound Card Detected Incorrectly

{% raw %}

	Article: Q131960
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows 95, the Aztech Sound Galaxy Basic 16 sound card in your
	computer may be incorrectly detected as one or more of the following sound
	cards:
	
	- MS Windows Sound System Compatible
	
	- Creative Labs Sound Blaster Pro
	
	- Media Vision Pro Audio Spectrum 16/Studio with SCSI
	
	The sound card works correctly in Windows 95, except that a microphone connected
	to the sound card may not function if you manually add in the Sound Galaxy Sound
	Card from Control Panel Add New Hardware.
	
	RESOLUTION
	==========
	
	For full functionality in Windows 95, use the Windows 3.1 drivers included with
	the sound card.
	
	If the sound card was incorrectly detected, use the following steps to remove the
	incorrect drivers:
	
	1. Use the right mouse button to click My Computer, then click Properties on the
	  menu that appears.
	
	2. Click the Device Manager tab.
	
	3. Double-click the Sound, Video, And Game Controllers branch.
	
	4. Click the incorrectly detected sound card, then click Remove.
	
	5. If more than one incorrect sound card was detected, repeat step 4 for the
	  additional sound cards.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: w95hw
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	

{% endraw %}
