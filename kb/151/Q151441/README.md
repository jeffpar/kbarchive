---
layout: page
title: "Q151441: 3D Movie Maker: Cannot Hear Background Music"
permalink: /kb/151/Q151441/
---

## Q151441: 3D Movie Maker: Cannot Hear Background Music

{% raw %}

	Article: Q151441
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsound kbimukbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 3D Movie Maker for Windows, version 1.0 
	- Microsoft Nickelodeon 3D Movie Maker for Windows, version 1.0 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use 3D Movie Maker, you may not hear background music, or you may
	receive the following error message:
	
	  MIDI not configured properly.
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- The MIDI driver for your sound card is either not installed or is not
	  configured properly.
	
	- The volume for your sound card's MIDI channel or for your speakers is not
	  turned up.
	
	- The MIDI channel on your sound card is not set to Play.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, point to Programs, point to Accessories, point to Multimedia,
	  and then click Media Player.
	
	  NOTE: If you are using Windows 98, click Start, point to Programs, point to
	  Accessories, point to Entertainment, and then click Media Player.
	
	2. On the Device menu, click MIDI Sequencer.
	
	3. Open the Windows\Media folder, click the Canyon.mid file, and then click
	  Open.
	
	4. Click the Play button. If you hear the Canyon.mid file play, skip to step 6.
	
	5. If you do not hear the Canyon.mid file play, click Volume Control on the
	  Device menu. Make sure the Volume slider under MIDI is not set all the way
	  down, and the Mute check box under MIDI is not selected. Also make sure the
	  volume for your speakers is turned up, and the speakers are plugged in to the
	  correct jack on your sound card.
	
	  If you still do not hear Canyon.mid the file play, contact your sound card
	  manufacturer for assistance in installing or properly configuring the MIDI
	  driver for your sound card.
	
	6. If you do hear the Canyon.mid file play, follow these steps:
	  a. Click Start, point to Settings and then click Control Panel.
	
	  b. Double-click Multimedia, then click the Midi tab.
	
	  c. Under MIDI Output, click the Single Instrument option to select it, and
	     then click Midi For Internal FM Synthesizer (or equivalent).
	
	  d. Click OK, and then close Control Panel.
	
	The MIDI driver for your sound card should now be configured properly, and you
	should be able to hear background music in 3D Movie Maker.
	
	Additional query words: mskids 3-d 3dmm moviemaker animated movies
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsound kbimu kbfaq
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeProdSearch kbZNotKeyword kbKidsSearch kb3dMovieMaker
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
