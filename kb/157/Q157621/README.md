---
layout: page
title: "Q157621: Personal Groups Not Visible If %Systemroot% Is Read-Only"
permalink: kb/157/Q157621/
---

## Q157621: Personal Groups Not Visible If %Systemroot% Is Read-Only

	Article: Q157621
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the %Systemroot% directory to Read permission for specific users,
	and those users are using a roaming profile that was created under Windows NT
	3.51, the Personal Groups created for those users may not show up on the Windows
	NT 4.0 Workstation they are using to log on to the domain.
	
	CAUSE
	=====
	
	When the Grpconv.exe utility runs to convert the Windows NT 3.51 profile to a
	Windows NT 4.0 profile, it creates temporary files in the %Systemroot% directory
	using the user's account. That user only has Read permission in that directory,
	so Grpconv.exe receives an Access Denied error when it tries to write the
	temporary files.
	
	RESOLUTION
	==========
	
	This behavior was changed in Grpconv.exe and it no longer tries to create the
	temp files in the %Systemroot% directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: ntbug prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
