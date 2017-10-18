---
layout: page
title: "Q314256: Flight Simulator 2002: Game Performance Is Choppy"
permalink: kb/314/Q314256/
---

## Q314256: Flight Simulator 2002: Game Performance Is Choppy

	Article: Q314256
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2002 Professional Edition, used with:
	   - Microsoft SideWinder Force Feedback Pro, version 1.0 
	- Microsoft Flight Simulator 2002, used with:
	   - Microsoft SideWinder Force Feedback Pro, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Flight Simulator 2002, you may experience poor or
	"choppy" game performance when Microsoft Sidewinder Force Feedback Pro 1.0 is
	connected.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions is true:
	
	- Your sound card cannot properly process game port signals, force feedback
	  effect and high-quality game sounds and at the same time.
	
	- Your computer's onboard sound card is enabled.
	
	- You are using outdated sound card drivers.
	
	- You connect the SideWinder Force Feedback Pro joystick to a Thrustmaster game
	  card.
	
	RESOLUTION
	==========
	
	Method 1: Disable Forces in the Game
	------------------------------------
	
	1. Start the game.
	
	2. Click Options, and then select Controls.
	
	3. Click Forces, and then click to clear the "Enable Force Feedback" option.
	
	4. Click OK, and then try the game again.
	
	If the issue continues to occur, proceed to the next method.
	
	Method 2: Disable Onboard Sound Card
	------------------------------------
	
	Some computers include a sound card or audio chip set on the motherboard.
	
	If you install a new sound card with the onboard chip set, you may encounter this
	problem because of direct memory access (DMA) conflicts between the onboard
	audio chip set and the installed sound card.
	
	Windows cannot manage the DMA channel that may still be assigned to the onboard
	audio chip set, and conflicts with the DMA channel assigned to the installed
	sound card and game port.
	
	To resolve this issue, disable the onboard sound card:
	
	1. Make sure the onboard sound care is disabled in the computer's Complementary
	  Metal Oxide Semiconductor (CMOS) settings. Please see your computer's
	  documentation or manufacturer for information about how to do this.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click System.
	
	4. If you are using Microsoft Windows 95 or Microsoft Windows 98, click the
	  Device Manager tab.
	
	  If you are using Microsoft Windows 2000 or Microsoft Windows XP, on the
	  Hardware tab, click Device Manager.
	
	5. Expand "Sound, video and game controllers".
	
	6. Click the onboard sound device, and then click Properties.
	
	7. If you are using Windows 95 or Windows 98, on the General tab, under Device
	  Usage, click to clear the "Original Configuration (Current)" check box. Or,
	  if you do not see this check box, click the "Disable In This Hardware
	  Profile" check box.
	
	  If you are using Windows 2000 or Windows XP, on the General tab, select "Do
	  not use this device (disable)" under Device Usage.
	
	8. Click OK or Close until you return to Windows.
	
	9. Restart the computer.
	
	If the issue continues to occur, proceed to the next method.
	
	Method 3: Update Sound Card Drivers
	-----------------------------------
	
	Contact the manufacturer of your sound card to inquire about how to obtain and
	install the latest version of the sound driver for your sound card. For
	information about how to contact your hardware manufacturer, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	How to Identify the Manufacturer and Model of Your Sound Card:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. If you are using Windows 95 or Windows 98, click the Device Manager tab.
	
	  If you are using Windows 2000 or Windows XP, on the Hardware tab, click Device
	  Manager.
	
	4. Expand "Sound, video and game controllers" to expand the branch.
	
	5. Under the "Sound, video and game controllers" branch, note the manufacturer
	  and model of your sound card, and then click OK.
	
	6. Close all open windows.
	
	How to Identify the Version of Your Sound Card Driver:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. On the Sound tab, note the version under the Driver section (on the right
	  side).
	
	If the problem continues to occur, proceed to the next method:
	
	Method 4: Turn Off Sound In The Game
	------------------------------------
	
	While in flight, to turn off all sounds in the game, press Q. To turn on all
	sounds press Q again.
	
	If the problem continues to occur, proceed to the next method:
	
	Method 5: Download and Install Sidewinder Force Feedback Software 3.02
	----------------------------------------------------------------------
	
	NOTE: This software is not compatible with Windows 2000 or Windows XP.
	
	The following file is available for download from the Microsoft Download Center:
	
	  http://www.microsoft.com/products/hardware/sidewinder/downloads/default.asp
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	If the problem continues to occur, to work around this issue (in the absence of a
	patch or updated driver), unplug the game controller, and then use keyboard
	controls to fly the aircraft. You can also use another game controller, if one
	is available.
	
	
	MORE INFORMATION
	================
	
	For additional information about solving problems related to onboard sound cards
	and Sidewinder Game Controllers, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q173689 SideWinder Force Feedback Controller Behaves Erratically
	
	  Q256296 SideWinder: No Forces When Playing Games on The Computer With Onboard
	  (Built-in) Sound Card or Thrustmaster Game Card
	
	  Q294672 Flight Sims: Does Not Detect Joystick in Windows 2000 and Windows XP
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	Additional query words: msgame shaky jittery stilted
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2002Pro kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
