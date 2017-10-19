---
layout: page
title: "Q271214: Can't Access FoxPro Databases on Netware 5 Server from IIS 5.0"
permalink: /kb/271/Q271214/
---

## Q271214: Can't Access FoxPro Databases on Netware 5 Server from IIS 5.0

	Article: Q271214
	Product(s): Internet Information Server
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 23-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft ODBC Driver for Visual FoxPro (Build 6.00.8281.00), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a Microsoft FoxPro database from an Internet
	Information Services (IIS) 5.0 Active Server Page (ASP), the following error
	message occurs:
	
	  Microsoft OLE DB Provider for ODBC Drivers error '80004005'
	  [Microsoft][ODBC Visual FoxPro Driver]Cannot open file
	
	CAUSE
	=====
	
	For access to be granted to the Netware File System, IIS must pass credentials
	with the appropriate permissions for the databases that are attempting to be
	accessed. By default, IIS attempts to pass credentials for the IUSER_MachineName
	account.
	
	NOTE: The IUSER_MachineName account appears as though it is being used by IIS 5.0
	Web sites that are being run out of process. However, the IWAM_Machine Name
	account impersonates the IUSER_Machine Name account. Therefore, the IUSER
	account is the only account discussed in the following resolution.
	
	Netware uses the Netware Directory Service to authenticate users to its servers.
	To access any file systems, a legitimate account for the credentials that are
	being passed must exist on the Netware server.
	
	RESOLUTION
	==========
	
	To resolve this problem and allow access to Microsoft FoxPro databases on a
	Netware 5 Server that is running only TCP/IP, perform the following steps
	exactly:
	
	1. On the IIS computer that is attempting to communicate with Microsoft FoxPro,
	  install Novell Netware Client for Windows NT (Required). During setup, choose
	  a custom installation, choose to install into an NDS system, and only choose
	  ip for the protocol. Do not install Workstation Manager.
	
	2. On the Windows 2000 IIS 5.0 computer, open the Computer Management Snap-in
	  (under Administrative Tools). Under Local Users, right-click the
	  IUSER_Machine Name account, and then click Set Password. Change the password,
	  save it, and then close the MMC.
	
	3. In the Internet Services Manager, do the following:
	
	  a. Right-click the server name (for example, MYWEB01) under Internet
	     Information Services.
	
	  b. Click the Edit button next to WWW to open the master properties.
	
	  c. On the Directory Security tab, click the Edit button next to Anonymous and
	     Authentication methods.
	
	  d. On the Authentication Methods tab, click Edit under the Anonymous section
	     to open the Anonymous User properties.
	
	  e. Click to uncheck the option for IIS to control the password, and then
	     enter the password that you changed in step 2.
	
	4. Create an ODBC System DSN by using the Microsoft dBase VFP driver. Give the
	  DNS a name and configure the following settings:
	
	   - In the Database type section, choose Free Table Directory.
	
	   - For the path, enter the Universal Naming Convention (UNC) to the Netware
	     File System where the database resides.
	
	   - Under options, click to uncheck the Fetch Data in Background setting.
	
	5. Open the Netware Administrator located on the sys: volume in the Public\WIN32
	  folder of the Netware 5 Server. In the root of the container where the server
	  exists, create an IUSR_Machine Name account that is identical to the one on
	  the Windows NT Server computer. In the properties for that user, click
	  Password Restrictions, and then make sure that only the Require password
	  option is checked and nothing else. Click the Set Password button and set it
	  to that of the Windows NT account. Do not require passwords to be changed on
	  the Netware system.
	
	  NOTE: This is the most crucial step to the entire process.
	
	6. In Netware Administrator, open the properties for the newly created IUSER,
	  click the Rights to files and directories tab, and then add the appropriate
	  permissions to the database files that need to be accessed. Give at least
	  Read permissions, unless changes will be made through the Internet, which
	  requires all permissions except Supervisor and Access Control.
	
	NOTE: For access to be granted, the Netware Server requires that both the .dbf
	and .cdx files exist in the same directory. If only the .dbf file exists, the
	error message appears.
	
	
	Test your application to see the data that you are attempting to access.
	
	WORKAROUND
	==========
	
	If the above resolution is not satisfactory, a workaround can be produced that
	is typically used in older Netware versions. By using GSNW, a connection to the
	Netware 5 Server can be established with the IPX/SPX protocol. Please note,
	however, that this requires that IPX be added to both the Netware 5 Server and
	Windows NT Server.
	
	
	For installation instructions for the GSNW, please refer to the Windows 2000
	End-User Manual.
	
	MORE INFORMATION
	================
	
	For additional information using these procedures with IIS 4.0, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q271228 Unable to Access FoxPro Databases on Novell Server by Using ODBC on
	  IIS 4.0
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: iis 5 foxpro mdac 2.1 2.5
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbVFPsearch kbiisSearch kbAudDeveloper kbiis500 kbODBCSearch kbODBCVFP600828100
	Version           : :5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
