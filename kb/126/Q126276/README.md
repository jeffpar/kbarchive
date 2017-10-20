---
layout: page
title: "Q126276: Video Error Messages Under Windows NT 3.5"
permalink: /kb/126/Q126276/
---

## Q126276: Video Error Messages Under Windows NT 3.5

{% raw %}

	Article: Q126276
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0; :1.0,1994 edition,1995 edition; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Bookshelf for Windows versions 1994 edition, 1995 edition 
	- Microsoft Cinemania for Windows 1995 edition 
	- Microsoft Complete Basketball for Windows 1994 edition 
	- Microsoft Complete Baseball for Windows, version 1994 edition 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Isaac Asimov's The Ultimate Robot for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to play videos from any of the applications listed above while
	running Windows NT version 3.5 with the 16-bit video playback option turned on,
	you may encounter one or more of the following messages.
	
	Ancient Lands
	-------------
	
	If you watch a video in Ancient Lands, the screen turns black and the Ancient
	Lands window reappears. There is no error message.
	
	NOTE: Ancient Lands is not directly supported by Windows NT. Ancient Lands videos
	will only play with the 16-bit video playback option turned off.
	
	Bookshelf
	---------
	
	Bookshelf displays a small rectangle in the upper-right corner of the Bookshelf
	window. No error message is given.
	
	Cinemania
	---------
	
	The following message appears:
	
	  Err: Cannot Display.
	
	The error message is surrounded by a small rectangle.
	
	Complete Baseball
	-----------------
	
	The following message appears:
	
	  Err: Complete Baseball is unable to display video.
	  Close any other applications you have open and then try again.
	
	If you choose the OK button, Baseball continues to run, but will show a blank
	area where the video should be. Similar to the problem in Complete Basketball.
	
	Complete Basketball
	-------------------
	
	Basketball leaves a blank area where the video should be. There are no error
	messages.
	
	Dinosaurs
	---------
	
	The mouse pointer turns into an hourglass, then back into the normal pointer.
	There is no error message and no movie.
	
	NOTE: Dinosaurs is not directly supported by Windows NT. Dinosaur videos will
	only play with the 16-bit video playback option turned off.
	
	Encarta 1994
	------------
	
	The following message appears:
	
	  Err: Unknown Problem Loading the specified device driver. File:
	  X:\Encyc94\./mm/avi/<filename>.
	
	If you choose OK, Encarta creates a new window that shows only copyright
	information. No videos are shown.
	
	Encarta 1995
	------------
	
	The following message appears:
	
	  Err: Device not ready.
	
	If you choose the OK button, the following message may also be displayed:
	
	  Err: Unknown Problem Loading the specified device driver. File:
	  X:\Encyc95\./mm/avi/<filename>.
	
	Isaac Asimov's The Ultimate Robot
	---------------------------------
	
	The following message appears:
	
	  Err: The Device is not ready.
	
	RESOLUTION
	==========
	
	Verify the following Windows NT files are in the WINNT35\SYSTEM32 subdirectory:
	
	  iccvid.dll      76,288    9/4/94
	  ir32_32.dll    188,416    9/4/94
	  mciavi32.dll    91,872    9/4/94
	  mciavi.drv      73,376    9/4/94
	  msrle32.dll     12,016    9/4/94
	  msvfw32.dll    119,248    9/4/94
	  msvidc32.dll    30,992    9/4/94
	  msvideo.dll    134,640    9/4/94
	
	If one or more of the files is missing, use the EXPAND.EXE utility to decompress
	the file(s) from the X:\<processor> directory (where X: refers to the
	drive and <processor> refers to the computer's processor. For example:
	
	  D:\i386
	
	NOTE: To decompress the file(s), use the 32-bit version of the EXPAND.EXE utility
	located in the WINNT35\SYSTEM32 directory.
	
	Check the registry for the video entries using the steps below:
	
	1. In Program Manager, choose Run from the File menu.
	
	2. Type the following
	
	  "c:\winnt35\system\regedt32.exe" (without the quotation marks)
	
	  and choose OK.
	
	3. Make the HKEY_LOCAL_MACHINE window active by clicking it.
	
	4. Change to the following directory:
	
	  SOFTWARE\MICROSOFT\WINDOWSNT\CURRENTVERSION\DRIVERS32
	
	5. Ensure these lines are correct:
	
	        vidc.cvid:REG_SZ:iccvid.dll
	        vidc.iv31:REG_SZ:ir32_32.dll
	        vidc.iv32:REG_SZ:ir32_32.dll
	        vidc.mrle:REG_SZ:msrle32.dll
	        vidc.msvc:REG_SZ:msvidc32.dll
	
	6. Change to the \MCI directory.
	
	7. Ensure this line is correct:
	
	  AVIVideo:REG_SZ:mciavi.drv
	
	If you need to change an existing value in the registry, do the following:
	
	1. Double-click the entry that needs changing (this loads the String Editor
	  dialog box).
	
	2. Edit the string.
	
	3. Choose OK.
	
	4. Choose Registry Exit to exit the Registry Editor.
	
	5. Registration is now complete.
	
	If you need to add a value to the registry, do the following:
	
	NOTE: Follow this convention, "Value:Data Type:String", when adding registry
	entries. Don't add the Data Type. Windows NT does that for you.
	
	1. Choose Edit.
	
	2. Choose Add Value.
	
	3. Type the appropriate value.
	
	4. Choose OK.
	
	5. Add the appropriate string.
	
	6. Choose OK.
	
	7. Choose Registry Exit to quit.
	
	8. Registration is now complete.
	
	MORE INFORMATION
	================
	
	The 16-bit video playback option in the [MCI] Microsoft Video for Windows Setup
	(located in Control Panel, Drivers) forces Windows NT to use the 16-bit MCIAVI
	code. If the MCIAVI.DRV file is missing from the SYSTEM32 directory, corrupt, or
	registered incorrectly, Windows NT responds with errors. Turn off the 16-bit
	video playback option and see if videos play correctly.
	
	Additional query words: multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbZNotKeyword kbBookshelfSearch kbBaseballSearch kbEncartaEncycSearch kbCineManiaSearch kbAncientLands kbCompleteBaseballSearch kbCompleteBasketballSearch kbAsimovSearch kbBookShelf1994 kbBookShelf1995 kbCinemania1995 kbCompleteBaseball1994 kbCompleteBasketball1994 kbDinosaurs100 kbAsimovUltimateRobot kbEncartaEnCyc1994 kbEncartaEnCyc1995Mac
	Version           : WINDOWS:1.0; :1.0,1994 edition,1995 edition; winnt:3.5
	
	=============================================================================
	

{% endraw %}
