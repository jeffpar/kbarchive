---
layout: page
title: "Q303027: Age of Empires II: Computer Hangs When Loading The Age of Kings"
permalink: /kb/303/Q303027/
---

## Q303027: Age of Empires II: Computer Hangs When Loading The Age of Kings

	Article: Q303027
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Age of Empires II THE AGE OF KINGS,
	Microsoft Windows may stop responding (hang) when the Age of Empires II THE AGE
	OF KINGS Loading screen appears.
	
	As a result, you are unable to start Age of Empires II.
	
	CAUSE
	=====
	
	This behavior can occur if Direct Memory Access (DMA) is enabled for your
	computer's CD-ROM or DVD-ROM drive.
	
	NOTE: This issue can also occur if an Ultra DMA Integrated Drive Electronics
	(IDE) device is connected to the same IDE controller as a non-Ultra DMA IDE
	device.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable DMA for your computer's CD-ROM or DVD-ROM drive.
	To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click System.
	
	3. In the System Properties dialog box, click the "View devices by type" option
	  on the Device Manager tab.
	
	4. Expand CDROM, click the CD-ROM or DVD-ROM drive that you want, and then click
	  Properties.
	
	5. In the "<drive name> Properties" dialog box, click to clear the DMA
	  check box on the Settings tab, click OK, and then click Close.
	
	6. Click Yes to restart the computer.
	
	MORE INFORMATION
	================
	
	For additional information about troubleshooting CD-ROM or DVD-ROM drive issues,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Errors
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbAOESearch kbAOE2Kings
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
