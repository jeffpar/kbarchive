---
layout: page
title: "Q137506: Adding and Providing The FPNW Serial Number"
permalink: /kb/137/Q137506/
---

## Q137506: Adding and Providing The FPNW Serial Number

	Article: Q137506
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	By default, File and Print Services for NetWare (FPNW) 3.51 server does
	not have a serial number associated with it. To modify the Windows
	NT registry to allow the FPNW server to return a serial number to the
	client computers:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\FPNW\Parameters
	
	3. From the Edit menu, select Add Value.
	
	4. Add the following:
	  Value Name: SerialNumber
	  Data Type: REG_DWORD
	  Data: <Serial Number>
	
	5. Choose OK and quit Registry Editor.
	
	6. Shutdown and restart Windows NT.
	
	Additional query words: prodnt Novell migration migrate
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : 3.51 4.0
	
	=============================================================================
	
