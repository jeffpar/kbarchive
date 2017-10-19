---
layout: page
title: "Q285213: Combat Flight Simulator 2: Sound or Frame Rate Issues"
permalink: /kb/285/Q285213/
---

## Q285213: Combat Flight Simulator 2: Sound or Frame Rate Issues

	Article: Q285213
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbsound kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Combat Flight Simulator 2, you may experience one or
	more of the following symptoms:
	
	- Stuttering sounds.
	
	- Chirping or clicking sounds.
	
	- Distorted sounds.
	
	- The video frame rate drops when you fire your guns.
	
	- The video frame rate is slow or choppy.
	
	CAUSE
	=====
	
	This behavior can occur if your sound card is not compatible with the process
	that converts the game sounds to mono sound.
	
	RESOLUTION
	==========
	
	To work around this issue, use the following methods in the order in which they
	are presented.
	
	Increase the Sound Playback Quality
	-----------------------------------
	
	To increase the sound playback quality:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type the following line:
	
	  cfs2.cfg
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. Double-click the Cfs2.cfg file.
	
	5. In the "Choose the program you want to use" box, click Notepad.
	
	6. Click to clear the "Always use this program to open this file" check box, and
	  then click OK.
	
	7. Scroll to the [SOUND] section and change the BitsPerSample=, the Channels=,
	  and the SamplesPerSec= lines to match the following code:
	
	  [SOUND]
	  Channels=2
	  SamplesPerSec=22050
	  BitsPerSample=16
	
	NOTE: You can use either one of the following values for the SamplesPerSec=
	line:
	   - 22050
	   - 44100
	
	8. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	9. Restart Combat Flight Simulator 2.
	
	10. If the problem continues to occur, attempt to use different combinations of
	  the values presented in step 7 and the default values in the [SOUND] section
	  of the Cfs2.cfg file.
	
	NOTE: The following code contains the default values in the Cfs2.cfg file:
	
	  [SOUND]
	  Channels=1
	  SamplesPerSec=11025
	  BitsPerSample=8
	
	If this issue continues to occur, proceed to the next method.
	
	Delete the Sound Entries in the Cfs2.cfg File
	---------------------------------------------
	
	To delete the sound entries in the Cfs2.cfg file:
	
	1. Open the Cfs2.cfg file.
	
	2. Delete the following lines from the Cfs2.cfg file:
	
	  [SOUND]
	  Channels=1
	  SamplesPerSec=22050
	  BitsPerSample=8
	
	3. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	4. Restart Combat Flight Simulator 2.
	
	Change to Game Compatible Device
	--------------------------------
	
	1. Click Start, point to Settings, and then click "Control Panel".
	
	2. Double-click Multimedia.
	
	3. Under Playback, click "Game Compatible Device" in the "Preferred Device" box.
	
	4. Click to select the "Use Preferred Devices Only" check box, and then click
	  OK.
	
	5. Close "Control Panel", and then restart the computer.
	
	For additional information about sound issues, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q263047 Games: How to Troubleshoot Sound Related Issues
	
	MORE INFORMATION
	================
	
	To increase compatibility with game controllers, the sound settings in Combat
	Flight Simulator 2 use 11Khz, 8-bit, and mono sound as the default values for
	the sound settings.
	
	These default values were chosen because many sound cards are unable to fully
	process game controller signals and high quality game sounds at the same time.
	
	Additional query words: msgame combatfs cfs2
	
	======================================================================
	Keywords          : kbdisplay kbsound kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
