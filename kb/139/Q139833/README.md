---
layout: page
title: "Q139833: Multimedia: No Icons or Groups Created in Program Manager"
permalink: kb/139/Q139833/
---

## Q139833: Multimedia: No Icons or Groups Created in Program Manager

	Article: Q139833
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- Microsoft Complete Gardening for Windows, version 1.0 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 96 World Atlas for Windows 
	- Microsoft Music Central for Windows, 1996, 1997 edition 
	- Microsoft Reader's Digest Complete Do-It-Yourself Guide for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Program Manager (Progman.exe), the programs listed at the top of this
	article do not create a program group or icons.
	
	CAUSE
	=====
	
	These programs are designed to use Windows 95/98 Explorer (Explorer.exe).
	
	RESOLUTION
	==========
	
	If you use Program Manager, create programs icons by following these steps:
	
	1. Open the Microsoft Multimedia group. (Or for World Atlas and Encarta the
	  Microsoft Reference group). If this group does not already exist, create it
	  as follows:
	
	  a. On the File menu, click New.
	
	  b. Click Program Group, and then click OK.
	
	  c. In the Description box, type the following, and then click OK:
	
	  Microsoft Multimedia
	
	  - or -
	
	  Microsoft Reference
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Type the following in the Description and Command Line boxes as listed in the
	  Icon Properties section below, for each program, and then click OK.
	
	5. Repeat steps 2 through 4 to create the remaining items.
	
	Icon Properties for Encarta
	---------------------------
	
	NOTE: The following assumes you have installed Encarta 97 Encyclopedia in the
	c:\Program Files\Microsoft Reference\Encarta Encyclopedia folder. If Encarta is
	installed in a different folder, make the corresponding changes to the command
	lines below.
	
	  Item 1
	  Description: Encarta Encyclopedia 97
	  Command Line: "c:\program files\microsoft reference\encarta
	  encyclopedia\enc97.exe"
	
	  Item 2
	  Description: Multimedia Catalog
	  Command Line: x:\mmcat\mmcat.exe (where x is your CD-ROM drive)
	
	Icon Properties for World Atlas
	-------------------------------
	
	NOTE: The following assumes you have installed Encarta 96 World Atlas in the
	c:\Program Files\Microsoft Reference\Encarta 96 World Atlas folder. If Encarta
	96 World Atlas is installed in a different folder, make the corresponding
	changes to the command lines below.
	
	  Item 1
	  Description: Encarta 96 World Atlas
	  Command Line: "c:\program files\microsoft reference\encarta 96 world
	  atlas\msworld.exe"
	
	  Item 2
	  Description: Encarta 96 World Atlas Information
	  Command Line: "c:\program files\microsoft reference\encarta 96 world
	  atlas\readme.wri"
	
	  Item 3
	  Description: Multimedia Catalog
	  Command Line: x:\mmcat\mmcat.exe (where x is your CD-ROM drive)
	
	NOTE: This has been fixed in Encarta World Atlas 1997.
	
	Icon Properties for Cinemania 97
	--------------------------------
	
	  Item 1
	  Description: Microsoft Cinemania 97
	  Command Line: x:\cinmania.exe (where x is your CD-ROM drive)
	
	  Item 2
	  Description: Microsoft Multimedia Catalog
	  Command Line: x:\mmcat\catppi.exe (where x is your CD-ROM drive)
	
	Icon Properties for Music Central 97
	------------------------------------
	
	  Item 1
	  Description: Microsoft Music Central 97
	  Command Line: x:\muscntrl.exe (where x is your CD-ROM drive)
	
	  Item 2
	  Description: Microsoft Multimedia Catalog
	  Command Line: x:\mmcat\catppi.exe (where x is your CD-ROM drive)
	
	Icon Properties for Do-It-Yourself Guide
	----------------------------------------
	
	  Item 1
	  Description: Complete Do-It-Yourself Guide
	  Command Line: x:\data\diyguide.exe (where x is your CD-ROM drive)
	
	  Item 2
	  Description: Microsoft Multimedia Catalog
	  Command Line: x:\mmcat\catppi.exe (where x is your CD-ROM drive)
	
	Icon Properties for Complete Gardening
	--------------------------------------
	
	  Item 1
	  Description: Microsoft Complete Gardening
	  Command Line: x:\data\msgdn32.exe (where x is your CD-ROM drive)
	
	  Item 2
	  Description: Microsoft Multimedia Catalog
	  Command Line: x:\mmcat\catppi.exe (where x is your CD-ROM drive)
	
	MORE INFORMATION
	================
	
	This behavior is by design. Setup does not generate program groups or icons in
	Program Manager.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm kbfaq
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbZNotKeyword kbEncartaEncycSearch kbCineManiaSearch kbCompleteGardening kbMusicCentral kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaWorldAtlas1996 kbMusicCentral1996 kbMusicCentral1997 kbDoItYourself
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
