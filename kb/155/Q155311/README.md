---
layout: page
title: "Q155311: Choosing Sound System for MIDI Enables MIDI on All Sound Cards"
permalink: /kb/155/Q155311/
---

## Q155311: Choosing Sound System for MIDI Enables MIDI on All Sound Cards

{% raw %}

	Article: Q155311
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbmm kbsound
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play MIDI sound on a computer with a Windows Sound System
	sound card and a Sound Blaster 16 card installed, MIDI sound is played
	simultaneously from both sound cards if "Windows Sound System MIDI" is selected
	as the default MIDI device. Selecting "Sound Blaster FM Synthesis" as the
	default MIDI device plays sound only from the Sound Blaster card.
	
	CAUSE
	=====
	
	This problem is caused by the OPL3 chip implementation on the Windows Sound
	System sound card.
	
	RESOLUTION
	==========
	
	To resolve this issue, select the Sound Blaster 16 sound card as the default
	MIDI playback device in Windows NT. To do this, follow these steps:
	
	1. In Control Panel, double-click Multimedia.
	
	2. Click the MIDI tab.
	
	3. In the Single Instrument box, click Sound Blaster FM Synthesis.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	The OPL3 MIDI chip design implementation calls for all OPL3 chips installed in
	the system to play simultaneously. However, the Sound Blaster sound card works
	around this problem and plays MIDI sound by itself.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbmm kbsound 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
