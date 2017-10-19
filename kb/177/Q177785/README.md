---
layout: page
title: "Q177785: Err Msg: Event ID 7000: Spooler Service Failed to Start..."
permalink: /kb/177/Q177785/
---

## Q177785: Err Msg: Event ID 7000: Spooler Service Failed to Start...

	Article: Q177785
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows NT, you may receive the following error message:
	
	  At least one service or driver failed during system startup.
	  Use Event Viewer to examine the event log for details.
	
	When this occurs, you may see the following error message in the system log in
	Event Viewer:
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Description: Spooler service failed to start due to the following
	  error: The system cannot find the file specified.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following files is missing or damaged:
	
	- Spoolss.dll
	
	- Spoolss.exe
	
	RESOLUTION
	==========
	
	To resolve this issue, expand a new copy of the Spoolss.dll and Spoolss.exe
	files from your Windows NT CD-ROM to your %SystemRoot%\System32 folder. To do
	so, follow these steps:
	
	1. If a Spoolss.dll file or a Spoolss.exe file already exists in the
	  %SystemRoot%\System32 folder, rename the file.
	
	2. At a command prompt, change to the <cd-rom>:\<platform> folder,
	  where <cd-rom> is your CD-ROM drive and <platform> is the
	  computer platform you are using. Use the I386 folder for Intel-based
	  computers.
	
	3. To expand the Spoolss.dll file, type the following command:
	
	  "expand spoolss.dl_ %SystemRoot%\system32\spoolss.dll" (without the quotation
	  marks)
	
	4. To expand the Spoolss.exe file, type the following command:
	
	  "expand spoolss.ex_ %SystemRoot%\system32\spoolss.exe" (without the quotation
	  marks)
	
	5. Type "exit" (without the quotation marks), and then press ENTER.
	
	6. Restart your computer.
	
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	
	=============================================================================
	
