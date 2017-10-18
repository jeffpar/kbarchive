---
layout: page
title: "Q234491: XFOR: Configuring Notes Application Connector as WinNT Service"
permalink: kb/234/Q234491/
---

## Q234491: XFOR: Configuring Notes Application Connector as WinNT Service

	Article: Q234491
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure the Microsoft Exchange Application
	Connector for Lotus Notes to run as a Windows NT service. You should manually
	configure and run the Application Connector before installing the service. This
	ensures that all the settings are correct.
	
	MORE INFORMATION
	================
	
	The Application Connector can be configured to run as a Windows NT service. The
	advantages include automatic replication scheduling, automatic startup
	independent of user logon, remote starting and stopping, and performance
	monitoring.
	
	To configure the connector as a Windows NT service:
	
	1. Open a command prompt window.
	
	2. Change directory to the Application Connector program directory.
	
	3. Type the following command:
	
	  "appconservice -i" (without the quotation marks)
	
	4. In Control Panel, double-click Services. In the Service list box, select the
	  Microsoft Exchange Application Connector service.
	
	5. Click Startup. You can select the startup type to be Automatic, Manual, or
	  Disabled. Select Automatic.
	
	6. Under Log On As, select This Account, and browse for the account used to run
	  the Application Connector Administrator program. Type, and confirm the
	  password.
	
	7. Click OK.
	
	The connector is now configured to run as a Windows NT service.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
