---
layout: page
title: "Q162566: FPNW Causes Incomplete Display When Executed from Windows 95"
permalink: /kb/162/Q162566/
---

## Q162566: FPNW Causes Incomplete Display When Executed from Windows 95

	Article: Q162566
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows 95 with the Microsoft NetWare client and an application is
	executed on a Windows NT Server running File and Print Services for NetWare, the
	application is not displayed correctly. This problem does not occur when you
	execute an application from Novell NetWare version 3.x or 4.x or when you use
	Windows NT Workstation with the Microsoft NetWare client or Windows 95 with the
	Novell 32-bit client.
	
	MORE INFORMATION
	================
	
	If the client sends the wrong task ID, the NetWare server, by default, ignores a
	close and sends back success. Windows NT File and Print Services actually close
	the file, causing problems for the application later when it tries to read the
	file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Technical Support for more
	information on the availability of this fix.
	
	
	Additional query words: prodnt 3.51 4.00
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3 kbServicesNetwareSearch kbFPNW400
	Version           : WINDOWS:95; winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
