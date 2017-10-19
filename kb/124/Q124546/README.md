---
layout: page
title: "Q124546: Multimedia: Compressed Audio and the Ensoniq Soundscape Card"
permalink: /kb/124/Q124546/
---

## Q124546: Multimedia: Compressed Audio and the Ensoniq Soundscape Card

	Article: Q124546
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft SoundBits (all collections) 
	- Microsoft Windows Sound System 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running any of the programs listed at the beginning of this article
	on a computer with an Ensoniq Soundscape sound card, you may not be able to play
	compressed audio. Instead, you receive the following error message:
	
	  No wave device that can play files in the current format is installed. Use
	  the Drivers option to install the wave device.
	
	NOTE: This article does not apply to Windows 95. If you get this symptom in
	Windows 95, please refer to the following article in the Microsoft Knowledge
	Base:
	
	  Q133365 Windows 95: Troubleshooting Problems with Compressed Audio
	
	NOTE: If you get the above symptoms with newer versions of any of the programs
	listed at the top of this article (that is, an MSACM 2.0 application), this
	article will not apply. In that case, please refer to the following article in
	the Microsoft Knowledge Base:
	
	  Q121132 MSACM 2.0: Compressed Audio Will Not Play
	
	RESOLUTION
	==========
	
	This problem is caused because the older Soundscape drivers do not install the
	complete Audio Compression Manager (MSACM). To correct this, try one of the
	following resolutions:
	
	Method 1
	--------
	
	Obtain the Soundscape driver version 1.20.03 or later from Ensoniq. The version
	1.20.03 disks (there are three disks) were mailed in January 1995 to all
	registered Ensoniq Soundscape owners. Please note that the Ensoniq driver
	shipped by Gateway has different version numbers (that is, version 1.52) than
	the Ensoniq supplied driver.
	
	Method 2
	--------
	
	Remove MSACM 2.0 and reinstall the program in which the problem is occurring.
	
	1. Exit Windows.
	
	2. Enter the following commands at then MS-DOS prompt and press ENTER at the end
	  of each line:
	
	     Cd  \Windows\System
	     Ren  Msacm.Drv  Msacm.Dr
	     Ren  Msacm.Dll  Msacm.Dl
	
	3. Reinstall the program in which the problem was occurring. The Setup program
	  will install MSACM 1.0. And all sounds should play properly.
	
	MORE INFORMATION
	================
	
	The Ensoniq Soundscape Setup program version 1.52 installs only the MSACM 2.0
	drivers and does not install any decompression modules. When an application that
	uses MSACM 1.0 is installed, its Setup program is, by design, not allowed to
	overwrite the newer MSACM 2.0 driver files. The application's Setup program will
	be able to add only the 1.0 decompression modules (codecs). These decompression
	modules will not work with MSACM 2.0.
	
	For additional information about Ensoniq Soundscape, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q124812 Kids: Hangs with Ensoniq Sound Card
	
	The Ensoniq Soundscape card and drivers are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	
	Additional query words: 1.00a 1993 1994 multi media multimedia multi-media mmtitles sound bits w_bob bob 1.0 ensonic
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbWin3xSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbZNotKeyword kbBookshelfSearch kbSoundBitsSearch kbEncartaEncycSearch kbZNotKeyword3 kbCineManiaSearch kbWinSoundSysSearch kbWin310 kbWin311 kbMMStravinsky kbMMMozart100 kbBookShelf1995 kbDinosaurs100 kbMusicalInst kbSoundBits kbArtGallery kbEncartaEnCyc1994
	Version           : :1.0,3.1,3.11
	
	=============================================================================
	
