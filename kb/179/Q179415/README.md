---
layout: page
title: "Q179415: Multimedia: Program Cannot Find or Recognize Update Files"
permalink: /kb/179/Q179415/
---

## Q179415: Multimedia: Program Cannot Find or Recognize Update Files

	Article: Q179415
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbtool kbimukbfaq
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta 98 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Encyclopedia Standard 2001 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to integrate an update file in any of the Microsoft programs
	listed above, the program may not find or recognize the update file if you use
	Netscape Navigator to download it from the Internet.
	
	When you double-click the update file, you may receive the following error
	message:
	
	  <filename> is not a valid Win32 application
	
	where <filename> is the path that points to the update file.
	
	CAUSE
	=====
	
	The programs listed above use the file's extension to identify it as an update
	file. When the file's extension is changed, the program that uses the update
	file cannot find it. If you download an update file from the Internet using
	Netscape Navigator 4.0, Navigator may change the file's extension to a program
	extension (.exe) when it saves the file to the hard disk.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use one of the following methods:
	
	Use the Internet Features in the Program to Download the Update File
	--------------------------------------------------------------------
	
	Encarta 98 Encyclopedia can download update files directly from the Internet.
	
	To download an update file in Encarta 98 Encyclopedia, click Online Features,
	click Downloads, and then click Update Encarta.
	
	Preserve the File Extension of the Update File
	----------------------------------------------
	
	To preserve the file extension when you use Netscape Navigator 4.0 to download an
	update file, use the following steps:
	
	1. Connect to the Updates Web page for your program.
	
	2. Right-click the link to the update file you want to download, and then click
	  Save Link As.
	
	3. Navigate to the folder in which you want to save the file, and then click
	  Save.
	
	NOTE: Make sure you save the update file in the correct location. Save update
	files for Bookshelf in any folder on the hard disk on which Bookshelf is
	installed. If Bookshelf and Windows are both installed on the same hard disk, we
	recommend you save the Bookshelf update files to the Windows desktop. Save
	update files for Encarta Encyclopedia in the appropriate folders.
	
	Encarta 96 Encyclopedia:
	
	C:\Program Files\Microsoft Reference\Encarta Encyclopedia\Yearbook
	
	Encarta 97 Encyclopedia:
	
	C:\Program Files\Microsoft Reference\Encarta Encyclopedia\Updates
	
	Encarta 98 Encyclopedia:
	
	C:\Program Files\Microsoft Reference\Encarta Encyclopedia\Update98
	
	Encarta 99 Encyclopedia:
	
	C:\Program Files\Microsoft Reference\Encarta Encyclopedia\Update99
	
	Encarta 2000 Encyclopedia:
	
	C:\Program Files\Microsoft Encarta\Encarta Encyclopedia 2000\Update 2000
	
	Encarta 2001 Encyclopedia:
	
	C:\Program Files\Microsoft Encarta\Encarta Encyclopedia 2001\Update 2001
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: multi multi-media media mm communicator
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbtool kbimu kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbBookShelf1996 kbBookShelf1997 kbEncartaEnCyc1996 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc2000 kbEncartaEnCyc1999 kbEncartaEnCyc1998
	Version           : WINDOWS:; :
	Issue type        : kbhowto
	
	=============================================================================
	
