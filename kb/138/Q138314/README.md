---
layout: page
title: "Q138314: Multimedia: General MIDI Troubleshooting for Windows 95/98"
permalink: /kb/138/Q138314/
---

## Q138314: Multimedia: General MIDI Troubleshooting for Windows 95/98

{% raw %}

	Article: Q138314
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kbhw kbmm kbsound kbtshoot kbimu kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	If this article does not describe your hardware-related issue, please see the following Microsoft Web site to view more articles about hardware: 
	
	  http://support.microsoft.com/support/windows/topics/hardware/hwddresctr.asp
	
	SUMMARY
	=======
	
	This article addresses general troubleshooting for MIDI problems in Windows 95.
	If MIDI sounds do not play or error messages occur with the MIDI configuration,
	use the information in this article to help solve your problems.
	
	MORE INFORMATION
	================
	
	To begin testing your MIDI performance, use Media Player as a diagnostic tool.
	
	Using Media Player
	------------------
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  Multimedia, and then click Media Player.
	
	2. On the Device menu, click MIDI Sequencer.
	
	  NOTE: If MIDI Sequencer is not listed, the driver might not be installed, or
	  might be disabled. Refer to the section below to determine if the driver has
	  been installed correctly.
	
	3. Double-click the file Canyon.mid, located in the Windows\Media folder.
	
	4. Click the Play button.
	
	  NOTE: The play button contains a triangle pointing to the right. If no sounds
	  are heard, see below.
	
	Troubleshooting Steps
	---------------------
	
	Work through the troubleshooting sections below to help correct your MIDI
	problems. After each troubleshooting section, attempt to play MIDI sounds. If
	the problem persists, move on to additional MIDI troubleshooting tips.
	
	Making Sure Sound Card is Properly Installed
	--------------------------------------------
	
	1. Determine if the sound card can generate sounds. Windows 95 comes with sample
	  sound files. If no sound can be played, the sound card may not be installed
	  correctly, or its drivers might not be properly configured.
	
	  a. Run Media Player. Click Device.
	
	  b. Click Sound.
	
	  c. Double-click any .wav file.
	
	     NOTE: By default, Windows 95 does not display file extensions. For
	     information on how to view hidden file extensions, see Windows 95 online
	     help.
	
	  d. Click the Play button.
	
	     NOTE: If vendor-supplied sound card drivers were furnished with the sound
	     card, contact the sound card manufacturer for technical assistance.
	
	2. Eliminate any sound card conflict with other hardware installed on the
	  system. Make sure no conflicts exist with:
	
	  - Base I/O Address
	  - IRQ
	  - DMA Channel Settings
	
	  To make sure hardware conflicts don't exist, do the following:
	  a. With your right mouse button, click the My Computer icon, and then click
	     Properties.
	
	  b. Click the Device Manager tab. Make sure View Devices By Type is selected.
	
	  c. Double-click Sound, Video And Game Controllers.
	
	     NOTE: If you do not see Sound, Video And Game Controllers listed, the
	     Windows 3.x drivers may be loaded. Contact your sound card or driver
	     manufacturer for assistance.
	
	  d. Click the sound card driver, and then click Properties.
	
	  e. Click the Resources tab, and make sure no conflicts are listed in the
	     Conflicting Device List.
	
	     NOTE: Any listed conflicts must be resolved. Use Windows 95 Help to resolve
	     hardware conflicts.
	
	     1. Run Windows 95 Help, and click the Index tab.
	
	     2. Type the word "conflicting" (without the quotation marks), and the Help
	        selection "Conflicting Hardware, Troubleshooting" becomes the selected
	        topic.
	
	     3. Click Display.
	
	     4. Follow the Help instructions.
	
	Sound File Appears to Play; No Sounds Are Heard
	-----------------------------------------------
	
	When sounds appear to play but no sounds are heard, the problem is usually caused
	by one of the following:
	
	- The speakers are not turned on or are incorrectly connected.
	
	- The mixer control for MIDI is turned down.
	
	- The MIDI Sequencer is not installed.
	
	- The .idf file is corrupt or invalid.
	
	Checking Speakers and Mixer Controls
	------------------------------------
	
	1. Are any sounds heard when Windows starts? Do .wav files play when using Media
	  Player?
	
	  From the Media Player Device menu, click Sound, and then attempt to play any
	  file with a .wav extension.
	
	  NOTE: This test demonstrates properly installed speakers.
	
	2. Check the Mixer settings.
	
	  For information on how to accomplish this task, see your sound card user's
	  guide for information about MIDI playback in Windows. Most sound cards use
	  individual controls for the different types of sounds the card can play.
	
	  To check the Windows volume control, do the following:
	
	  a. Double-click the Speaker icon, located on the taskbar.
	
	  b. Make sure the volume is not turned down or set to Mute.
	
	Verifying Installation of the MIDI Sequencer Driver
	---------------------------------------------------
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Multimedia icon.
	
	3. Click the Advanced tab. Double-click Media Control Devices.
	
	  Make sure the following are present:
	
	  - MIDI Sequencer Device (Media Control)
	
	4. If the entry is listed, click it, and then click Properties.
	
	5. Make sure the Use This Media Control Device option is selected.
	
	6. If the device driver is not installed, use the Windows Add New Hardware
	  wizard to install the Microsoft MCI MIDI Sequencer component.
	
	  To add the device driver, do the following:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Add New Hardware.
	
	  c. Click Next, and then click No. Click Next.
	
	  d. On the Hardware Types: list, click Sound, Video And Games Controllers.
	     Click Next.
	
	  e. On the Manufacturers List, click Microsoft MCI.
	
	  f. On the Models list, click MIDI Sequencer Device (Media Control), then
	     click Next.
	
	  g. Click Finish, and restart your computer.
	
	Checking the MIDI Configuration
	-------------------------------
	
	1. Click Start, point to Settings, and click then click Control Panel.
	
	2. Double-click the Multimedia icon. If the Multimedia icon is not present, no
	  multimedia drivers are installed.
	
	  Correct the missing Multimedia icon by installing the drivers. To install the
	  device driver, use the Add/Remove Programs wizard in the Control Panel.
	
	3. Click the MIDI tab, and then click Custom Configuration.
	
	  NOTE: Make a note of the name listed in the "Midi Scheme" area save the
	  information.
	
	4. Click Configure.
	
	5. In the new MIDI Configuration dialog box, click Save As, and then type a name
	  in the Scheme name field. Click OK.
	
	  NOTE: You can use any name you want, such as "mymidi" or "test."
	
	6. Click a channel and then click Change. In the Instrument box, click the down
	  arrow button, and select the FM or Synth driver, if listed.
	
	  Avoid selections containing the word OUT. For example, do not use the
	  following:
	
	  - MIDI Out
	  - FM Out
	
	  NOTE: The listed choices depend on the type of sound card installed. Examples
	  of listed items are:
	
	  - Voyetra OPL3 FM Synth - Media Vision
	  - Super Sapi Voyetra FM - Creative Labs Sound Blaster 16
	
	7. If no selections are available in the Change MIDI Instrument dialog box, see
	  your sound card user's guide or contact the sound card manufacturer. The
	  sound card manufacturer is responsible for installation and MIDI playback
	  from within the Windows environment.
	
	Installing a New General.idf File
	---------------------------------
	
	Windows 95/98 uses General MIDI support. Windows 95/98 provides a General.idf
	file to assign instruments to respective MIDI playback channels.
	
	If the General.idf file is missing or damaged, extract a new copy of the
	General.idf file from the Windows 95/98 floppy disk or CD-ROM. If your sound
	card uses a different type of .idf file, use your sound card installation disks
	to reinstall your sound card software.
	
	If you are using a Windows 98-based computer, follow these steps to extract a new
	copy of the General.idf file from the Windows 98 CD-ROM:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click System Information.
	
	2. On the Tools menu, click System File Checker.
	
	3. Click "Extract one file from installation disk."
	
	4. In the "Specify the system file you would like to restore" box, type
	  "general.idf" (without the quotation marks), and then click Start.
	
	5. In the Restore From box, type the following line
	
	     <cdrom>:\Win98
	
	  where <cdrom> is the letter of the CD-ROM drive that contains the
	  Windows 98 CD-ROM.
	
	6. In the Save File In box, type the following line, and then click OK
	
	     <drive>:\windows\config
	
	  where <drive> is the letter of the hard disk on which Windows 98 is
	  installed.
	
	7. Click OK, and then click OK again.
	
	8. Click Close.
	
	If you are using a Windows 95-based computer, follow these steps to extract a new
	copy of the General.idf file from the Windows 95 disks or CD-ROM:
	
	1. Restart the computer in MS-DOS mode.
	
	2. At the command prompt, type the following lines, pressing ENTER after each
	  line:
	
	     cd windows\config
	
	  ren general.idf general.old
	
	3. Extract the .idf file from your Windows floppy disk or CD-ROM.
	
	  To extract the .idf file from your Windows 95 Disk 9 floppy disk, type the
	  following line at the command prompt, and then press ENTER
	
	     extract /a <floppy>:\win95_09.cab general.idf <drive>:\windows\config
	
	  where <floppy> is the letter of the floppy disk drive that contains the
	  Windows 95 Disk 9 floppy disk, and <drive> is the letter of the hard
	  disk on which Windows 95 is installed.
	
	  To extract the .idf file from your Windows 95 CD-ROM, type the following line
	  at the command prompt, and then press ENTER
	
	     extract /a <cdrom>:\win95\win95_08.cab general.idf
	     <drive>:\windows\config
	
	  where <cdrom> is the letter of the CD-ROM drive that contains the
	  Windows 95 CD-ROM, and <drive> is the letter of the hard disk on which
	  Windows 95 is installed.
	
	  For more information on how to extract a file, see your Windows printed
	  documentation or online Help file.
	
	Manually Checking for MIDI Driver Files, File Placement and Modifications
	-------------------------------------------------------------------------
	
	1. The files listed should all reside in the C:\Windows\System folder (where
	  drive C is your hard drive and Windows is your Windows folder).
	
	  The installed MIDI driver filename can vary depending upon the sound card
	  installed. For example, Media Vision sound cards use the drivers:
	
	  - Opl3fm.drv
	  - Mvproaud.drv
	
	  while Creative Labs Sound Blaster sound cards use the drivers:
	
	  - sb16fm.drv
	  - sb16aux.drv
	  - sb16snd.drv
	
	The following files are in the Windows folder.
	
	Entries in System.ini
	---------------------
	
	  [boot]
	  sound.drv=mmsound.drv
	  drivers=mmsystem.dll
	
	  [drivers]
	  midimapper=midimap.drv
	  MIDI=opl3.drv *
	
	  [mci]
	  Sequencer=mciseq.drv
	  WaveAudio=mciwave.drv
	
	Entries in Win.ini
	------------------
	
	  [mci extensions]
	  mid=sequencer
	
	Entries in Control.ini
	----------------------
	
	  [drivers.desc]
	  mciseq.drv=[MCI] MIDI Sequencer
	  sb16fm.drv=Voyetra / Sound Blaster SuperSAPI FM Driver
	  sb16aux.drv=Creative Sound Blaster 16 Auxiliary Audio
	  sb16snd.drv=Creative Sound Blaster 16 Wave and MIDI
	
	  [Userinstallable.drivers]
	  MIDI=sb16fe=sb16snd.drv
	
	  [related.desc]
	  MIDI=
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: HWSNDTS 1995 multi media multimedia multi-media mmtitles 95core tshoot bullseye fuzzy quiet scratching conflicted nothing silence
	
	======================================================================
	Keywords          : kbenv kbhw kbmm kbsound kbtshoot kbimu kbHardware 
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch
	Version           : 95
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
