---
layout: page
title: "Q158710: RASDIAL Does Not Redial On Link Failure with RASPHONE Running"
permalink: kb/158/Q158710/
---

## Q158710: RASDIAL Does Not Redial On Link Failure with RASPHONE Running

	Article: Q158710
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT Remote Access (RAS) Client fails to redial on link failure if
	the connection was established using RASDIAL, and RASPHONE is running.
	
	CAUSE
	=====
	
	The Remote Access Help in Windows NT 3.51 states the following:
	
	  "If RASPHONE is running it will perform redial on entries connected
	  with RASDIAL."
	
	This feature does not function correctly in Windows NT 3.51. The connection that
	is established with RASDIAL does not redial automatically on link failure.
	
	WORKAROUND
	==========
	
	Until this problem is fixed in Windows NT 3.51, the following workarounds may be
	used:
	
	- The ability to redial on link failure when dialing with RASDIAL works
	  correctly in Windows NT 4.0. Upgrade to Windows NT 4.0.
	
	- To achieve this functionality with Windows NT 3.51, write your own service or
	  use a third-party product. Somar ReDial, by Somar Software, allows a RAS link
	  to be reconnected on link failure. Somar Software can be reached at
	  http://www.somar.com or 72202,2574 on CompuServe. Other third-party vendors
	  may also provide similar solutions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: reconnect drop connection
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51
	Issue type        : kbbug
	
	=============================================================================
	
