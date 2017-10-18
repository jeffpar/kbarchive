---
layout: page
title: "Q139649: Windows NT Service Can't Connect to Network Printer on 3.51"
permalink: kb/139/Q139649/
---

## Q139649: Windows NT Service Can't Connect to Network Printer on 3.51

	Article: Q139649
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windows NT service attempts to connect to a network printer resource while
	running on Windows NT 3.51, the connection attempt fails.
	
	If the service attempts to call CreateDC on the "winspool" driver, the call fails
	with rc=126 (specified module could not be found). The actual error observed by
	the user will vary depending on how the service handles this error condition.
	
	This problem occurs with any Windows NT service which attempts to connect to a
	network print resource, including the NetSoft NS/Print Server for Windows NT.
	
	CAUSE
	=====
	
	If the printer is remote, the spooler passes an invalid parameter causing the
	service's CreateDC call to fail.
	
	
	WORKAROUND
	==========
	
	The service can still connect to any local printer resources. So, to workaround
	the problem, the administrator must create local printers using the Print
	Manager.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt prodsna
	
	======================================================================
	Keywords          : kbnetwork kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
