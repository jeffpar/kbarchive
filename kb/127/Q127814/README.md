---
layout: page
title: "Q127814: Printing to WinNT Queue Attached to NetWare Queue Hangs NetWare"
permalink: /kb/127/Q127814/
---

## Q127814: Printing to WinNT Queue Attached to NetWare Queue Hangs NetWare

	Article: Q127814
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a Windows NT Server version 3.5 print queue that is attached
	to a print queue on a NetWare server with a queue name that is greater than 12
	characters, the NetWare server stops responding (hangs).
	
	The print queue is attached as shown:
	
	  Windows NT Server (print queue)
	         |
	          --> NetWare Server (print queue)
	                   |
	                    --> NFS on NetWare Server
	                                 |
	                                  --> UNIX Server
	                                          |
	                                           --> Printer
	
	CAUSE
	=====
	
	Windows NT does not truncate the name field in the client frame at 12
	characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
