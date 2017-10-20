---
layout: page
title: "Q154263: Frank Lloyd Wright: Unable to Play Flyby Movie"
permalink: /kb/154/Q154263/
---

## Q154263: Frank Lloyd Wright: Unable to Play Flyby Movie

{% raw %}

	Article: Q154263
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft The Ultimate Frank Lloyd Wright for Windows, version 1.0 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play the Flyby movie from The Ultimate Frank Lloyd Wright,
	you receive the following error message:
	
	  Your program is making an invalid dynamic link call to a .dll file.
	
	When you click OK, the program closes.
	
	CAUSE
	=====
	
	Apple QuickTime version 2.0 for Windows is installed on your system.
	
	RESOLUTION
	==========
	
	NOTE: These steps involve finding, copying, and deleting files and folders. For
	more information about how to accomplish these tasks in Windows, see your
	Windows printed documentation or online Help.
	
	To resolve this problem, do the following:
	
	1. Find, and then rename the following files, if they exist, in the
	  \Windows\System folder on your hard drive:
	
	     Qtim.dll
	     Qtimcmgr.dll
	
	2. Copy the following files from the Pre\Flyby folder on the Frank Lloyd Wright
	  compact disc into the \Windows\System folder on your hard drive:
	
	     Qtim.dll
	     Qtimcmgr.dll
	
	3. Shut down Windows and restart the computer.
	
	MORE INFORMATION
	================
	
	The Ultimate Frank Lloyd Wright ships with the run-time version of QuickTime
	1.9. If QuickTime version 2.0 is installed on your machine, a conflict occurs
	with QuickTime 1.9. Copying the files listed above to the hard drive ensures
	that the routines unique to QuickTime 1.9 are defined when Frank Lloyd Wright
	loads.
	
	QuickTime is manufactured by Apple Computer, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 1.0 multi media multimedia multi-media mmtitles kbmm dyna link dynalink quick time
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbGamesSearch kbZNotKeyword kbUltimateFLW
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
