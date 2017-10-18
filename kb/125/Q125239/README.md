---
layout: page
title: "Q125239: Ancient Lands/Dinosaurs: AVI Video Doesn't Play When Clicked"
permalink: kb/125/Q125239/
---

## Q125239: Ancient Lands/Dinosaurs: AVI Video Doesn't Play When Clicked

	Article: Q125239
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you click an icon to start an Audio Video Interleave (.AVI) video, the
	insertion point changes to an hourglass and then changes back to a cursor.
	
	The .AVI file does not play, nor is there an error message displayed.
	
	CAUSE
	=====
	
	The problem will occur if the entry "avi=AVIVideo" (without the quotation
	marks), which is found in the [MCI Extensions] section of the WIN.INI file, is
	missing or is spelled incorrectly.
	
	RESOLUTION
	==========
	
	To correct this problem, verify that the line is entered correctly in the [MCI
	Extensions] section of the WIN.INI file, as follows:
	
	     avi=AVIVideo
	
	If this line is not in your WIN.INI file, add it.
	
	For more information about how to accomplish this task in Windows, see your
	Windows printed documentation or online help.
	
	Additional query words: multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbAncientLands kbDinosaurs100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
