---
layout: page
title: "Q155736: CD Player Seems to Hang with Multiple-CD Changer"
permalink: /kb/155/Q155736/
---

## Q155736: CD Player Seems to Hang with Multiple-CD Changer

{% raw %}

	Article: Q155736
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using CD Player to play audio CDs on a multiple-CD changer, CD
	Player seems to stop responding (hang). After 30 to 60 seconds, CD Player begins
	responding again.
	
	In addition, once CD Player has loaded and you are playing a CD, attempting to
	access another CD in the changer from within Windows NT Explorer causes CD
	Player to display the following message:
	
	  Data or no disk loaded
	
	CAUSE
	=====
	
	CD Player was not designed for use with multiple-CD changers. The amount of time
	it takes CD Player to initialize for a multiple-CD changer is dependent upon the
	size of the changer. Because of the information presented to CD Player when
	another CD is accessed, CD Player cannot properly interpret what is being done
	with the drive.
	
	RESOLUTION
	==========
	
	To have CD Player properly display an audio CD when accessing other CDs, quit CD
	Player and restart it.
	
	MORE INFORMATION
	================
	
	For each CD, CD Player views the CD in one of two states: Loaded or Ejected.
	However, with multiple-CD changers, there is a third state: Unloaded. Unloaded
	means the CD is in the drive, but not currently under the CD-ROM drive's read
	head. CD Player interprets an unloaded CD as an ejected CD. However, because the
	CD is not actually ejected, CD Player is never updated.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
