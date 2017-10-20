---
layout: page
title: "Q98414: Using IBM M-Audio Sound Card to Play MIDI Sounds"
permalink: /kb/098/Q98414/
---

## Q98414: Using IBM M-Audio Sound Card to Play MIDI Sounds

{% raw %}

	Article: Q98414
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Multimedia Beethoven for Windows, version 1.0 
	- Microsoft MediaView Software and Title Development Kit, version 1.0 
	- Microsoft Multimedia Viewer 
	- Microsoft Windows 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MIDI sound will not play through the PC speaker if you are using the IBM M-
	Audio sound card. Wave sound will play from the PC speaker.
	
	MORE INFORMATION
	================
	
	The IBM M-Audio sound card can play sound through the internal PC speaker. MIDI
	sound cannot play through the PC speaker. The PC speaker is only capable of
	playing wave sounds. A set of external speakers (or headphones) plugged into the
	card (bottom two jacks) provide MIDI capabilities.
	
	To set the option to use the PC speaker, start Control Panel, click Drivers,
	select "IBM M-Audio sound driver", and click Setup.
	
	If you still can't play MIDI sound, do the following in Windows 3.x:
	
	1. Download the latest drivers from the Microsoft Download Service (IBM.EXE).
	  There is just one driver to install in Control Panel Drivers for all types of
	  sound (unlike some that may require multiple drivers).
	
	2. In the MIDI Mapper set 1 through 12 in the port column to the IBM choice and
	  13 through 16 on none.
	
	
	Additional query words: kbhowto kbmm multi media multi-media multimedia .wav .mid canyon.mid midimapper sound
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHomeProdSearch kbWin3xSearch kbHomeMMsearch kbSDKSearch kbBookshelfSearch kbZNotKeyword3 kbWin311 kbSDKMediaView100 kbMMBeethoven100
	Version           : :1.0,3.11
	
	=============================================================================
	

{% endraw %}
