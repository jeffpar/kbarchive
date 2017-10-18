---
layout: page
title: "Q174180: Err Msg: The Wininet.dll File Is Linked to the Missing Export..."
permalink: kb/174/Q174180/
---

## Q174180: Err Msg: The Wininet.dll File Is Linked to the Missing Export...

	Article: Q174180
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbmsn
	Last Modified: 05-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	- Microsoft Internet Explorer version 4.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install MSN, The Microsoft Network, you may receive one of the
	following error messages:
	
	- The Wininet.dll file is linked to the missing export file shlwapi.dll.
	
	- The Urlmon.dll file is linked to the missing export file shlwapi.dll.
	
	CAUSE
	=====
	
	These error messages can occur if you uninstall Internet Explorer 4.0 before
	installing MSN, but Internet Explorer 4.0 is not uninstalled correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Uninstall Internet Explorer. For information about how to properly uninstall
	  Internet Explorer, see the following articles in the Microsoft Knowledge
	  Base:
	
	  Q170757 Uninstalling Internet Explorer 4.0 Platform Preview 2.0
	
	  Q166322 Uninstalling Internet Explorer 4.0 Platform Preview 1.0
	
	2. Click Start, point to Settings, click Control Panel, and then double- click
	  Add/Remove Programs.
	
	3. Uninstall the programs listed below one at a time and in the order listed. To
	  do this, click the program name on the Install/Uninstall tab, and then click
	  Add/Remove.
	   - Connection Manager
	
	   - Interactive Music
	
	   - VRML Add-In 3.0
	
	   - MSN Music &amp; Animation Components
	
	   - MSN Optional Controls
	
	   - MSN v2.5
	
	   - Voxware VoxPlay Audio Control
	
	4. Click OK, and then close Control Panel.
	
	5. Restart your computer to a command prompt. To do so, restart your computer,
	  press the F8 key when you see the "Starting Windows 95" message, and then
	  choose Command Prompt Only from the Startup menu.
	
	6. Type the following commands, pressing ENTER after each command.
	
	  NOTE: When you press ENTER after typing each of the following DELTREE
	  commands, you should be prompted to confirm that you want to delete the
	  folder. If this prompt is not displayed, the DELTREE command may have been
	  typed incorrectly.
	
	  cd\windows
	  smartdrv
	  deltree tempor~1
	  deltree history
	  cd system
	  ren mshtml.dll mshtml.old
	  ren shdocvw.dll shdocvw.old
	  ren inetcfg.dll inetcfg.old
	  ren actxprxy.dll actxprxy.old
	  ren wininet.dll wininet.old
	  ren cachevu.dll cachevu.old
	  ren inetcpl.cpl inetcpl.old
	  ren shlwapi.dll shlwapi.old
	  ren url.dll url.old
	  ren urlmon.dll urlmon.old
	  ren wsock32n.dll wsock32n.old
	
	7. Restart Windows 95 normally.
	
	8. Insert the MSN CD-ROM in the CD-ROM drive.
	
	9. If the Welcome To MSN Setup window appears, follow the prompts on the screen
	  to reinstall MSN, click No if any Version Conflict dialog boxes appear, and
	  then skip step 10. If the Welcome To MSN Setup window does not appear,
	  continue to the next step.
	
	10. Click Start, click Run, type the following text in the Open box, and then
	  click OK
	
	  "<drive>:\msnsetup\msnsetup.exe" (without the quotation marks)
	
	  where <drive> is the drive letter assigned to the CD-ROM drive.
	
	  NOTE: Click No if any Version Conflict dialog boxes appear.
	
	Additional query words: 4.0 msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbmsn 
	Technology        : kbIEsearch kbMSNSearch kbIE95Search kbZNotKeyword3 kbIE400Win95 kbMSN250
	Version           : WINDOWS:2.5,4.0
	Issue type        : kbprb
	
	=============================================================================
	
