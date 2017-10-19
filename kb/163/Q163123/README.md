---
layout: page
title: "Q163123: Setup Error Message: Unable to Copy a File ..."
permalink: /kb/163/Q163123/
---

## Q163123: Setup Error Message: Unable to Copy a File ...

	Article: Q163123
	Product(s): Microsoft Home Kids Products
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetupkbfaq
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Beyond the Limit: Ultimate Climb 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows NT 4.0 
	- Microsoft Encarta Virtual Globe 99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Microsoft Beyond the Limit: Ultimate Climb or Encarta
	Virtual Globe 99, you may receive one of the following error messages:
	
	  Unable to copy a file to the computer.
	
	  - or -
	
	  d:\setup
	  Cannot find the file 'd:\setup' (or one of its components). Make
	  sure that path and filename are correct and that all required
	  libraries are available.
	
	  - or -
	
	  Program Not Found
	  Windows cannot find SETUP.EXE
	  This program is needed for opening files of type 'Application'.
	  Location of SETUP.EXE:
	
	  - or -
	
	  Program Not Found
	  Cannot find file 'D:\SETUP.EXE'.
	
	  - or -
	
	  Browse
	  D:\Setup.exe
	  This file cannot be found.
	  Make sure that the correct path and filename are given.
	
	Also, if you are using real-mode CD-ROM drivers and you view the contents of the
	compact disc in Explorer, you will see the following folders:
	
	  Ap~00001
	  Sp~00002
	
	These folders should be seen as:
	
	  App
	  Support
	
	CAUSE
	=====
	
	The symptoms described above may occur if your computer is using real-mode
	CD-ROM drivers to access the compact disc.
	
	When Setup attempts to copy files from a folder that uses both upper and
	lowercase letters, setup fails. This happens because only protected mode CD-ROM
	drivers support this type of file name. Real-mode CD-ROM drivers support only
	filenames with all uppercase letters.
	
	Therefore, if the Setup program is looking for Setup.exe, the only file the
	CD-ROM driver reports is SETUP.EXE. Since this is not an exact match, the Setup
	program reports that the file does not exist on the compact disc.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain the most recent version of protected mode CD-ROM
	drivers available for your CD-ROM drive from your hardware manufacturer.
	
	If you are having difficulty accessing your CD-ROM drive from a Command prompt,
	please see the following article in the Microsoft Knowledge Base:
	
	Cannot Access CD-ROM Drive from MS-DOS Mode or Command Prompt
	
	Additional query words: summit btl 1.00 1.00a CD-ROM CD ROM NT4 compact disc disk kbimu MS-DOS driver ms dos msdos 16-bit
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbfaq
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeProdSearch kbOSWinNT400 kbHomeMMsearch kbEncartaSearch kbOSWinNTSearch
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
