---
layout: page
title: "Q155427: Errors 2114 or (9 - 2114) Using Windows NT Diagnostics"
permalink: /kb/155/Q155427/
---

## Q155427: Errors 2114 or (9 - 2114) Using Windows NT Diagnostics

	Article: Q155427
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you stop the Server service on a computer running Windows NT 3.5 or 3.51, and
	then use Windows NT Diagnostics to view the network information, you will
	receive the following error message:
	
	  Error: NSG(s) 0 -ERR 2114.
	
	When you click OK, the Network dialog box comes up blank.
	
	If you stop the Server service on a computer running Windows NT 4.0, and then use
	Windows NT Diagnostics to view the Network tab, you will receive the following
	message:
	
	  Windows NT Diagnostics
	
	  Network Statistics are unavailable at this time (9 - 2114).
	
	When you click OK, you will see the Network tab with the General, Transports, and
	Settings buttons available, but the Statistics button will be unavailable.
	
	WORKAROUND
	==========
	
	To work around this problem, start the Server service. Full functionality of the
	Windows NT Diagnostics program is not available without the Server service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51
	and 4.0. We are researching this problem and will post new information here as
	it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
