---
layout: page
title: "Q106664: Multimedia: GetPixel() Error Message"
permalink: /kb/106/Q106664/
---

## Q106664: Multimedia: GetPixel() Error Message

	Article: Q106664
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,1.0a; :1.0,1992 edition,1993 edition,1994 edition,1995 edition,1997 edition
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbmm kbimu
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Cinemania for Windows versions 1992 edition, 1994 edition, 1995 edition, 1997 edition 
	- Microsoft Complete Baseball for Windows, version 1994 edition 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 97 World Atlas for Windows 
	- Microsoft Music Central for Windows 1997 edition 
	- Microsoft Home CD Sampler Fall 1993 edition 
	- Microsoft Multimedia Beethoven for Windows, versions 1.0, 1.0a 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Microsoft SoundBits (all collections), version 1.0 
	- Microsoft Wine Guide for Windows, version 1.0 
	- Microsoft World of Flight for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the Microsoft programs listed above, you may
	receive the following error message:
	
	  Display Problems - This program cannot continue. Your display driver does not
	  properly support the following functions or capabilities: The GetPixel()
	  function. One solution to this problem may be to use a display card or driver
	  that offers more complete graphics support. Contact the manufacturer of your
	  display card.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact the manufacturer to inquire about obtaining the
	latest video driver for your display adapter, or install a different, compatible
	video driver.
	
	For information about how to change the video driver, consult your Windows
	printed documentation or online Help. For information about video driver
	compatibility, please contact the manufacturer of your display adapter.
	
	MORE INFORMATION
	================
	
	The GetPixel function retrieves the color value of a screen pixel specified by a
	pair of X and Y parameters. Not all display adapters support the GetPixel
	function. This issue most frequently occurs with 32768-color or 65536-color
	video drivers. The Microsoft products listed at the beginning of this article
	are designed to use 256 colors.
	
	
	Additional query words: kbhowto msn_encarta CD Sampler Fall 1991 91 1992 92 1993 93 1994 94 1995 95 multi media multimedia multi-media get pixel wineguide
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbmm kbimu 
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbBookshelfSearch kbSoundBitsSearch kbBaseballSearch kbEncartaEncycSearch kbZNotKeyword3 kbCineManiaSearch kbZNotKeyword5 kbAncientLands kbCompleteBaseballSearch kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbMMBeethoven100 kbMMBeethoven100a kbCinemania1994 kbCinemania1992 kbCinemania1995 kbCinemania1997 kbCompleteBaseball1994 kbDangerousCreatures kbDinosaurs100 kbMusicCentral kbMusicalInst kbSoundBits kbWine100 kbWorldofFlight kbArtGallery kbEncartaEnCyc1996 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc1994 kbEncartaEnCyc1995Mac kbCDSamplerF1993 kbMusicCentral1997
	Version           : WINDOWS:1.0,1.0a; :1.0,1992 edition,1993 edition,1994 edition,1995 edition,1997 edition,Fall 1993 edition
	Issue type        : kbprb
	
	=============================================================================
	
