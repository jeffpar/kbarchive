---
layout: page
title: "Q104597: Pan Chinese Characters Appear as ASCII Text"
permalink: /kb/104/Q104597/
---

## Q104597: Pan Chinese Characters Appear as ASCII Text

{% raw %}

	Article: Q104597
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation, Pan Chinese Edition, version 4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pan Chinese characters typed in an application may appear as ASCII text. Notepad
	displays the characters correctly.
	
	CAUSE
	=====
	
	This problem may occur for any of the following reasons:
	
	- Riched32.dll is corrupt or an incorrect version is installed
	
	- The MingLiu font is not installed for Chinese (Taiwan) locale
	
	RESOLUTION
	==========
	
	To resolve this problem, expand Riched32.dll (197,904 bytes, 1/24/1997) from the
	Pan Chinese Windows NT Workstation 4.0 CD-ROM to the %SystemRoot%\System32
	folder and then shut down restart your computer.
	
	For information how to install the MingLiU font in Pan Chinese Windows NT
	Workstation 4.0, please see the following article in the Microsoft Knowledge
	Base:
	
	  ARTICLE-ID: Q136477
	  TITLE : How to Install MingLiU Fonts for Big5 Applications
	
	Additional query words: 4.00
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbHLangChinesePan kbWinNT400search
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
