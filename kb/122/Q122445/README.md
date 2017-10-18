---
layout: page
title: "Q122445: Unexpected Network Error When Changing WfWG Password"
permalink: kb/122/Q122445/
---

## Q122445: Unexpected Network Error When Changing WfWG Password

	Article: Q122445
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbinterop kberrmsg kbbug3.10 kbfix3.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Windows NT domain, if you attempt to change the password of your Windows
	for Workgroups version 3.11 client workstation, and if the minimum password age
	has not expired, the following error message appears:
	
	  Error 59: An unexpected network error has occurred.
	
	
	CAUSE
	=====
	
	Windows NT uses a Transact server to respond to downlevel client Transact API.
	To change the password, the downlevel client uses the NetUserPasswordSet API.
	This problem occurs due to the transact server not sending the correct return
	code for this API. As a result, the client workstation shows a generic error
	message of Error 59.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1 and Windows NT Workstation and Windows NT Server
	version 3.5. This problem was corrected in the latest U.S. Service Pack for
	Windows NT version 3.5. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 3.10 wfw wfwg dos
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	
