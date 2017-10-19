---
layout: page
title: "Q134759: Event 2000 Occurs When You Print to a Shared Printer"
permalink: /kb/134/Q134759/
---

## Q134759: Event 2000 Occurs When You Print to a Shared Printer

	Article: Q134759
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a shared printer, the following is logged in the system log:
	
	  Event 2000:
	  Source: SRV
	  Type: ERROR Description
	  : The server's call to a system service failed unexpectedly.
	
	  0000: 00040000 00540001 00000000 c00007d0
	  0010: 00000000 c000000d 00000000 00000000
	  0020: 00000000 00000000 12880bc5
	
	CAUSE
	=====
	
	
	This problem occurs when:
	
	- A printer is physically connected to your computer running Windows 95 and
	  shared on the network.
	
	- You print from an MS-DOS-based application under Windows 95 to LPT2, and LPT2
	  is redirected to a printer shared by Windows NT.
	
	- The printer shared by Windows NT is not local printer, but is redirected to a
	  printer shared by Windows 95.
	
	- The Windows NT printer is created in two steps. You use Connect To Printer to
	  access the printer shared by Windows 95 and you use Create Printer and Print
	  To <destination> to print to the printer shared by Windows 95.
	
	In above configuration, the error occurs when the spooler accesses LAN Manager
	Print Services.
	
	WORKAROUND
	==========
	
	To work around this problem, edit the Registry:
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	1. Run Print Manager and remove the printer previously established.
	
	2. Run Registry Editor (REGEDT32.EXE).
	
	3. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Control\Print\Providers
	  \LanManPrintServices\PortNames
	
	4. Delete following key:
	
	  REG_SZ: \\printserver\printershare
	
	5. Shutdown and restart Windows NT.
	
	6. Run Print Manager and create a printer:
	
	  a. From the Printer menu, choose Create Printer.
	
	  b. In the Print To list box, choose Others.
	
	  c. Select Local Port and then choose OK.
	
	  d. Type in the universal naming conversion (UNC) path to the print server,
	     for example \\printsrv\printshare, and then choose OK.
	
	
	Additional query words: prodnt lanman
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.51
	
	=============================================================================
	
