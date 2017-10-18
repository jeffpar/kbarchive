---
layout: page
title: "Q176083: System Is Running Low on Registry Quota"
permalink: kb/176/Q176083/
---

## Q176083: System Is Running Low on Registry Quota

	Article: Q176083
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Registry Size Limit is set too low, the following popup error message
	will be displayed on the screen:
	
	  {Low on Registry Quota}
	  Your system is running low on registry quota.
	  Start the System option in the Control Panel and choose
	  the Virtual Memory button to increase the registry quota.
	
	
	CAUSE
	=====
	
	When applications such as Rdisk.exe and other Backup software are used to backup
	the registry, the amount of paged pool memory used by these applications are
	charged towards the registry's quota. If the amount consumed reaches 95 percent
	of the Registry Size Limit then the warning popup mentioned above will be
	displayed. The warning is displayed only once for each boot cycle; which means
	that the popup will not be displayed until the system is rebooted, and the
	threshold reached again.
	
	WORKAROUND
	==========
	
	On Windows NT 4.0 systems, in Performance Monitor, "Percent Registry size used
	counter" under the System object can be used to monitor this setting. The rule
	of thumb to follow is to double the current registry size, and add 20 percent to
	that value.
	
	MORE INFORMATION
	================
	
	"Maximum Registry Size" also known as "Registry Size Limit" can be specified in
	the Virtual Memory dialog box in the System/performance section of Control
	Panel.
	
	This value enables one to specify the maximum size of the registry, and also
	limit the use of paged pool memory used by applications calling registry APIs.
	
	
	
	Additional query words: RSL
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
