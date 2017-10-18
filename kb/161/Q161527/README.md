---
layout: page
title: "Q161527: Encarta 97 World Atlas: How To Turn Off Opening Video"
permalink: kb/161/Q161527/
---

## Q161527: Encarta 97 World Atlas: How To Turn Off Opening Video

	Article: Q161527
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhowto
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 World Atlas for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SUMMARY
	=======
	
	Encarta 97 World Atlas plays a video as part of the opening sequence. If running
	this video causes problems and keeps World Atlas from starting, you may need to
	turn the opening video off.
	
	This article discusses how to turn the opening video off using the Windows
	registry.
	
	MORE INFORMATION
	================
	
	To turn off the opening video, remove the information from the Value Data field
	for the IntroFile string in the \KEY_CURRENT_USER\Software\Microsoft\Microsoft
	Reference\World Atlas\2.0 key in the Windows registry.
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95/98. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk. The registry is a system-wide database used for storing
	Windows 95/98 software and hardware configuration settings.
	
	To change the value of the IntroFile entry, do the following:
	
	1. Click the Start button, and then click Run.
	
	2. Type the following and click OK:
	
	  "regedit" (without the quotation marks)
	
	3. When the Registry Editor appears, double-click the HKEY_CURRENT_USER folder.
	
	4. Double-click the Software folder, and then the Microsoft folder.
	
	5. Double-click the Microsoft Reference folder, and then the World Atlas folder.
	
	6. Double Click the 2.0 folder.
	
	7. Double-click the IntroFile entry.
	
	8. Delete the information in the Value Data field so that it is blank, and click
	  OK.
	
	9. Click Registry, and then click Exit.
	
	10. Restart Encarta World Atlas. The opening video will now be disabled.
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          : kbhowto 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
