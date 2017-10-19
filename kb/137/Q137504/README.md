---
layout: page
title: "Q137504: Server Operators Group Unable to Install FPNW"
permalink: /kb/137/Q137504/
---

## Q137504: Server Operators Group Unable to Install FPNW

	Article: Q137504
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	Page 8 of the File and Print Services for NetWare (FPNW) version 3.51
	Administrator's Guide and the online FPNW Administrator's Guide state
	the following:
	
	  To install File and Print Services for NetWare, you must be logged on as a
	  member of the Administrators or Server Operators group.
	
	This is incorrect. To install File and Print Services for NetWare 3.51,
	you must be logged on as a member of the Administrators group. Members
	of the Server Operators group do not have built-in rights to add or
	remove any device drivers.
	
	Additional query words: prodnt NetWare Novell FPNW
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	
	=============================================================================
	
