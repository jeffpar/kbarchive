---
layout: page
title: "Q141323: Dangerous Creatures: Pictures Do Not Paste with System 7.5"
permalink: /kb/141/Q141323/
---

## Q141323: Dangerous Creatures: Pictures Do Not Paste with System 7.5

{% raw %}

	Article: Q141323
	Product(s): Microsoft Home Multimedia Titles
	Version(s): MACINTOSH:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dangerous Creatures for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy a picture from the Picture Gallery in Dangerous Creatures and
	attempt to paste the image to the Scrapbook, you may receive the following error
	message:
	
	  Sorry, the disk is full or the system is out of memory.
	
	Or, the Paste option on the Edit menu may be dimmed out, not allowing the picture
	to be pasted into the Scrapbook.
	
	CAUSE
	=====
	
	The Scrapbook included with System 7.5 and higher has a memory allocation
	limitation of 256KB. This size is insufficient to hold the graphics image.
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. On your hard drive, open the System Folder.
	
	2. Inside the System Folder, open Apple Menu Items.
	
	3. Click the Scrapbook file.
	
	4. On the File Menu, click Get Info.
	
	5. In the Memory Requirements section, change the Preferred size to 1024.
	
	6. Close the Get Info window.
	
	The image should successfully Paste into the Scrapbook.
	
	MORE INFORMATION
	================
	
	Additional memory must be allocated to the Scrapbook program to allow the
	application to accept Dangerous Creatures images.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm mac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbZNotKeyword kbDangerousCreaturesMac
	Version           : MACINTOSH:1.0
	
	=============================================================================
	

{% endraw %}
