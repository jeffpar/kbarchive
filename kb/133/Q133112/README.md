---
layout: page
title: "Q133112: NetWkstaSetUid2 API Returns Access Denied"
permalink: /kb/133/Q133112/
---

## Q133112: NetWkstaSetUid2 API Returns Access Denied

	Article: Q133112
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run a batch file that repeatedly logs a user on and logs using the
	NetWkstaSetUid2 API, you may receive "Access Denied" error messages.
	
	NOTE: The error message that is returned depends on the application that is
	calling the NetWkstaSetUid2 API.
	
	CAUSE
	=====
	
	NetWkstaSetUID2 performs the following three distinct operations:
	
	1. Discovery. A mailslot message is sent to all the domain controllers (DCs) in
	  a domain. Each DC responds with a message indicating whether the user account
	  exists on the DC, and contains the name of the DC responding. The client
	  looks at the first response and ignores the others.
	
	2. Authentication. To authenticate the password, the client calls NetUseAdd IPC$
	  to contact the first DC that responded.
	
	3. Account Information. A remote API call is used to retrieve account
	  information to determine if you are an administrator, your password
	  expiration date, and so on.
	
	The problem listed above occurs when the third operation fails.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already
	done so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem has been corrected in the latest U.S. Service Pack for
	Windows NT version 3.51. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt netlogon.dll
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
