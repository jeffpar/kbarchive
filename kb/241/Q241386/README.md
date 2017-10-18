---
layout: page
title: "Q241386: &quot;Can Not Find Snmpapi.dll&quot; Adding Counter to Performance Monitor"
permalink: kb/241/Q241386/
---

## Q241386: &quot;Can Not Find Snmpapi.dll&quot; Adding Counter to Performance Monitor

	Article: Q241386
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Performance Monitor tool and attempt to add counters to a
	chart, you may receive the following error message:
	
	  Can not find Snmpapi.dll
	
	CAUSE
	=====
	
	This behavior can occur if you have only the NWLink protocol installed in
	Windows NT 4.0. When you install the TCP/IP protocol, the Snmpapi.dll file is
	copied to the %SystemRoot%\System32 folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, manually copy the Snmpapi.dll file to the
	%SystemRoot%\System32 folder from the Windows NT 4.0 CD-ROM, and then reapply
	any installed service pack.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
