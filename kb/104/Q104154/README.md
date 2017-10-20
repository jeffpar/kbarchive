---
layout: page
title: "Q104154: Stravinsky: Can't Run from Second Chained CD-ROM Drive"
permalink: /kb/104/Q104154/
---

## Q104154: Stravinsky: Can't Run from Second Chained CD-ROM Drive

{% raw %}

	Article: Q104154
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to run Stravinsky from the second chained CD-ROM (CD) drive, the
	following error message will appear
	
	  Please insert the correct CD into drive <drive>:
	
	where <drive> is the drive letter of the first CD-ROM drive.
	
	By default, Stravinsky expects the CD to be in the first CD-ROM drive.
	
	RESOLUTION
	==========
	
	You can force Stravinsky to read the CD from the second chained CD-ROM drive as
	follows:
	
	1. In Notepad or another text editor, open the file STRAV.INI.
	
	2. Add the following line
	
	  "CDDrive=<drive>:" (without the quotation marks)
	
	  where <drive> is the drive letter of the drive you want to use.
	
	3. Save and close the STRAV.INI file.
	
	When you restart Stravinsky, it should be able to read the CD in the second
	CD-ROM drive.
	
	Additional query words: 1.0 multi media multimedia multi-media wrong read
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMStravinsky
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
