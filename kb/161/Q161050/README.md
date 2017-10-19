---
layout: page
title: "Q161050: Encarta 97: Error When Starting Online Features Yearbook"
permalink: /kb/161/Q161050/
---

## Q161050: Encarta 97: Error When Starting Online Features Yearbook

	Article: Q161050
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Encarta Encyclopedia, when you select the Yearbook option located in Online
	Features, you receive the following error message:
	
	  Required files are missing or damaged. Run setup again to uninstall and
	  reinstall Encarta Encyclopedia. Click Help for more information.
	
	CAUSE
	=====
	
	The Ybbst97a.dat file is corrupted or missing.
	
	RESOLUTION
	==========
	
	To resolve the problem, use the instructions below for your version of Windows.
	
	Steps for Windows 95/98
	-----------------------
	
	The following instructions assume:
	
	- Your hard drive is drive C:
	
	- Your CD-ROM drive is drive D
	
	- Your destination folder for Encarta is:
	
	     C:\Program Files\Microsoft Reference\Encarta Encyclopedia
	
	NOTE: These instructions involve finding, copying, and editing files and folders.
	For more information about how to accomplish these tasks in Windows, see your
	Windows printed documentation or online Help.
	
	1. Search the C:\Program Files\Microsoft Reference\Encarta Encyclopedia folder
	  for the following file:
	
	  Ybbst97a.dat
	
	  If found, delete the file.
	
	2. In the C:\Program Files\Microsoft Reference\Encarta Encyclopedia\Updates
	  folder, find and delete the most recently dated .ybk file.
	
	3. Copy the following file from the D:\Aamsstp\Encarta\Updates folder into the
	  C:\Program Files\Microsoft Reference\Encarta Encyclopedia folder:
	
	  Ybbst97a.dat
	
	4. Copy or download the most recently dated Encarta (.eyb) update file to the
	  following folder:
	
	     C:\Program Files\Microsoft Reference\Encarta Encyclopedia\Updates
	
	5. Restart Encarta.
	
	6. Click Online Features, and then click Yearbook.
	
	7. In the Yearbook, click Downloads and then click Integrate.
	
	Steps for Windows 3.x
	---------------------
	
	The following instructions assume:
	
	- Your hard drive is drive C:
	
	- Your CD-ROM drive is drive D
	
	- Your destination folder for Encarta is:
	
	     C:\Encarta
	
	NOTE: These instructions involve finding, copying, and editing files and folders.
	For more information about how to accomplish these tasks in Windows, see your
	Windows printed documentation or online Help.
	
	1. In the C:\Encarta folder, search for the following file:
	
	  Ybbst97a.dat
	
	  If found, delete the file.
	
	2. Delete the most recently dated .ybk file from the following folder:
	
	     C:\Encarta\Updates
	
	3. Copy the following file from the D:\Aamsstp\Encarta\Updates folder into the
	  C:\Encarta folder:
	
	  Ybbst97a.dat
	
	4. Copy or download the most recently dated Encarta (.eyb) update file to the
	  following folder:
	
	     C:\Encarta\Updates
	
	5. Restart Encarta.
	
	6. Click Online Features, and then click Yearbook.
	
	7. In the Yearbook, click Downloads, and then click Integrate.
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del
	Version           : WINDOWS:
	
	=============================================================================
	
