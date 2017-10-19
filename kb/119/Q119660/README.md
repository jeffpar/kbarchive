---
layout: page
title: "Q119660: Compressed Audio Doesn't Play on Aztech Labs (AZI) Sound Cards"
permalink: /kb/119/Q119660/
---

## Q119660: Compressed Audio Doesn't Play on Aztech Labs (AZI) Sound Cards

	Article: Q119660
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbmm kbsound
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Bob, version 1.0 
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions, versions 1993, 1994, 1995 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- Microsoft Complete Baseball for Windows, 1994 edition (see below) 
	- Microsoft Creative Writer for Windows, version 1.0 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	- Microsoft Fine Artist for Windows, version 1.0 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	- Microsoft SoundBits, Hanna-Barbera, version 2.0 
	- Microsoft SoundBits, MGM Movies, version 1.0 
	- Microsoft SoundBits, Musical Instruments, version 1.0 
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a, 2.0 
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There may be various problems playing compressed wave audio with the following
	Aztech Labs (AZI) sound cards:
	
	- Multimedia Pro
	
	- NX Pro 16
	
	- Sound Galaxy Basic 16
	
	- Sound Galaxy Pro 16
	
	These problems may include the following:
	
	- Compressed wave audio does not play.
	
	- After playing compressed audio, such as the opening sounds in Microsoft
	  Complete Baseball, the machine may hang and an EMM Exception Error #6 or GP
	  Fault error message may be displayed.
	
	- You may receive a wave error.
	
	RESOLUTION
	==========
	
	According to AZI Labs, the following steps should be taken to solve the
	problem:
	
	1. Add a D=64 parameter at the end of the Device=EMM386 line in the CONFIG.SYS
	  file. For example, if your EMM386.EXE file is in the DOS directory on drive
	  C, you would use the following line:
	
	     Device=C:\DOS\EMM386.EXE D=64.
	
	2. Change the DMABufferSize setting in the [386enh] section of the SYSTEM.INI
	  file to "DMABufferSize=064" (without the quotation marks). If the line does
	  not exist, add it.
	
	3. Do the following:
	  a. Note the driver listed in the Wave= line in the [drivers] section of the
	     SYSTEM.INI file.
	
	  b. Find the section by that name in the SYSTEM.INI file. For example, if
	     Wave=mm16.drv, find the [mm16.drv] section.
	
	  c. Add a "SingleModeDMA=True" line (without the quotation marks) to this
	     section.
	
	4. If the driver in the Control Panel for the particular AZI card has separate
	  8-bit and 16-bit DMA settings, try setting the 16-bit to None.
	
	  NOTE: Some 16-bit AZI sound card drivers do not have separate 8-bit and 16-bit
	  DMA settings.
	
	5. If the problem still persists, you may need a sound driver update. Contact
	  Aztech Labs to find the most recent version available for your particular
	  card.
	
	MORE INFORMATION
	================
	
	The Aztech products discussed here are manufactured by Aztech, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	Aztech Labs Sound Galaxy Support: (510) 623-8988
	Aztech Labs Technical Support: (800) 886-8879
	Aztech Labs BBS: (510) 623-8933
	
	Additional query words: multi media multimedia multi-media AZI silent doesn't play music sound soundtrack effects narration speech pronunciation creative writer fine artist kids mmpro mm pro msacm w_bob reveal msb wave error 50
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbmm kbsound 
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbZNotKeyword2 kbKidsSearch kbBookshelfSearch kbSoundBitsSearch kbBaseballSearch kbEncartaEncycSearch kbBOBSearch kbCineManiaSearch kbWinSoundSysSearch kbWinSoundSys200 kbBOB100 kbAncientLands kbCreativeWriter100 kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbCompleteBaseball1994 kbDangerousCreatures kbDinosaurs100 kbExplorapediaPeople100 kbFineArtist100 kbMusicalInst kbSoundBits kbWine100 kbWine100a kbWine200 kbScholasticHuman kbScholasticSolar kbArtGallery kbEncartaEnCyc1996 kbEncartaEnCyc1994 kbEncartaEnCyc1995Mac kbMSBSearch
	Issue type        : kbprb
	
	=============================================================================
	
