---
layout: page
title: "Q159459: NWCONV Does Not Transfer Queue Operator Group"
permalink: kb/159/Q159459/
---

## Q159459: NWCONV Does Not Transfer Queue Operator Group

	Article: Q159459
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Migration Tool for NetWare (Nwconv.exe) to migrate Novell
	servers to Windows NT, the Queue Operator group is not automatically transferred
	to Windows NT.
	
	MORE INFORMATION
	================
	
	According to the "Services for NetWare Networks" manual, "The Migration Tool
	creates a new user group, called Queue Operators, and adds NetWare Print Queue
	Operators to that group." However, this group is not being created after
	migration is done.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
