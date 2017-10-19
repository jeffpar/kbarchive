---
layout: page
title: "Q150377: After You Run Arcade, Quitting Norton Desktop Hangs Computer"
permalink: /kb/150/Q150377/
---

## Q150377: After You Run Arcade, Quitting Norton Desktop Hangs Computer

	Article: Q150377
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kbimu msgamekbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Arcade for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run and then quit Arcade, and then quit Norton Desktop version 2.2, the
	computer may stop responding (hang).
	
	RESOLUTION
	==========
	
	To resolve this issue, disable Norton Desktop. To do this, follow these steps:
	
	1. Quit Windows, and then press CTRL+ALT+DELETE to restart the computer. If you
	  cannot quit Windows, press CTRL+ALT+DELETE twice to restart the computer.
	
	2. On the File menu, click Run.
	
	3. In the Command Line box, type "sysedit" (without the quotation marks), and
	  then click OK.
	
	4. On the Window menu, click C:\WINDOWS\SYSTEM.INI.
	
	5. In the [boot] section of the System.ini file, change the "shell=" line to
	  match the following line:
	
	  shell=progman.exe
	
	6. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	7. Quit Windows, and then press CTRL+ALT+DELETE to restart the computer.
	
	STATUS
	======
	
	This problem occurs when you use Microsoft Arcade for Windows version 1.0 and
	Norton Desktop version 2.2.
	
	MORE INFORMATION
	================
	
	For additional information about Norton Desktop, contact Symantec Corporation.
	For additional information about how to do this, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.0 w_arcade lock freeze msgame kbfaq
	
	======================================================================
	Keywords          : kbenv kbimu msgame kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbZNotKeyword kbArcadeSearch kbArcade
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
