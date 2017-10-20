---
layout: page
title: "Q169896: Network DDE Application Will Not Connect Via Network DDE"
permalink: /kb/169/Q169896/
---

## Q169896: Network DDE Application Will Not Connect Via Network DDE

{% raw %}

	Article: Q169896
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a client application uses Network DDE to connect to a remote DDE server
	application, the connection appears successful. However, the applications cannot
	communicate through DDE and you may receive the following error message:
	
	  DDE Method invoked with no channel.
	
	CAUSE
	=====
	
	When establishing a DDE conversation to a remote DDE server (source) using
	Network DDE, it is important that two operations are performed correctly. You
	may experience the symptoms listed above if the following two operations are not
	correctly performed:
	
	1. The DDESHARE must be created correctly on the DDE server computer using the
	  Windows NT utility, Ddeshare.exe.
	
	2. The DDE client application must be written to correctly attempt a
	  conversation to the remote Network DDE share.
	
	MORE INFORMATION
	================
	
	DDESHARE
	--------
	
	For more information on creating DDE Shares, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q114089 Using the Windows NT NetDDE Share Manager
	
	The information below assumes that a Share has been configured for the Sales.xls
	spreadsheet in Excel 97 and is based on the following article in the Microsoft
	Knowledge Base:
	
	  Q128491 Creating a NetDDE Link in Excel on Windows NT
	
	  Sharename:  SalesData$
	  Application Name:
	     Old Style:  Excel
	     New Style:  Excel.Sheet.5
	     Static:     Excel
	
	  Topic Name:
	
	     Old Style:  [SALES.XLS]Sheet1
	     New Style:  SALES.XLS
	     Static:     SALES.XLS
	
	  [x]   Allow start application
	  [x]   is service
	
	The different styles listed reflect the different types of client applications
	that may attempt to connect to the server (and the different forms of DDE that
	they may use). For example, a DDE client that uses DDEML (DDE Management
	Library), such as Excel 97, accesses the DDE server through the share
	information listed in the New Style setting.
	
	Connecting Locally
	------------------
	
	A DDE client requires an application name and topic name in order to connect to a
	DDE server. When the DDE server and client are on the same computer, and Network
	DDE is NOT being used, the client attempts to connect to the server using
	something similar to the following:
	
	Using the Old Style (Message Based DDE) you would use these values:
	
	     Application:  EXCEL
	     Topic:        [SALES.XLS]Sheet1
	
	Using the New Style (DDE Management Library (DDEML) based) you would use these
	values (for Excel 97):
	
	     Application:  Excel.Sheet.8
	     Topic:        SALES.XLS
	
	Performing a DDE Request for Item: R1C1 returns the value in Row 1 Column 1 on
	Sheet 1 of the Sales.xls spreadsheet in both of these examples.
	
	Connecting Through Network DDE
	------------------------------
	
	When the DDE server and client are on different computers, and Network DDE is
	used to connect them, the client attempts to connect to the server using the
	following rules.
	
	- Old Style clients that employ DDE using low-level DDE messaging directly
	  access the network DDE server with a TOPIC name that has the .dde extension
	  appended to the sharename defined by Ddeshare.exe on the DDE server:
	
	     Application:  \\SERVERNAME\NDDE$
	     Topic:        SALESDATA$.DDE
	
	- New Style clients that employ the DDE Management Library (DDEML) access the
	  network DDE server with a TOPIC name that has the .OLE extension appended to
	  the sharename defined by Ddeshare.exe on the DDE server:
	
	     Application:  \\SERVERNAME\NDDE$
	     Topic:        SALESDATA$.OLE
	
	- Static Style clients (applications using Static DDE links) access the network
	  DDE server with a TOPIC name that matches the sharename defined by
	  Ddeshare.exe on the DDE server:
	
	     Application:  \\SERVERNAME\NDDE$
	     Topic:        SALESDATA$
	
	Performing a DDE Request for Item: R1C1 returns the value in Row 1 Column 1 on
	Sheet 1 of the Sales.xls spreadsheet for all of these client types.
	
	The true Application and Topic names that are necessary to connect to the
	application are not required by the DDE client, but must be correctly configured
	with DDESHARE on the server. It is also important to ensure that your client is
	using the appropriate Topic name (with the correct extension) for the entries
	defined by DDESHARE.
	
	Additional query words: networking
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : WINDOWS:3.11,95; winnt:3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
