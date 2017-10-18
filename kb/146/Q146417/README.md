---
layout: page
title: "Q146417: Disk Access Light Blinks When CD Player Plays Audio CD"
permalink: kb/146/Q146417/
---

## Q146417: Disk Access Light Blinks When CD Player Plays Audio CD

	Article: Q146417
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
	
	Your computer's hard disk access light may blink as you play an audio CD with
	Microsoft CD Player.
	
	CAUSE
	=====
	
	When CD Player plays an audio CD, it polls the CD-ROM drive for the current
	track and location so that it can display the information in its status window.
	Some computers turn on the hard disk access light whenever any SCSI device is
	accessed, regardless of whether or not the device being accessed is the hard
	disk. As a result, accessing the CD-ROM drive causes the hard disk access light
	to blink.
	
	RESOLUTION
	==========
	
	You do not need to take any action. However, if you want to play audio CDs
	without CD Player running, follow these steps:
	
	1. In CD Player, click Preferences on the Options menu.
	
	2. Click the Stop Playing CD On Exit check box to clear it.
	
	3. Click OK.
	
	When the audio CD starts playing, quit CD Player. The audio CD will continue to
	be played, but CD Player will not poll the CD-ROM drive for status information.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q138598 Disk Drive or CD-ROM Access Light Blinks Every Few Seconds
	
	Additional query words: flashes flashing
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
