---
layout: page
title: "Q179266: FP: No Server on Port &lt;Number&gt; at &lt;Server Name&gt;"
permalink: kb/179/Q179266/
---

## Q179266: FP: No Server on Port &lt;Number&gt; at &lt;Server Name&gt;

	Article: Q179266
	Product(s): Word Front Page
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2000 
	- Microsoft FrontPage 97 for Windows 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194036.
	
	SYMPTOMS
	========
	
	When you open or create a new FrontPage Web in FrontPage Explorer, the following
	message appears
	
	  No server on port <port number> at <server name>.
	
	where <port number> is the number of the port you are connected to (the
	default port is 80) and <server name> is the name of the server.
	
	CAUSE
	=====
	
	You may receive this error message in any of the following cases:
	
	Case 1: The Microsoft Personal Web Server is not running. Or, it is not running
	on the port that is specified by the error message.
	
	Case 2: The specified server does not exist, is not running, or does not have a
	Web server running on the port that issued the error message.
	
	Case 3: The FrontPage Server Extensions are not installed on the FrontPage
	Personal Web Server.
	
	Case 4: You are using a laptop computer and the Windows 95 power conversion
	option is turned on. When the Power Manager is turned on, it broadcasts a "shut
	down" message to all hardware devices. When the Network Device Interface
	Specification (NDIS) device receives the broadcast, it shuts down the network
	card, essentially indicating that the card has been removed. TCP/IP is also
	notified and the TCP/IP stack is removed. When the power conservation mode shuts
	down the device, the Personal Web Server generates a bind to port error message
	even though it is running normally.
	
	RESOLUTION
	==========
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	Case 1
	------
	
	1. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click the Personal Web Server icon.
	
	3. Click the Startup tab.
	
	4. Click Start.
	
	5. Click to select the "Show the Web server icon on the task bar" check box.
	
	6. Click OK. NOTE: To confirm that the Personal Web Server is running, check to
	  see if the Personal Web Server icon appears in the System Tray (located at
	  the opposite end of the Windows Task bar from the Start menu).
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  QQ150684 FP: No Server on Port... Error Opening, Creating Web Page
	
	Case 2
	------
	
	1. Verify that you typed the correct Web server name.
	
	2. Verify that you are connected to the Internet if you are attempting to
	  connect to a remote server. Check any of the following that apply: a. If you
	  are connected to the Internet, make sure that the Web server is up and the
	  HTTP service is running. For information about how to test the connection
	  between your computer and the Web server, follow the steps in the "More
	  Information" section of this article. b. If you are connected to a proxy
	  server, make sure that it is configured correctly for FrontPage Explorer. To
	  do this, click Options on the Tools menu. In the Options dialog box, click
	  Proxies. If you do not know what proxy settings you need to use, contact your
	  Network Administrator. c. If you are connected to a proxy server and you are
	  accessing a server behind a firewall, make sure that you have specified that
	  this server is on the intranet. To do this, follow these steps: 1) On the
	  Tools menu, click Options. 2) In the Options dialog box, click Proxies. 3) In
	  the "List of Hosts without Proxy" box, type the name of the server. If the
	  server is located on a port other than port 80, type a colon and the port
	  number after the server name, so that it looks similar to this:
	  servername:8080
	
	Case 3
	------
	
	The FrontPage Personal Web server will not start automatically if the FrontPage
	Server Extensions are not installed. To install the FrontPage Server Extensions,
	follow these steps:
	
	1. On the Windows Start menu, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "Fpsrvwin.exe" (without the quotation marks). In the
	  Look In list, select the hard disk on which you installed FrontPage. Click
	  Find Now.
	
	3. In the list of files found, double-click the Fpsrvwin.exe file.
	
	4. In the FrontPage Server Administrator, click Install.
	
	5. In the Server Type list, click FrontPage Personal Web Server. Click OK.
	
	6. In the Server Configuration dialog box, click Browse.
	
	7. Select the \FrontPage Webs\Server\Conf\Httpd.cnf file and click Open.
	
	8. Type a user name and password and then click OK.
	
	Case 4
	------
	
	For additional information about running FrontPage on a laptop computer, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q151349 No Server on Port 80 After Laptop Computer Has Been Idle
	
	MORE INFORMATION
	================
	
	You can use a diagnostic tool such as PING to determine whether your computer
	can communicate via TCP/IP to the server that you are attempting to access.
	
	PING is a low level utility that will let you know if your computer and the
	server can communicate with each other and how long it takes for information to
	travel from one computer to the next. To use PING, follow these steps:
	
	1. Connect to the Internet.
	
	2. On the Windows Start menu, point to Programs, and then click MS-DOS Prompt.
	
	3. At the command prompt, type the following: ping www.microsoft.com NOTE: You
	  must be connected to the Internet in order to ping Microsoft.com. This will
	  not work if you are behind a firewall.
	
	4. If you receive either of the following messages, check your TCP/IP stack or
	  contact your Internet Service Provider for assistance. - Destination host
	  unreachable. -or- - Request timed out.
	
	Additional query words: fpexplorer tcp/ip no server on port 80 front page
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage2000Search kbFrontPage1xSearch kbFrontPage97Search kbFrontPage110 kbZNotKeyword5
	Version           : :1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
