---
layout: page
title: "Q176386: Cinemania: No Sound When You Play Film Clips"
permalink: /kb/176/Q176386/
---

## Q176386: Cinemania: No Sound When You Play Film Clips

	Article: Q176386
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): kbmm kbsound kbprb
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play a film clip in Microsoft Cinemania for Windows, you may not hear
	any sound.
	
	CAUSE
	=====
	
	This behavior can occur if the following entry in the [mci extensions] section
	of the Win.ini file is missing or spelled incorrectly:
	
	     avi=AVIVideo
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "win.ini" (without the quotation marks), and then click
	  OK.
	
	3. On the Search menu, click Find.
	
	4. Type "[mci extensions]" (without the quotation marks), and then click Find
	  Next.
	
	5. When you locate the [mci extensions] section, scroll down to view the
	  contents of the section and verify that the following line exists and is
	  correctly spelled:
	
	        avi=AVIVideo
	
	  If this entry is missing from the [mci extensions] section, add it exactly as
	  it appears above.
	
	  NOTE: If the line is present but has a semicolon (;) at the beginning, remove
	  the semicolon.
	
	6. On the File menu, click Save.
	
	7. On the File menu, click Exit.
	
	8. Restart the computer.
	
	MORE INFORMATION
	================
	
	If these steps do not resolve the issue, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q139806 Err Msg: MMSYSTEM266 The Device Could Not Be Loaded...
	
	Additional query words: 1992 1993 1994 1995 1996 1997 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kbmm kbsound kbprb 
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbCineManiaSearch kbOSWin310 kbOSWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
