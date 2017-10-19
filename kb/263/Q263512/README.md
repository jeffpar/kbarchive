---
layout: page
title: "Q263512: Pressing CTRL+ALT+DELETE During Shutdown Can Halt Shutdown"
permalink: /kb/263/Q263512/
---

## Q263512: Pressing CTRL+ALT+DELETE During Shutdown Can Halt Shutdown

	Article: Q263512
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you press CTRL+ALT+DELETE immediately after you initiate a shutdown from the
	console on a Windows NT-based computer, the shutdown may be halted, leaving a
	blank desktop on the screen. Pressing CTRL+ALT+DELETE again opens the Windows NT
	Security dialog box.
	
	CAUSE
	=====
	
	There is a small time window during the shutdown process during which you can
	halt shutdown by pressing CTRL+ALT+DELETE. However, this occurs only after all
	of the currently logged-on user's processes have been stopped, but before the
	user is logged out. This is why a blank desktop is displayed. You can reinstate
	the user environment by starting Explorer.exe from Task Manager.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Size     File name     Platform
	  -------------------------------------------------
	  24/05/00  11:22a  192,272  Winlogon.exe  Intel
	  24/05/00  11:21a  275,216  Winlogon.exe  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
