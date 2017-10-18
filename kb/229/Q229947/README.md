---
layout: page
title: "Q229947: How to Silently Install the Windows 95 Year 2000 Update"
permalink: kb/229/Q229947/
---

## Q229947: How to Silently Install the Windows 95 Year 2000 Update

	Article: Q229947
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.0,3.0,3.01,3.02,4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,5,95
	Operating System(s): 
	Keyword(s): kbsetup win95 msiew95 ie4sp1
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	- Microsoft Internet Explorer versions 2.0, 3.0, 3.01, 3.02, 4.0, 4.01, 4.01 Service Pack 1, 4.01 Service Pack 2, 5 for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install the Microsoft Windows 95 Year 2000 Update
	using quiet mode.
	
	MORE INFORMATION
	================
	
	To install the Windows 95 Year 2000 Update using quiet mode, use the method
	appropriate for the version of Microsoft Internet Explorer you use.
	
	Internet Explore 3.x Through Internet Explorer 4.01 Service Pack 1
	------------------------------------------------------------------
	
	If you use Internet Explorer version 3.0 through version 4.01 Service Pack 1,
	type the following command:
	
	  w95y2k.exe /c:"y2ksetup /ii /ar" /q
	
	Internet Explorer 2.x or Earlier or Internet Explorer 4.01 Service Pack 2 or Later, or No Internet Explorer Installed
	---------------------------------------------------------------------------------------------------------------------
	
	If you use Internet Explorer 2.x or earlier, Internet Explorer 4.01 Service Pack
	2 or later, or do not use Internet Explorer, type the appropriate command:
	
	If you want to install the core Windows files only without any prompts and
	without restarting the computer, type the following command:
	
	  w95y2k.exe /Q /C:"y2ksetup /ii /ai /nr"
	
	If you want to install the core Windows files only without any prompts and
	restart the computer, type the following command:
	
	  w95y2k.exe /Q /C:"y2ksetup /ii /ai /ar"
	
	For additional information about the Windows 95 Year 2000 Update, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q225053 Microsoft Windows 95 Year 2000 Update Readme File
	
	If you are installing on a Windows 95-based computer that does not have Internet
	Explorer installed, using the /ii and /ai switches together does not install
	Internet Explorer. For additional information about these command-line switches,
	please click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q225053 Microsoft Windows 95 Year 2000 Update Readme File
	
	Additional query words: setup unattended switches parameters silent y2k install
	
	======================================================================
	Keywords          : kbsetup win95 msiew95 ie4sp1 
	Technology        : kbIEsearch kbWin95search kbIE95Search kbIE500Search kbOPKSearch kbZNotKeyword3 kbIE200Win95 kbIE300Win95 kbIE301Win95 kbIE302Win95 kbIE400Win95 kbIE401Win95 kbIE401Win95SP1 kbIE401Win95SP2 kbIE500Win95 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:2.0,3.0,3.01,3.02,4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,5,95
	Issue type        : kbhowto
	
	=============================================================================
	
