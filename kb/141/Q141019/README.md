---
layout: page
title: "Q141019: SNMP Debug Messages Are Written to Eventlog"
permalink: /kb/141/Q141019/
---

## Q141019: SNMP Debug Messages Are Written to Eventlog

	Article: Q141019
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may find Eventlog entries like "MgmtAPI Process Attach" or "MgmtAPI Process
	detach" or "MgmtAPI Thread attach" or "MgmtAPI Thread detach" when you run an
	application that uses the SNMP API.
	
	CAUSE
	=====
	
	This problem occurs due to a debug output left in MGMTAPI.DLL.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.50 3.51 prodnt snmp eventlog
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
