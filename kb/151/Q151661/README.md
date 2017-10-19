---
layout: page
title: "Q151661: Encarta World Atlas: How To Disable Cosmo In The Registry"
permalink: /kb/151/Q151661/
---

## Q151661: Encarta World Atlas: How To Disable Cosmo In The Registry

	Article: Q151661
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 World Atlas for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SUMMARY
	=======
	
	As part of troubleshooting Encarta World Atlas, it may be necessary to turn off
	Cosmo. The following procedure describes how to disable Cosmo in the Windows 95
	Registry if Encarta World Atlas will not start.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk. The registry is a system-wide database used for storing
	Windows 95 software and hardware configuration settings.
	
	1. Click the Start button, and then click Run.
	
	2. Type the following and click OK:
	
	  "regedit" (without the quotation marks)
	
	3. When the Registry Editor appears, double-click the HKEY_CURRENT_USER folder.
	
	4. Double-click the Software folder, and then the Microsoft folder.
	
	5. Double-click the Microsoft Reference folder, then the Encarta World Atlas
	  folder and then the Option folder.
	
	NOTE: Inside this folder there should be an item called Defaults which is a text
	string of default settings for Encarta World Atlas. Each entry is follow by a
	greater than (>) or a less than (<) sign to identify whether or not it is
	active. If all options are active then all entries on this line should be
	followed by greater than signs.
	
	1. Double-click Defaults to edit the item.
	
	2. Click after the Cosmo entry, delete the greater than (>) sign and replace
	  it with a less than (<) sign.
	
	3. Click OK
	
	The text string will now update to show the new setting and you will be able to
	start Encarta World Atlas without Cosmo.
	
	Additional query words: 1996 multi media multimedia multi-media mmtitles kbmm kbtshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaWorldAtlas1996
	Version           : WINDOWS:
	
	=============================================================================
	
