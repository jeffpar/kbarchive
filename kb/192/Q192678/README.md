---
layout: page
title: "Q192678: Add/Remove TS Client Requires Original Installation Point"
permalink: /kb/192/Q192678/
---

## Q192678: Add/Remove TS Client Requires Original Installation Point

	Article: Q192678
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you go to Add/Remove Programs and try the Reinstall or Remove All options,
	Terminal Server Client Setup requires the original installation point. It will
	not let you choose an alternative installation point. If the server where the
	client was originally installed is not available, Setup will fail.
	
	RESOLUTION
	==========
	
	To work around this problem, click the INSTALL button in Add/Remove Programs.
	This allows you to choose the place from where to install the client. If you
	want to remove the client, go to the original location and Remove All, or
	install from a different location. Then you will be able to remove all from the
	new installation point.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Install a client from a share point on a Terminal Server.
	
	2. After the terminal client is installed, shut off the Terminal Server where
	  the client was installed.
	
	3. On the workstation where the Terminal Server client is installed, click
	  Start, Setting, Control Panel.
	
	4. Double-click Add/Remove Programs.
	
	5. Select Terminal Server Client.
	
	6. Click Add/Remove Programs.
	
	7. Select Reinstall or Remove All.
	
	8. The MSTSC Setup Disk Box will appear.
	
	9. A Setup message will appear:
	
	  Setup could not open the file:
	
	  \\TerminalServer\TSclients\win32\Disks\Disk1\MSTSC1.id
	
	10. You will have the choice to Abort, Retry, or Ignore.
	
	Additional query words: terminalsrv
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
