---
layout: page
title: "Q137505: IBM 16/4 Auto Token Ring Adapter Driver Causes Event ID 7000"
permalink: kb/137/Q137505/
---

## Q137505: IBM 16/4 Auto Token Ring Adapter Driver Causes Event ID 7000

	Article: Q137505
	Product(s): Microsoft Windows NT
	Version(s): 3.51
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
	
	After you install the IBM 16/4 Auto Token Ring ISA network interface card (NIC)
	driver in Windows NT 3.51, the following system event message appears in Event
	Viewer:
	
	  Event ID: 7000
	  Source: Service control manager
	  Type: Error
	  Description: The IBM Auto 16/4 Token-Ring ISA Adapter service failed to start
	  due to the following error: A Device attached to the system is not
	  functioning.
	
	After the Event ID 7000 appears the following event error is entered into the
	system log of the event viewer:
	
	  Event ID: 5003
	  Source: IBMTOK4
	  Type: Error
	  Description: IBMTOK41: could not find an adapter.
	
	CAUSE
	=====
	
	The OEMSETUP.INF file for the NIC driver (IBMTOK4.SYS) is not adding a required
	value in the Windows NT registry properly. The OEMSETUP.INF and IBMTOK4.SYS
	files are located on the following directory on the Windows NT 3.5 CD-ROM disc:
	
	  \DRVLIB\NETCARD\X86\IBMTOK4
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\IbmTok41\Parameters
	
	3. Select the Parameters key.
	
	4. From the Edit menu, select Add Value.
	
	5. Add the following:
	
	  Value Name: BusNumber
	  Data Type: REG_DWORD
	  Data: 0
	
	6. Choose OK and quit Registry Editor.
	
	7. Shutdown and restart Windows NT.
	
	Additional query words: prodnt cd
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
