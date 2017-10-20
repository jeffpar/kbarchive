---
layout: page
title: "Q188681: How to Manually Uninstall Microsoft Personal Web Server 1.0"
permalink: /kb/188/Q188681/
---

## Q188681: How to Manually Uninstall Microsoft Personal Web Server 1.0

{% raw %}

	Article: Q188681
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsetup mspwsw95
	Last Modified: 26-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server version 1.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to manually uninstall Personal Web Server version 1.0
	if it does not appear on the list of installed programs in the Add/Remove
	Programs tool in Control Panel. To uninstall it if it does appear on the list of
	installed programs, click Personal Web Server on the list of installed programs,
	and then click Add/Remove.
	
	MORE INFORMATION
	================
	
	To manually uninstall Personal Web Server version 1.0, use the following steps:
	
	1. If the Personal Web Server service has already been uninstalled, skip to step
	  2. If the Personal Web Server service has not yet been uninstalled, use the
	  following steps to uninstall it:
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     Network.
	
	  b. In the list of installed network components, click Personal Web Server,
	     and then click Remove.
	
	  c. Click OK, and then restart your computer.
	
	2. Restart your computer. When you see the "Starting Windows 95" message, press
	  F8, and then choose Command Prompt Only. Type the following commands,
	  pressing ENTER after each command:
	
	  cd windows\system
	  ren ftpsapi2.dll ftpsapi2.old
	  ren infoadmn.dll infoadmn.old
	  ren mswebab.dll mswebab.old
	  ren mswebapi.dll mswebapi.old
	  ren mswebcpl.cpl mswebcpl.old
	  ren mswebcpl.hlp mswebcpl.ol2
	  ren mswebsp.vxd mswebsp.old
	  ren w3svapi.dll w3svapi.old
	
	  NOTE: This procedure assumes you do not have files with these names with the
	  .old extension. If you do have files with these names with the .old
	  extension, use a file name extension that is not currently in use.
	
	3. Restart your computer.
	
	Additional query words: 1.00 mspws
	
	======================================================================
	Keywords          : kbsetup mspwsw95 
	Technology        : kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95
	Version           : WINDOWS:1.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
