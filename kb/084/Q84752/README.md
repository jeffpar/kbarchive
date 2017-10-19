---
layout: page
title: "Q84752: Troubleshooting Media Player MIDI Sound Problems"
permalink: /kb/084/Q84752/
---

## Q84752: Troubleshooting Media Player MIDI Sound Problems

	Article: Q84752
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbmm kbsound kbtshoot kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Media Player does not play MIDI files, one or more of the following
	conditions may be causing the problem:
	
	- The sound card is not installed properly.
	
	- A MIDI driver is not installed.
	
	- The MIDI Mapper is set incorrectly.
	
	NOTE: Before attempting complicated troubleshooting, restart Windows and see
	whether your system functions correctly.
	
	MORE INFORMATION
	================
	
	Making Sure the Sound Card Is Properly Installed
	------------------------------------------------
	
	1. Determine whether the sound card can generate sounds from MS-DOS. Most sound
	  cards come with MS-DOS programs for playing sounds and testing card
	  configurations. If these do not work, the Windows sound support cannot work
	  either.
	
	2. Make sure the sound card does not conflict with other hardware.
	
	3. Verify Port and IRQ settings.
	
	NOTE: If the sound card also supports digitized sound and wave (.WAV) files and
	.WAV files can be played, the card is properly installed.
	
	Making Sure the MIDI Driver Is Installed
	----------------------------------------
	
	1. The Device.Midi Sequencer command should be available in Media Player. If
	  not, the MIDI driver should be reinstalled. It may be necessary to remove the
	  current installed MIDI driver and then reinstall it. To do this:
	
	  a. In Control Panel, choose the Drivers icon.
	
	  b. Select the current installed [MCI] Midi Sequencer driver, choose Remove,
	     and then restart Windows.
	
	  c. In Control Panel, choose the Drivers icon.
	
	  d. Choose Add, then choose the Midi Sequencer. If you have the Windows disks,
	     choose New; otherwise, choose Current.
	
	  e. Restart Windows before you use Media Player.
	
	2. Check to see whether the MIDI driver is installed under Drivers in Control
	  Panel. If the sound card is Ad Lib compatible, try using the Ad Lib driver
	  that ships with Windows 3.1. To install the Ad Lib driver:
	
	  a. In Control Panel, choose the Drivers icon.
	
	  b. Choose the Add button.
	
	  c. Select the Ad Lib driver from the list, or select the Unlisted or Updated
	     driver if the driver is on an OEM disk.
	
	  d. Choose Restart Windows to activate the driver.
	
	Note that the PC Speaker driver does not support playing MIDI files.
	
	Setting MIDI Mapper Correctly
	-----------------------------
	
	After loading CANYON.MID with Media Player and pressing the Play button, the
	following message may appear:
	
	  The current MIDI Mapper setup refers to a MIDI device that is not installed
	  on the system. Use MIDI Mapper to edit the setup.
	
	If this message appears, run Control Panel and check the default setup in the
	MIDI Mapper. It should be set to the correct device that is installed.
	
	If the Ad Lib driver is installed, the MIDI Mapper should be set to the Ad Lib
	setup. If a different MIDI device is installed, choose an appropriate setup for
	the device.
	
	To set the MIDI Mapper to use the Ad Lib setup:
	
	1. In Control Panel, choose the MIDI Mapper icon.
	
	2. Press ALT+S to show setups.
	
	3. Press ALT+A to move to the name field for setups.
	
	4. Use the UP ARROW and DOWN ARROW keys to set the name field to Ad Lib, and the
	  description below the name field to "Base-level setup."
	
	5. Close the MIDI Mapper to accept this setup.
	
	SYSTEM.INI Settings for Systems Using the Sound Blaster 1.5 Driver
	------------------------------------------------------------------
	
	[boot]
	
	  sound.drv=mmsound.drv
	  drivers=mmsystem.dll
	
	[386Enh]
	
	  device=vsbd.386
	  device=vadlibd.386
	
	[mci]
	
	  WaveAudio=mciwave.drv
	  Sequencer=mciseq.drv
	  CDAudio=mcicda.drv
	
	[drivers]
	
	  timer=timer.drv
	  midimapper=midimap.drv
	  Wave=sndblst2.drv
	  midi=sndblst2.drv
	  midi1=msadlib.drv
	
	[sndblst.drv]
	
	  port=240
	  int=7
	
	Other Problems Preventing MIDI Playing
	--------------------------------------
	
	The following are other situations that prevent MIDI playing:
	
	- Norton Desktop for Windows 1.0 is installed.
	
	- You have upgraded from Multimedia Extensions version 1.0 (see README.WRI
	  section 7.0). Windows 3.1 SETUP.EXE renames existing MIDI Mapper
	  configuration files to MIDIMAP.OLD in the SYSTEM directory.
	
	Additional query words: ndw 3.10 3.11 Adlib pc-speaker tshoot trouble shoot media player sound usage soundblaster creative labs mediavison proaudio PAS
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
