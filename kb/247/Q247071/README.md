---
layout: page
title: "Q247071: ICA Auto-Created Printer Functionality May Not Work with TSE SP5"
permalink: /kb/247/Q247071/
---

## Q247071: ICA Auto-Created Printer Functionality May Not Work with TSE SP5

{% raw %}

	Article: Q247071
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kbprint
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading your server to Terminal Server Edition, Service Pack 5, the
	auto-created printer functionality of Independent Computing Architecture (ICA)
	clients may not work, for both administrative and non-administrative users. This
	behavior occurs if clients are connecting from a workstation whose default
	printer is a shared printer from a Windows NT print server.
	
	CAUSE
	=====
	
	This behavior occurs because print servers are not seen as a trusted source for
	Terminal Server printers by default. For additional information about trusted
	sources, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q238070 Computer May Hang if Multiple TSE Users Print Simultaneously
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, use the following steps.
	
	On the print server:
	
	1. Edit the appropriate registry key (where %SystemRoot% is your Windows
	  folder).
	
	2. Locate the folder where your printers reside and share out the folder.
	
	   - Default folder for x86-based computers:
	     %SystemRoot%\System32\Spool\Drivers\W32x86
	
	   - Default folder for Alpha-based computers:
	     %SystemRoot%\System32\Spool\Drivers\W32alpha
	
	3. Set the appropriate permissions on the folder (for example, give users
	  permission to install printer drivers, or only give administrators that
	  ability).
	
	On the console of the Terminal Server computer:
	
	1. Start Registry Editor (Regedt32).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\Current Control Set\Control\Print\Providers\ LanMan
	  Print Services\Servers
	
	3. Locate the following registry value:
	
	  TrustedDriverPath:
	  %SystemRoot%\System32\Spool\Drivers\W32%PROCESSOR_ARCHITECTURE%
	
	4. Change the value to the following:
	
	  TrustedDriverPath:
	  %SystemRoot%\System32\Spool\Drivers\W32%PROCESSOR_ARCHITECTURE%;
	  \\<Servername>\<Sharename>
	
	where <Servername> is the name of your print server and <Sharename>
	is the name of the newly created driver share on the print server.
	
	MORE INFORMATION
	================
	
	Windows NT Server 4.0, Terminal Server Edition, Service Pack 5 does not allow
	auto-created printers unless the driver is already installed locally on the
	Terminal Server computer.
	
	Some printer drivers that are designed for Microsoft Windows NT Workstation and
	Microsoft Windows NT Server are not multiuser aware and can cause instability in
	a Terminal Server environment. You can use this new feature to gain more control
	in your Terminal Server printing environment.
	
	Additional query words: fail failed
	
	======================================================================
	Keywords          : kbenv kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
