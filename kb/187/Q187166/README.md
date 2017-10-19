---
layout: page
title: "Q187166: Users Cannot Connect Without Logon Local Permissions"
permalink: /kb/187/Q187166/
---

## Q187166: Users Cannot Connect Without Logon Local Permissions

	Article: Q187166
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	The only time the Log on Locally right is not granted by default to everyone, is
	when Terminal Server is installed as a BDC.
	
	If the Terminal Server is installed as a PDC or Member Server in a domain, or if
	it is installed as a standalone server in a workgroup, the Everyone group gets
	Log on Locally rights by default.
	
	SYMPTOMS
	========
	
	If a Terminal Server is installed in the domain as a backup domain controller
	(BDC), it will inherit the domain user rights from an existing Windows NT
	primary domain controller (PDC). Because of this, domain users will not have the
	right to log on locally. The affect is to deny everyone, except administrators,
	the right to connect through the Terminal Server Client.
	
	If users do not have the right to log on locally to the Terminal Server, they
	receive the following message:
	
	  The local policy of this system does not permit you to log on interactively.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
