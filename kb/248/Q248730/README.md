---
layout: page
title: "Q248730: Terminal Server Reboots 15 Minutes After Being Shut Down"
permalink: /kb/248/Q248730/
---

## Q248730: Terminal Server Reboots 15 Minutes After Being Shut Down

{% raw %}

	Article: Q248730
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you shut down a Terminal Server from the console session without choosing
	to restart the computer, the Terminal Server may restart after 15 minutes. This
	behavior can occur with Windows NT 4.0 Server, Terminal Server Edition, Service
	Pack 4 or later.
	
	CAUSE
	=====
	
	In Service Pack 4 and later, the message to indicate the screen saver time-out
	is forwarded to the Shutdown dialog box and is handled as if you chose a
	restart.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this behavior, use either of the following methods:
	
	Disable the Screen Saver for the Logon Desktop
	----------------------------------------------
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the ScreenSaveActive value under the following key:
	
	  HKEY_USERS\.DEFAULT\Control Panel\Desktop
	
	3. Double-click ScreenSaveActive, and then set its value to 0.
	
	4. Quit Registry Editor.
	
	Set the Screen Saver Time-Out to a Longer Value
	-----------------------------------------------
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the ScreenSaveTimeOut value under the following key:
	
	  HKEY_USERS\.DEFAULT\Control Panel\Desktop
	
	3. Double-click ScreenSaveTimeOut, and then set it to the appropriate value in
	  seconds.
	
	4. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0 SP4,4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
