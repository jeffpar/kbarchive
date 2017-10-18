---
layout: page
title: "Q168473: Hide Drives on Default User Sets Restrictions"
permalink: kb/168/Q168473/
---

## Q168473: Hide Drives on Default User Sets Restrictions

	Article: Q168473
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new policy in System Policy Editor, you enable the Hide Drives
	in My Computer for the default user policy. The other users, who have specific
	policies set, inherit this restriction.
	
	CAUSE
	=====
	
	When you modify default user, treat this selection as a global value and
	transfer it to the other policies, as well as to its own.
	
	
	RESOLUTION
	==========
	
	Do not set this restriction on Default User.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: Policy Hard Drives disappear Profile
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
