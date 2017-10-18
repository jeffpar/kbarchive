---
layout: page
title: "Q137451: Sound Distortion with Multimedia Programs"
permalink: kb/137/Q137451/
---

## Q137451: Sound Distortion with Multimedia Programs

	Article: Q137451
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1.0a,1995-1996 edition,2.0
	Operating System(s): 
	Keyword(s): kbtlckbfaq
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 500 Nations, version 1.0 
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Bookshelf for Windows, 1995 Intro Edition 
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- Microsoft Complete Baseball for Windows, 1994 edition (see below) 
	- Microsoft Complete Baseball Guide for Windows, 1995 edition 
	- Microsoft Complete Gardening for Windows, version 1.0 
	- Microsoft Complete NBA Basketball for Windows 1995-1996 edition 
	- Microsoft Reader's Digest Complete Do-It-Yourself Guide for Windows, version 1.0 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Dogs for Windows, version 1.0 
	- Microsoft Encarta 96 Encyclopedia for Macintosh 
	- Microsoft Encarta 97 Encyclopedia for Macintosh 
	- Microsoft Encarta 97 Encyclopedia Deluxe for Macintosh 
	- Microsoft Encarta Intro Edition, 1995 edition 
	- Microsoft Encarta 96 World Atlas for Windows 
	- Microsoft Julia Child: Home Cooking with Master Chefs for Windows, version 1.0 
	- Microsoft Isaac Asimov's The Ultimate Robot for Windows 
	- Microsoft Multimedia Beethoven for Windows, version 1.0 
	- Microsoft Multimedia Mozart for Windows, versions 1.0, 1.0a 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Music Central for Windows, 1996, 1997 edition 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Microsoft Oceans for Windows, version 1.0 
	- Microsoft SoundBits, Hanna-Barbera, version 2.0 
	- Microsoft SoundBits, MGM Movies, version 1.0 
	- Microsoft SoundBits, Musical Instruments, version 1.0 
	- Microsoft The Ultimate Frank Lloyd Wright for Windows, version 1.0 
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a, 2.0 
	- Microsoft World of Flight for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sounds may distort when you play multimedia programs.
	
	RESOLUTION
	==========
	
	Sound distortion is often caused by sending a higher volume of sound than the
	speakers are able to handle. Also, if the volume control on your audio card is
	set too high, it may cause distortion from the amplifier on the audio card. For
	example, if the volume for your audio card or wave file output is set to near
	its maximum it will produce distortion just like a radio with the volume turned
	up too high. Also, sometimes lower quality speakers distort at a lower volume
	than better speakers will.
	
	For information about how to change your audio card settings, check the manuals
	that came with your audio card. To change your volume settings, use the volume
	dial on the back of your audio card (in the back of your computer where the
	speakers plug in), or click the Volume Control icon on the taskbar in Windows
	95/98. (Some audio cards use both types of controls and they must both be
	adjusted.) For information about using Volume Control, see the Windows online
	Help. If you are using Windows 3.1 drivers, adjust the volume in Control Panel
	using the mixer program installed with your audio card.
	
	Sound Card Set to Incorrect DMA
	-------------------------------
	
	Another possible cause is that you are using a 16-bit sound card set to a lower
	Direct Memory Access (DMA) setting. Sounds that appear scratchy while using a
	low DMA will sound better using an upper DMA setting. In the case of the Media
	Vision Pro Audio 16 sound card, a DMA setting of 7 corrects any scratchy
	sounds.
	
	For other types of sound distortion, including audio that plays too fast, try a
	lower DMA setting (usually 0,1,or 3) or a "Single DMA mode". Try disabling the
	high DMA settings (5,6, or 7).
	
	To change your DMA setting, follow the steps below. Note that some sound card
	drivers will not allow you to change the DMA settings using the following steps.
	You may need to refer to your sound card manual for more information or special
	procedures.
	
	Changing the DMA Channel Using Windows 95/98
	--------------------------------------------
	
	1. Use the right mouse button to click My Computer, and then click Properties.
	
	2. Click the Device Manager tab.
	
	3. Click the "+" mark next to Sound, Video And Game Controllers.
	
	4. Click the name of your sound card, and then click Properties.
	
	5. On the Resources tab, click the Use Automatic Settings check box to clear it.
	
	6. Scroll through the Resource Settings list to see if there is more than one
	  Direct Memory Access resource being used.
	
	7. Double-click the Direct Memory Access that you want to change, then select
	  the desired setting.
	
	8. Examine the Conflict Information area to see if there are any conflicts. If
	  there are, select a different resource.
	
	9. Click OK, and then OK again, and then click Yes when asked if you want to
	  continue.
	
	10. Restart the computer.
	
	Changing the DMA Channel Using Windows 3.x
	------------------------------------------
	
	1. In the Windows Control Panel, double-click Drivers.
	
	2. In the Drivers list, click the sound card driver, and then click Setup.
	
	3. Select the desired DMA setting, and then click OK.
	
	
	Additional query words: sounds distorted fuzzy chopping don't good bad poor quality audio buzz crackle buzzing choppy MSB Solar System magic school bus explores CS31BA11 Business win31 win 311 wfw win95
	
	======================================================================
	Keywords          : kbtlc kbfaq
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbKidsSearch kbBookshelfSearch kbSoundBitsSearch kbBaseballSearch kbCineManiaSearch kbAncientLands kbCompleteBaseballSearch kbCompleteBasketballSearch kbCompleteNBABasketball kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbMMMozart100a kbMMBeethoven100 kb500Nations100 kbAsimovSearch kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbBookShelf1995Intro kbCompleteBaseball1994 kbCompleteBaseball1995 kbCompleteGardening kbDangerousCreatures kbDinosaurs100 kbDogs100 kbAsimovUltimateRobot kbJuliaChild kbMusicCentral kbMusicalInst kbSoundBits kbUltimateFLW kbWine100 kbWine100a kbWine200 kbWorldofFlight kbArtGallery kbCompleteNBABasketball1995 kbEncartaEnCyc1996Mac kbEncartaEnCyc1997Mac kbEncartaEnCyc1997DelMac kbEncartaEnCyc1995Intro kbEncartaWorldAtlas1996 kbMusicCentral1996 kbMusicCentral1997 kbOceans kbDoItYourself
	Version           : :1.0,1.0a,1995-1996 edition,2.0
	Issue type        : kbprb
	
	=============================================================================
	
