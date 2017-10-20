---
layout: page
title: "Q124645: Playing Compressed Audio on Western Digital DSP-16 Sound Card"
permalink: /kb/124/Q124645/
---

## Q124645: Playing Compressed Audio on Western Digital DSP-16 Sound Card

{% raw %}

	Article: Q124645
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1.0a,1993 edition,1994 edition,1995 edition,1996 edition
	Operating System(s): 
	Keyword(s): kbhw kbsound kbHardwarekbfaq
	Last Modified: 11-DEC-2001
	
	WINDOWS
	kbmm kb3rdparty kbhw kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Asimov for Windows, version 1.0 
	- Microsoft Bookshelf for Windows versions 1993 edition, 1994 edition, 1995 edition 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Complete Baseball for Windows, 1994 edition (see below) 
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Dogs for Windows, version 1.0 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Haunted House for Windows, version 1.0 
	- Microsoft Julia Child: Home Cooking with Master Chefs for Windows, version 1.0 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Microsoft Music Central for Windows 1996 edition 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft SoundBits (all collections) 
	- Microsoft Windows Sound System 
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a 
	- Microsoft World of Flight for Windows, version 1.0 
	- Microsoft 500 Nations for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following problems may occur if you try to play compressed audio on a
	Western Digital DSP-16 sound card:
	
	- The compressed wave audio does not play.
	
	- After you play compressed audio, such as the opening sounds in Microsoft
	  Encarta, one of the following results may occur:
	
	   - Your system may stop responding (hang).
	   - You may receive an EMM386 Exception Error.
	   - You may receive a General Protection (GP) fault error.
	
	
	MORE INFORMATION
	================
	
	According to Western Digital, the following lines must be added to the
	SYSTEM.INI file to solve the problem:
	
	  
	
	  [aapipss.drv]
	     inhib=1
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: kbhowto multi media multimedia multi-media mmtitles kbimu
	
	======================================================================
	Keywords          : kbhw kbsound kbHardware kbfaq
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbKidsSearch kbBookshelfSearch kbSoundBitsSearch kbBaseballSearch kbEncartaEncycSearch kbCineManiaSearch kbWinSoundSysSearch kbAncientLands kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kb500Nations100 kb500Nations100a kbAsimovSearch kbBookShelf1993 kbBookShelf1994 kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbCompleteBaseball1994 kbDangerousCreatures kbDinosaurs100 kbDogs100 kbHauntedHouse kbJuliaChild kbMusicCentral kbMusicalInst kbSoundBits kbWine100 kbWine100a kbWorldofFlight kbArtGallery kbEncartaEnCyc1996 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc1994 kbEncartaEnCyc1995Mac kbMusicCentral1996
	Version           : :1.0,1.0a,1993 edition,1994 edition,1995 edition,1996 edition
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
