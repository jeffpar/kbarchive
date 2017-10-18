---
layout: page
title: "Q153356: Encarta 1996: Error When Starting Yearbook Builder"
permalink: kb/153/Q153356/
---

## Q153356: Encarta 1996: Error When Starting Yearbook Builder

	Article: Q153356
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	At the Encarta Home Screen, when you click Stay Current, you receive one of the
	following error messages:
	
	  Windows 98
	  ----------
	
	  Memory Error: Quitting Encarta
	
	  Windows 95
	  ----------
	
	  This program has performed an illegal operation and will be shut down.
	
	If you click the Details button, you receive the following message:
	
	  ENC9632 caused an Invalid Page Fault in module ENC9632.EXE
	
	  Windows 3.x
	  -----------
	
	  An error has occurred in your application. If you choose Ignore, you should
	  save your work in a new file. If you choose Close, your application will
	  terminate.
	
	If you click the Close button, you receive the following message:
	
	  ENCART96 caused a General Protection Fault in module ENCART96.EXE
	
	CAUSE
	=====
	
	The Ybstate.dat file is corrupted or missing.
	
	RESOLUTION
	==========
	
	To resolve the problem, use the instructions below for your version of Windows.
	
	Steps for Windows 95/98
	-----------------------
	
	The following instructions assume:
	
	- Your hard drive is drive C:
	
	- Your CD-ROM drive is drive D
	
	- Your destination folder for Encarta is:
	
	     C:\Program Files\Microsoft Reference\Encarta 96 Encyc
	
	NOTE: These instructions involve finding, copying, and editing files and folders.
	For more information about how to accomplish these tasks in Windows, see your
	Windows printed documentation or online Help.
	
	1. Search the C:\Program Files\Microsoft Reference\Encarta 96 Encyc folder for
	  the following file:
	
	  Ybstate.dat
	
	  If found, delete the file.
	
	2. In the C:\Program Files\Microsoft Reference\Encarta 96 Encyc\Yearbook folder,
	  find and delete the most recently dated .ybk file.
	
	3. Copy the following file from the D:\Encarta\Yearbook folder into the
	  C:\Program Files\Microsoft Reference\Encarta 96 Encyc folder:
	
	  Ybstate.dat
	
	4. Copy or download the most recently dated Encarta (.eyb) update file to the
	  following folder:
	
	     C:\Program Files\Microsoft Reference\Encarta 96 Encyc\Yearbook
	
	  NOTE: If you download the self-extracting (.exe) update file, copy the file to
	  C:\Program Files\Microsoft Reference\Encarta 96 Encyc\Yearbook and then
	  double-click the (.exe) file to extract the (.eyb) file.
	
	5. Restart Encarta, then at the Encarta Home Screen, click Stay Current.
	
	6. In the Yearbook Builder, click Add New Months, then click Integrate.
	
	Steps for Windows 3.x
	---------------------
	
	The following instructions assume:
	
	- Your hard drive is drive C:
	
	- Your CD-ROM drive is drive D
	
	- Your destination folder for Windows 3.x is:
	
	     C:\Encarta
	
	NOTE: These instructions involve finding, copying, and editing files and folders.
	For more information about how to accomplish these tasks in Windows, see your
	Windows printed documentation or online Help.
	
	1. In the C:\Encarta folder, search for the following file:
	
	  Ybstate.dat
	
	  If found, delete the file.
	
	2. Delete the most recently dated .ybk file from the following folder:
	
	     C:\Encarta\Yearbook
	
	3. Copy the following file from the D:\Encarta\Yearbook folder into the
	  C:\Encarta folder:
	
	  Ybstate.dat
	
	4. Copy or download the most recently dated Encarta (.eyb) update file to the
	  following folder:
	
	     C:\Encarta\Yearbook
	
	  NOTE: If you download the self-extracting (.exe) update file, copy the file to
	  C:\Encarta\Yearbook and then double-click the (.exe) file to extract the
	  (.eyb) file.
	
	5. Restart Encarta, and then at the Encarta Home screen, click Stay Current.
	
	6. In the Yearbook Builder, click Add New Months, then click Integrate.
	
	Additional query words: 1996 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1996
	Version           : WINDOWS:
	
	=============================================================================
	
