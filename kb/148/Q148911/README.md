---
layout: page
title: "Q148911: Cinemania 96/Music ErrMsg: Cinemania Could Not Find the Files"
permalink: /kb/148/Q148911/
---

## Q148911: Cinemania 96/Music ErrMsg: Cinemania Could Not Find the Files

	Article: Q148911
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1996 edition
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows 1996 edition 
	- Microsoft Music Central for Windows 1996 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NOTE: The following article assumes C is the letter of the hard drive where you
	installed Windows.
	
	When you start Cinemania 96 or Music Central 96, after the program's contents
	screen appears you receive a message similar to the following:
	
	  Locate CD Image:
	  Cinemania could not find the files it needs to run properly.
	  Please indicate the location of the Cinemania CD in the edit field below, or
	  run the Cinemania application directly from the CD.
	
	If you enter the path to the CD-ROM drive, the program does not start. If you
	attempt to run the program directly from the compact disc, you receive the same
	error message.
	
	CAUSE
	=====
	
	The problem occurs if a corrupted or partially downloaded Cinemania or Music
	Central update file (*.cin96upd or *.msc96upd) is located in your C:\Program
	Files\Microsoft Multimedia\Cinemania or C:\Program Files\Microsoft
	Multimedia\Music Central folder.
	
	RESOLUTION
	==========
	
	Removing and reinstalling Cinemania or Music Central does not resolve the
	problem because Setup does not remove this folder.
	
	To resolve this problem you need to isolate the corrupted update file(s) and
	remove it from your system. To accomplish this task, do the following:
	
	1. In the Windows Explorer, locate the C:\Program Files\Microsoft
	  Multimedia\Cinemania or the C:\Program Files\Microsoft Multimedia\ Music
	  Central folder. Drag this file to the Windows 95 Desktop by using a Drag and
	  Drop method.
	
	  For more information about how to perform this task in Windows, see your
	  Windows printed documentation or online Help.
	
	2. Click the Start button, point to Settings, and then click Control Panel.
	  Double-click the Add/Remove Programs icon..
	
	3. On the Install/Uninstall tab, click Microsoft Cinemania 96 or Music Central
	  96, and then click Remove. Make sure you have the Cinemania or Music Central
	  compact disc in the CD-ROM drive.
	
	4. Reinstall Cinemania or Music Central 96. Setup creates a new, empty
	  C:\Program Files\Microsoft Multimedia\Cinemania or \Music Central folder. If
	  this folder does not exist, you will need to create it. After installation is
	  complete, the program starts without displaying an error message.
	
	  NOTE: No update files are integrated at this point
	
	5. To determine which update file is corrupted, move the downloaded update files
	  one at a time from the folder on your Desktop to the new Cinemania or Music
	  Central folder located on your hard drive. Start Cinemania or Music Central
	  after moving each file.
	
	6. If the error message appears again, move the last update file you put in the
	  Cinemania or Music Central folder to your Recycle Bin. If the error message
	  still occurs, you need to repeat steps 1-5.
	
	7. Repeat step 5 until all your update files have been moved to the new
	  Cinemania or Music Central folder on the hard drive, and any corrupted files
	  are in the Recycle Bin.
	
	8. Download the Cinemania or Music Central update file that was corrupted. To
	  help eliminate the possibility of data corruption during the download
	  process, download the self-extracting executable update file.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q142076 Cinemania/Music: Integration Fails with Corrupted Update Files
	
	MORE INFORMATION
	================
	
	The Cinemania or Music Central update files may have become corrupted during the
	download process.
	
	Additional query words: 1996 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1996 kbMusicCentral kbMusicCentral1996
	Version           : :1996 edition
	
	=============================================================================
	
