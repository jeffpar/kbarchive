---
layout: page
title: "Q69889: Sources of Information Regarding Windows DDE"
permalink: /kb/069/Q69889/
---

## Q69889: Sources of Information Regarding Windows DDE

	Article: Q69889
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information below contains a list of references on Windows dynamic data
	exchange (DDE) and some tools that can be used to test DDE applications
	developed with the Windows SDK versions 3.0 and 3.1.
	
	MORE INFORMATION
	================
	
	PRINTED DOCUMENTATION
	---------------------
	
	DDE Specification:
	
	- "Microsoft Windows Software Development Kit Reference Volume 2," Chapter 15,
	  "Windows DDE Protocol Definition."
	
	- "Microsoft Windows Software Development Kit Guide to Programming," Chapter
	  22.
	
	Books:
	
	- "Programming Windows," Second Edition (Charles Petzold, Microsoft Press),
	  Chapter 17.
	
	- "Developing Windows 3.1 Applications with Microsoft C/C++," Second Edition
	  (Brent E. Rector, Sams Publishing).
	
	Microsoft Systems Journal Articles:
	
	- Vol. 5 No. 1 (January 1990), "Simplifying Complex Windows Development Through
	  the Use of a Client-Server Interface."
	
	- Vol. 4 No. 3 (May 1989), "A Technical Study of Dynamic Data Exchange Under
	  OS/2 Presentation Manager."
	
	- Vol. 8 No. 1 (January 1993), "Network DDE in Windows for Workgroups 3.1
	  Bridges Programs Between PC's."
	
	Sample Code:
	
	- Windows 3.00 SDK DDE client and server applications (in the \SAMPLES\DDE
	  directory)
	
	- DDEPOP and SHOWPOP sample applications in "Programming Windows."
	
	COMMERCIAL APPLICATIONS THAT USE DDE
	------------------------------------
	
	Below is a list of commercial applications that support DDE and the conversation
	topics that each supports.
	
	Microsoft Excel:
	
	See the index of the "Microsoft Excel User's Guide" for complete references.
	
	  Application  DDE Topics    Items
	  -----------  ----------    -----
	  NULL         NULL
	  Excel        Sheet name    Cell reference (must be in R1C1 format)
	  Excel        System        SysItems
	  Excel        System        Formats (eight different kinds)
	  Excel        System        Topics  (sheets that are loaded)
	  Excel        System        Status  (busy or not)
	
	Q+E:
	
	See pages 74-79 of the Q+E manual shipped with Microsoft Excel 3.00 for more
	information.
	
	  Application  DDE Topics    Items
	  -----------  ----------    -----
	  NULL         NULL
	  QE           System        SysItems
	  QE           System        Formats = Biff TEXT
	  QE           System        Topics  = Query1
	  QE           System        Status  = Ready
	  QE           System        Logon
	  QE           System        Logoff
	  QE           System        Sources
	  QE           System        Tables
	
	Microsoft Word for Windows:
	
	Please see the "Microsoft Word for Windows Technical Reference" manual (published
	by Microsoft Press) for more information.
	
	  Application  DDE Topics    Items
	  -----------  ----------    -----
	  NULL         NULL
	  WinWord      Document      bookmark
	  WinWord      System        SysItems
	  WinWord      System        Formats (text, rtf, metafilepict,
	                                      bitmap, link)
	  WinWord      System        Topics  (documents that are loaded)
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
