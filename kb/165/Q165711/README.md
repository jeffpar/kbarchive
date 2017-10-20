---
layout: page
title: "Q165711: Repair Disk Utility Cannot Save All Configuration Files"
permalink: /kb/165/Q165711/
---

## Q165711: Repair Disk Utility Cannot Save All Configuration Files

{% raw %}

	Article: Q165711
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Repair Disk Utility may return the following errors:
	
	  Repair Disk Utility could not save all configuration files when using the
	  Update Repair Info option.
	
	-or-
	
	When you run RDISK with the -s parameter, no errors are displayed on the computer
	screen or entered into the event log. The Create Emergency Repair Disk option is
	not displayed, and the progress bar may be updated much faster than normal, (For
	example, in two seconds instead of one minute).
	
	CAUSE
	=====
	
	Possible causes of these errors include:
	
	- Insufficient access permissions to the %SystemRoot%\repair directory (you
	  should have at least change permission: read, write, change, delete).
	
	- The file %SystemRoot%\Profiles\Default User\Ntuser.dat is inaccessible.
	
	- The drive containing the directory %SystemRoot%\repair lacks free space to
	  hold the configuration files.
	
	Additional query words: diskette fail nothing doesn't work disappear unexpected inconsistent unusual stop
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
