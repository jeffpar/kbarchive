---
layout: page
title: "Q168457: Configuring Individual Printers to Passthrough LPR Print Jobs"
permalink: kb/168/Q168457/
---

## Q168457: Configuring Individual Printers to Passthrough LPR Print Jobs

	Article: Q168457
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Beginning with Windows NT version 4.0 Service Pack 2, it is possible to
	configure LPD passthrough on a per-printer basis. Prior to service pack 2, the
	SimulatePassThrough registry entry affected all incoming LPR jobs to all
	printers on the server.
	
	MORE INFORMATION
	================
	
	Use the following steps to implement LPD passthrough on a per-printer basis:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. If you use a Windows NT 4.0-based computer, make sure that Service Pack 2 or
	  later is installed on the computer.
	
	2. Start Registry Editor (Regedt32.exe).
	
	3. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Printers\<printername>\PrinterDriverData
	
	  where <printername> is the name of the printer that you want to
	  configure.
	
	4. Use the appropriate method for your version of Microsoft Windows.
	
	  Windows NT 4.0 with Service Pack 2 or Service Pack 3:
	
	  On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: SimulatePassThrough
	  Data Type: REG_DWORD
	  Value Data: 1
	
	  Windows NT 4.0 with Service Pack 4 or later or Windows 2000:
	
	  On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: LpdPrinterPassThrough
	  Data Type: REG_DWORD
	  Value Data: 1
	
	5. Quit Registry Editor.
	
	6. Stop and then restart the TCP/IP Print Server service and the Spooler
	  service.
	
	For additional information about how to use SimulatePassThrough, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q150930 LPD Server Adds and Prints Control Codes
	
	Additional query words: postscript
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro
	Version           : :2000,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
