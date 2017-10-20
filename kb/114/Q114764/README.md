---
layout: page
title: "Q114764: Video Err Msg: &quot;Specified File Cannot Be Played...&quot;"
permalink: /kb/114/Q114764/
---

## Q114764: Video Err Msg: &quot;Specified File Cannot Be Played...&quot;

{% raw %}

	Article: Q114764
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions, version 1994 
	- Microsoft Golf for Windows, multimedia edition, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use one of the programs listed at the beginning of this article to play
	a video (.Avi) file, the following message appears:
	
	  The specified file cannot be played on the specified MCI device. The file may
	  be corrupt, or not in the correct format.
	
	This problem can occur with any one-frame-per-second video clip that does not
	include sound. For example, the problem has been found to occur with the
	following video clips:
	
	- Encarta 1994:
	
	  - Butterflies & Moth
	  - Eagle
	  - Frog
	
	- Cinemania 1994:
	
	  - Birth of a Nation
	
	RESOLUTION
	==========
	
	To correct this problem, copy the MCIAVI.DRV file from the program CD-ROM to the
	WINDOWS\SYSTEM subdirectory.
	
	NOTE: The Encarta and Cinemania MCIAVI.DRV file should be dated 10/28/92, and
	should have a size of 61,136 bytes.
	
	MORE INFORMATION
	================
	
	Bookshelf 1994 installs version 1.1 of the [MCI] Microsoft Video for Windows
	driver (MCIAVI.DRV). This driver is newer than the version 1.0 driver included
	with Encarta 1994 and Cinemania 1994. There are some video files in Encarta 1994
	and Cinemania 1994 that do not work well with the newer driver. Using these
	files with the newer driver will cause the error message stated above to occur.
	Bookshelf 1994 is able to use the version 1.0 driver without problems. Encarta
	1995 includes a Video for Windows version 1.1a driver that solves this problem.
	
	
	Additional query words: multi media multimedia multi-media audio video animation clip run play avi avis 1994 94 1995 95 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbGamesSearch kbGolfSearch kbEncartaEncycSearch kbCineManiaSearch kbGolf100 kbEncartaEnCyc1996 kbEncartaEnCyc1994 kbEncartaEnCyc1995Mac
	
	=============================================================================
	

{% endraw %}
