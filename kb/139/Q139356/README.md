---
layout: page
title: "Q139356: TN3270 Server Service Fails to Start Automatically"
permalink: kb/139/Q139356/
---

## Q139356: TN3270 Server Service Fails to Start Automatically

	Article: Q139356
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When configuring the TN3270 Server service for automatic startup (within the
	Services application in Control Panel), the TN3270 service intermittently fails
	to start when Windows NT rebooted.
	
	CAUSE
	=====
	
	The TN3270 Server service requires that the SnaBase service has already been
	started. However, the TN3270 Setup program does not indicate that SnaBase is a
	dependent service within the TN3270 service entry in the Windows NT registry.
	
	While the SnaBase service is dynamically started if an application attempts to
	use the SNA API client interfaces (such as, when TN3270 is started), dynamic
	startup may not succeed in all cases when Windows NT is rebooted.
	
	RESOLUTION
	==========
	
	To resolve this problem, run Registry Editor (REGEDT32.EXE).
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  /SYSTEM/CurrentControlSet/Services/TN3270
	
	Add the following entry to the TN3270 Server registry key:
	
	  DependOnService: REG_MULTI_SZ:  Tcpip
	                                  SnaBase
	
	NOTE: This problem is fixed in an update to the TN3270 Server SETUP.INF file
	which automatically adds the above entry.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
