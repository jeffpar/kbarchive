---
layout: page
title: "Q148749: Performance Monitor Error after Installing NT 3.51 SP4"
permalink: /kb/148/Q148749/
---

## Q148749: Performance Monitor Error after Installing NT 3.51 SP4

	Article: Q148749
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT 3.51 Service Pack 4 and run Performance Monitor,
	the following event is logged in Event Viewer:
	
	  Event ID: 1008
	  Source: Perflib
	  Description: The Open Procedure for service "NwlnkSpx" in DLL "perfctrs.dll"
	  failed. Performance data for this service will not be available. Status code
	  returned is DWORD 0.
	
	CAUSE
	=====
	
	When the NWLINK IPX/SPX protocol is installed, an Nwlnkspx.sys key gets created
	in the registry, and it has a Performance key under it. When Performance Monitor
	loads, it calls the open SPX performance procedure for Nwlnkspx.sys. The problem
	is that Nwlnkspx.sys is not started by default and the error above is logged.
	Nwlnkspx.sys gets loaded when an SPX-based application is started or NET START
	NWLNKSPX is issued from the command prompt. NWLNKSPX counters do not appear in
	Performance Monitor until it has started.
	
	Changes to Service Pack 4 appear to cause this error. They do not adversely
	affect the operating system in any way.
	
	
	WORKAROUND
	==========
	
	To monitor NWLINK IPX/SPX statistics in Windows NT 3.51 Service Pack 4, type the
	following at a command prompt:
	
	  "NET START NWLNKSPX" (without the quotation marks)
	
	NOTE: This loads the NWLNKSPX.SYS file, which is necessary to monitor the NWLINK
	IPX/SPX statistics.
	
	  - or -
	
	Go into Control Panel, Devices and set all three of the NWLink devices to startup
	automatically. This will prevent the errors from being logged as the system is
	first coming up after a reboot.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 4. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt sp4 service pack
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
