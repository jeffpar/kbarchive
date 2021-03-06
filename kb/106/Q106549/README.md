---
layout: page
title: "Q106549: Compressed Audio Doesn't Play on Sound Blaster Card"
permalink: /kb/106/Q106549/
---

## Q106549: Compressed Audio Doesn't Play on Sound Blaster Card

{% raw %}

	Article: Q106549
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1993 edition,1994 edition,1995 edition,2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbmm kbsound kbtlckbfaq
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Complete Baseball for Windows, 1994 edition (see below) 
	- Microsoft Complete Gardening for Windows, version 1.0 
	- Microsoft Creative Writer for Windows, versions 1.0, 2.0 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta for Windows versions 1993 edition, 1994 edition, 1995 edition 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta World Atlas for Windows, 1997 World English Edition 
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	- Microsoft Fine Artist for Windows, version 1.0 
	- Microsoft Isaac Asimov's The Ultimate Robot for Windows, version 1.0 
	- Microsoft Julia Child: Home Cooking with Master Chefs for Windows, version 1.0 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Microsoft Reader's Digest Complete Do-It-Yourself Guide for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	- Microsoft SoundBits (all collections) 
	- Microsoft Wine Guide for Windows, version 2.0 
	- Microsoft World of Flight for Windows, version 1.0 
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play a compressed sound clip on a computer using a Creative
	Labs Sound Blaster 16 or Sound Blaster 16 ASP, or a Media Vision or Jazz sound
	card in Sound Blaster emulation mode, you may experience one or more of the
	following symptoms:
	
	- The sound clip stutters during playback.
	- You hear loud static instead of the sound clip.
	- You do not hear any sound.
	- The sound clip playback is twice as fast as normal.
	- The computer stops responding (hangs).
	- Microsoft Windows abruptly quits to the MS-DOS prompt.
	- You receive an error message similar to one of the following error messages:
	
	  General Protection Fault
	  No ROM Basic
	  Memory Parity Error
	  Segment Load Failure
	
	
	In addition, you may not be able to play a sound clip in Dinosaurs, but you are
	able to play video clips, you may not be able to play pronunciations in
	Bookshelf and Encarta, and you may not be able to play sound clips in Musical
	Instruments.
	
	CAUSE
	=====
	
	This behavior can occur if your computer cannot properly use the 16-bit Direct
	Memory Access (DMA) channel on the Sound Blaster 16 or Sound Blaster 16 ASP
	sound card.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the sound card settings to use single-mode DMA. To
	do so, use the appropriate method for your version of Microsoft Windows and your
	version of the Sound Blaster drivers.
	
	NOTE: When you disable 16-bit DMA, you do not reduce the quality of sound
	playback or disable playback of 16-bit sound clips
	
	
	Windows 95/98 Drivers
	---------------------
	
	For information about how to change Sound Blaster 16 DMA settings on a Microsoft
	Windows 95/98-based computer running Windows 95/98 sound drivers, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q136675 Changing SoundBlaster 16 HDMA Setting in Windows 95
	
	Windows 3.1x Drivers
	--------------------
	
	For information about how to change Sound Blaster 16 DMA settings on a Microsoft
	Windows 3.1x-based computer running the Sound Blaster version 3.02 or later
	sound driver, please see the following article in the Microsoft Knowledge Base:
	
	  Q124869 Software Reconfiguration of SoundBlaster 16 Hardware Settings
	
	If the version of the Sound Blaster driver on your computer is less than 3.02,
	contact Creative Labs to obtain the latest version of the Sound Blaster 16 sound
	driver for Windows 3.1x.
	
	Older Windows 3.x Drivers
	-------------------------
	
	To change Sound Blaster 16 DMA settings on a Windows 3.1x-based computer running
	an older version of the Sound Blaster sound driver, follow these steps:
	
	Change the DMA settings in each of the following locations:
	
	- The Drivers dialog box in the Windows Control Panel
	- The Sbconfig.exe configuration program included with the Sound Blaster cards
	
	To change the settings, do the following:
	
	1. In the Main Group in Program Manager, double-click Control Panel.
	
	2. Double-click Drivers.
	
	3. Double-click the Sound Blaster 16 Wave/Midi driver.
	
	4. Under the HDMA option, click Use DMA.
	
	5. Click OK, and then click Do Not Restart Windows Now.
	
	6. Close Control Panel.
	
	7. On the File menu in Program Manager, click Exit Windows.
	
	8. At the MS-DOS prompt, type "cd\sb16" (without the quotation marks), and then
	  press ENTER.
	
	9. At the MS-DOS prompt, type "sbconfig.exe" (without the quotation marks), and
	  then press ENTER.
	
	10. Follow the instructions on the screen to configure and test the following
	  settings:
	
	  +----------------------------------+
	  | Setting          | Value         | 
	  +----------------------------------+
	  | Base I/O port    | Autoscan      | 
	  +----------------------------------+
	  | MidiPort address | Autoscan      | 
	  +----------------------------------+
	  | DMA interrupt    | Current       | 
	  +----------------------------------+
	  | 8-bit DMA        | Current       | 
	  +----------------------------------+
	  | 16-bit DMA       | Use 8-bit DMA | 
	  +----------------------------------+
	
	  When you finish making these changes, the Sbconfig program restarts your
	  computer.
	
	  NOTE: For more information about how to use the Sbconfg.exe program, please
	  see your Sound Blaster 16 user's manual.
	
	Manually Changing Sound Blaster DMA Settings
	--------------------------------------------
	
	To manually change the Sound Blaster DMA settings on a Windows 3.1x-based
	computer, follow these steps:
	
	1. On the File menu in Program Manager, click Run.
	
	2. In the Command Line box, type "sysedit" (without the quotation marks), and
	  then click OK.
	
	3. In the Autoexec.bat window, change the value of the H parameter on the Set
	  Blaster line to match the value of the D parameter.
	
	4. If you use a Sound Blaster 16 or Sound Blaster 16 ASP card, follow these
	  steps:
	
	  a. In the Config.sys window, change the value of the H parameter on the
	     Device=C:\Sb16\Ctsb16.sys line to match the value of the D parameter.
	
	  b. In the System.ini window, change the value of the HDMAChannel= line in the
	     [Sndblst.drv] section to match the value of the DMAChannel= line.
	
	5. If you use a Media Vision sound card configured to emulate a Sound Blaster 16
	  sound card, follow these steps:
	
	  a. In the Config.sys window, change the value of the H parameter on the
	     Device=C:\<folder>\Mvsound.sys line to match the value of the D
	     parameter, where <folder> is the folder in which the Mvsound.sys
	     file is located. Typically, this is the Proaudio, Mvision, Prostudio, or
	     Proas folder.
	
	  b. In the System.ini window, change the value of the HDMAChannel= line in the
	     [MVPROAUD.DRV] to match the value of the DMAChannel= line.
	
	6. If you use a Jazz sound card configured to emulated a Sound Blaster 16 sound
	  card, follow these steps:
	
	  a. In the System.ini window, modify the value of the DMAChannel2= line in the
	     [Jazz.drv] section to match the value of the DMAChannel1= line.
	
	  b. In the Config.sys window, change the value of the E parameter on the
	     Device=C:\<folder>\Jazz.sys line to match the value of the D
	     parameter, where <folder> is the folder in which the Jazz.sys file
	     is located.
	
	7. On the File menu, click Exit.
	
	8. When you are prompted to save changes, click Yes.
	
	9. Restart the computer.
	
	MORE INFORMATION
	================
	
	This issue only occurs when you run a program that uses compressed sound.
	Because of the complicated use of memory that occurs when the computer
	decompresses a sound clip at the same time that it plays it. Many multimedia
	programs attempt to play a compressed audio clip when you start them.
	
	The Sound Blaster 16 or Sound Blaster 16 ASP sound cards use two Direct Memory
	Access (DMA) channels: one for 8-bit memory access and one for 16- bit memory
	access.
	
	Sound Blaster 16 sound cards can use the following DMA settings:
	
	- 8-bit (DMA): 0, 1, 2, or 3
	- 16-bit (HDMA): 5, 6, or 7
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For information about how to contact Creative Technology, Ltd., query in the
	Knowledge Base for the following article:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	
	Additional query words: multimedia multi-media silent doesn't play effects narration speech pronunciation sb16 sb msacm choppy black screen hang msb audio win95 win98 wm_writer wm_artist mmtitles allmmprods
	
	======================================================================
	Keywords          : kb3rdparty kbmm kbsound kbtlc kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbZNotKeyword2 kbKidsSearch kbBookshelfSearch kbSoundBitsSearch kbBaseballSearch kbEncartaEncycSearch kbAncientLands kbCreativeWriter100 kbCreativeWriter200 kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbAsimovSearch kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbCompleteBaseball1994 kbCompleteGardening kbDangerousCreatures kbDinosaurs100 kbExplorapediaNature100 kbExplorapediaPeople100 kbFineArtist100 kbAsimovUltimateRobot kbJuliaChild kbMusicalInst kbSoundBits kbWine200 kbWorldofFlight kbScholasticHuman kbArtGallery kbEncarta1994 kbEncarta1993 kbEncarta1995 kbEncartaEnCyc1996 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaWorldAtlas1997 kbDoItYourself kbMSBSearch
	Version           : :1.0,1993 edition,1994 edition,1995 edition,2.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
