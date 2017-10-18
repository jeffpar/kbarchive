---
layout: page
title: "Q152450: Change Password Dialog Text Changed for NetWare"
permalink: kb/152/Q152450/
---

## Q152450: Change Password Dialog Text Changed for NetWare

	Article: Q152450
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are logged on to Windows NT 3.51 with a NetWare enabled account in a
	domain, and you change your password by using CTRL+ALT+DEL, the following
	NetWare network pop-up message appears:
	
	  Please go to the Command Prompt and run Setpass (located in SYS\PUBLIC on
	  NetWare Server) to change your password on NetWare Server.
	
	This message is misleading, especially if the system is running Directory Server
	Manager for NetWare (DSMN). With DSMN, both the Microsoft and NetWare passwords
	are changed automatically.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.50 3.51 prodnt CSNW GSNW
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
