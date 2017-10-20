---
layout: page
title: "Q137836: Encarta 1996: Could Not Open Mplayer.ini"
permalink: /kb/137/Q137836/
---

## Q137836: Encarta 1996: Could Not Open Mplayer.ini

{% raw %}

	Article: Q137836
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1996 edition; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup program (Setup.exe) to install or remove Encarta on a
	system running Windows 3.x, you may receive the following error message:
	
	  Setup Message
	  Could not open the file named:
	  'C:\WINDOWS\MPLAYER.INI'.
	
	You are given the options to Abort, Retry, or Ignore.
	
	If you click Abort, you receive the following error message:
	
	  Setup is not yet complete.
	  If you quit now, this product will not be correctly installed.
	
	  Quit the setup of this product?
	
	If you click Retry, nothing occurs.
	
	If you click Ignore once, nothing occurs; however, if you double-click Ignore,
	the Setup program completes successfully.
	
	CAUSE
	=====
	
	The errors occur if the Mplayer.ini file is marked as read-only.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the read-only attribute from Mplayer.ini. To do
	this, use either of the following methods:
	
	Method 1
	--------
	
	To remove the read-only attribute, type the following command at the MS-DOS
	prompt, and then press ENTER:
	
	  "attrib -r c:\windows\mplayer.ini" (without the quotation marks)
	
	-or-
	
	Method 2
	--------
	
	To remove the read-only attribute using File Manager, follow these steps:
	
	1. Double-click the Windows folder.
	
	2. On the View menu, click Sort By Name.
	
	3. Locate Mplayer.ini and click it.
	
	4. On the File menu, click Properties, and, in the Properties dialog box, under
	  Attributes, clear the Read Only check box.
	
	MORE INFORMATION
	================
	
	The error will only occur in Windows 3.1. Windows 95 does not use an Mplayer.ini
	file because the Media Player settings in Windows 95 are saved in the Registry.
	
	Additional query words: 1996 multi media multimedia read only multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1996 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbOSWin310 kbOSWin311
	Version           : :1996 edition; WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
