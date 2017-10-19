---
layout: page
title: "Q160328: Internet Explorer 3.0 Causes Windows NT 4.0 to Blue Screen"
permalink: /kb/160/Q160328/
---

## Q160328: Internet Explorer 3.0 Causes Windows NT 4.0 to Blue Screen

	Article: Q160328
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Explorer version 3.0 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Internet Explorer 3.0 causes Windows NT 4.0 to BLUE screen when you
	quit Internet Explorer 3.0 while the Word 95 drawing toolbar is open.
	
	
	At the time of this article blue screen information was not yet available.
	
	CAUSE
	=====
	
	Process objects were being destroyed on the destruction of the IE 3.0 process.
	IE 3.0 managed to have the last thread alive on the process which was being used
	for process object cleanup (which was a non-GUI thread). This thread handled
	menu cleanup but did not clean up GUI objects such as windows properly.
	
	The code has been changed to clean up process objects on Thread cleanup for the
	last GUI thread in a process. This ensures that a GUI thread exists for window
	cleanup for the menu notification window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. service pack for Windows NT
	version 4.0. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: stop
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbIEsearch kbZNotKeyword2 kbIENT400Search kbZNotKeyword3 kbIE300WinNT400
	Version           : :3.0,4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
