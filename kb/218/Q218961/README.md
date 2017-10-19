---
layout: page
title: "Q218961: Connectivity Issues for Terminal Server Clients on UNIX Systems"
permalink: /kb/218/Q218961/
---

## Q218961: Connectivity Issues for Terminal Server Clients on UNIX Systems

	Article: Q218961
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED OR TESTED BY MICROSOFT. USE ONLY                  **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	SYMPTOMS
	========
	
	Clients running versions of UNIX on their workstation can connect to a Terminal
	Server computer by way of third-party software from Citrix and NCD. If the UNIX
	system is running an older version of Samba (used to access shares on Windows NT
	Server computers), the Samba software can disrupt connections between the
	Terminal Server and ICA client.
	
	RESOLUTION
	==========
	
	Samba v1.9.16 was found to cause problems, which were resolved by updating to
	Samba 1.9.18p10.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
