---
layout: page
title: "Q263967: Domain Admins Group Is Not Added to Local Administrators Group"
permalink: kb/263/Q263967/
---

## Q263967: Domain Admins Group Is Not Added to Local Administrators Group

	Article: Q263967
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install network components on a computer that is running Windows NT 4.0
	and join a domain at the same time, the domain Administrators group is not added
	to the local Administrators group on that workstation.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- Do not join the domain immediately after you add the network components. Add
	  the network components, restart the computer, and then use the Networks tool
	  in Control Panel to join the computer to the domain.
	
	- After you join the computer to the domain, log on to the local machine
	  account as an administrator and add the domain Administrators group to the
	  local Administrators group.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: setup ncpa.cpl
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
