---
layout: page
title: "Q178007: Encarta 98: Clicking Home Screen Title Does Not Open Feature"
permalink: /kb/178/Q178007/
---

## Q178007: Encarta 98: Clicking Home Screen Title Does Not Open Feature

	Article: Q178007
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbui kburl kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 98 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a title on the Encarta 98 Encyclopedia for Windows Home screen,
	the linked feature may not open. In addition, you may be unable to start
	InterActivities from the InterActivities Home screen.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- The Mfc42.dll file installed on your computer is missing, damaged, or the
	  incorrect version.
	
	- Macromedia ShockWave Flash, version 2.1.12 is installed on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line, and then click OK
	
	  "<cd-rom>:\aamsstp " (without the quotation marks)
	
	  where <cd-rom> is the letter of the CD-ROM drive.
	
	3. Click to highlight the Axdist.exe file, press and hold down the CTRL key, and
	  then click to highlight the Flash2in.exe and Swie6.exe files.
	
	4. On the Edit menu, click Copy.
	
	5. Close the Aamsstp window.
	
	6. Right-click an empty area of the desktop, and then click Paste.
	
	7. Click Start, and then click Shut Down.
	
	8. Click Restart The Computer, and then click OK.
	
	9. If you are using a Microsoft Windows 95-based computer, press the F5 key when
	  you see the "Starting Windows 95" message. If you are using a Windows
	  98-based computer, when your computer restarts, press down and hold the SHIFT
	  key until Windows 98 starts in Safe Mode.
	
	10. When Windows starts in Safe Mode, click OK.
	
	11. On the desktop, double-click the Axdist.exe file, and then follow the
	  instructions on the screen to install the ActiveX software.
	
	12. On the desktop, double-click the Flash2in.exe file, and then follow the
	  instructions on the screen to install the Macromedia ShockWave Flash
	  software.
	
	13. On the desktop, double-click the Swiex6.exe file, and then follow the
	  instructions on the screen to install the Macromedia Director 6.0 software.
	
	14. Restart the computer.
	
	If the issue continues to occur, download and install the Windows Libraries
	Update. To do this:
	
	1. Visit the following Microsoft Web site:
	
	  http://www.microsoft.com/downloads/search.asp?
	
	2. In the Search By area, click Keywords.
	
	3. In the Keywords box, type "libraries update" (without the quotation marks).
	
	4. In the Operating System box, click the appropriate operating system, and then
	  click Find It.
	
	5. Click the link that is returned, and then follow the instructions on the
	  screen to install the Microsoft Libraries Update.
	
	The Microsoft Libraries Update resolves an issue that can cause some third-party
	software to behave unexpectedly after the installation of Microsoft Works Suite
	99, Microsoft Encarta Encyclopedia 99 (US only), Microsoft Encarta Virtual Globe
	99, Microsoft Graphics Studio Greetings 99, or other third-party software.
	Impacted programs include America Online (AOL) version 4.0 and HyperTerminal.
	
	For additional information about the Microsoft Libraries Update, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q197298 INFO: Microsoft Libraries Update: What, Where, Why
	
	
	MORE INFORMATION
	================
	
	The versions of Macromedia Shockwave Flash (version 2.0.11) and the Mfc42.dll
	file installed by Encarta Encyclopedia 97 are fully compatible.
	
	
	Additional query words: 98 multi media multimedia multi-media mmtitles mm
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbui kburl kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1998
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
