---
layout: page
title: "Q110946: SP2 Prohibits Administrator Access to Locked Workstations"
permalink: kb/110/Q110946/
---

## Q110946: SP2 Prohibits Administrator Access to Locked Workstations

	Article: Q110946
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Service Pack 2, you cannot unlock a workstation when you are
	logged on as the Administrator.
	
	STEPS TO REPRODUCE BEHAVIOR
	---------------------------
	
	1. While logged in as a user such as Guest, lock the workstation by pressing
	  CTRL+ALT+DEL and selecting Lock Workstation from the dialog box.
	
	2. Press CTRL+ALT+DEL to unlock the workstation.
	
	3. Log on as the Administrator.
	
	The following error message appears
	
	  This workstation is locked. Only DOMAINNAME\USERNAME(FULLNAME) or an
	  administrator can unlock this workstation.
	
	where:
	
	DOMAINNAME is the domain the user is currently logged onto and USERNAME(FULLNAME)
	is the name of the user currently logged on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt err msg password account
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	
	=============================================================================
	
