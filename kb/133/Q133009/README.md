---
layout: page
title: "Q133009: Bookshelf: Copy to Word Function Causes GP Fault"
permalink: /kb/133/Q133009/
---

## Q133009: Bookshelf: Copy to Word Function Causes GP Fault

{% raw %}

	Article: Q133009
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	1995 1996
	WINDOWS
	kbinterop kbmm kbref kberrmsg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf 1996-97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Copy To Word function in Bookshelf, you may receive the
	following error message:
	
	  Winword caused a general protection fault in module WINWORD.EXE
	
	CAUSE
	=====
	
	The problem is caused by incompatible file versions between Word for Windows 6.0
	and Bookshelf.
	
	RESOLUTION
	==========
	
	Update to Word for Windows 6.0a or 6.0c.
	
	MORE INFORMATION
	================
	
	Upgrade Word for Windows to 6.0a or 6.0c, using one of the following methods:
	
	Method 1
	--------
	
	Obtain the Word 6.0a Patch.
	
	How to Obtain Word 6.0a Patch
	-----------------------------
	
	The self-extracting Word60a.exe file is available as a free download from the
	following Microsoft Internet sites:
	
	  http://support.microsoft.com/download/support/mslfiles/word60a.exe
	
	  ftp://ftp.microsoft.com/softlib/mslfiles/word60a.exe
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	When WORD60A.EXE is run, it expands into three files: SETUP.BAT, _MSSETUP.EX_,
	and README.TXT. These three files should be placed in a temporary directory.
	When SETUP.BAT is run, it will create the correct directory structure for
	UPGRADE.EXE to successfully install.
	
	How to Obtain a Complete Set of Word 6.0a Disks
	-----------------------------------------------
	
	- Call Microsoft Sales and Information Center at (800) 426-9400.
	
	Method 2
	--------
	
	A Microsoft Word for Windows 6.0c update is available.
	
	To obtain Word 6.0c, call the Microsoft Order Desk at (800) 360-7561 and request
	the Word 6.0c update.
	
	NOTE: Under Windows 3.x, Microsoft Bookshelf '95 for Windows 95 installs as a
	16-bit application and integrates correctly with Microsoft Word for Windows
	version 6.0a or 6.0c. Under Windows 95, Microsoft Bookshelf '95 for Windows 95
	will install as a 32-bit application and will not integrate with Microsoft Word
	for Windows version 6.0a or 6.0c.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q139146 Bookshelf 95 (32-bit) Can't Add Word Integration
	
	
	Additional query words: 1995 1996 6.00 multi media multimedia multi- mmtitles kbmm g-p gp gpf protect winword
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1995 kbBookShelf1996 kbBookShelf1997
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
