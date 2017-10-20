---
layout: page
title: "Q143089: FP: Multiple Errors Trying to Access Web Sites"
permalink: /kb/143/Q143089/
---

## Q143089: FP: Multiple Errors Trying to Access Web Sites

{% raw %}

	Article: Q143089
	Product(s): Word Front Page
	Version(s): windows:1.0,97,macintosh:1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q205715.
	
	For a Microsoft FrontPage 98 version of this article, see Q193964.
	
	SYMPTOMS
	========
	
	When you try to access an existing Web site, you may receive the following error
	messages:
	
	- 
	
	  Unable to open http://<servername>/<page>.
	
	- 
	
	  The site reports 404 Not Found.
	
	- 
	
	  The requested URL /page was not found on the server.
	
	CAUSE
	=====
	
	This problem occurs because FrontPage cannot find the page. This problem occurs
	for any of the following reasons:
	
	- You typed the address incorrectly.
	
	- The proxy server setting in FrontPage Explorer is invalid.
	
	- You are trying to follow a link created by the following WebBot components:
	
	     WebBot Confirmation component
	     WebBot Discussion component
	     WebBot Registration component
	     WebBot Save Results component
	     WebBot Search component
	
	  These are browse-time components; they require the server extensions to be
	  installed in order to work. The links are valid, but the browser is unable to
	  find the corresponding page until the server extensions are installed.
	
	   - The Web folder was deleted.
	   - The Web content was moved.
	   - The server configuration file was moved.
	
	RESOLUTION
	==========
	
	To work around this problem, use the appropriate method for your situation.
	
	Method 1: If You Typed the Address Incorrectly
	----------------------------------------------
	
	Check to make sure you typed the Uniform Resource Locator (URL) correctly. If it
	is incorrect, retype the URL correctly and try again.
	
	Method 2: If the Proxy Server Is Invalid
	----------------------------------------
	
	FrontPage Explorer allows you to specify a proxy server. To verify that this
	server is correct, use the step appropriate to your version of FrontPage:
	
	- FrontPage 97: On the Tools menu, click Options, and then click the Proxies
	  tab.
	
	- FrontPage 1.1 or 1.0: On the Tools menu, click Proxy.
	
	If the Proxy address is correct, confirm that the proxy is functioning properly.
	
	Method 3: If You Are Using Browse-time WebBot Components
	--------------------------------------------------------
	
	The browse-time WebBot components require the FrontPage Server Extensions to
	function. If the FrontPage Server Extensions are not installed on the Web
	server, the Web server administrator must run the FrontPage Server Administrator
	and install the appropriate server extensions to the Web server you are using.
	
	Method 4: If the Web Folder Was Deleted
	---------------------------------------
	
	If you deleted the folder that contains all your Web pages, FrontPage still
	maintains pointers to that information in another file. For information about
	how to completely remove all references to the deleted Web, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q143324 FP: HTTP Error 404 Opening Deleted Web
	
	Method 5: If the Web Content Was Moved
	--------------------------------------
	
	If you moved your content from its original location, move it back, start the
	Server Administrator, uninstall the server extensions, and then move the content
	where you want it and reinstall the FrontPage Server Extensions.
	
	Method 6: If the Server Configuration File Was Moved
	----------------------------------------------------
	
	Check the path to your current server configuration file. To do this, use the
	FrontPage Server Administrator or look in the Frontpg.ini file (this file should
	be located in the Windows directory).
	
	For the FrontPage Personal Web Server, the path to the FrontPage Server
	Extensions configuration file should be as follows:
	
	  Version 97, 1.1    FrontPage Webs\Server\conf\httpd.cnf
	  Version 1.0        Vermeer\Httpd\Conf\httpd.cnf
	
	If this path does not point to a valid file, put the files back into place. If
	you want to move the server configuration file, follow these steps:
	
	1. Uninstall the FrontPage Server Extensions.
	
	2. Move the configuration file.
	
	3. Re-install the server extensions.
	
	If you are using the Microsoft Personal Web Server, which is shipped with the
	FrontPage 97 Bonus Pack, it is essential that the WebShare and WebSvr
	directories are in the location referred to by the Directories tab of the WWW
	Administrator. For more information about configuring the Microsoft Personal Web
	Server, please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q158721 How to Configure and Administer Personal Web Server
	
	
	Additional query words: front page explorer editor personal Web server vermeer http code error mspws 97
	
	======================================================================
	Keywords          : kberrmsg kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,97,macintosh:1.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
