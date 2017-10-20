---
layout: page
title: "Q259191: CFS/FS98: Aircraft Unexpectedly Stops Nose Down in Midair"
permalink: /kb/259/Q259191/
---

## Q259191: CFS/FS98: Aircraft Unexpectedly Stops Nose Down in Midair

{% raw %}

	Article: Q259191
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbsound kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Combat Flight Simulator or Microsoft Flight Simulator
	98, your aircraft may unexpectedly stop in midair with the aircraft nose pointed
	straight down. However, you can still fire your guns, and other aircraft in the
	game continue to fly normally.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- A sound card based on the Vortex Aureal chip set is installed in your
	  computer.
	
	- The sound driver for your sound card is outdated.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, contact the manufacturer of your sound card to inquire
	about how to obtain and install the latest version of the sound driver for your
	sound card.
	
	For information about how to contact the manufacturer of your sound card, click
	the appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If the issue continues to occur, use the following methods in the order in which
	they are presented.
	
	Reduce Hardware Sound Acceleration in Dxdiag
	--------------------------------------------
	
	If you run Combat Flight Simulator or Flight Simulator 98 on a computer that is
	running Microsoft Windows 95, Microsoft Windows 98, or Microsoft Windows 2000,
	reduce the Hardware Sound Acceleration setting:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Sound tab.
	
	4. Under DirectX Features, move the Hardware Sound Acceleration Level slider all
	  the way to the left (the "No acceleration" setting).
	
	5. Click Exit.
	
	If the issue continues to occur, proceed to the next method.
	
	Reduce the Sound Playback Quality
	---------------------------------
	
	If the issue is resolved when you disable sound in the game, your sound card may
	be unable to properly process game port signals and high quality game sounds at
	the same time.
	
	To reduce the sound playback quality in the game:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. If you are running Combat Flight Simulator, type "Combatfs.cfg" (without the
	  quotation marks) in the Named box.
	
	  If you are running Flight Simulator 98, type "Fltsim98.cfg" (without the
	  quotation marks) in the Named box.
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. In the list of found files, double-click the Combatfs.cfg file or the
	  Fltsim98.cfg file.
	
	5. If you are prompted to select the program that you want to use to open the
	  file, click Notepad in the "Choose the program you want to use" box, and then
	  click OK.
	
	6. Scroll to the end of the file, press ENTER twice, and then type the following
	  lines, pressing ENTER after you type each line:
	
	  [SOUND]
	  Channels=1
	  SamplesPerSec=11025
	
	7. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	8. Close the Find: Files Named Combatfs.cfg or Find: Files Named Fltsim98.cfg
	  window.
	
	If the issue continues to occur, proceed to the next method.
	
	Change the Preferred Playback Device to the Game Compatible Device
	------------------------------------------------------------------
	
	To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Under Playback on the Audio tab, click Game Compatible Device in the
	  "Preferred device" box.
	
	  NOTE: If Game Compatible Device is not listed in the "Preferred device" box,
	  see the "More Information" section of this article for information about how
	  to install it.
	
	4. Click to select the "Use only preferred devices" check box, and then click
	  OK.
	
	5. Close Control Panel.
	
	6. Restart the computer.
	
	MORE INFORMATION
	================
	
	To install the Game Compatible Device:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Modems.
	
	3. If a modem is not already installed in your computer, proceed to step 4.
	
	  If a modem is installed in your computer, click Add in the Modems Properties
	  dialog box.
	
	4. Click to select the "Don't detect my modem; I will select it from a list"
	  check box, and then click Next.
	
	5. In the Manufacturers box, click 3X.
	
	  NOTE: 3X is not included with some versions of Microsoft Windows.
	
	6. In the Models box, click 3X 14.4 Data Fax Modem Voice.
	
	7. Click Next.
	
	8. Click any port, and then click Next.
	
	9. Follow the instructions on the screen to finish installing the Game
	  Compatible Device.
	
	10. Click Finish, and then click Close.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: 1.00 msgame cfs fs98 turtle beach montego freeze hang hangs
	
	======================================================================
	Keywords          : kbsound kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim98 kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
