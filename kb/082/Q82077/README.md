---
layout: page
title: "Q82077: FIFLE: Sample Application Demonstrates Using DDEML"
permalink: /kb/082/Q82077/
---

## Q82077: FIFLE: Sample Application Demonstrates Using DDEML

	Article: Q82077
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDDE kbGrpDSUser kbOSWin310 kbOSWin300 kbUser
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dmldemo.exe is a file in the Microsoft Download Center that demonstrates how two
	applications for the Windows environment can communicate using the Dynamic Data
	Exchange Management Libraries (DDEML). Dmldemo.exe demonstrates the following
	types of transactions:
	
	- Connect
	
	- Request
	
	- Asynchronous Request
	
	- Hot Advise Loop
	
	- Warm Advise Loop
	
	NOTE: The DMLDEMO file contains code for a client application and for a server
	application in separate directories. To preserve the directory structure, be
	sure to specify the -d option when extracting the files. For example,
	
	     dmldemo -d
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Dmldemo.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Transactions Types:
	
	The remainder of this article details the five transaction types.
	
	Connect Transaction
	-------------------
	
	The client calls the DdeConnect function to connect to the server and initiate a
	conversation. In the DMLDEMO application, the DdeConnect function starts a
	general conversation, which deals with text and bitmaps, and a SYSTEM
	conversation, which supports the system topic.
	
	Request Transaction
	-------------------
	
	When the client requires information from the server, the client calls the
	DdeClientTransaction function, specifying XTYP_REQUEST as the value for the
	uType parameter. The DMLDEMO client uses a request transaction to retrieve the
	number and type of bitmaps to display. The request transaction is used in both
	synchronous and asynchronous contexts.
	
	Asynchronous Transaction
	------------------------
	
	The client starts an asynchronous transaction with the server to request
	information that may not be ready at the time the client makes the request.
	
	In the DMLDEMO application, the client starts an asynchronous transaction when
	the user chooses Asynchronous Transaction from the Transactions menu. When the
	server receives the request (as an XTYP_REQUEST transaction), it displays a
	dialog box that asks the user how many copies of the window bitmap the client
	should display. After the user dismisses the dialog box, the server returns a
	data handle containing the number the user selected from its callback function.
	When the server has completed the transaction, the DDEML sends an
	XTYP_XACT_COMPLETE to the client application's callback function. The client
	then displays the requested number of bitmaps.
	
	In this case, an asynchronous transaction is required to prevent the transaction
	from timing out before the user has a chance to close the dialog box.
	
	Hot Advise Loop
	---------------
	
	When a hot advise loop is established between a client and a server, the server
	notifies the client (through an XTYP_ADVDATA transaction) each time a certain
	piece of data changes. The notification includes a handle to the changed data.
	When a hot advise loop is active in the DMLDEMO application, the server notifies
	the client that the bitmap has changed (this notification includes a handle to
	the changed bitmap) every time the server's bitmap is changed. (To change the
	bitmap, choose Change Bitmap from the server application's menu.) The client
	application then displays the bitmap.
	
	Warm Advise Loop
	----------------
	
	When a warm advise loop is established between a client and a server, the server
	notifies the client that the specified data has changed, but the server does not
	send the changed data to the client. In the DMLDEMO application, when the client
	receives a notification from the server, the client brings up a message box
	asking the user if the client's window should be updated with the new bitmap
	from the server. If the user chooses the "Yes" button, the client requests the
	changed bitmap from the server using the DdeClientTransaction function,
	specifying XTYP_REQUEST as the value of the uType parameter.
	
	Additional query words: DMLDEMO
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDDE kbGrpDSUser kbOSWin310 kbOSWin300 kbUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
