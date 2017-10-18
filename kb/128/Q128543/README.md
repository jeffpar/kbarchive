---
layout: page
title: "Q128543: Windows Won't Restart or Restarts With Distorted Video"
permalink: kb/128/Q128543/
---

## Q128543: Windows Won't Restart or Restarts With Distorted Video

	Article: Q128543
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 500 Nations, version 1.0 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Complete Baseball for Windows, 1994 edition (see below) 
	- Microsoft Complete Baseball Guide for Windows, 1995 edition 
	- Microsoft Complete NBA Basketball for Windows, 1994-1995, 1995-1996 editions 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dogs for Windows, version 1.0 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	- Microsoft Julia Child: Home Cooking with Master Chefs for Windows, version 1.0 
	- Microsoft Oceans for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install any of the products listed at the top of this article and
	restart Windows, the video screen is distorted (including unreadable fonts) or
	Windows may not start at all. This has been reported on systems using Cirrus
	Logic 5434 and Tseng ET4000 W32 based video cards. This problem may also occur
	with other video cards.
	
	CAUSE
	=====
	
	Your video card driver uses a file called DVA.386. The version of this file used
	by the current driver is incompatible with some versions of Microsoft Video For
	Windows. Video for Windows is included with multimedia programs, such as the
	ones listed at the top of this article.
	
	RESOLUTION
	==========
	
	Try any one of the following resolutions:
	
	- Install the Super VGA (SVGA) driver from DOS (outside of Windows). This
	  driver ships with Windows 3.11 and Windows for Workgroups 3.11.
	- Reinstall the original display driver from DOS (outside of Windows).
	- In the System.ini file, remove the "device=dva.386" line, and then restart
	  windows.
	
	MORE INFORMATION
	================
	
	Often, an updated video driver will also solve this problem. For more
	information on your third-party display driver, or for updated drivers, please
	contact your hardware vendor.
	
	Unless you install the SVGA driver or get an updated driver from your hardware
	vendor, this problem will return when you reinstall your multimedia program.
	
	NOTE: Dogs for Windows reinstalls itself every time you run it.
	
	The Super VGA driver is also shipped with the following titles. Search the CD-ROM
	for a file named Svga.exe:
	
	  500 Nations
	  Bookshelf 1995
	  Bookshelf '95 for Windows 95
	  Bookshelf '96-'97 for Windows
	  Complete Baseball Guide 1995
	  Complete NBA Basketball 1995-1996
	  Dogs
	  Encarta 96 Encyclopedia
	  Julia Child
	  Magic School Bus (Human Body and Earth)
	  Oceans
	  Wine Guide
	  World of Flight
	
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: multimedia mmtitles kbmm Orchid Kelvin 64 Stb Nitro Diamond Stealth 32 TrueSpeed W32i Genoa Phantom Hercules Dynamite Pro Jazz Jakarta Matrox Marvel II Ultimate True Color microCrystal Concorde LightSpeed ThunderBolt Triumphony Visual Forgefuzzy blurry blurred buzz noise washed-out garbled silent quiet none black focus Tech Works
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbGamesSearch kbZNotKeyword kbZNotKeyword2 kbKidsSearch kbBookshelfSearch kbBaseballSearch kbEncartaEncycSearch kbCompleteBaseballSearch kbCompleteBasketballSearch kb500Nations100 kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbCompleteBaseball1994 kbCompleteBaseball1995 kbDangerousCreatures kbDogs100 kbExplorapediaNature100 kbExplorapediaPeople100 kbJuliaChild kbWine100 kbWine100a kbScholasticOcean kbScholasticEarth kbCompleteNBABasketball1994 kbEncartaEnCyc1996 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbOSWin310 kbOSWin311 kbOceans kbMSBSearch
	Version           : :1.0,1.0a,3.1,3.11
	Issue type        : kbprb
	
	=============================================================================
	
