---
layout: page
title: "Q148725: NEC CD-ROM Drive Controls Do Not Work in Windows 95"
permalink: /kb/148/Q148725/
---

## Q148725: NEC CD-ROM Drive Controls Do Not Work in Windows 95

{% raw %}

	Article: Q148725
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
	
	The controls on the front panel of NEC CD-ROM drives for playing audio CDs
	(including the Play, Pause, Previous, Stop, and Forward controls) do not work
	with Windows 95.
	
	CAUSE
	=====
	
	This behavior occurs if the Auto Insert Notification feature in Windows 95 is
	enabled. This feature overrides the front panel controls.
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Use CD Player or Media Player in Windows 95 to play audio CDs.
	
	- Disable the Auto Insert Notification feature in Windows 95. For more
	  information, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q126025 How to Disable Automatic CD-ROM Running and Audio CD Playing
	
	MORE INFORMATION
	================
	
	When the Auto Insert Notification feature is enabled in Windows 95, the CD-ROM
	drive is polled every two seconds to determine if there has been a change in
	disc status.
	
	This polling uses SCSI commands that have higher priority than the front panel
	controls. Therefore, commands initiated from the front panel controls are
	overridden.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	

{% endraw %}
