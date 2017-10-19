---
layout: page
title: "Q135928: Windows NT: 16-bit Calls to NetUserAdd() API Cause GP Fault"
permalink: /kb/135/Q135928/
---

## Q135928: Windows NT: 16-bit Calls to NetUserAdd() API Cause GP Fault

	Article: Q135928
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a 16-bit program that calls the NetUserAdd() application
	programming interface (API), a General Protection (GP) fault occurs.
	This symptom occurs sporadically.
	
	
	CAUSE
	=====
	
	There is a problem in the NETAPI.DLL file where the segment passed in the call
	is not used.
	
	WORKAROUND
	==========
	
	To work around this problem, use the LocalAlloc() API to allocate the buffers
	used to pass the server name, user name, and password.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
