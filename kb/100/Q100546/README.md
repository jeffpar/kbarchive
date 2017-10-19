---
layout: page
title: "Q100546: MSACM 1.0: Compressed Audio Will Not Play"
permalink: /kb/100/Q100546/
---

## Q100546: MSACM 1.0: Compressed Audio Will Not Play

	Article: Q100546
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,2.0,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft SoundBits, Hanna-Barbera, version 2.0 
	- Microsoft SoundBits, MGM Movies, version 1.0 
	- Microsoft SoundBits, Musical Instruments, version 1.0 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Windows Sound System 
	- the operating system: Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Compressed audio will not play, or you may receive one of the following error
	messages:
	
	  No wave device that can play files in the current format is installed. Use
	  the Drivers option to install the wave device.
	
	  Multimedia device Sound failed.
	
	NOTE: This article does not apply to Microsoft Windows 95. If you are using
	Windows 95, please see the following article in the Microsoft Knowledge Base:
	
	  Q133365 Windows 95: Troubleshooting Problems with Compressed Audio
	
	NOTE: This article applies only to the products listed at the top of this
	article, which use MSACM version 1.0. For information about MSACM version 2.0,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q121132 MSACM 2.0: Compressed Audio Will Not Play
	
	RESOLUTION
	==========
	
	These symptoms can occur if the Microsoft Audio Compression Manager (MSACM) is
	not correctly installed. MSACM is used for playing compressed Sound (.wav)
	files.
	
	Use the following steps to verify that MSACM is installed correctly:
	
	1. Check the Drivers option in Control Panel for the following installed
	  driver:
	
	     Microsoft Sound Mapper V2.00
	
	  If you see "Microsoft Sound Mapper V2.00" listed as an installed driver, your
	  system has MSACM 2.0. Please refer to the MSACM 2.0 article listed above, or
	  remove "Microsoft Sound Mapper V2.00" before proceeding to the next step.
	
	2. From MS-DOS, copy Msacm.drv and Msadpcm.acm from the Microsoft multimedia
	  program's disk to the Windows System folder. For more information about how
	  to perform this task in Windows, see your Windows printed documentation or
	  online Help.
	
	  If prompted, replace any currently installed versions of those files. This
	  will also verify that only compatible versions of Msacm.drv and Msadpcm.acm
	  are installed.
	
	  NOTE: In Sound Bits, if the Msacm.drv or Msadpcm.acm file is corrupt, you must
	  rename or delete it from the Windows System folder, then reinstall Sound Bits
	  by running the Setup program. It is not possible to manually copy these files
	  from the disks.
	
	3. Use a text editor, such as Microsoft Notepad, to make the following changes
	  to the System.ini file, which is located in the Windows folder.
	
	     [Drivers]
	     WaveMapper=MSACM.DRV
	
	     [MSACM]
	     Install=MSADPCM.ACM
	
	  NOTE: Check your Windows folders and Windows System folders to ensure that
	  there are not multiple copies of Msadpcm.acm or Msacm.drv.
	
	MORE INFORMATION
	================
	
	If MSACM is not installed properly, simply re-installing a program that uses it
	will not fix the problem. If the Setup program for the Microsoft application
	finds MSACM files present on the system, it determines that MSACM has already
	been installed, and will not re-install MSACM.
	
	Additional query words: multi media multimedia multi-media MSACM MSADPCM sound kbmm mmtitles
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbZNotKeyword kbBookshelfSearch kbSoundBitsSearch kbEncartaEncycSearch kbCineManiaSearch kbWinSoundSysSearch kbMMStravinsky kbMMMozart100 kbDinosaurs100 kbMusicalInst kbSoundBits kbArtGallery kbEncartaEnCyc1994 kbOSWin310 kbOSWin311 kbOSWin300 kbOSWin300a
	Version           : :1.0,2.0,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
