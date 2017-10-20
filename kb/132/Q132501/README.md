---
layout: page
title: "Q132501: NetBIOS Error 0x11: Local Session Table Full"
permalink: /kb/132/Q132501/
---

## Q132501: NetBIOS Error 0x11: Local Session Table Full

{% raw %}

	Article: Q132501
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a NetBIOS application under Windows NT, the following error message
	appears:
	
	  Error 0x11 (Local session table full)
	  Meaning: There are no available entries in the local session table
	
	NOTE: The Windows NT Redirector (workstation service) and Server service do not
	use the NetBIOS Interface.
	
	For more information on standard NetBIOS error codes, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q126651 NetBIOS Data Codes (Windows NT and RAS)
	
	CAUSE
	=====
	
	This problem occurs when the NetBIOS application's request for number of
	sessions exceeds the configured session limit. The default session value is 16,
	the maximum session limit is 254.
	
	RESOLUTION
	==========
	
	To correct this problem, increase the session limit using the NetBIOS Reset or
	DIR.OPEN.ADAPTER NetBIOS commands.
	
	MORE INFORMATION
	================
	
	The following table lists the default and maximum session settings for the
	NetBIOS interface implementation under Windows NT:
	
	  Maximum Lana         254
	  Maximum Sessions     254
	  Maximum Address      255
	  Maximum Names        253
	
	  Default Sessions      16
	  Default Commands      16
	  Default Names          8
	
	
	Additional query words: 3.10 netbios.sys ipc prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
