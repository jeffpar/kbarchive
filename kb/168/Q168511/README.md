---
layout: page
title: "Q168511: Have Disk Default Behavior Changed for Win95 Client Install"
permalink: kb/168/Q168511/
---

## Q168511: Have Disk Default Behavior Changed for Win95 Client Install

	Article: Q168511
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install third-party Windows 95 drivers on a Windows NT 4.0 system, you
	encounter difficulties setting up Point and Print.
	
	CAUSE
	=====
	
	This problem may occur because of an incorrect .inf being used during setup. The
	default behavior during the installation of third-party drivers is not to copy
	the .inf file locally to ensure that a duplication of .inf files did not occur.
	This caused Point and Print setup issues because Windows NT attempts to resolve
	the model name in the local .inf before using an alternative source. Because the
	.inf file was never copied, installation problems may result.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0 For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
