---
layout: page
title: "Q149843: FP: Personal Web Server Cannot Bind to Port 80"
permalink: kb/149/Q149843/
---

## Q149843: FP: Personal Web Server Cannot Bind to Port 80

	Article: Q149843
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kbinterop kbusage kbdta
	Last Modified: 03-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194486.
	
	SYMPTOMS
	========
	
	When you start the FrontPage Personal Web Server by clicking the icon on the
	Windows 95 Start menu or by double-clicking the icon in the Windows NT FrontPage
	program group, you receive the following error message:
	
	  Httpd: Could not bind to port 80.
	
	CAUSE
	=====
	
	In most cases, this error message is displayed because there is already another
	Web server installed to or operating on port 80.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps:
	
	1. Stop the Web server currently running on Port 80
	
	2. Uninstall the extensions on the FrontPage Personal Web Server at port 80 by
	  running the FrontPage Server Administrator (fpsrvwin.exe).
	
	3. In a text editor such as Notepad, open the Httpd.cnf configuration file
	  located in the FrontPage Webs\Server\Conf folder.
	
	4. Find the line that reads "port 80" (without the quotation marks).
	
	5. Change it to read:
	
	  port 8080
	
	  NOTE: You can specify any number greater than 1024.
	
	6. Save and close the Httpd.cnf file.
	
	7. Start the FrontPage Server Administrator.
	
	8. Click Uninstall to remove the FrontPage Personal Web Server extensions.
	
	9. Click OK.
	
	10. Click Install to reinstall the FrontPage Personal Web Server Extensions. In
	  the Server Type drop-down list, select FrontPage Personal Web Server, and
	  then click Browse to locate the Httpd.cnf file (which is typically located
	  in the FrontPage Webs\Server\conf folder). Click OK or Open.
	
	11. Click OK.
	
	12. In the Administrator Setup dialog box, type a name and password and then
	  click OK.
	
	This procedure will automatically bind the FrontPage Personal Web Server to the
	port number you specified in step 3.
	
	Once this is done, specify the port number in addition to the server name when
	you select a Web server in FrontPage Explorer or when you browse a page on the
	server. For example, if your server name is Dalmatian and you are using port
	number 8080, then you would specify the following Web server:
	
	  Dalmatian:8080
	
	Additional query words: 1.00a binding bound attached attach attaching
	
	======================================================================
	Keywords          : kbinterop kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97
	Hardware          : x86
	
	=============================================================================
	
