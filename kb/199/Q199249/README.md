---
layout: page
title: "Q199249: How to Configure SQL Server User Connections for SMS 2.0"
permalink: /kb/199/Q199249/
---

## Q199249: How to Configure SQL Server User Connections for SMS 2.0

	Article: Q199249
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 09-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When setting up a Systems Management Server 2.0 primary site server, you are
	prompted to configure the maximum number of user connections for your SQL
	Server. This article describes how the setup program determines the default
	number of connections and how you can change this setting after the Systems
	Management Server site server is installed.
	
	Systems Management Server 2.0 requires 50 user connections for the use of the
	site server and the Systems Management Server services that run on the server
	plus 5 user connections for each SMS Administrator console that will run
	concurrently.
	
	When you set up Systems Management Server, the setup program calculates the
	number of connections based on the number of SMS Administrator consoles you
	specify. For example, if you configure Systems Management Server setup with 5
	Administrator consoles, setup configures 75 user connections:
	
	  50 connections for the server
	
	  + 25 connections for SMS Administrator consoles (5 connections * 5 consoles)
	
	  -----------------------------------------
	
	  = 75 User Connections
	
	This formula produces an estimate of the number of connections required. The SMS
	Administrator console uses SQL Server connections based on the number of
	connections needed to retrieve the data requested by the user. For most users, 5
	connections should be sufficient but the number of connections you require might
	vary.
	
	MORE INFORMATION
	================
	
	If you find that you have an insufficient number of user connections available,
	you can increase the number using SQL Enterprise Manager or ISQL/w.
	
	To add user connections using SQL Enterprise Manager:
	
	1. Expand the server group, right-click your SQL Server, and then click
	  Configure on the shortcut menu.
	
	2. On the Configuration tab, change the number of User Connections specified.
	
	3. Restart MSSQLServer service using either the Control Panel or SQL Service
	  Manager.
	
	To add user connections using ISQL/w:
	
	1. Load ISQL/w and click the Query tab.
	
	2. In the Query window, type and execute the following queries
	
	  
	
	  sp_configure "User Connections", X
	  reconfigure
	
	  where x is the number of user connections you want to configure. You can
	  execute these queries seperately or together; to run them together, add "GO"
	  on the line following "reconfigure".
	
	Additional query words: SQL User Connections Administrator smssql prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
