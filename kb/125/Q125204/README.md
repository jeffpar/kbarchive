---
layout: page
title: "Q125204: Err Msg: MCIAVI Requires a Newer Version of MSVIDEO.DLL"
permalink: /kb/125/Q125204/
---

## Q125204: Err Msg: MCIAVI Requires a Newer Version of MSVIDEO.DLL

{% raw %}

	Article: Q125204
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimukbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Complete Baseball for Windows, 1994 edition (see below) 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 96 World Atlas for Windows 
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	- Microsoft How the Leopard Got His Spots, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft Music Central for Windows, 1996, 1997 edition 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	- Microsoft World of Flight for Windows, version 1.0 
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the programs listed in the applies to section
	of this article, or play an audio video interleave (.avi) file, you may receive
	the following error message:
	
	  MCIAVI requires a newer version of MSVIDEO.DLL. Please reinstall your video
	  software.
	
	CAUSE
	=====
	
	This behavior can occur if the versions of the Mciavi.drv and Msvideo.dll files
	are mismatched.
	
	RESOLUTION
	==========
	
	To resolve this issue, copy both the Mciavi.Drv and Msvideo.Dll files from the
	program to the Windows\System folder. This ensures that both files are of the
	same version.
	
	NOTE: Microsoft Windows 95 and Microsoft Windows 98 use even newer versions of
	these files. If you receive this error message in Windows 95/98, you can find
	the Mciavi.drv and Msvideo.dll files in the Windows\Sysbckup folder.
	
	LOCATION AND VERSION OF MCIAVI.DRV AND MSVIDEO.DLL FILES
	--------------------------------------------------------
	
	  Product                    Location on CD-ROM         Version
	  -------------------------------------------------------------
	  Ancient Lands 1.0          XFILES\SYSTEM              1.1
	  Bookshelf 1994             SYS\MCIAVI.DRV             1.1
	  Bookshelf 1995             AAMSSTP\SYSTEM             1.1
	  Bookshelf 1996             AAMSSTP\SYSTEM16           1.0
	  Cinemania 1994             DRIVERS                    1.0
	  Cinemania 1995             AAMSSTP\SYSTEM             1.1
	  Complete Baseball 1994     ZZSYSTEM                   1.1
	  Complete Basketball 1994   ZZSYSTEM                   1.1
	  Dangerous Creatures 1.0    XFILES\SYSTEM              1.1
	  Dinosaurs 1.0              XFILES\DRIVERS             1.0
	  Encarta 1994               ENCARTA                    1.0
	  Encarta 1995               AAMSSTP\SYSTEM             1.1
	  Encarta 1997 Standard      AAMSSTP\SYSTEM16           1.1
	  Encarta 1997 Deluxe        AAMSSTP\SYSTEM16(Disk 1)   1.1
	  Explorapedia Nature        NATURE\WINSYS              1.1
	  Explorapedia People        PEOPLE\WINSYS              1.1
	  Leopard Spots              LEOPARD\SYSTEM             1.1
	  MSB Earth                  MSBEARTH\SETUP16\VFW       1.1
	  MSB Ocean                  VFW                        1.1
	  MSB Solar System           MSBSOLAR\SYSTEM            1.1
	  Schubert 1.0               SCHUBERT\MSSTP\SYSTEM      1.1
	  Strauss 1.0                STRAUSS\MSSTP\SYSTEM       1.1
	
	NOTE: This behavior also can occur if you have more than one copy of the
	Msvideo.dll file installed on your computer. If a copy of the Msvideo.dll file
	installed on your computer is NOT located inside the Windows\System or the
	Windows\Sysbckup folders on your hard disk, delete this file.
	
	
	Additional query words: kbmm multi media multimedia multi-media mmtitles kbimu
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbZNotKeyword2 kbKidsSearch kbBookshelfSearch kbBaseballSearch kbEncartaEncycSearch kbAncientLands kbMMStrauss kbMMSchubert kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbCompleteBaseball1994 kbDangerousCreatures kbDinosaurs100 kbExplorapediaNature100 kbExplorapediaPeople100 kbMusicCentral kbPJLeopard kbWorldofFlight kbScholasticOcean kbScholasticSolar kbScholasticEarth kbEncartaEnCyc1996 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaWorldAtlas1996 kbMusicCentral1996 kbMusicCentral1997 kbMSBSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
