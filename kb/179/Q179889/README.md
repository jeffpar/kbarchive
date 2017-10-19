---
layout: page
title: "Q179889: Close Combat II/III Err Msg: Cannot Open File for Streaming"
permalink: /kb/179/Q179889/
---

## Q179889: Close Combat II/III Err Msg: Cannot Open File for Streaming

	Article: Q179889
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsound kbtlc ccabtf cc kbimu msgamekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	- Microsoft Close Combat III: The Russian Front 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the programs listed at the beginning of this
	article, you may receive one of the following error messages:
	
	   - Cannot open file for streaming.
	
	   - Unable to get format for stream.
	
	CAUSE
	=====
	
	This behavior can occur if the sound card installed on your computer is not
	fully compatible with the sound driver installed by DirectX Setup.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact your hardware manufacturer to inquire about how
	to obtain and install the latest version of the sound driver for your sound
	card.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If an updated version of the sound driver for your sound card is not available,
	restore your original sound driver:
	
	1. Insert the CD-ROM for the program into your CD-ROM drive. Press and hold down
	  the SHIFT key when you insert the CD-ROM to prevent the program from starting
	  automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the appropriate line for the program you are using, and
	  then click OK
	
	  Close Combat: A Bridge Too Far:
	
	  <cd-rom>:\windows\directx\dxsetup.exe
	
	  Close Combat III: The Russian Front:
	
	  <cd-rom>:\directx\dxsetup.exe
	
	  where <cd-rom> is the drive letter of the CD-ROM drive that contains the
	  CD-ROM for the program.
	
	4. Click Restore Audio Drivers.
	
	5. Follow the instructions on the screen to finish installing the sound driver.
	  If you are prompted to restart the computer, click Yes.
	
	To work around this issue, configure the game to start without playing the
	opening video clips:
	
	1. Press and hold down the CTRL key as you double-click the "The Russian Front"
	  icon on the desktop.
	
	2. Under Media Options on the General tab, click to clear the Enable Videos
	  (Ctrl+V) check box, and then click OK.
	
	MORE INFORMATION
	================
	
	For additional information about how to use the Close Combat Options tool, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q176365 Close Combat: Changing Settings Before Starting the Game
	
	Additional query words: 2.00 3.00 abridgetoofar russianfront abtf trf close combat closecombat2 closecombat3 cc2 cc3 ccii cciii msgame
	
	======================================================================
	Keywords          : kberrmsg kbsound kbtlc ccabtf cc kbimu msgame kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbCloseCombatSearch kbCloseCombat2 kbCloseCombat3
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
