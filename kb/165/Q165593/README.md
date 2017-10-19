---
layout: page
title: "Q165593: Unable to Set Mouse Hot Corners Using Resource Kit Screen Savers"
permalink: /kb/165/Q165593/
---

## Q165593: Unable to Set Mouse Hot Corners Using Resource Kit Screen Savers

	Article: Q165593
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT 4.0 Server and Workstation Resource Kits include desktop themes
	similar to the themes shipped in Microsoft Plus! for Windows 95, including
	various screen savers. Certain screen savers allow the configuration of "hot
	corners." If you try to set a "hot corner" you will get the following error:
	
	  You must have the System Agent loaded in order for the mouse hot corners to
	  be active.
	
	CAUSE
	=====
	
	The System Agent is included with the Windows 95 Plus! Pack. Windows NT does not
	have a System Agent so the screen saver "hot corners" option is not available.
	
	MORE INFORMATION
	================
	
	Screen Saver "hot corners" allows the screen saver to be automatically activated
	when the mouse cursor is positioned within a certain corner of the desktop.
	Within the Settings properties sheet for the selected screen saver, the General
	description states, "The system agent must be active in order for you to display
	the screen saver immediately by moving the mouse pointer to a corner on the
	screen." If you proceed by clicking one of the four corners to enable this
	option, the following error message is displayed:
	
	  You must have the System Agent loaded in order for the mouse hot corners to
	  be active.
	
	If you attempt to bring up the online help by pressing the F1 key or selecting
	the "What's This" button (the button in the upper right of dialog box with a
	"?") and clicking on the specific region for help, the following Windows Help
	error message appears:
	
	  Cannot find the Plus!.HLP file. Do you want to try to find this file
	  yourself?
	
	If you click No, an additional error message appears stating:
	
	  Cannot find the Plus!.HLP Help file. Check to see that the file exists on
	  your disk. If it doesn't, you need to reinstall it.
	
	If you click Yes, you can search for this help file on the system. However, this
	file is only included in Microsoft Plus! for Windows 95. If the file is located
	(Windows 95 is also installed on the computer), you are able to view the online
	help information for items within the Screen Saver Properties tab. The reference
	to this associated help file will then be added to the
	HKLM\Software\Microsoft\Windows\Help key for future reference in case you select
	help on one of these same items in the future.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Resource Kit version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	
