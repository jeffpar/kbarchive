---
layout: page
title: "Q132572: Media Player Error Message Seeking to End of Audio CD"
permalink: /kb/132/Q132572/
---

## Q132572: Media Player Error Message Seeking to End of Audio CD

{% raw %}

	Article: Q132572
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
	
	When you advance to the end of an audio CD in Media Player, you may receive the
	following error message:
	
	  MMSYSTEM262 There is a problem with your media device. Make sure it is
	  working correctly or contact the device manufacturer.
	
	CAUSE
	=====
	
	The CD player is reporting an incorrect length for the audio CD. When Media
	Player tries to seek to the end of the CD, it is not using the actual end
	position, causing an error message.
	
	RESOLUTION
	==========
	
	You can safely ignore this error message.
	
	NOTE: You may receive this error message if you put a different CD in the CD-ROM
	drive. You must reinsert the original CD in the drive to correct the error.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
