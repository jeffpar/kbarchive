---
layout: page
title: "Q163141: Change of Printer IP Address Not Recognized by Spooler"
permalink: kb/163/Q163141/
---

## Q163141: Change of Printer IP Address Not Recognized by Spooler

	Article: Q163141
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create an LPR printer in Print Manager and specify the printer's host
	name instead of an IP address, and then change the printer's IP address on the
	DNS server or in the hosts file, the Spooler service does not recognize the new
	IP address and will log an Event ID 2004 error.
	
	CAUSE
	=====
	
	The Spooler service only resolves the host name to an IP address once, when
	Spooler service starts up.
	
	WORKAROUND
	==========
	
	When the IP address of a printer is changed, stop and restart the Spooler
	service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodnt LPR LPQ LPD PRINTER DNS HOST NAME CHANGE
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
