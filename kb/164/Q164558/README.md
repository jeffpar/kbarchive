---
layout: page
title: "Q164558: Configuring MSNDS to Log in to a NetWare Bindery Server"
permalink: /kb/164/Q164558/
---

## Q164558: Configuring MSNDS to Log in to a NetWare Bindery Server

{% raw %}

	Article: Q164558
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork win95
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Service for NetWare Directory Services (MSNDS) enables Windows 95
	clients to connect to Novell NetWare 4.x networks using NetWare Directory
	Services (NDS). MSNDS can also be configured to log in and connect to NetWare
	3.x or other bindery-based NetWare servers not using NDS.
	
	MORE INFORMATION
	================
	
	To configure MSNDS to log in to a bindery server instead of to an NDS directory
	tree, follow these steps:
	
	1. If you have not already done so, install the Microsoft Client for NetWare
	  Networks and the Microsoft Service for NetWare Directory Services on the
	  Windows 95-based computer.
	
	2. In the Network tool in Control Panel, double-click the Client for NetWare
	  Networks component to view its properties. In the Preferred Server box on the
	  General tab, enter the name of the bindery server you will be logging in to.
	  Click OK to save this setting.
	
	3. In the Network tool in Control Panel, set the Primary Network Logon setting
	  to Client For NetWare Networks. Click OK to save this setting.
	
	4. Click the Start button, click Shut Down, click "Close all programs and log on
	  as a different user," and then click Yes.
	
	5. In the Enter Network Password dialog box, click Advanced, and then click "Log
	  in to a bindery server." The name of the preferred server you entered in step
	  2 should appear. If not, enter the preferred server name. Click OK, and then
	  type your password to log on to the NetWare bindery server.
	
	For additional information about the Microsoft Service for NetWare Directory
	Services (MSNDS), see the following article(s) in the Microsoft Knowledge Base:
	
	  Q138709 Microsoft Service for NetWare Directory Services Available
	
	  Q138596 Microsoft Service for NetWare Directory Services Readme.txt
	
	Additional query words: nwredir
	
	======================================================================
	Keywords          : kbnetwork win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
