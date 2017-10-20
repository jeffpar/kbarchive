---
layout: page
title: "Q129670: GSNW Not Releasing Session to NetWare Server"
permalink: /kb/129/Q129670/
---

## Q129670: GSNW Not Releasing Session to NetWare Server

{% raw %}

	Article: Q129670
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Gateway Service for NetWare (GSNW) and Client Services for NetWare (CSNW) allow
	Windows NT to initiate and terminate a session with a NetWare server. When you
	stop the GSNW or CSNW service in the Services section of Control Panel or
	shutdown the system, the session to the NetWare service is not released.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already
	done so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q134968: NetWare Connections Remain Connected After You Log Off
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt connection
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
