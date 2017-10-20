---
layout: page
title: "Q148147: Cinemania/Music Central Wrong File Name:Update Won't Integrate"
permalink: /kb/148/Q148147/
---

## Q148147: Cinemania/Music Central Wrong File Name:Update Won't Integrate

{% raw %}

	Article: Q148147
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1996 edition
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows 1996 edition 
	- Microsoft Music Central for Windows 1996 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you download an update for Cinemania 1996 or Music Central 1996, and then
	rename the update file conforming to one of the following file standards, no
	file integration occurs:
	
	  <month>.cin96upd
	
	  -or-
	
	  <month>.msc96upd
	
	Where <month> is the month of the update you are trying to integrate.
	
	CAUSE
	=====
	
	Microsoft Windows 95 is configured to hide MS-DOS file extensions for file type
	that are registered.
	
	RESOLUTION
	==========
	
	Change your Windows 95 settings to display file extensions. To do this, follow
	these steps:
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. On the View menu, click Options.
	
	3. Click the View tab.
	
	4. Click the "Hide MS-DOS File Extensions For File Types That Are Registered"
	  check box to clear it.
	
	5. Click OK.
	
	6. The update file should look like the following:
	
	  WinNov95.Cin96upd.cin
	
	7. Rename the file extension to the following:
	
	  <file name>.cin96upd
	
	  Where <file name> is the name of the update file. For example, rename
	  the following file,
	
	  WinNov95.Cin96upd.cin
	
	  to:
	
	  WinNov95.cin96upd
	
	  For more information about renaming files, see your Windows printed
	  documentation or online Help.
	
	8. Restart Cinemania 96 or Music Central 96.
	
	  The update file automatically integrates with Cinemania 96 or Music Central
	  96.
	
	MORE INFORMATION
	================
	
	When an 8.3-compliant file is downloaded, expanded and renamed, the file
	contains an additional extension.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q142076 Cinemania/Music: Integration Fails with Corrupted Update Files
	
	
	Additional query words: 1996 multi media multimedia multi-media mmtitles kbmm download internet www world wide web msn
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1996 kbMusicCentral kbMusicCentral1996
	Version           : :1996 edition
	
	=============================================================================
	

{% endraw %}
