---
layout: page
title: "Q250049: Domain Users Denied Access When Running Logon Script from PDC"
permalink: kb/250/Q250049/
---

## Q250049: Domain Users Denied Access When Running Logon Script from PDC

	Article: Q250049
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When domain users try to run the logon script in the netlogon share of the
	primary domain controller (PDC), they may receive an error message stating that
	access is denied. However, they may be able to access the backup domain
	controller netlogon shares.
	
	You, as an administrator, are able to run the logon script from all domain
	controllers.
	
	CAUSE
	=====
	
	This behavior can occur when the users' permissions to the netlogon share of the
	PDC are incorrect.
	
	RESOLUTION
	==========
	
	To resolve this behavior, change the file permissions on the files in the
	netlogon share on the PDC to grant read access to the Everyone group.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
