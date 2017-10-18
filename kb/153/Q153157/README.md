---
layout: page
title: "Q153157: WNetGetUser Returns ERROR_NOT_CONNECTED"
permalink: kb/153/Q153157/
---

## Q153157: WNetGetUser Returns ERROR_NOT_CONNECTED

	Article: Q153157
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an application tries to get the user name for a connection to a NetWare
	server using WNetGetUser the API returns an error and GetLastError returns
	ERROR_NOT_CONNECTED. This happens with the Client Services For NetWare (CSNW) on
	Windows NT Workstation or the Gateway Services for NetWare (GSNW) on Windows NT
	Server.
	
	CAUSE
	=====
	
	This API was not implemented in CSNW and GSNW in Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the product listed. This problem
	was corrected in the latest Windows NT 3.51 U.S. Service Pack. For information
	on obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	Issue type        : kbbug
	
	=============================================================================
	
