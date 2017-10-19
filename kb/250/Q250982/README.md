---
layout: page
title: "Q250982: User Cannot Be Given the Right to Load or Unload Device Drivers"
permalink: /kb/250/Q250982/
---

## Q250982: User Cannot Be Given the Right to Load or Unload Device Drivers

	Article: Q250982
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add a user who does not have administrator privileges to the Advanced
	User Rights policy in User Manager so that the user can load and unload device
	drivers, the privilege does not work as expected. The user receives an "access
	denied" error message when trying to use this privilege.
	
	WORKAROUND
	==========
	
	The only way to get this advanced user right to work is to add the user to the
	Administrators group. Loading and unloading device drivers requires
	administrator rights.
	
	MORE INFORMATION
	================
	
	This issue has been resolved in Microsoft Windows 2000. You can give a user who
	does not have administrator privileges the right to load and unload device
	drivers in Windows 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
