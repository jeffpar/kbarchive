---
layout: page
title: "Q137296: Adding Additional Logical Print Server Ports for FPNW"
permalink: /kb/137/Q137296/
---

## Q137296: Adding Additional Logical Print Server Ports for FPNW

	Article: Q137296
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pages 94, 95, and 96 of the File and Print Services for NetWare (FPNW) 3.51
	Administrator's Guide list all registry parameters that are added to the
	registry when FPNW is installed. The PServerPorts parameter is listed on page
	95, and it works as documented. However, PServerPorts does not appear in the
	registry.
	
	MORE INFORMATION
	================
	
	PServerPorts is the number of logical print server ports (named
	NetWareCompatiblePServerx, where x is a number starting from 0), provided in
	Print Manager to represent NetWare printers. You can enter this parameter in the
	registry if you want to create additional print queues on the server to send
	jobs to NetWare printers. The range is 1 to 64, and the default is 2.
	
	To create additional print queues for FPNW:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\FPNW\Parameters
	
	3. From the Edit menu, select Add Value.
	
	4. Add the following:
	
	  Value Name: PServerPorts
	  Data Type: REG_DWORD
	  Data: <Decimal Number from 1 - 64>
	
	5. Choose OK and quit Registry Editor.
	
	6. Shutdown and restart Windows NT.
	
	Additional query words: prodnt printing FPNW doc err docerr 4.0
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : 3.51 4.0
	
	=============================================================================
	
