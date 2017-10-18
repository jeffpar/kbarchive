---
layout: page
title: "Q267865: Can't Access FoxPro Databases on Novell Server with ODBC"
permalink: kb/267/Q267865/
---

## Q267865: Can't Access FoxPro Databases on Novell Server with ODBC

	Article: Q267865
	Product(s): Internet Information Server
	Version(s): 2.1,2.5,4.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 23-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft OLE DB, versions 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you need to use a database that resides on a Netware 5 Server running on
	TCP/IP, and you attempt to access data in the Microsoft FoxPro databases by
	using ODBC, an error message occurs stating that the file cannot be opened. The
	UNC path has been verified as working and a virtual directory pointing to the
	database location shows the files from within the Internet Server Manager. The
	Gateway Services are not installed nor is the NWLink IPX Protocol.
	
	The following OLEDB Provider error message occurs for Microsoft FoxPro:
	
	  Microsoft OLE DB Provider for ODBC Drivers error '80004005'
	  [Microsoft][ODBC Visual FoxPro Driver]Cannot open file
	
	CAUSE
	=====
	
	The authentication method that is being used does not provide the Netware
	Directory Services (NDS) the proper credentials to authenticate and view the
	file system. Therefore, the request is rejected. In previous versions of
	Netware, Windows NT used the Gateway Services for Netware (GSNW) to allow for
	authentication to the Netware file system. However, this option is currently not
	available on Netware 5 Servers using TCP/IP. The GSNW is dependent on the
	IPX/SPX protocol.
	
	The root cause of this is the user context that is inherently being sent to the
	Netware 5 Server. Because all access is being done through IIS, the credentials
	that are being passed are that of the IUSR_Machine Name account.
	
	RESOLUTION
	==========
	
	To resolve this problem and allow access to Microsoft FoxPro databases on a
	Netware 5 Server that is running only TCP/IP, perform the following steps
	exactly:
	
	1. On the IIS computer that is attempting to communicate with Microsoft FoxPro,
	  install Novell Netware Client for Windows NT (Required). During setup, choose
	  a custom installation, choose to install into a NDS system, and only choose
	  ip for the protocol. Do not install Workstation Manager.
	
	
	2. Install MDAC 2.5, which can be obtained from the following location:
	
	  http://www.microsoft.com/data/ (http://www.microsoft.com/data/)
	
	3. Create an ODBC System DSN by using the Microsoft dBase VFP driver. Give the
	  DNS a name and configure the following settings:
	
	   - In the Database type section, choose Free Table Directory.
	
	   - For the path, enter the Universal Naming Convention (UNC) to the Netware
	     File System where the database resides.
	
	   - Under options, click to uncheck the Fetch Data in Background setting.
	
	4. On the computer running Windows NT and IIS, use User Manager to change the
	  IUSR password. In the Internet Service Manager, get the properties of the
	  localhost, and then click Edit in the Master Properties section. Click the
	  Directory Security tab. Under the Anonymous access section, click the Edit
	  button, and then click to uncheck the option for Windows NT to synchronize
	  the password. Change the password to match the one that is set in User
	  Manager. Stop and restart the IIS Services, and test that anonymous access is
	  still working.
	
	5. Open the Netware Administrator located on the sys: volume in the Public\WIN32
	  folder of the Netware 5 Server. In the root of the container where the server
	  exists, create an IUSR_Machine Name account that is identical to the one on
	  the Windows NT Server computer. In the properties for that user, click
	  Password Restrictions, and then make sure that only the Require password
	  option is checked and nothing else. Click the Set Password button and set it
	  to that of the Windows NT account. Do not require passwords to be changed on
	  the Netware system.
	
	  NOTE: This is the most crucial step to the entire process.
	
	6. In Netware Administrator, under the newly created IUSR properties, click the
	  Rights to files and directories tab, and then add the appropriate rights to
	  the database files that need to be accessed. Give at least Read permissions,
	  unless changes will be made through the Internet, which requires all
	  permissions except Supervisor and Access Control.
	
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
	
	
	For installation instructions for the GSNW, please refer to the Windows NT 4.0
	End-User Manual.
	
	MORE INFORMATION
	================
	
	For additional information using these procedures with IIS 5.0, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q271214 Unable to Access FoxPro Databases on Netware 5 Server from IIS 5.0
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: foxpro access database mdac 2.5 2.1
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbAudDeveloper kbiis400 kbOLEDBSearch kbOLEDB210 kbOLEDB250
	Version           : :2.1,2.5,4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
