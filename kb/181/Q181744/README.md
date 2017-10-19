---
layout: page
title: "Q181744: FP: How to Change Where FrontPage Content is Stored in MS PWS"
permalink: /kb/181/Q181744/
---

## Q181744: FP: How to Change Where FrontPage Content is Stored in MS PWS

	Article: Q181744
	Product(s): Word Front Page
	Version(s): 1.0,1.0a,4.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 03-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	- Microsoft Personal Web Server versions 1.0, 1.0a, 4.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194159.
	
	SUMMARY
	=======
	
	This article describes how to move the Microsoft Personal Web Server content
	from the default location (C:\Webshare\Wwwroot) to a different location.
	
	MORE INFORMATION
	================
	
	To move content from the default location on the Microsoft Personal Web Server
	to a new location, use the appropriate method for your situation.
	
	Method 1: If You Are Using Microsoft Personal Web Server 4.0
	------------------------------------------------------------
	
	1. Run the FrontPage Server Administrator and uninstall the FrontPage Server
	  Extensions.
	  a. On the Windows Start menu, click Run.
	
	  b. In the Open box, type "c:\Program Files\Microsoft FrontPage\version
	     3.0\bin\fpsrvwin" (with the quotation marks) and click OK.
	
	     NOTE: If you installed FrontPage to a folder other than the default folder,
	     change the path to reflect the correct folder.
	
	  c. Click Uninstall.
	
	2. Move the Personal Web Server content folder to a new location. For example,
	  move the C:\Inetpub\wwwroot folder to drive D (D:\Inetpub\wwwroot). To do
	  this, follow these steps:
	  a. On the Windows Start menu, point to Programs, and then click Windows
	     Explorer.
	
	  b. Drag the Personal Web Server content folder to drive D.
	
	3. On the Windows Start menu, point to Programs, point to Microsoft Personal Web
	  Server, and then click Personal Web Manager.
	
	4. Switch to Advanced view.
	
	5. Click the <Home> directory and then click Edit Properties.
	
	6. Type the new location of the Personal Web Server content and click OK.
	
	7. Run the FrontPage Server Administrator and install the FrontPage Server
	  Extensions.
	  a. On the Windows Start menu, click Run.
	
	  b. In the Open box, type "c:\Program Files\Microsoft FrontPage\version
	     3.0\bin\fpsrvwin" (with the quotation marks) and click OK.
	
	     NOTE: If you installed FrontPage to a folder other than the default folder,
	     change the path to reflect the correct folder.
	
	  c. Click Install.
	
	  d. In the Server Type list, click Microsoft Personal Web Server and click OK.
	
	  e. When the installation is complete, click Close.
	
	Method 2: If You Are Using Microsoft Personal Web Server 1.0 or 1.0a
	--------------------------------------------------------------------
	
	1. Run the FrontPage Server Administrator and uninstall the FrontPage Server
	  Extensions.
	  a. On the Windows Start menu, click Run.
	
	  b. In the Open box, type "c:\Program Files\Microsoft FrontPage\version
	     3.0\bin\fpsrvwin" (with the quotation marks) and click OK.
	
	     NOTE: If you installed FrontPage to a folder other than the default folder,
	     change the path to reflect the correct folder.
	
	  c. Click Uninstall.
	
	2. Move the Personal Web Server content folder to a new location. For example,
	  move the C:\Webshare\wwwroot folder to drive D (D:\Webshare\wwwroot). To do
	  this, follow these steps:
	  a. On the Windows Start menu, point to Programs, and then click Windows
	     Explorer.
	
	  b. Drag the Personal Web Server content folder to drive D.
	
	  a. b.
	
	3. Run the Personal Web Server Administrator by following these steps:
	  a. On the Windows Start menu, point to Settings, and then click Control
	     Panel.
	
	  b. Double-click the Personal Web Server icon.
	
	  c. Click the Administration tab.
	
	  d. Click Administration.
	
	  e. Click WWW Administration.
	
	  f. Click the Directories tab.
	
	  g. Select the C:\Webshare\Wwwroot directory and then click Edit in the Action
	     column.
	
	  h. Type the new location for the Personal Web Server content, and click OK.
	
	     Repeat this step for each directory beginning with c:\Webshare.
	
	  i. Click OK.
	
	4. Run the FrontPage Server Administrator and install the FrontPage Server
	  Extensions.
	  a. On the Windows Start menu, click Run.
	
	  b. In the Open box, type "c:\Program Files\Microsoft FrontPage\version
	     3.0\bin\fpsrvwin" (with the quotation marks) and click OK.
	
	     NOTE: If you installed FrontPage to a folder other than the default folder,
	     change the path to reflect the correct folder.
	
	  c. Click Install.
	
	  d. In the Server Type list, click Microsoft Personal Web Server and click OK.
	
	  e. When the installation is complete, click Close.
	
	Additional query words: mspws change drive webshare
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95 kbPersWebServ100aWin95 kbPersWebServ400Win95
	Version           : :1.0,1.0a,4.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
