---
layout: page
title: "Q122043: Err Msg: Access Denied Connecting to NetWare Resource"
permalink: /kb/122/Q122043/
---

## Q122043: Err Msg: Access Denied Connecting to NetWare Resource

{% raw %}

	Article: Q122043
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kberrmsg kbbug3.50 kbfix3.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you disconnect from the Gateway Service for NetWare in Windows NT version
	3.5, an "Access Denied" message appears when you attempt to connect to a NetWare
	resource with a Universal Naming Convention (UNC) name from the NetWare network
	service.
	
	CAUSE
	=====
	
	This problem occurs because NetWare limits accounts to a single session per user
	account and when you disconnect from the Gateway Service for NetWare, the
	service is stopped but the network connection remains with the NetWare server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt disappear lost gone
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
