---
layout: page
title: "Q313178: PRB: Error Establishing Socket with JDBC Driver"
permalink: kb/313/Q313178/
---

## Q313178: PRB: Error Establishing Socket with JDBC Driver

	Article: Q313178
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 
	Operating System(s): 
	Keyword(s): kbJDBC kbDSupport kbSQLServ2000 kbSQLServSearch kbAudDeveloper kbSystemData
	Last Modified: 03-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server 2000 Driver for JDBC 
	- Microsoft SQL Server 2000 (all editions) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to make a connection to SQL Server 2000 by using the Microsoft SQL
	Server 2000 Driver for JDBC, you may receive the following error message:
	
	  java.sql.SQLException: [Microsoft][SQLServer 2000 Driver for JDBC]Error
	  establishing socket.
	
	MORE INFORMATION
	================
	
	The following are some of the most common reasons why this error can occur, and
	how to determine if one of these reasons applies to your connection:
	
	- The server name or IP address is incorrect.
	
	  To test basic connectivity to your server, use the ping command from a command
	  prompt. This will verify that you have network connectivity to that server,
	  but it will not confirm if the SQL Server can accept connections.
	
	- The server name is correct, but the server is not running.
	
	  You can verify whether or not your server is running from the SQL Server
	  Network Utility on the server, or from another client utility such as SQL
	  Query Analyzer, or a command line utility such as osql.
	
	  For more information about these tools, see SQL Server Books Online.
	
	- The server name is correct and it is running, but the server does not have
	  TCP/IP enabled.
	
	  To check the enabled protocols for a server, follow these steps:
	
	  1. In SQL Server 2000, start the SQL Server Network Utility (svrnetcn.exe).
	
	  2. On the General tab, select the instance of Microsoft SQL Server on which to
	  load an installed server network library.
	
	  3. Make sure that TCP/IP appears in the Enabled Protocols list.
	
	- The server name is correct, the server is running and TCP/IP is enabled, but
	  you have specified the incorrect port number in your JDBC connection URL.
	
	  NOTE: The driver does not connect to a named instance by name. You must use
	  the port number to connect to the named instance. To find the SQL Server
	  instance port number, follow these steps:
	
	  1. Follow the earlier instructions for how to view the protocols that are
	  installed on your server.
	
	  2. In the Enabled Protocols list, click TCP/IP, and then click Properties. The
	  Properties dialog box displays the port number.
	
	  For additional information about connecting to a SQL Server named instance,
	  click the article number below to view the article in the Microsoft Knowledge
	  Base:
	
	  Q313225 HOWTO: Connect to a SQL Server 2000 Named Instance with JDBC
	
	- If the problem is intermittent, it might be due to network problems or due to
	  server problems (for example, the server is occasionally too busy to accept a
	  connection). When the problem occurs, check to see if you can connect to the
	  same server instance from another client, such as SQL Query Analyzer. It may
	  also be useful to use a Network Sniffer such as Network Monitor (NetMon) to
	  monitor traffic between the client and the server to determine if there is a
	  network problem.
	
	  For additional information about using NetMon, click the article number below
	  to view the article in the Microsoft Knowledge Base:
	
	  Q148942 How to Capture Network Traffic with Network Monitor
	
	- If the problem is not intermittent, it might still be a network configuration
	  problem. For example, you may be behind a firewall that blocks certain
	  ports.
	
	  For additional information about configuring SQL Server to work behind a
	  firewall, click the article number below to view the article in the Microsoft
	  Knowledge Base:
	
	  Q287932 INF: TCP Ports Needed for Communication to SQL Server Through a
	  Firewall
	
	Additional query words:
	
	======================================================================
	Keywords          : kbJDBC kbDSupport kbSQLServ2000 kbSQLServSearch kbAudDeveloper kbSystemData 
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ2000Search kbSQLServ2000 kbSQLServJDBC
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
