---
layout: page
title: "Q165732: Error Message While Installing FPNW: Group Already Exists"
permalink: kb/165/Q165732/
---

## Q165732: Error Message While Installing FPNW: Group Already Exists

	Article: Q165732
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install File and Print Services for NetWare (FPNW), you may see the
	following error message:
	
	  The specified local group already exists
	
	If you click OK, you will return to the FPNW volume setup options.
	
	CAUSE
	=====
	
	The above error occurs because Windows NT includes a group called Supervisor,
	and FPNW attempts to create a Local user account called Supervisor as part of
	its installation. Windows NT does not allow a username to be the same as a
	groupname.
	
	RESOLUTION
	==========
	
	In order to install FPNW, you must remove the Supervisor group.
	
	Additional query words: file print services netware setup install installing
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
