---
layout: page
title: "Q143097: FP97: HTTP Error Creating Web, Viewing Page w/Image, WebBot"
permalink: /kb/143/Q143097/
---

## Q143097: FP97: HTTP Error Creating Web, Viewing Page w/Image, WebBot

{% raw %}

	Article: Q143097
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbusage kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194545.
	
	SYMPTOMS
	========
	
	In Microsoft FrontPage, you may receive the following error message:
	
	  An HTTP server error has occurred. An error has occurred in the HTTP server
	  which made it impossible for the FrontPage Server Extensions to process this
	  request (HTTP Error 500).
	
	when you do either of the following:
	
	  Case 1: You browse a page that contains an image map or a WebBot.
	
	  -or-
	
	  Case 2: You create a new Web.
	
	CAUSE
	=====
	
	This problem may occur for either of the following reasons:
	
	- If you are using Microsoft Personal Web Server, FrontPage is not able to
	  execute Shtml.dll (Case 1).
	
	  -or-
	
	- If you are using FrontPage Personal Web Server, FrontPage is not able to
	  execute Shtml.exe (Case 1).
	
	  -or-
	
	- FrontPage cannot access the server through the extensions (Case 2).
	
	RESOLUTION
	==========
	
	To work around this problem, use the appropriate method for your situation.
	
	Method 1: Check Error Logs and Memory (Case 1)
	----------------------------------------------
	
	Check the error logs for any out of memory errors and then verify the amount of
	physical and virtual memory installed on your computer.
	
	If you are using the FrontPage Personal Web Server, the error logs will be
	located in the \Server\Logs folder (FrontPage 1.1) or the \Httpd\Logs folder
	(FrontPage 1.0).
	
	If you are using Microsoft Personal Web Server, the error logs will be located in
	the \Windows folder.
	
	You should have 16 megabytes (MB) of RAM in order to run the FrontPage Personal
	Web Server or Microsoft Personal Web Server. You should also set a permanent
	swap file that is at least 20 MB in size.
	
	Method 2: Check Configuration Settings (Case 1)
	-----------------------------------------------
	
	If you have changed the default content folder for the FrontPage Personal Web
	Server, check the following:
	
	- The definition of the DocumentRoot in the Srm.cnf file.
	
	- The following settings in the Srm.cnf:
	
	  FrontPage 1.0:
	     WinScriptAlias  _vti_bin/ c:\content\_vti_bin
	
	  FrontPage 1.1:
	     WinScriptAlias  _vti_bin/ c:\FrontPage/Webs\content\_vti_bin
	
	If you have changed the default content folder for the Microsoft Personal Web
	Server, check the following:
	
	- The Document Root is defined on the Directories tab of the Internet Services
	  Administrator. To access the Internet Services Administrator, follow these
	  steps:
	  1. On the Windows Start menu, point to Settings, and then click Control
	     Panel.
	
	  2. Double-click the Personal Web Server icon.
	
	  3. Click the Administration tab.
	
	  4. Click Administration.
	
	Method 3: Check the Shtml.exe or Shtml.dll File and File Size (Case 1)
	----------------------------------------------------------------------
	
	If you have not changed the default content folder, check the following:
	
	- If you are using FrontPage Personal Web Server, verify that the
	  \_vti_bin\shtml.exe file exists and that its file size is greater than 0.
	  This file is located in the DocumentRoot folder.
	
	- If you are using Microsoft Personal Web Server, verify that the
	  \_vti_bin\shtml.dll file exists and that its file size is greater than 0.
	  This file is located in the DocumentRoot folder.
	
	NOTE: You can use these same methods to troubleshoot this type of error on other
	Web servers. Check your Web server's documentation for the proper location of
	server-generated error logs and the proper method for changing DocumentRoot and
	marking directories as executable.
	
	Method 4: Check Whether the Server is Running (Case 2)
	------------------------------------------------------
	
	Verify that the server is running. If it is not running, start it. Confirm it is
	started by browsing to the URL for the HTTP server.
	
	Method 5: Verify the Server Extensions Are Installed (Case 2)
	-------------------------------------------------------------
	
	Verify that the server extensions have been installed on the server. To do this,
	start the FrontPage Server Administrator and click Check. Confirm that the
	server information is correct.
	
	Method 6: Install the FrontPage Server Extensions (Case 2)
	----------------------------------------------------------
	
	Install the FrontPage Server Extensions. You can download the current version of
	the FrontPage Server Extensions from the following Microsoft World Wide Web
	site:
	
	  http://msdn.microsoft.com/workshop/languages/fp/default.asp
	
	For additional information about the differences between the Microsoft Personal
	Web Server and the FrontPage Personal Web Server, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q161150 FP97: Microsoft Personal Web Server vs. FrontPage Personal Web Server
	
	Additional query words: 1.00 front page explorer editor vermeer code 1.10
	
	======================================================================
	Keywords          : kberrmsg kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
