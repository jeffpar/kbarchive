---
layout: page
title: "Q271753: Err Msg: Game Caused an Invalid Page Fault In Module Winmm.dll"
permalink: /kb/271/Q271753/
---

## Q271753: Err Msg: Game Caused an Invalid Page Fault In Module Winmm.dll

{% raw %}

	Article: Q271753
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires II: The Age of Kings, version 2.0 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the Microsoft games listed at the beginning of
	this article, you may receive one of the following error messages:
	
	   - Combatfs caused an invalid page fault in module Winmm.dll.
	
	   - Fltsim98 caused an invalid page fault in module Winmm.dll.
	
	   - Fs2000 caused an invalid page fault in module Winmm.dll.
	
	   - Empires2 caused an invalid page fault in module Winmm.dll.
	
	   - Game caused an invalid page fault in module Winmm.dll.
	
	where game is the program file of the game that you are attempting to start.
	
	In addition, when you play Age of Empires II, one of the following may occur.
	
	When you launch the game you may get a brief black screen and then the game will
	close and drop to the desktop,
	
	  -or-
	
	When you try to view the properties of an .avi file by right-clicking the file
	and then clicking Properties, you may receive the following error message:
	
	  EXPLORER caused an Invalid Page Fault in module Winmm.dll.
	
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions are true:
	
	- The Winmm.dll file is missing or damaged.
	
	- You have a tsr installed on your computer that is conflicting with the
	  Microsoft program listed at the beginning of this article that you are trying
	  to run.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the methods listed below in the order presented.
	After each method test the game before proceeding to the next method.
	
	Method 1: Extract a New Winmm.dll File
	--------------------------------------
	
	Extract a new copy of the Winmm.dll file from the original Microsoft Windows
	installation CD-ROM or floppy disk to the following location:
	
	  <drive>:\Windows\System
	
	where <drive> is the drive letter of the hard disk on which Microsoft
	Windows is installed.
	
	For additional information about how to extract files from the Windows CD-ROM or
	Windows floppy disk, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Restart Your Computer by Performing a Clean Boot
	------------------------------------------------
	
	To perform a clean boot, follow the steps appropriate to your version of
	Microsoft Windows.
	
	Microsoft Windows XP
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	Microsoft Windows Millennium Edition (Me)
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click "Selective startup".
	
	3. Clear all of the check boxes under "Selective startup".
	
	4. On the Startup tab, select the "*StateMgr" check box.
	
	
	5. Click OK.
	
	6. When you receive the message to restart your computer, click Yes.
	
	7. After the computer restarts, click Start, click Run, type "msconfig" (without
	  the quotation marks) in the Open box, and then click OK.
	
	  IMPORTANT: Look closely at the General tab to ensure that the check boxes that
	  you cleared are still cleared. If none of the check boxes are selected,
	  proceed to the following method. If you see a selected, unavailable check box
	  (it appears dimmed and has a check mark in it), your computer is not truly
	  "clean-booted," and you may need to contact the manufacturer of the program
	  that is listed next to the selected, unavailable check box for assistance.
	
	Microsoft Windows 98
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click System Information.
	
	2. On the Tools menu, click System Configuration Utility.
	
	3. On the General tab, click Selective Startup, and then clear the following
	  check boxes:
	
	   - Process Config.sys file
	   - Process Autoexec.bat file
	   - Process Winstart.bat file (if available)
	   - Process Win.ini file
	   - Load Startup group items
	
	4. Click OK, and then restart the computer when prompted.
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in the System Configuration Utility tool.
	
	For additional information about how to perform a clean boot, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	REFERENCES
	==========
	
	
	If the above does not resolve this issue, then please see the following Knowledge
	Base article:
	
	  Q141801 Troubleshooting Audio and Video Codecs in Windows 95/98
	
	Additional query words: msgame flightsim fs2k fltsim gpf ipf aoeii aoe2 aok xxxx:bfe16633
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbFlightSimSearch kbAOESearch kbAOE2Kings kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
