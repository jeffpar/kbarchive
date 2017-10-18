---
layout: page
title: "Q240322: Err Msg: Kallisti Caused an Invalid Page Fault in Kallisti.exe"
permalink: kb/240/Q240322/
---

## Q240322: Err Msg: Kallisti Caused an Invalid Page Fault in Kallisti.exe

	Article: Q240322
	Product(s): Microsoft Home Multimedia Titles
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Reference Suite 2000 
	- Microsoft Encarta Interactive World Atlas 2000 
	- Microsoft Encarta World English Dictionary 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install one of the programs listed at the beginning of this
	article, you may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you receive one of the following error messages:
	
	  Kallisti caused an invalid page fault in module Kallisti.exe.
	
	  Kallisti caused an invalid page fault in module <Unknown>.
	
	CAUSE
	=====
	
	This behavior can occur if you are running one or more memory-resident programs
	that interfere with the installation.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Clean boot your computer. To clean boot your computer, use the appropriate
	  steps for your version of Microsoft Windows.
	
	  Microsoft Windows 98:
	
	  a. Click Start, point to Programs, point to Accessories, point to System
	     Tools, and then click System Information.
	
	  b. On the Tools menu, click System Configuration Utility.
	
	  c. On the General tab, click Selective Startup, and then click to clear the
	     following check boxes:
	
	      - Process Config.sys File
	      - Process Autoexec.bat File
	      - Process Winstart.bat File (if available)
	      - Process Win.ini File
	      - Load Startup Group Items
	
	  d. Click OK. When you are prompted to restart the computer, do so.
	
	  NOTE: To restore your original Startup options, click Normal Startup on the
	  General tab in the System Configuration Utility tool.
	
	  For additional information about how to clean boot Windows 98, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	
	  Microsoft Windows 95:
	
	  a. Restart the computer. When you see the "Starting Windows 95" message,
	     press the F8 key, and then select Command Prompt Only from the Startup
	     menu.
	
	  b. At the command prompt, type "win" (without the quotation marks), and then
	     press ENTER. Press and hold down the SHIFT key until the Windows startup
	     sequence is complete. This prevents any programs from being loaded
	     automatically when Windows starts.
	
	  c. Quit all running programs except Explorer and Systray. To do this, follow
	     these steps:
	
	     1. Press CTRL+ALT+DELETE.
	
	     2. Click the program you want to quit, and then click End Task.
	
	     3. If you receive a message that the program is busy or not responding,
	        click End Task again.
	
	     Repeat this step until you have quit all programs except Explorer and
	     Systray.
	
	  d. Disable any anti-virus or disk tool programs installed on the computer.
	     For information about how to disable these programs, see the printed or
	     online documentation for the program.
	
	  For additional information about how to clean boot Windows 95, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	2. Delete the files in the Temp folder on your computer. To do this:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type "temp" (without the quotation marks), and then click
	     OK.
	
	  c. On the Edit menu, click Select All.
	
	  d. Press the DELETE key.
	
	3. Reinstall the program.
	
	
	If the issue continues to occur, clean the compact disc to remove fingerprints,
	smudges, and dust, any of which can cause read problems on compact discs. Gently
	wipe the silver side of the disc with a soft, lint-free cotton cloth. Do not use
	paper cloth, which may scratch the plastic or leave streaks.
	
	NOTE: Wipe the compact disc using a linear motion from the center of the disc
	outward. Do not use a circular motion.
	
	MORE INFORMATION
	================
	
	If you are still unable to install the program, you may need to obtain an update
	file that corrects problems you may experience when you install the U.S. version
	of any of the programs that are listed at the beginning of this article.
	
	For additional information about how to obtain this update file, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q244726 Encarta 2000: Unable to Install Program
	
	Additional query words: multi multi-media media mm kalisti crow
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000 kbEncartaReference2000 kbEncartaWorldAtlas2000
	Version           : :; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
