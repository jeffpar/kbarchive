---
layout: page
title: "Q100401: Musical Instruments: Break in Sound if Played after Stopping"
permalink: /kb/100/Q100401/
---

## Q100401: Musical Instruments: Break in Sound if Played after Stopping

{% raw %}

	Article: Q100401
	Product(s): Microsoft Home Multimedia Titles
	Version(s): MACINTOSH:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Musical Instruments for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you stop a sound while it is playing, and then play it again, you may hear a
	break in the sound at the point where you stopped it.
	
	This is more likely to occur if you are using a slow CD-ROM drive.
	
	Microsoft has confirmed this to be a problem in Musical Instruments for the
	Macintosh version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This occurs because QuickTime only has the first part of the sound (up to the
	point where you stopped it) in memory. Instead of preloading the entire sound
	into memory, it plays the part it has in RAM and then reads the rest of the
	sound from the CD. This causes a brief pause or break in the playback of the
	sound.
	
	
	Additional query words: mac 1.0 multi multimedia multi-media CogApp
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbZNotKeyword kbMusicalInstMac
	Version           : MACINTOSH:1.0
	
	=============================================================================
	

{% endraw %}
