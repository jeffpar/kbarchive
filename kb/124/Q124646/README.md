---
layout: page
title: "Q124646: Playing Compressed Audio on Reveal MM Pro 16"
permalink: kb/124/Q124646/
---

## Q124646: Playing Compressed Audio on Reveal MM Pro 16

	Article: Q124646
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,1.0a,2.0,3.1,3.11; :'94-'95 edition,1.0,1993 edition,1994 edition,1995 edit
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	WINDOWS
	kbmm kb3rdparty kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Isaac Asimov's The Ultimate Robot for Windows, version 1.0 
	- Microsoft Bookshelf for Windows versions 1993 edition, 1994 edition, 1995 edition 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Cinemania for Windows versions 1994 edition, 1995 edition, 1996 edition 
	- Microsoft Complete Baseball, version 1994 edition 
	- Microsoft Complete Basketball, version '94-'95 edition 
	- Microsoft Creative Writer for Windows, versions 1.0, 2.0 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Fine Artist for Windows, version 1.0 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Microsoft Music Central for Windows 1996 edition 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft SoundBits (all collections), version 1.0 
	- Microsoft Windows Sound System, versions 1.0, 2.0 
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Compressed audio clips may fail to play if you are using a Reveal MM Pro 16
	sound card. For example, you may not be able to play any sounds in Dinosaurs,
	but the Dinosaur movies may play correctly. The pronunciations in Bookshelf and
	Encarta may not play at all, and you may not be able to play any audio in
	Musical Instruments.
	
	The following behaviors may be exhibited:
	
	- Stuttering sounds
	
	- General Protection (GP) Faults
	
	- Static
	
	- No sound
	
	- Computer stops responding (hangs)
	
	- System abruptly exits Windows and returns to MS-DOS
	
	- Memory Parity errors occur when running applications
	
	- EMM386 Exception errors
	
	NOTE: These behaviors were not reproduced in Microsoft Windows 95.
	
	
	RESOLUTION
	==========
	
	To avoid this problem, disable 16-bit audio by setting the Reveal MM Pro 16
	16-bit DMA channel to none, as follows:
	
	1. From the Main group in Program Manager, run Control Panel and double-click
	  the Drivers icon.
	
	2. Select the MMPRO16 Wave/Midi/Aux driver and choose the Setup button.
	
	3. Set 16-bit DMA channel to none.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q119660 Compressed Audio Doesn't Play on Aztech Labs (AZI) Sound Cards
	
	The third-party products discussed here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	
	Additional query words: kbhowto multi media multimedia multi-media mmtitles repeat repeating distorted jump skip sound bits sound-bits fuzzy blurry blurred buzz noise washed-out garbled silent quiet none black
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbZNotKeyword2 kbBookshelfSearch kbSoundBitsSearch kbBaseballSearch kbEncartaEncycSearch kbZNotKeyword3 kbCineManiaSearch kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys200 kbAncientLands kbCompleteBaseballSearch kbCompleteBasketballSearch kbCreativeWriter100 kbCreativeWriter200 kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbAsimovSearch kbBookShelf1993 kbBookShelf1994 kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbCinemania1994 kbCinemania1995 kbCinemania1996 kbCompleteBaseball1994 kbCompleteBasketball1994 kbCompleteBasketball1995 kbDangerousCreatures kbDinosaurs100 kbFineArtist100 kbAsimovUltimateRobot kbMusicCentral kbMusicalInst kbSoundBits kbWine100 kbWine100a kbWine200 kbArtGallery kbEncartaEnCyc1996 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc1994 kbEncartaEnCyc1995Mac kbMusicCentral1996
	Version           : WINDOWS:1.0,1.0a,2.0,3.1,3.11; :'94-'95 edition,1.0,1993 edition,1994 edition,1995 edition,1996 edition,2.0
	
	=============================================================================
	
