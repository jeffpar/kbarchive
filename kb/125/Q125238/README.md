---
layout: page
title: "Q125238: Office Professional and Bookshelf Disables Sound Drivers"
permalink: kb/125/Q125238/
---

## Q125238: Office Professional and Bookshelf Disables Sound Drivers

	Article: Q125238
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1994 edition, 4.3C,1995 edition; WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office for Windows, version 4.3-CD 
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Complete Baseball for Windows 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft SoundBits version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you uninstall the Microsoft Office Professional 4.3 with Microsoft Bookshelf
	1994 Edition with the Integrated CD-ROM Library, you may experience the
	following symptoms:
	
	- Only videos produce sound in Dangerous Creatures and Complete Baseball
	
	- SoundBits are completely disabled
	
	- Sound is unavailable from the Guides in Ancient Lands
	
	- Flyout menu "whooshing" noises and button clicks are the only sounds in
	  Encarta
	
	This problem is not reproduced in Windows 95.
	
	CAUSE
	=====
	
	When you choose Remove All, the Setup program will remove the entries in the
	SYSTEM.INI that refer to Bookshelf. The "Remove All" function ignores the fact
	that some of the other Multimedia applications may use these same entries in
	SYSTEM.INI.
	
	WORKAROUND
	==========
	
	Because Bookshelf 1994 uses some of the same drivers as the other Multimedia
	products use, you will have to restore the sound driver entries in the
	SYSTEM.INI file.
	
	Method 1: Do the following to edit the SYSTEM.INI file:
	
	a. Open the SYSTEM.INI file in a text editor such as Windows Notepad.
	
	b. Add the following lines to the [DRIVERS] section:
	
	               wavemapper=msacm.drv.
	               msacm.msadpcm=msadpcm.acm
	               msacm.msgsm610=msgsm610.acm
	
	  NOTE: MSGSM610.ACM is used only with Bookshelf 1994 and Encarta.
	
	You will now be able to hear the compressed audio.
	
	NOTE: The MaxRTDecodeSamplesPerSec= line, in the [MSACM.MSGSM610] section of the
	SYSTEM.INI, will be recreated the next time Windows is started, provided the
	sound drivers are properly installed.
	
	Method 2: Do the following to run the Setup program for an application exhibiting
	one or more of the symptoms noted above:
	
	a. Run "Setup" from the CD-ROM drive.
	
	b. Choose the "Remove All" button.
	
	c. Follow the instructions on the screen to finish Setup.
	
	d. In Program Manager, click Run from the File menu.
	
	e. Type "X:\Setup" (without the quotation marks) (where X is your CD-ROM drive).
	
	f. Follow the instructions on the screen to reinstall the affected application.
	
	Additional query words: multi media multimedia multi-media mmtitles '95
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbOfficeSearch kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbSoundBitsSearch kbBaseballSearch kbEncartaEncycSearch kbOffice430 kbAncientLands kbCompleteBaseballSearch kbDangerousCreatures kbSoundBits kbEncartaEnCyc1996 kbEncartaEnCyc1995Mac
	Version           : :1.0,1994 edition, 4.3C,1995 edition; WINDOWS:1.0
	
	=============================================================================
	
