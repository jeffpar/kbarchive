---
layout: page
title: "Q140307: Mac Encarta: Err Msg &quot;The Correct Fonts Needed...&quot;"
permalink: /kb/140/Q140307/
---

## Q140307: Mac Encarta: Err Msg &quot;The Correct Fonts Needed...&quot;

{% raw %}

	Article: Q140307
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition,1996 edition,1997 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 97 Encyclopedia for Macintosh 
	- Microsoft Encarta 96 Encyclopedia for Macintosh 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Encarta for the Macintosh, you may receive the following error
	message:
	
	  The correct fonts needed for Encarta are not installed. Please re-install
	  Encarta from the CD-ROM.
	
	When you start Encarta for the Macintosh 1997, you may receive the following
	error message:
	
	  Encarta Encyclopedia cannot find one or more of the fonts it uses. Encarta
	  Encyclopedia will run without these fonts, but some text may not display
	  properly. To correct the problem, reinstall from Encarta 97 Disc 1.
	
	NOTE: Encarta 97 Encyclopedia uses the following fonts: Arial, HM Phonetic, MS
	Reference, Symbol, and Times New Roman.
	
	CAUSE
	=====
	
	The error message may be caused by either of the following conditions:
	
	- The V Lucida Sans font suitcase is not in the Fonts folder located in the
	  System Folder.
	
	  -or-
	
	- There are more than 128 font suitcases present in the Fonts folder in the
	  System Folder.
	
	RESOLUTION
	==========
	
	If the V Lucida Sans font suitcase is not in the Fonts folder, do the
	following:
	
	NOTE: System versions earlier than 7.1 do not contain a Fonts folder. If you have
	a version earlier than 7.1, replace references to the Fonts folder with the
	System suitcase in the following procedures.
	
	1. Insert and open the Encarta compact disc.
	
	2. Open the Installer Files folder.
	
	3. Open the System Files folder.
	
	4. Drag the V Lucida Sans suitcase into the Fonts folder located in the System
	  Folder.
	
	To determine if you have more than 128 font suitcases located in the Fonts folder
	(located in your System Folder), and to correct the problem if that is the case,
	follow these steps:
	
	1. Open the System Folder.
	
	2. Open the Fonts folder.
	
	3. On the View menu, click By Kind. This arranges the Fonts folder contents so
	  all of the font suitcases are in one location.
	
	  NOTE: If there are more than 128 font suitcases within the Fonts folder,
	  Encarta 1994 will fail to start.
	
	4. If you have more than 128 font suitcases, remove the excess font suitcases
	  from the Fonts folder by dragging them onto the desktop.
	
	  NOTE: Do not delete the V Lucida Sans font suitcase located in the Fonts
	  folder. Encarta fails to load if the font is removed.
	
	Additional query words: 1994 multi media multimedia multi-media mmtitles kbmm 94 install mac 1996 1997 96 97
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1994 kbEncartaEnCyc1996Mac kbEncartaEnCyc1997Mac
	Version           : :1994 edition,1996 edition,1997 edition
	
	=============================================================================
	

{% endraw %}
