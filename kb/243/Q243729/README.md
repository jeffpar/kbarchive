---
layout: page
title: "Q243729: Preventing Print Spooler CR or LF to CR/LF Character Translation"
permalink: /kb/243/Q243729/
---

## Q243729: Preventing Print Spooler CR or LF to CR/LF Character Translation

	Article: Q243729
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT400PreSP7Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use the Windows NT 4.0 Line Printer Daemon (LPD) utility (in
	conjunction with the print spooler) to process text-stream print jobs, both line
	feed (LF) and carriage return (CR) characters are translated to a carriage
	return/line feed (CR/LF) character before the print job is sent to the print
	device.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time     Size     File name      Platform
	  ----------------------------------------------------
	  09/28/99   01:58p   15,632   Winprint.dll   x86
	  09/28/99   01:58p   23,312   Winprint.dll   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Although this is the default behavior, you can change it to disable CR/LF
	processing or to disable CR processing. After you install the hotfix on the
	print server, use the following steps to configure the print spooler on a
	per-printer basis for either print processing preference:
	
	To Disable CR/LF Processing
	---------------------------
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Printers\<printername>\PrinterDriverData
	
	where <printername> is the printer to be configured.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: Winprint_TextNoTranslation
	  Data Type: REG_DWORD
	  Value: 1
	
	4. Quit Registry Editor.
	
	5. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	6. Click the TCP/IP Print Server service, and then click Stop.
	
	7. Click the Spooler service, and then click Stop.
	
	8. After the Spooler service has stopped, click Start.
	
	9. Click the TCP/IP Print Server service, and then click Start.
	
	To Disable Only CR Processing
	-----------------------------
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Printers\<printername>\PrinterDriverData
	
	where <printername> is the printer to be configured.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: Winprint_TextNoCRTranslation
	  Data Type: REG_DWORD
	  Value: 1
	
	4. Quit Registry Editor.
	
	5. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	6. Click the TCP/IP Print Server service, and then click Stop.
	
	7. Click the Spooler service, and then click Stop.
	
	8. After the Spooler service has stopped, click Start.
	
	9. Click the TCP/IP Print Server service, and then click Start.
	
	When the LPD service is configured with the SimulatePassThrough setting, the job
	data type is always RAW. Therefore, the print processor settings are ignored.
	For additional information about using the SimulatePassThrough setting, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q150930 LPD Server Adds and Prints Control Codes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
