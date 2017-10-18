---
layout: page
title: "Q110377: Using Windows Sound System 2.0 with Unsupported Card"
permalink: kb/110/Q110377/
---

## Q110377: Using Windows Sound System 2.0 with Unsupported Card

	Article: Q110377
	Product(s): Miscellaneous Windows Products
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Sound System 2.0 ships with drivers for five of the most popular sound
	cards. These are:
	
	- Microsoft audio hardware or compatible (Microsoft Windows Sound System Card)
	
	- Media Vision Pro AudioSpectrum 16
	
	- Creative Labs Sound Blaster Pro
	
	- Creative Labs Sound Blaster 16 or 16 ASP
	
	- ESS AudioDrive (common in Europe)
	
	It is generally possible to install the Windows Sound System for sound cards that
	are not on this list by using one of the following scenarios:
	
	1. (Best) The manufacturer of the sound card provides a Windows Sound System
	  compatible Windows driver.
	
	2. (Better) The manufacturer of the sound card provides a Windows (but not
	  Windows Sound System) driver.
	
	3. (Good) The card provides a very good emulation for one of the cards on the
	  above list.
	
	4. (Fair) The card provides a very good emulation for a Creative Labs Sound
	  Blaster.
	
	MORE INFORMATION
	================
	
	Scenario 1
	----------
	
	A Windows Sound System compatible Windows driver is one that supports the
	software calls that the Windows Sound System Audio Control makes. If your card
	is supplied with a Windows Sound System compatible driver, you can configure
	Windows Sound System to use it as follows:
	
	1. Insert the Windows Sound System Disk 1 in your drive, choose Run from the
	  Program Manager File menu, type the following, and press ENTER:
	
	  " A:SETUP" (without the quotation marks)
	
	  (Substitute A: with B: if you're loading from drive B.)
	
	2. Choose Continue at the first screen discussing possible hearing damage that
	  can occur if you use headphones other than the Windows Sound System
	  headphones.
	
	3. At the second screen, use Task Manager to close any other applications that
	  may be running, then choose Continue.
	
	4. At the third screen, choose Other from the list of available sound cards. You
	  will be prompted for your drivers disk. Insert the disk in the designated
	  drive and continue setup.
	
	Scenario 2
	----------
	
	If your card is provided with a Windows sound driver (but not a Windows Sound
	System driver), you should be able to use Windows Sound System with almost full
	functionality. To use your driver with the Windows Sound System, follow these
	steps:
	
	1. Install the Windows driver using the instructions that came with your Sound
	  Card or with the driver.
	
	2. Insert the Windows Sound System Disk 1 in your drive, choose Run from the
	  Program Manager File menu, type the following and press ENTER:
	
	  " A:SETUP" (without the quotation marks)
	
	  (Substitute A: with B: if you're loading from drive B.)
	
	3. The third setup screen will not give you the list of available sound card
	  types. Instead, it will give you a message similar to the following:
	
	  Setup has detected the presence of one or more sound drivers. These drivers
	  may not be compatible with the Windows Sound System. You may wish to remove
	  them from Control Panel before proceeding. Continue to install software
	  anyway?
	
	  Choose the Continue button.
	
	4. Provide the rest of the Windows Sound Systems disks when they are requested.
	
	These Windows Sound System utilities should work correctly:
	
	- Quick Recorder
	
	- Sound Finder
	
	- Music Box (if you have a CD-ROM drive)
	
	- Voice Pilot
	
	- Sound Control Panel
	
	- Proofreaders
	
	These Windows Sound System utilities will NOT work under this configuration:
	
	- Audio Control. (You will get a message saying "No Windows Sound System
	  compatible mixer driver is installed.") To control the volume or recording
	  input settings, you will have to use the mixer utility that came with your
	  card.
	
	- Windows Sound System Setup. (You will be unable to configure your hardware or
	  perform a sound check.)
	
	Scenario 3
	----------
	
	If your card is 100-percent compatible with one of the sound cards for which the
	Windows Sound System provides a driver, you can try the following steps:
	
	1. Make backup copies of your SYSTEM.INI, WIN.INI, and CONTROL.INI files.
	
	2. Run the Drivers option from Control Panel and remove your current sound
	  driver. Restart Windows.
	
	3. Run Windows Sound System setup (see Scenario 1). When you get to the third
	  screen, choose the listed sound card that your card emulates.
	
	4. Proceed with setup.
	
	  NOTE: If after restarting your computer, you get error messages stating that
	  the audio hardware could not be found, you may have to restore your original
	  sound driver by reinstating your backup copies of SYSTEM.INI, WIN.INI, and
	  CONTROL.INI.
	
	Scenario 4
	----------
	
	Many sound cards provide a good Sound Blaster emulation mode. To use one of these
	cards with the Windows Sound System, use the following steps:
	
	1. Make sure that your sound card is configured for Sound Blaster emulation,
	  according to the directions provided with your card.
	
	2. Run Control Panel and choose Drivers. Choose Add.
	
	3. From the list of drivers, choose Creative Labs Sound Blaster 1.5 and choose
	  OK or press ENTER.
	
	4. You will be asked to insert one of your Windows disks.
	
	5. Follow the instructions provided above for installing the Windows Sound
	  System with a pre-installed sound driver (see Scenario 2).
	
	These Windows Sound System utilities should work correctly:
	
	- Quick Recorder
	
	- Sound Finder
	
	- Sound Control Panel
	
	- Proofreaders
	
	These Windows Sound System utilities may work with some limitations:
	
	- Music Box. (You will have to connect the headphone jack to the line-out port
	  on the back of your sound card. You will also probably only get monophonic
	  sound.)
	
	- Voice Pilot. (You will have no way to specify whether voice commands will be
	  coming in through the microphone port or the line-in port. If your microphone
	  port is not powered, you may not be able to use the Windows Sound System
	  microphone unless the card monitors both the mike port and the line-in port
	  for voice commands.)
	
	These Windows Sound System utilities will NOT work:
	
	- Audio Control. (You will get a message saying "No Windows Sound System
	  compatible mixer driver is installed.") The Windows Sound Blaster driver does
	  not come with a mixer utility, so you will have to control the volume by
	  using the volume knob on your card (if there is one).
	
	- Windows Sound System Setup. (You will be unable to configure your hardware or
	  perform a sound check.)
	
	This article refers to products manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 1.00 Gravis Ultrasound Galaxy Gaulant Gaullant Gallant Galante FX board
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	Version           : :2.0
	
	=============================================================================
	
