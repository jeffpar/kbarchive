---
layout: page
title: "Q186279: Tutor Error Message: Invalid Page Fault in Module Kernel32.dll"
permalink: /kb/186/Q186279/
---

## Q186279: Tutor Error Message: Invalid Page Fault in Module Kernel32.dll

	Article: Q186279
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg mskids kbimukbfaq
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft My Personal Tutor: Alphabet Playhouse, version 1.0 
	- Microsoft My Personal Tutor: Mathopolis, version 1.0 
	- Microsoft My Personal Tutor: Preschool Workshop, version 1.0 
	- Microsoft My Personal Tutor: Reader Railway, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a picture to start a play in one of the programs listed in the
	applies to section of this article, you may receive the following error
	message:
	
	  <Program> caused an invalid page fault in module Kernel32.dll.
	
	CAUSE
	=====
	
	This behavior can occur if terminate-and-stay-resident (TSR) programs are
	running in the background.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented. When you complete each method, test the My Personal Tutor software
	title to check if the issue is resolved. If the issue continues to occur,
	proceed to the next method.
	
	Disable the "Device=vwavsyn.386" Line in the System.ini File
	------------------------------------------------------------
	
	To disable the "device=vwavsyn.386" line, use the following steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "system.ini" (without the quotation marks), and then
	  click OK.
	
	3. On the Search menu, click Find.
	
	4. Type "[386enh]" (without the quotation marks), and then click Find Next.
	
	5. When you locate the [386enh] section, scroll down to view the contents of the
	  section and type a semicolon (;) at the beginning of the following line:
	
	  device=vwavsyn.386
	
	6. On the File menu, click Save.
	
	7. On the File menu, click Exit.
	
	8. Restart the computer.
	
	Disable the "Midi1=wavsynwg.drv" Line in the System.ini File
	------------------------------------------------------------
	
	To disable the "Midi1=wavsynwg.drv" line, use the following steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "system.ini" (without the quotation marks), and then
	  click OK.
	
	3. On the Search menu, click Find.
	
	4. Type "[drivers]" (without the quotation marks), and then click Find Next.
	
	5. When you locate the [drivers] section, scroll down to view the contents of
	  the section and type a semicolon (;) at the beginning of the following line:
	
	  Midi1=wavsynwg.drv
	
	6. On the File menu, click Save.
	
	7. On the File menu, click Exit.
	
	8. Restart the computer.
	
	Quit All Unnecessary Programs
	-----------------------------
	
	Quit all unnecessary programs that are running before you start any of the My
	Personal Tutor programs. To do so, use the following steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	2. Start Windows 95 by typing "win" (without the quotation marks) and holding
	  down the SHIFT key for the duration of Windows startup. This prevents any
	  programs from loading automatically at startup.
	
	3. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	4. Quit all programs except Explorer and Systray (which are parts of Windows).
	  To quit a program, click the program, and then click End Task.
	
	5. Repeat steps 3-4 until you have quit all programs except Explorer and
	  Systray.
	
	6. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	Clean Boot Windows 95
	---------------------
	
	If the issue continues to occur, start Windows 95 without loading any TSR
	programs or device drivers (this is called a clean boot).
	
	For detailed information about how perform a clean boot of Windows 95, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	MORE INFORMATION
	================
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 pt abchouse mathop wmnvram MPT kids mskids
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg mskids kbimu kbfaq
	Technology        : kbHomeProdSearch kbKidsSearch kbMPTAlphabet kbMPTMathopolis kbMPTPreschool kbMPTReader
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
