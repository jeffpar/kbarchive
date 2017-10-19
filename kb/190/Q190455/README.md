---
layout: page
title: "Q190455: Zone Err Msg: Invalid Page Fault in Module Kernel32.dll"
permalink: /kb/190/Q190455/
---

## Q190455: Zone Err Msg: Invalid Page Fault in Module Kernel32.dll

	Article: Q190455
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu msgamekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to the Zone, you may receive the following error
	message:
	
	  <Program> caused an invalid page fault in module Kernel32.dll.
	
	where <Program> is an Zone program file, such as Lobby.exe, Zclient.exe,
	Zone.exe, or Zsetup.exe.
	
	  -or-
	
	When navigating in to any of the Zone rooms, you may receive the following error
	message:
	
	  zclient caused an invalid page fault in module zclient.dll
	
	CAUSE
	=====
	
	This behavior can occur because of one of the following reasons:
	
	- A conflicting program or task is running on your computer.
	- Your computer is infected with the NIMDA virus.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	NOTE: Before connecting to the Zone close other programs or tasks that may be
	running.
	
	Clean-Boot the Computer Before You Attempt to Connect to the Zone
	-----------------------------------------------------------------
	
	To clean boot the computer, use the appropriate method for your version of
	Microsoft Windows.
	
	Microsoft Windows 98 or Microsoft Windows Millennium Edition (Me):
	
	To clean boot a Windows 98-based or Windows Me-based computer:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. Click Selective Startup, and then click to clear the following check boxes:
	
	   - Process Autoexec.bat file
	   - Process Config.sys file
	   - Process Winstart.bat file
	   - Load startup group items
	
	  NOTE: If any of these check boxes are unavailable, the related file does not
	  exist, and it can be ignored.
	
	4. Click the Win.ini tab.
	
	5. Double-click the Windows folder.
	
	6. Click to clear the "load=" and the "run=" check boxes.
	
	7. Click OK.
	
	8. When you are prompted to restart the computer, click Yes.
	
	For more information about how to clean boot a Windows 98-based computer, click
	the article number below to view the article in the Microsoft Knowledge Base,
	and then refer to the "Narrowing the Focus" section of the article:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	After the computer restarts, press CTRL+ALT+DEL, and then verify that only
	Explorer and Systray are listed in the list of running programs.
	
	Microsoft Windows 95:
	
	For information about how to clean boot a Windows 95-based computer, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q243039 How to Perform a Clean Boot in Windows 95
	
	If the issue continues to occur, proceed to the next method.
	
	Uninstall and Reinstall the Zone Software
	-----------------------------------------
	
	To uninstall and then reinstall the Zone software:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Zone.com, and then click Add/Remove.
	
	4. Click Yes, and then click OK.
	
	5. Visit the following Zone.com Web site:
	
	  http://zone.msn.com
	
	  The Zone.com files will be installed automatically when you connect to game
	  rooms.
	
	Reinstall Your Web Browser Software or Install Latest Version
	-------------------------------------------------------------
	
	To obtain and install the latest version of Microsoft Internet Explorer, visit
	the following Microsoft Web site:
	
	  http://www.microsoft.com/windows/ie/
	
	Remove Viruses
	--------------
	
	To resolve this issue, run anti-virus software that contains the latest virus
	signature file, and perform a thorough scan of your computer. For more
	information on the NIMDA computer virus please see visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/technet/treeview/default.asp?url=/technet/security/topics/nimda.asp
	
	MORE INFORMATION
	================
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	Additional query words: msgame igz msngz gpf ipf connecting connection
	
	======================================================================
	Keywords          : kberrmsg kbimu msgame kbfaq
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
