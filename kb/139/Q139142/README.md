---
layout: page
title: "Q139142: Client Setup of Systems Management Server Alters AUTOEXEC.BAT"
permalink: kb/139/Q139142/
---

## Q139142: Client Setup of Systems Management Server Alters AUTOEXEC.BAT

	Article: Q139142
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	When you set up an MS-DOS or Windows client computer for Systems Management
	Server, a call to CLIENT.BAT is added to the client computer's AUTOEXEC.BAT
	file. This article explains how you can control where to place the call of
	CLIENT.BAT in your AUTOEXEC.BAT.
	
	MORE INFORMATION
	================
	
	Systems Management Server Client Setup reads AUTOEXEC.BAT and searches for the
	WIN (WIN.COM) statement. It does this so it can place a necessary call to
	CLIENT.BAT before Windows is started by the "WIN" command. Sometimes because of
	the need to load TSR's or other programs after CLIENT.BAT is called, but before
	Windows loads, CLIENT.BAT's call must be moved ahead in AUTOEXEC.BAT.
	
	At the point in AUTOEXEC.BAT, where you want to call CLIENT.BAT, place a call to
	an empty batch file named WIN.BAT. Create an empty batch file called WIN.BAT,
	and place it in a directory not included in the path (if the directory is in the
	path earlier than Windows, then Windows may never load). For example:
	
	1. Create the host directory:
	
	     md c:\foolit
	
	2. Create WIN.BAT:
	
	     echo exit >c:\foolit\win.bat
	
	3. Place the following in AUTOEXEC.BAT:
	
	     call c:\foolit\win
	
	Systems Management Server Client Setup detects "call c:\foolit\win" as the call
	to start Windows (using WIN.COM) and automatically places the call to CLIENT.BAT
	one line before it.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbhowto
	
	=============================================================================
	
