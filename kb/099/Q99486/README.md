---
layout: page
title: "Q99486: SYSTEM.INI Setting Needed for MS-DOS Box in Windows"
permalink: kb/099/Q99486/
---

## Q99486: SYSTEM.INI Setting Needed for MS-DOS Box in Windows

	Article: Q99486
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Sometimes when you are running Windows 3.1 in standard mode on top of LAN
	Manager and you try to start an MS-DOS box, the screen switches to black, then
	back to Windows, then displays this dialog box:
	
	  The Switch has been Prevented
	  Cannot Start Application
	
	Exiting Windows and restarting can clear this problem, or you can fix it by
	finding the NonWindowsApp header of your SYSTEM.INI and inserting the following
	line:
	
	     TaskSwitchInt6f=OFF
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
