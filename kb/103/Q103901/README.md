---
layout: page
title: "Q103901: PC Adm: Minimum NetWare Trustee Assignments for Mail Database"
permalink: kb/103/Q103901/
---

## Q103901: PC Adm: Minimum NetWare Trustee Assignments for Mail Database

	Article: Q103901
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	With versions 3.0, 3.0b, and 3.2 of Microsoft Mail for PC Networks, it
	is not necessary to give Novell NetWare version 3.1x users full
	trustee assignments.
	
	The minimum NetWare trustee assignments required to access a Mail
	database for users who do not have administrator privileges are as
	follows:
	
	  MAILDATA = root directory where Mail is installed
	
	  MAILDATA [ RW ] (This is true for all subdirectories except:)
	
	  MAILDATA\ATT [ RWCEM ]
	  MAILDATA\CAL [ RWCEM F]
	  MAILDATA\FOLDERS [ RWCEM ]
	  MAILDATA\MAI [ RWCEM ]
	  MAILDATA\MMF [ RWCEM ]
	
	
	Although it is acceptable for the HLP, TPL, and INF subdirectories to
	have only read access [R], read/write [RW] access is preferred.
	
	Users logging in to perform administrative or External functions
	should have [RWCEM] rights throughout the database.
	
	NOTE: These rights can be given to NetWare users or Groups via Syscon,
	or the Grant command. (Refer to the NetWare documentation for more
	information on granting trustee assignments.)
	
	The Novell NetWare product mentioned above is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: 3.00 3.00b 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
