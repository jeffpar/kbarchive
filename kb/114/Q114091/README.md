---
layout: page
title: "Q114091: Telnet Using UNIX Vi Editor May Scroll Improperly"
permalink: /kb/114/Q114091/
---

## Q114091: Telnet Using UNIX Vi Editor May Scroll Improperly

	Article: Q114091
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.11 3.5
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you open a Telnet session to a UNIX system, set the Terminal type to a
	Windows NT type such as VT-100, and use the UNIX Vi editor to open a file such
	as /ETC/TERMCAP, moving the cursor from the bottom of the file with the Vi ^U
	character (scrolling the file back in half pages) fails after a few times and
	displays only a part of the file.
	
	Other Vi cursor movement commands may also cause this behavior.
	
	This problem occurs when you are using the Telnet application in in the
	Accessories group of Windows NT version 3.5 or the Telnet application included
	in Microsoft TCP/IP-32.
	
	This problem does not occur when you use Windows NT version 3.1 Terminal.
	
	CAUSE
	=====
	
	The correct screen scroll data is passed to the Windows NT Telnet session, but
	it is not refreshed on the screen properly.
	
	
	WORKAROUND
	==========
	
	Scrolling the screen back and forth sometimes presents the section you want to
	view correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1 and Windows NT Workstation and Windows NT Server
	version 3.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodtcp32 wfw wfwg prodnt fragment
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : 3.1 3.11 3.5
	
	=============================================================================
	
