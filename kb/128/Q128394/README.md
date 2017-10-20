---
layout: page
title: "Q128394: Multimedia: System Hangs with Diamond Stealth 64"
permalink: /kb/128/Q128394/
---

## Q128394: Multimedia: System Hangs with Diamond Stealth 64

{% raw %}

	Article: Q128394
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1994 edition,1995 edition,3.1
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Bookshelf for Windows versions 1994 edition, 1995 edition 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Cinemania for Windows 1995 edition 
	- Microsoft Complete Baseball for Windows, 1994 edition (see below) 
	- Microsoft Complete Baseball Guide for Windows, 1995 edition 
	- Microsoft Complete NBA Basketball for Windows, 1994-1995, 1995-1996 editions 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dogs for Windows, version 1.0 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Julia Child: Home Cooking with Master Chefs for Windows, version 1.0 
	- Microsoft Oceans for Windows, version 1.0 
	- Microsoft World of Flight for Windows, version 1.0 
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer may stop responding (hang) during the following situations:
	
	- When playing sound or video
	
	- When searching the CD-ROM
	
	- During DMA transfers
	
	RESOLUTION
	==========
	
	According to the Diamond Stealth 64 VRAM 1.20 README.TXT file, adding the
	following lines to the [STLTH64.DRV] section of the SYSTEM.INI file may solve
	the problem:
	
	  [STLTH64.DRV]
	  LEAVEMMIODISABLED=1
	  BUSYCHECK=ON
	
	For more information, contact Diamond Multimedia Systems:
	
	- Technical support: (408) 325-7100
	
	- BBS support 2400 - 14400: (408) 325-7080
	
	- BBS support 9600 - 28800: (408) 325-7175
	
	- www.diamondmm.com
	
	- ftp.diamondmm.com
	
	The third-party products discussed here are manufactured by Diamond, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	NOTE: Julia Child: Home Cooking with Master Chefs may hang when you play videos
	using Diamond Stealth 64 Video VRAM version 2.05 card (none of the AVI files
	play). To correct this problem, try changing color resolution from 256 to 64K
	(or more) colors. Note that this may cause other programs to fail when you play
	animations if they are not able to display at more than 256 colors.
	
	For more information about display problems with the Diamond Stealth drivers, see
	the following article in the Microsoft Knowledge Base:
	
	  Q114883 Art Gallery, Wine Guide 1.0: Distorted Video Images
	
	Additional query words: 1995multi media multimedia multi-media
	
	======================================================================
	Keywords          : win31 
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbWin3xSearch kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbKidsSearch kbBookshelfSearch kbBaseballSearch kbEncartaEncycSearch kbZNotKeyword3 kbCineManiaSearch kbWin310 kbAncientLands kbCompleteBaseballSearch kbCompleteBasketballSearch kbBookShelf1994 kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbCinemania1995 kbCompleteBaseball1994 kbCompleteBaseball1995 kbDangerousCreatures kbDogs100 kbJuliaChild kbWorldofFlight kbCompleteNBABasketball1994 kbEncartaEnCyc1996 kbEncartaEnCyc1995Mac kbOceans
	Version           : :1.0,1994 edition,1995 edition,3.1
	
	=============================================================================
	

{% endraw %}
