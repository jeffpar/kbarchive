---
layout: page
title: "Q218994: How to Assign Printers to Terminal Server Clients"
permalink: /kb/218/Q218994/
---

## Q218994: How to Assign Printers to Terminal Server Clients

	Article: Q218994
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Terminal Server administrators may want to prevent their Terminal Server clients
	from seeing all the locally created printers in the Printers folder or when
	selecting a printer from within an application.
	It is possible to assign a specific printer or printers to an individual user or
	to groups of users by simply modifying the permissions to the printer or
	printers.
	
	To achieve this fuctionality, you will first need to install the updated version
	of Localspl.dll on the Terminal Server.
	
	For additional information about obtaining this file, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q196666 Users Can See Administrator Auto-Created Client Printers in Apps
	
	MORE INFORMATION
	================
	
	To assign a printer to a Terminal Server client, follow these steps:
	
	1. Create the printers locally on the server through LPT, LPR, DLC, Local Port,
	  and so on. For more information on creating local printers, click Help on the
	  menu bar in the Printers folder.
	
	2. Open the Printers folder and right-click the printer you want to assign.
	
	3. Click Properties.
	
	4. Click the Security tab, and then click Permissions.
	
	5. This will display the Printers Permissions Applet where security for the
	  printer can be modified
	
	6. Select the "Everyone" name and click Remove. This should leave Administrators
	  and PowerUsers with Full Control and Creator Owner with Manage Document
	  permissions.
	
	7. Add the user or users you want to allow to see and use this printer and give
	  them the Print permission.
	
	8. Perform these steps on each printer you want to assign.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
