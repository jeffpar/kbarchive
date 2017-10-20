---
layout: page
title: "Q164115: Play Button Unavailable When CD is Reinserted in CD-ROM Drive"
permalink: /kb/164/Q164115/
---

## Q164115: Play Button Unavailable When CD is Reinserted in CD-ROM Drive

{% raw %}

	Article: Q164115
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbtool kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are playing an audio CD, if you eject the CD using the button in CD
	Player or the eject button on the CD-ROM drive and then reinsert the CD, the
	Play button may remain unavailable.
	
	If you stop playing the CD in CD Player, eject it with the button on the CD-ROM
	drive, and then reinsert the same CD, the Play button works normally. However,
	if you do this and insert a different CD, the Play button is available, but does
	nothing when you click it.
	
	NOTE: When any CD is reinserted, CD Player may seem to read the CD (the light may
	blink on the CD-ROM drive) but the behavior described above still occurs.
	
	CAUSE
	=====
	
	The Autorun feature in Windows NT 4.0 has been disabled.
	
	RESOLUTION
	==========
	
	Stopping and restarting the CD Player program makes the Play button work
	correctly again.
	
	If the Autorun feature has been disabled, enabling it also resolves the issue.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q155217
	  TITLE : How to Enable or Disable the CD-ROM Autorun Feature
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: grayed greyed out
	
	======================================================================
	Keywords          : kbhw kbtool kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
