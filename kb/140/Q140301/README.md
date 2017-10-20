---
layout: page
title: "Q140301: How to Change the Hostname on SQL Server"
permalink: /kb/140/Q140301/
---

## Q140301: How to Change the Hostname on SQL Server

{% raw %}

	Article: Q140301
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp600
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to change the hostname on a remote connection
	to SQL Server. The example works assuming that you have first created a data
	source to SQL Server. This article will not discuss how to create the data
	source. Being able to change the hostname to the application name allows an
	administrator of SQL Server to see which users are currently logged on and what
	applications are running.
	
	MORE INFORMATION
	================
	
	There are two ways to connect to SQL Server in Visual FoxPro through the user
	interface. You can use one of the available datasources or you can use one of
	the available connections. To connect to SQL Server, you do not need to use a
	connection string. You must, however, make the changes documented here:
	
	1. Create a new connection by selecting connections from the data tab in the
	  Project Manager.
	
	2. Click the New button. The connection dialog box will appear. Select
	  Connection String. A new connection string text box will appear. You will
	  need to know the following information:
	
	  DSN = The name of the data source.
	  UID = The user login ID.
	  PWD = The user specified password.
	  WSID = The desired "Hostname"
	
	  For example:
	
	  DSN = "Test"
	  UID = "sa"
	  PWD = "password"
	  WSID = "My App"
	
	3. In the new connection string text box, type:
	
	  " dsn=Test;uid=sa;pwd=password;wsid=My App " (without the quotation marks)
	
	4. Save this connection as Connect 1. Use this connection when creating a new
	  remote view. Start a Windows session of ISQL/W. In the query window type:
	
	  " sp_who " (without the quotation marks)
	
	5. Press CTRL+E, or click the Execute button. "My App" will display as the
	  hostname.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP600
	Version           : WINDOWS:3.0,6.0
	
	=============================================================================
	

{% endraw %}
