---
layout: page
title: "Q178637: Using Game Compatible Device to Troubleshoot Sound Problems"
permalink: /kb/178/Q178637/
---

## Q178637: Using Game Compatible Device to Troubleshoot Sound Problems

	Article: Q178637
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsound aoe
	Last Modified: 07-MAY-2002
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED OR TESTED BY MICROSOFT. USE ONLY                  **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- DreamWorks Interactive, Dilbert's Desktop Games, version 1.0 
	- DreamWorks Interactive, Lost World: Jurassic Park Chaos Island, version 1.0 
	- DreamWorks Interactive, The Neverhood, version 1.0 
	- DreamWorks Interactive, Scholastic's Goosebumps Series: Attack of the Mutant, version 1.0 
	- DreamWorks Interactive, Scholastic's Goosebumps Series: Escape from Horrorland, version 1.0 
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 98 
	- Microsoft Golf 1998 Edition, version 1.0 
	- Microsoft Golf 1999 Edition, version 1.0 
	- Microsoft Outwars, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the programs listed at the beginning of this article, you
	may experience one of the following symptoms:
	
	- You receive the following error message:
	
	  Error initializing DirectSound.
	
	- You do not hear any sounds when you run the program.
	
	- Your computer stops responding (hangs).
	
	Sounds in Windows are played correctly.
	
	CAUSE
	=====
	
	This behavior can occur if the sound driver installed on your computer is not
	fully compatible with DirectSound.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact your sound card manufacturer to inquire about how
	to obtain and install the latest version of the sound driver is available for
	your sound card.
	
	If the latest version of the sound driver for your sound card is already
	installed on your computer, you may be able to resolve this issue by using the
	Game Compatible audio device, which is associated with certain modems. To
	install the Game Compatible audio device:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. Click Add.
	
	4. Click to select the "Don't detect my modem; I will select it from a list"
	  check box, and then click Next.
	
	5. In the Manufacturers box, click 3X.
	
	  NOTE: 3X may not be available in some versions of Microsoft Windows.
	
	6. In the Models box, click 3X 14.4 Data Fax Modem Voice.
	
	7. Click Next.
	
	8. Click any port, and then click Next. Follow the instructions on the screen.
	
	9. Click Finish, and then click Close.
	
	After you add the 3X Data Fax Modem Voice modem, set the Game Compatible Device
	to be your default audio playback device:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Under Playback, click Game Compatible Device in the Preferred Device box.
	
	4. Click to select the Use Preferred Devices Only check box, and then click OK.
	
	5. Close Control Panel, and then restart the computer.
	
	Additional query words: 1.00 rise of rome expansion pack kbdw dwi aoe ageofempires fs98 flightsim fltsim flt sim imuwr links voice
	
	======================================================================
	Keywords          : kberrmsg kbsound aoe 
	Technology        : kbHomeProdSearch _IKkbbogus kbAOE kbGamesSearch kbFlightSimSearch kbZNotKeyword kbGolf98 kbGolf99 kbGolfSearch kbOutwarsSearch kbOutwars kbAOESearch kbFlightSim2000 kbFlightSim98 kbDIDilbert kbDILostWorldJurassic kbDIGoosebumpAttack kbDIGoosebumpEscape kbDINeverhood kbDISearch kbDIGoosebumpsSearch kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
