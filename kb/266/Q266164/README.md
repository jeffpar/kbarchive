---
layout: page
title: "Q266164: MCM2: Game Quits Before the Startup Screen Is Displayed"
permalink: /kb/266/Q266164/
---

## Q266164: MCM2: Game Quits Before the Startup Screen Is Displayed

	Article: Q266164
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbfile kbimu msgame
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Motocross Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install and run Microsoft Motocross Madness 2 for the first time, the
	game may quit before the startup screen is displayed.
	
	CAUSE
	=====
	
	This behavior can occur if you play the introductory video clip and any of the
	following conditions is true:
	
	- The Microsoft DirectX Media files are not properly installed.
	
	- The Indeo codecs are not properly installed.
	
	- Some registry keys for Motocross Madness 2 are missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Install the Latest DirectX Media Runtime Files
	----------------------------------------------
	
	To install the latest DirectX Media Runtime files:
	
	1. Download the Enduser.exe file from the Microsoft Download Center.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Enduser.exe
	  (http://download.microsoft.com/download/win98/dxm/6.0/W9XNT4/EN-US/Enduser.exe)
	
	Release Date: Aug-30-1999
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	2. Quit all unnecessary programs that are running on your computer. To do this:
	
	  a. Press CTRL+ALT+DELETE.
	
	  b. In the Close Program dialog box, click any program except Explorer or
	     Systray (which are components of Microsoft Windows), and then click End
	     Task.
	
	     If you receive a message that the program is busy or not responding, click
	     End Task again.
	
	  c. Repeat steps A-B to quit all programs that are running on your computer
	     except Explorer and Systray.
	
	3. Double-click the Enduser.exe file.
	
	If the issue continues to occur, proceed to the next method.
	
	Associate AVI Files
	-------------------
	
	To associate audio-video interleave (.avi) files with the Microsoft AVI File
	support libraries, download and run the Mmsys296.exe file from the Microsoft
	Download Center.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Mmsys296.exe
	  (http://download.microsoft.com/download/golf10winmmedition/Update/1/WIN98/EN-US/Mmsys296.exe)
	
	Release Date: Feb-25-1999
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	If the issue continues to occur, proceed to the next method.
	
	Remove and Reinstall Audio and Video Compression Drivers
	--------------------------------------------------------
	
	For additional information about how to remove and reinstall codecs, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q133365 Windows 95/98: Troubleshooting Problems with Compressed Audio
	
	If the issue continues to occur, proceed to the next method.
	
	Install the Latest Version of Windows Media Player
	--------------------------------------------------
	
	To install the latest version of the Windows Media Player go to the following
	Microsoft Web site:
	
	  http://www.microsoft.com/windows/windowsmedia/en/download/default.asp?FinishURL=%2Fdownloads%2Frelease%2Easp%3FReleaseID%3D22384%26redirect%3Dno
	
	Download and install Indeo Codec
	--------------------------------
	
	  http://www2.us.ligos.com/ids/indeo/iv5setup.exe
	
	
	Additional query words: 2.00 msgame mcm2 motorcross crash stops fails movie avi
	
	======================================================================
	Keywords          : kbenv kbfile kbimu msgame 
	Technology        : kbGamesSearch kbMotocrossSearch kbMotocrossM2
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
