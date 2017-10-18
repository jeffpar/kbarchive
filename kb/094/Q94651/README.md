---
layout: page
title: "Q94651: Scratchy Sound, Erratic Sound, or Sound Stops"
permalink: kb/094/Q94651/
---

## Q94651: Scratchy Sound, Erratic Sound, or Sound Stops

	Article: Q94651
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.0a,1.1,1.1a,1.1b,2.0; :1.0,1993 edition,1994 edition,1994-1995 edition,19
	Operating System(s): 
	Keyword(s): kbmm kbsound kbtlckbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	- Microsoft 3D Movie Maker for Windows, version 1.0 
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Bookshelf for Windows versions 1993 edition, 1994 edition, 1995 edition 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Cinemania for Windows 1994 edition 
	- Microsoft Complete Baseball for Windows, 1994 edition (see below) 
	- Microsoft Complete NBA Basketball for Windows 1994-1995 edition 
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a, 1.1b, 2.0 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 96 World Atlas for Windows 
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a, 1.1b 
	- Microsoft Ghostwriter for Windows, version 1.0 
	- Microsoft How the Leopard Got His Spots, version 1.0 
	- Microsoft Isaac Asimov's The Ultimate Robot for Windows, version 1.0 
	- Microsoft Julia Child: Home Cooking with Master Chefs for Windows, version 1.0 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Microsoft SoundBits (all collections), version 1.0 
	- Microsoft Windows Sound System, versions 1.0, 2.0 
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a 
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use any of the programs listed earlier in this article, you may
	experience any of the following symptoms:
	
	- The computer stops responding (hangs) when you start the program.
	
	- Sound playback in the program is scratchy or distorted.
	
	- Sound playback in the program stops unexptectedly after a few seconds.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following sound cards are installed on
	your computer:
	
	- Media Vision Pro Audio Spectrum 16
	
	- Logitech SoundMan 16
	
	- Creative Labs Sound Blaster 16
	
	- Windows Sound System
	
	- Yamaha OPL/3
	
	RESOLUTION
	==========
	
	To resolve this issue, change the DMA channel settings for your sound card. To
	do this, use the appropriate method for your version of Microsoft Windows.
	
	Changing the DMA Channel in Windows 95/98
	-----------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon.
	
	3. On the Device Manager tab, double-click the Sound, Video And Game Controllers
	  branch to expand it.
	
	4. Under the Sound, Video And Game Controllers branch, double-click your sound
	  card.
	
	5. On the Resources tab, click to clear the Use Automatic Settings check box.
	
	6. In the Resource Settings list, click Direct Memory Access, and then click
	  Change Setting.
	
	7. In the Values box, click the up and down arrows to change the DMA setting. If
	  there are no resource conflicts listed in the Conflict Information box, click
	  OK.
	
	8. Click OK again, and then click Yes.
	
	9. Restart the computer.
	
	Changing the DMA Channel in Windows 3.x
	---------------------------------------
	
	1. In the Main program group, double-click Control Panel.
	
	2. Double-click Drivers.
	
	3. In the list of installed devices, click your sound card, and then click
	  Setup.
	
	4. Change the DMA channel.
	
	  NOTE: For best results with Logitech or Media Vision sound cards, use a DMA
	  setting of 7 or 5.
	
	5. Click OK, and then click Close.
	
	6. Restart Windows when you are prompted to do so.
	
	Additional query words: multimedia wss static eisa noisy freeze homekids
	
	======================================================================
	Keywords          : kbmm kbsound kbtlc kbfaq
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbZNotKeyword2 kbKidsSearch kbBookshelfSearch kbSoundBitsSearch kbBaseballSearch kbEncartaEncycSearch kbCineManiaSearch kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys200 kbAncientLands kbCompleteBasketballSearch kbCompleteNBABasketball kbCreativeWriter100 kbCreativeWriter200 kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbAsimovSearch kbBookShelf1993 kbBookShelf1994 kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbCinemania1994 kbCompleteBaseball1994 kbDangerousCreatures kbCreativeWriter110 kbCreativeWriter110a kbCreativeWriter110b kbDinosaurs100 kbExplorapediaNature100 kbExplorapediaPeople100 kbFineArtist100 kbFineArtist110 kbFineArtist110a kbFineArtist110b kbGhostWriter kbAsimovUltimateRobot kbJuliaChild kbMusicalInst kb3dMovieMaker kbPJLeopard kbSoundBits kbWine100 kbWine100a kbScholasticHuman kbScholasticOcean kbScholasticSolar kbScholasticDinosaurs kbScholasticEarth kbArtGallery kbCompleteNBABasketball1994 kbEncartaEnCyc1996 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc1994 kbEncartaEnCyc1995Mac kbEncartaWorldAtlas1996 kbMSBSearch
	Version           : WINDOWS:1.0,1.0a,1.1,1.1a,1.1b,2.0; :1.0,1993 edition,1994 edition,1994-1995 edition,1995 edition,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
