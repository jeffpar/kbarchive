---
layout: page
title: "Q134968: NetWare Connections Remain Connected After You Log Off"
permalink: /kb/134/Q134968/
---

## Q134968: NetWare Connections Remain Connected After You Log Off

	Article: Q134968
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you connect to a Novell NetWare print queue and then you log off, you may
	receive the following message when you log back on to your Windows NT computer:
	
	  You cannot be authenticated on <ServerName> due to the following
	  reason: A connection to the server could not be made because the limit on the
	  number of concurrent connections for this account has been reached.
	
	  Do you want to select another preferred server?
	
	where <ServerName> is the name of your NetWare server.
	
	CAUSE
	=====
	
	The Client Service for NetWare (CSNW) in Windows NT is not completely
	disconnecting you from the NetWare server.
	
	RESOLUTION
	==========
	
	To work around this issue, use one of the following methods:
	
	- Restart the computer instead of logging off and logging back on.
	
	  -or-
	
	- Contact your network administrator to increase the number of concurrent
	  connections for your user account.
	
	  -or-
	
	- For Windows NT version 3.51:
	
	  - Install Windows NT Service Pack 2
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem has been corrected in the latest U.S. Service Pack for Windows
	NT version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt csnw nwcs gsnw nwgs 4.00 4.0
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
