---
layout: page
title: "Q184853: Outwars: Choppy, Distorted, or Stuttering Sound"
permalink: /kb/184/Q184853/
---

## Q184853: Outwars: Choppy, Distorted, or Stuttering Sound

{% raw %}

	Article: Q184853
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kbsound kbimu msgamekbfaq
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outwars, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Outwars, sounds in the game may stutter, switch back and
	forth between voice-over sounds and CD audio, or sound choppy or distorted.
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- Game settings or other programs are using excessive processor time.
	
	- Improper cache settings for the CD-ROM drive are reducing CD-ROM drive
	  performance.
	
	- The drivers for your sound card are outdated or incompatible.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Verify that the computer meets the minimum system requirements to run
	  Outwars. For information about the minimum system requirements to run
	  Outwars, see the following article in the Microsoft Knowledge Base:
	
	  Q183997 Outwars: Minimum System Requirements
	
	2. Quit all programs that are running before you start Outwars.
	
	3. Reduce the display resolution in the game. To do so, follow these steps:
	
	  a. Start Outwars.
	
	  b. On the Outwars startup screen, click Options.
	
	  c. Click Graphics.
	
	  d. In the Resolution box, click the down arrow to reduce the display
	     resolution in the game.
	
	  e. Click Back, and then click Back again.
	
	  f. Play Outwars. If the issue continues to occur, quit Outwars and proceed to
	     the next step.
	
	4. Change the sound playback option in the game from 3D to Stereo. To do so,
	  follow these steps:
	
	  a. Start Outwars.
	
	  b. On the Outwars startup screen, click Options.
	
	  c. Click Sound.
	
	  d. Click the Stereo box to light it.
	
	  e. Click OK, and then click Back.
	
	  f. Play Outwars. If the issue continues to occur, quit Outwars and proceed to
	     the next step.
	
	5. Verify that the performance of the CD-ROM drive meets the standards of a
	  quad-speed CD-ROM drive. To do so, follow these steps:
	
	  a. Insert the Outwars Disc 2 CD-ROM into the CD-ROM drive. Press and hold
	     down the SHIFT key when you insert the CD-ROM to prevent Outwars from
	     starting automatically.
	
	  b. Double-click My Computer.
	
	  c. Right-click the Outwars (CD-ROM drive) icon, and then click System
	     Information.
	
	  d. Under System Info, click CD-ROM, and then verify the following values:
	
	      - Data Transfer Rate: this value must be 600.0 KB/s or faster.
	
	      - CPU Util @ 300KB/s: For best performance, this value should be no
	        higher than 30 percent, and a value less than 10 percent is ideal.
	
	      - Data Transfer Integrity: this value should be Tested OK.
	
	     For more information about how to optimize the performance of the CD-ROM
	     drive, see the following article in the Microsoft Knowledge Base:
	
	  Q184410 How to Use Msinfo32.exe to Optimize CD-ROM Cache Settings
	
	  e. Play Outwars. If the issue continues to occur, quit Outwars, and then
	     proceed to the next step.
	
	6. Verify that both the voice-over files and the music and ambient sound files
	  are installed on the hard disk. To do so, follow these steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Add/Remove Programs.
	
	  c. On the Install/Uninstall tab, click Outwars, and then click Add/Remove.
	
	  d. When you are prompted to delete your saved games, click No.
	
	  e. When you are prompted to remove Outwars, click Yes.
	
	  f. Click OK, and then close Control Panel.
	
	  g. Reinstall Outwars. When you are prompted to select an installation option,
	     click Custom. Make sure both the Voice-Over Files and the Music &
	     Ambient Sound Files check boxes are selected.
	
	  h. When you are prompted to restart the computer, do so.
	
	  i. Play Outwars. If the issue continues to occur, proceed to the next step.
	
	7. Contact your hardware manufacturer to inquire about obtaining a more recent
	  DirectX-compatible driver for your sound card.
	
	Additional query words: 1.00 msgame outwar out wars
	
	======================================================================
	Keywords          : kbenv kbsound kbimu msgame kbfaq
	Technology        : kbGamesSearch kbOutwarsSearch kbOutwars kbZNotKeyword3
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
