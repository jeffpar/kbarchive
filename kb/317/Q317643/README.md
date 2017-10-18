---
layout: page
title: "Q317643: MechWarrior 4: Computer Hangs When You Start  MechWarrior 4"
permalink: kb/317/Q317643/
---

## Q317643: MechWarrior 4: Computer Hangs When You Start  MechWarrior 4

	Article: Q317643
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance, used with:
	   - the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start MechWarrior 4 on your Pentium 4 Sony computer, your
	computer stops responding. The installation process stops responding before the
	autoconfiguration utility starts.
	
	CAUSE
	=====
	
	This issue can occur because there are services that are incompatible with
	MechWarrior in the startup group. This issue occurs with a Pentium 4 Sony
	computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, restart your computer with a diagnostic startup, or
	disable the default Windows XP service. To do this, follow these steps:
	
	Restart Computer with Diagnostic Startup
	----------------------------------------
	
	Restart your computer by using a diagnostic startup. To do this, follow these
	steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. Click "Diagnostic startup", click Apply, and then click OK.
	
	  When prompted, restart your computer.
	
	Disable the Default Wireless Zero Configuration
	-----------------------------------------------
	
	To disable the default Wireless Zero Configuration, follow these steps:
	
	1. Click Start, and then click Control Panel.
	
	2. Double-click Network Connections.
	
	3. Right-click Wireless Network Connection, and then click Properties.
	
	4. Click to clear the "Use Windows to configure my wireless network settings"
	  check box, and then click OK.
	
	Troubleshoot with Msconfig
	--------------------------
	
	Before you begin a troubleshooting session, you can use the System Configuration
	Utility to initiate a System Restore operation. To do this, click the General
	tab, and then click Launch System Restore. You can then create a restore point
	in which you can use to restore your computer to a previous state.
	
	To prevent individual items or lines of a specific configuration file from
	loading when you restart your computer, click the tab for that particular
	configuration file (for example, SYSTEM.INI, WIN.INI, BOOT.INI), and then click
	to clear the check box for the individual line or item that you do not want to
	load. Check boxes that appear dimmed and are unavailable in the SYSTEM.INI and
	WIN.INI tabs indicate that the lines are temporarily removed by the System
	Configuration Utility.
	   - To change the currently active line or item, click a different line or
	     item, or click Move Up or Move Down to move between items.
	
	   - To create a new entry in any of the configuration files, click New.
	
	   - To edit a line that is currently selected, click the Edit.
	
	NOTE: When you click to clear a check box for an item or a line, the Selective
	Startup option (in the General tab) is automatically selected.
	
	After you make the selections that you want, click OK, and then restart the
	computer when you are prompted to initiate the changes.
	
	To extract individual Windows files directly from the cabinet files, click the
	General tab, and then click Expand File.
	
	To ensure that all the configuration files and all the items that are listed in
	those files load when you restart your computer, click the General tab, and then
	click Normal startup.
	
	MORE INFORMATION
	================
	
	The Wireless Zero Configuration service is Windows XP service that is used to
	configure wireless networks. If your computer does not have a wireless NIC card,
	you do not need this service. Also, some wireless NIC cards are not compatible
	with this service.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	For additional information about how to troubleshoot Windows XP, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q310560 How to Troubleshoot By Using the Msconfig Utility in Windows XP
	
	Additional query words: msgame, freeze, hang, black screen, mechwarrior vengeance
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
