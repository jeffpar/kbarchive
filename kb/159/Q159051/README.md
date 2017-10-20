---
layout: page
title: "Q159051: AlphaServer Hangs on Installation of Windows NT 4.0"
permalink: /kb/159/Q159051/
---

## Q159051: AlphaServer Hangs on Installation of Windows NT 4.0

{% raw %}

	Article: Q159051
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the installation process of Windows NT Server or Windows NT Workstation
	version 4.0 on a DEC AlphaServer, the setup process may cause the computer to
	stop responding. The computer may stop responding to user input as well.
	
	CAUSE
	=====
	
	On an installation of Windows NT Server or Windows NT Workstation version 4.0,
	the installation stops responding when it attempts to update the NVRAM variables
	on computers that have 120 N/S EPROM parts. This problem affects Sable, Gamma,
	Lynx, and Rawhide.
	
	RESOLUTION
	==========
	
	Microsoft has included the fix for this problem in the release of Service Pack 2
	for Windows NT Server and Windows NT Workstation version 4.0.
	
	
	Additional query words: Setup Alpha DEC Crash Hang
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
