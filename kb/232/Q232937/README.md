---
layout: page
title: "Q232937: UNC Shortcut Do Not Work with RAS to Server with Over 700 Shares"
permalink: /kb/232/Q232937/
---

## Q232937: UNC Shortcut Do Not Work with RAS to Server with Over 700 Shares

{% raw %}

	Article: Q232937
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): SBS45
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When a user attempts to connect to a share that is located on another computer
	by double-clicking an icon that points to that share (a shortcut), if that icon
	contains a universal naming convention (UNC) path to a share on a remote
	computer, and your computer gains access to that computer by using a Remote
	Access Service (RAS) connection, the connection may be unsuccessful and the icon
	may change to a Microsoft default icon.
	
	CAUSE
	=====
	
	This problem can occur because the WNetGetResourceInformation() function on the
	client retrieves all share names from the remote computer when the function
	accesses one of the remote shares by means of the shortcut on the client. The
	WNetGetResourceInformation() function has a built-in timer (NetLinkTimeout) with
	a default time-out value of 7.5 seconds. To retrieve a relatively large number
	of shares over a slow RAS link takes longer than 7.5 seconds, in most
	situations.
	
	A "relatively large number of shares" has been empirically determined to be about
	700 shares, but this number may be larger or smaller depending upon the data
	rate that is achieved over the RAS connection between the client and the server.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, add the following registry key:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value name: NetLinkTimeout
	  Data type: REG_DWORD
	  Unit: milliseconds
	  Default: N/A (hard coded to 7500)
	
	4. Quit Registry Editor.
	
	You need to create this value because it does not exist by default. Initially,
	set the value to 9000 (9 seconds). If time-out behaviors persist, increase this
	value in 500 millisecond increments until the time-out behavior stops.
	
	The time-out value in the preceding registry key must only be modified on the
	computer that connects to the shares.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q255772 Long Delay When Displaying Icons in Start Menu Subfolder
	
	Additional query words:
	
	======================================================================
	Keywords          : SBS45 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
