---
layout: page
title: "Q262202: Cannot Install Printers on Terminal Server w/SP5/SP6 Installed"
permalink: kb/262/Q262202/
---

## Q262202: Cannot Install Printers on Terminal Server w/SP5/SP6 Installed

	Article: Q262202
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbprint
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to install a printer in Windows NT 4.0 Terminal Server with
	Service Pack 5 (SP5) or Service Pack 6 (SP6) installed, you may receive the
	following error message:
	
	  Server on which the printer resides does not have a suitable <Printer>
	  driver installed.
	
	CAUSE
	=====
	
	This behavior can occur if you are attempting to install a new printer that does
	not have a driver in the trusted path. SP5 or SP6 makes changes to the registry
	that provide for the enhanced stability of Terminal Server by not allowing
	printer drivers to be installed from untrusted paths.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To install the printer, you must modify the registry:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Providers\LanMan
	  Print Services\Servers
	
	3. Set the following registry values:
	
	  Value Name: LoadTrustedDrivers
	  Data Type: REG_DWORD
	  Value: 0
	
	  Value Name: EnablePrinterSecurity
	  Data Type: REG_DWORD
	  Value: 0
	
	4. Quit Registry Editor.
	
	5. Restart the server.
	
	After you make this change, administrators can install new printer drivers. After
	the drivers are installed, users can add the new printers based on these
	drivers.
	
	NOTE: Before you install a new printer driver, make sure that it is compatible
	with Terminal Server. You may want to install and test the driver in a test
	environment before you install the driver on a production server.
	
	After you have installed the drivers you need, you should consider setting the
	registry back to its original settings:
	
	  Key:
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Providers\LanMan
	  Print Services\Servers
	
	  Value Name: LoadTrustedDrivers
	  Data Type: REG_DWORD
	  Value: 1
	
	  Value Name: EnablePrinterSecurity
	  Data Type: REG_DWORD
	  Value: 1
	
	Restart the server after making these changes.
	
	In summary, when EnablePrinterSecurity is set to "0", then the client looks for
	drivers in TrustedDriverPath\2 folder. When it is set to "1", it looks for
	drivers under TrustedDriverPath.
	
	Example:
	
	Case 1: EnablePrinterSecurity is set to 0
	------------------------------------------
	
	  [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Providers\LanMan
	  Print Services\Servers]
	
	  "AddPrinterDrivers"=dword:00000000
	  "LoadTrustedDrivers"=dword:00000001
	  "EnablePrinterSecurity"=dword:00000000
	  "TrustedDriverPath"=REG_EXPAND_SZ:\\printserver\print$\W32%PROCESSOR_ARCHITECTURE%
	
	In this case, the client pulls the driver from \\printserver\print$\w32x86\2
	
	Make sure the drivers are in \\printserver\print$\w32x86\2
	
	Case2: EnablePrinterSecurity is set to 1 (only admins can add the printer)
	-------------------------------------------------------------------
	
	  [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Providers\LanMan
	  Print Services\Servers]
	
	  "AddPrinterDrivers"=dword:00000000
	
	  "LoadTrustedDrivers"=dword:00000001
	
	  "EnablePrinterSecurity"=dword:00000001
	
	  "TrustedDriverPath"=REG_EXPAND_SZ:\\printserver\print$\W32%PROCESSOR_ARCHITECTURE%
	
	In this case, the client pulls the driver from \\printserver\print$\w32x86
	
	Make sure the drivers are in \\printserver\print$\w32x86 (note that it doesn't
	look for "2" folder)
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q239536 How to Load Printer Drivers from Trusted Source Only
	
	  Q238070 Computer May Hang if Multiple Terminal Server Users Connect to a
	  Remote Printer and Print Simultaneously
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0 SP5,4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	
