---
layout: page
title: "Q153772: Bookshelf Err Msg: ACME Setup Caused a GP Fault in VER.DLL"
permalink: /kb/153/Q153772/
---

## Q153772: Bookshelf Err Msg: ACME Setup Caused a GP Fault in VER.DLL

{% raw %}

	Article: Q153772
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Bookshelf '96-'97, you receive the
	following error message:
	
	  ACME Setup caused a General Protection Fault in module VER.DLL
	
	CAUSE
	=====
	
	The Ver.dll file may be the incorrect version, damaged, or missing.
	
	RESOLUTION
	==========
	
	To resolve this problem, copy the Ver.dll file from the Aamsstp\System16 folder
	located on the Bookshelf compact disc into the Windows\System folder on your
	hard drive.
	
	To copy the file, do the following:
	
	1. Click the Start button, point to Programs, and then click MS-DOS prompt:
	
	2. At the MS-DOS command prompt, type the following command:
	
	  "copy d:\aamsstp\system16\ver.dll c:\windows\system" (without the quotation
	  marks)
	
	where D is your CD-ROM drive letter, C is the letter of your hard drive.
	
	NOTE: If asked to overwrite this file, type Y, then press ENTER.
	
	MORE INFORMATION
	================
	
	The VER.DLL file is a dynamic-link library (.dll) that is used to verify file
	versions in the Windows environment.
	
	Additional query words: 96-97 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1996 kbBookShelf1997
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
