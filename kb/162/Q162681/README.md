---
layout: page
title: "Q162681: Unexpected Result in NCB Callname After Canceling a Listen"
permalink: /kb/162/Q162681/
---

## Q162681: Unexpected Result in NCB Callname After Canceling a Listen

{% raw %}

	Article: Q162681
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbNetBIOS kbSDKPlatform kbGrpDSNet
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT NetBIOS application's network control block (NCB) may appear
	corrupted. If Ncb.listen is posted with an asterisk (*) for the called name, the
	string "nnection context" is returned in the NCB callname structure whenever
	Ncb.listen is canceled before a client responds to it.
	
	CAUSE
	=====
	
	The remote address of the client should be copied to the NCB structure on the
	completion of the listen. However, because a client did not respond to the
	listen, the unexpected string is copied to the structure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5x and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Because the NCB callname is not used when Ncb.listen is canceled, this problem
	does not negatively affect NetBIOS applications.
	
	
	Additional query words: prodnt call cancelled
	======================================================================
	Keywords          : kbnetwork kbNetBIOS kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WINNT:3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
