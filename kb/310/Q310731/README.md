---
layout: page
title: "Q310731: Zone: Err Msg Connecting to Zone: The Page Cannot Be Displayed"
permalink: /kb/310/Q310731/
---

## Q310731: Zone: Err Msg Connecting to Zone: The Page Cannot Be Displayed

	Article: Q310731
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a link on a Microsoft Zone Web page, your browser may display a
	generic page titled, "The page cannot be displayed". This page, may list a
	specific reason as to why, such as:
	
	  Cannot find server or DNS Error.
	
	  -or-
	
	  HTTP 403 - Forbidden
	
	  -or-
	
	  HTTP 404 - File not found
	
	  -or-
	
	  HTTP 500 - Internal server error
	
	  -or-
	
	  HTTP 503 - Service unavailable
	
	CAUSE
	=====
	
	This behavior can occur if one of the following conditions is true:
	
	- Secure Sockets Layer (SSL) functionality is not turned on.
	- The Zone servers are down for maintenance or are experiencing problems.
	- Pages stored in the Temporary Internet Files folder on your computer are
	  outdated.
	- An Internet accelerator program is installed on your computer.
	- There is an error on the Domain Name Server (DNS) Server being used by your
	  computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	Connecting to a secure (https://) page
	--------------------------------------
	
	1. Start Internet Explorer.
	
	2. On the Tools menu, click Internet Options.
	
	3. On the Advanced tab, scroll down to the Security section, and then select the
	  Use SSL 2.0 and Use SSL 3.0 options.
	
	4. Click OK.
	
	The Zone Servers Are Down or Experiencing a High Load
	-----------------------------------------------------
	
	If you are receiving an error such as 403, the Zone pages are either down for
	maintenance or experiencing a high load. Try connecting to Zone.com again at a
	later time.
	
	Refresh the Current Web Page
	----------------------------
	
	Even if the time stamp for the Web version and your locally stored version are
	the same, pressing CTRL+F5 will force Internet Explorer to download whatever
	copy is currently available on the Internet.
	
	Empty the Temporary Internet Files folder
	-----------------------------------------
	
	1. On the View menu (Internet Explorer 4.x) or Tools menu (Internet Explorer
	  5.0), click Internet Options.
	
	2. Under Temporary Internet Files, click Delete Files, and then click Yes or OK.
	
	3. Click Settings.
	
	4. Under "Check for newer versions of stored pages", click "Every time you start
	  Internet Explorer".
	
	5. Click OK twice.
	
	6. Quit and then restart Internet Explorer.
	
	7. Connect to the Zone.
	
	An Internet Accelerator Program Is Installed
	--------------------------------------------
	
	If an Internet accelerator program is installed on your computer, remove any
	entries for the Zone servers from your Hosts file. To do this, follow these
	steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "hosts" (without the quotation marks).
	
	3. In the Look In box, click My Computer, and then click Find Now.
	
	4. In the list of found files, double-click the Hosts file.
	
	5. In the "Choose the program you want to use" box, click Notepad.
	
	6. Clear the "Always use this program to open this file" check box, and then
	  click OK.
	
	7. Delete any entries that contain a reference to www.zone.com, zone.msn.com, or
	  fdl.msn.com. For example, an entry may look similar to:
	
	  131.107.75.31 www.zone.com
	
	8. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	Verify DNS Server Settings
	--------------------------
	
	If you are receiving a DNS error, the URL of the page you are attempting to
	access may not be correctly associated with its current IP address. As a result,
	your browser will be unable to connect to, and display the page. Verify your DNS
	Server settings with your network administrator or ISP, and make sure the DNS
	servers are working properly.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q241344 Error Message: The Page Cannot Be Displayed
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
