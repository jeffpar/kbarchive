---
layout: page
title: "Q141749: MMSYSTEM326. No wave device that can..."
permalink: /kb/141/Q141749/
---

## Q141749: MMSYSTEM326. No wave device that can...

{% raw %}

	Article: Q141749
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1996
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmm kbsetup kbsound kbimu
	Last Modified: 15-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Music Central for Windows, 1996, 1997 edition, version 1996 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Music Central for the first time, you receive the following error
	message after the Microsoft Home logo appears:
	
	  MMSYSTEM326. No wave device that can play files in the current format is
	  installed.
	
	You may also receive this error message when you attempt to play certain sound
	clips.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- Windows 95 Audio Compression is not installed properly.
	
	- Your sound card does not support stereo sound playback.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods.
	
	Reinstalling Audio Compression Drivers
	--------------------------------------
	
	For information about how to reinstall Audio Compression drivers, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q133365 Windows 95: Troubleshooting Problems with Compressed Audio
	
	Upgrading Sound Card or Sound Driver
	------------------------------------
	
	Upgrade your sound card to a stereo sound card. If you already have a stereo
	sound card, install the correct driver for your sound card. Contact your sound
	card vendor to inquire about obtaining the latest version of the sound card
	driver.
	
	MORE INFORMATION
	================
	
	Nearly half of the sound clips in Music Central are compressed stereo sound
	clips. You can play an uncompressed stereo sound clip on a monophonic sound card
	because the standard Pulse Code Modulation (PCM) converter can convert a stereo
	sound clip to a monophonic sound clip. You can play a compressed monophonic
	sound clip on a monophonic sound card because the Microsoft Audio Compression
	Manager can use the appropriate codec to decompress the sound clip. However, you
	cannot play a compressed stereo sound clip on a mono sound card, because you
	cannot decompress a sound clip at the same time you convert it from stereo to
	mono.
	
	To test if your sound card can play compressed stereo sound clips, play the
	following two sound clips in the Media Gallery in Music Central:
	
	- Stereo: Grandmaster Flash (<cdrom>:\Data\Ctrl\Ctrl4\T419349a.wav)
	
	- Mono: Jefferson, Blind Lemon (<cdrom>:\Data\Ctrl\Ctrl4\T419264a.wav)
	
	If you receive an error message when you play the first sound clip, but you do
	not receive an error message when you play the second sound clip, your sound
	card cannot play compressed stereo sound clips.
	
	Additional query words: 1996 1997 multi media multimedia multi-media mmtitles kbmm monaural errors
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmm kbsetup kbsound kbimu 
	Technology        : kbHomeProdSearch kbMusicCentral kbMusicCentral1996 kbMusicCentral1997
	Version           : 1996
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
