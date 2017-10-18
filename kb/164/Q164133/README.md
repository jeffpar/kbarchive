---
layout: page
title: "Q164133: Logon Allowed When Access Denied to Mandatory User Profile"
permalink: kb/164/Q164133/
---

## Q164133: Logon Allowed When Access Denied to Mandatory User Profile

	Article: Q164133
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user of a mandatory profile attempts to log on, but has insufficient
	access to read the mandatory user profile, the following message is displayed:
	
	  You do not have permission to access your central profile located at
	  \\server\share\username.MAN. The operating system is attempting to log you on
	  with your local profile.
	
	The system then proceeds to log the user on with a default profile.
	
	The ability to log on should not be allowed if the mandatory user profile is not
	accessible.
	
	CAUSE
	=====
	
	There is a problem in Userenv.dll that causes incorrect handling of Access
	Denied error conditions when accessing mandatory user profiles.
	
	RESOLUTION
	==========
	
	To work around this problem, grant users of the mandatory profile appropriate
	access rights to it.
	
	Alternatively apply the related hotfix, which fixes this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt mandatory user profiles man pdm
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
