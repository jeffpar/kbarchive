---
layout: page
title: "Q141247: PPT7: PowerPoint Encountered an Error That It Could Not Correct"
permalink: kb/141/Q141247/
---

## Q141247: PPT7: PowerPoint Encountered an Error That It Could Not Correct

	Article: Q141247
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbfile kbdta kbGraphxLink
	Last Modified: 10-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive one of the following error messages in Microsoft PowerPoint:
	
	  PowerPoint encountered an error that it could not correct.
	
	  -or-
	
	  PowerPoint caused an invalid page fault in module Kernel32.dll.
	
	In most cases, you receive either of these errors when you click the Tools menu,
	or when you attempt to use any of the following features in PowerPoint:
	
	- AutoClipart
	
	- AutoContent Wizard
	
	- Genigraphics Wizard
	
	- Interactive Settings
	
	- Internet Assistant (Add-In)
	
	- Meeting Minder
	
	- Pack and Go
	
	- Presentation Conferencing
	
	- Rehearsal
	
	- Slide Meter
	
	- Slide Navigator
	
	- Style Checker
	
	- Write-Up
	
	CAUSE
	=====
	
	There are several possible causes. The following is a list of each known cause:
	
	- This problem may occur because Visual Basic for Applications files on your
	  system are missing or corrupted, or you have invalid registry settings.
	
	  -or-
	
	- This problem may occur if you are using an incompatible Winsock.dll file,
	  Wsock32.dll file, or a third-party TCP/IP protocol instead of the
	  Windows-95-supplied TCP/IP protocol. If you suspect that you have a
	  third-party TCP/IP protocol installed, see the "More Information" section
	  later in this article for a possible fix.
	
	  -or-
	
	- This problem may occur if you click on the File menu while you have one or
	  more presentations minimized. This occurs mostly with notebook computers, and
	  some desktop computers with local installations of PowerPoint, version 7.0,
	  running on Windows 95. This problem does not occur on Windows 98, or "Run
	  from Server" installations of PowerPoint. There is no resolution for this
	  problem.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, try the following steps:
	
	1. Rename the Ppttools.ppa, Ppttools.dll and Ppttoolr.dll files. These files are
	  located in the PowerPoint folder.
	
	2. Start PowerPoint Setup and click Reinstall Current Installation.
	
	
	If this does not resolve the problem, rename the following files and perform a
	complete reinstall of Microsoft Office or PowerPoint:
	
	- Vba32.dll
	- Vbaen32.dll
	- Vbaen32.olb
	- Ppttools.ppa
	- Pptools1.ppa
	
	
	MORE INFORMATION
	================
	
	If none of the other methods in the "Resolution" section of this article resolve
	the problem, Microsoft also offers an Application Note titled "DLL to Fix
	PowerPoint Tools Menu" (WT1274). This Application Note contains a file that
	prevents PowerPoint from not responding if you click the Tools menu when
	third-party TCP/IP protocol stacks are installed.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Wt1274.exe now
	  (http://download.microsoft.com/download/powerpoint95/fix1/1/WIN98/EN-US/wt1274.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: PowerPt office95 Auto content wizard VBA addins ppttools ppa w_powerpt crash crashes crashing crashed quit quitting quits fail fails failing failed break hang hangs hanging hung lock up locks locking locked lockup freeze freezes freezing froze frozen stop stopping stopped won't respond waiting wt1274 exe kernel32 dll
	
	======================================================================
	Keywords          : kbenv kberrmsg kbfile kbdta kbGraphxLink 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
