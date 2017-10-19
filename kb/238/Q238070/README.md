---
layout: page
title: "Q238070: Computer May Hang if Multiple TSE Users Print Simultaneously"
permalink: /kb/238/Q238070/
---

## Q238070: Computer May Hang if Multiple TSE Users Print Simultaneously

	Article: Q238070
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	A computer running Windows NT Server 4.0, Terminal Server Edition, Service Pack
	4 may stop responding (hang) or may display an error message on a blue screen if
	multiple Terminal Server users connect to a remote printer and print
	simultaneously.
	
	CAUSE
	=====
	
	This behavior occurs if the printer driver that is installed is incompatible
	with Terminal Server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0 SP4, Terminal
	Server Edition. This problem was first corrected in Windows NT 4.0 Server,
	Terminal Server Edition, Service Pack 5.
	
	MORE INFORMATION
	================
	
	You can use this update to prevent non-administrative users from installing
	printers. To install a printer, use the appropriate option.
	
	Option 1
	--------
	
	Install the appropriate printer, which installs the drivers locally.
	Non-administrative users can create printers based on these drivers.
	
	Option 2
	--------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Copy all the printer drivers to a trusted path on the local computer so
	non-administrative users can install the drivers from this local path. To set
	the trusted path:
	
	1. Modify the LoadTrustedDrivers value in the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Providers\LanMan
	  Print Services\Servers
	
	  LoadTrustedDrivers = 1
	
	2. Depending on your computer, edit the appropriate registry key (where
	  <windir> is your Windows folder):
	
	For x86-based computers:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Providers\LanMan
	  Print Services\servers
	
	  TrustedDriverPath = "<windir>\system32\spool\drivers\w32x86"
	
	  The value data type should be REG_SZ.
	
	For Alpha-based computers:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Providers\LanMan
	  Print Services\servers
	
	  TrustedDriverPath = "<windir>\system32\spool\drivers\w32alpha"
	
	  The value data type should be REG_SZ.
	
	3. Edit the AddPrinterDrivers value in the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Providers\LanMan
	  Print Services\Servers
	
	  AddPrinterDrivers = 0
	
	  Data Type REG_DWORD
	
	4. Restart the computer.
	
	NOTE: Make sure that newer printer drivers are compatible with Terminal Server.
	You should ask multiple users to install and use the drivers in a test
	environment prior to installing the drivers on production servers.
	
	Additional query words: wts printing crash
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
