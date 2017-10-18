---
layout: page
title: "Q132523: SAP Agent and NWLNKRIP Services Fail to Start"
permalink: kb/132/Q132523/
---

## Q132523: SAP Agent and NWLNKRIP Services Fail to Start

	Article: Q132523
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT and log on, the following error message appears:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	The System Log contains the following two Service Control Manager event 7003
	errors:
	
	  The Remote Access NWLNKRIP service depends on the following nonexistent
	  service: NWLNKIPX.
	
	  The SAP Agent service depends on the following nonexistent service: NWLNKIPX.
	
	CAUSE
	=====
	
	This problem occurs after you remove the NWLink IPX/SPX Compatible Transport on
	a computer running Windows NT system that has the RAS server service installed,
	and at one time had the IPX protocol enabled for RAS dialin.
	
	The NWLNKRIP and SAP Agent services are used by the RAS server service in
	conjunction with the IPX (or NWLink) protocol. If you remove the NWLink IPX/SPX
	Compatible Transport, the NWLNKRIP and SAP Agent services are not removed.
	Because these services depend on the NWLink IPX/SPX Compatible Transport
	(NWLNKIPX), you receive the errors noted above after restarting your computer.
	
	RESOLUTION
	==========
	
	To correct this problem, remove the NWLNKRIP and SAP Agent services:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, remove the following three keys:
	
	     \Software\Microsoft\NWSapAgent
	     \Software\Microsoft\NWLNKRIP
	     \SYSTEM\CurrentControlSet\Services\NwSapAgent
	
	3. Quit Registry Editor.
	
	4. Shutdown and restart Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt novell netware event viewer remote access service nwsap
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
