---
layout: page
title: "Q194480: Encarta 98: Unable to Play Video Clips in Full Screen Mode"
permalink: kb/194/Q194480/
---

## Q194480: Encarta 98: Unable to Play Video Clips in Full Screen Mode

	Article: Q194480
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbimu
	Last Modified: 15-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 98 DVD-ROM Reference Suite for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Encarta 98 Reference Suite DVD-ROM, you may not be able to play
	any of the video clips in Microsoft Encarta 98 Encyclopedia in full screen mode.
	You are able to play the video clips in a window.
	
	CAUSE
	=====
	
	This behavior can occur if the versions of some of the Active Movie files
	installed on your computer do not match.
	
	RESOLUTION
	==========
	
	To resolve this issue, rename the Active Movie files and then reinstall Active
	Movie from the Encarta Reference Suite DVD-ROM. To do this, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "amovie.ocx" (without the quotation marks), and then
	  click Find Now.
	
	3. Rename the Amovie.ocx file to Amovie.old.
	
	  For information about how to rename a file, click Start, click Help, click the
	  Index tab, type "renaming, files" (without the quotation marks), and then
	  click Display.
	
	  NOTE: If you are using Microsoft Windows 98, click Start, click Help, click
	  the Index tab, type "renaming files" (without the quotation marks), and then
	  click Display.
	
	4. Repeat steps 2-3 to rename each of the following files:
	
	  - Actmovie.exe
	  - Quartz.dll
	
	5. Insert the Encarta 98 Reference Suite DVD-ROM into the DVD-ROM drive. Press
	  and hold down the SHIFT key as you insert the DVD-ROM to prevent the Encarta
	  98 Reference Suite from starting automatically.
	
	6. Double-click the My Computer icon on the desktop.
	
	7. Right-click the DVD-ROM drive icon, and then click Explore.
	
	8. Double-click the Aamsstp folder.
	
	9. Double-click the Amovie.exe file. Follow the instructions on the screen to
	  reinstall Active Movie.
	
	Additional query words: 98 multi multi-media media mmtitles movies
	
	======================================================================
	Keywords          : kbdisplay kbenv kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbZNotKeyword4 kbEncartaReference98
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
