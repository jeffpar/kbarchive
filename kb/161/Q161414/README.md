---
layout: page
title: "Q161414: FP97: How to Publish a FrontPage Web to the Internet, Intranet"
permalink: /kb/161/Q161414/
---

## Q161414: FP97: How to Publish a FrontPage Web to the Internet, Intranet

{% raw %}

	Article: Q161414
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q198523.
	
	For a Microsoft FrontPage 98 version of this article, see Q194093.
	
	SUMMARY
	=======
	
	This article describes how to transfer a FrontPage Web from a local Web server
	or disk to an Internet or intranet server.
	
	You can also use this information to transfer any Web from one Web server to
	another.
	
	MORE INFORMATION
	================
	
	There are many ways to get your Web content to the Internet, from using simple
	File Transfer Protocol (FTP) to using the FrontPage Server Extensions to posting
	directly to a Web server by using the HyperText Transport Protocol (HTTP).
	
	All methods for getting FrontPage Web content to the Internet start with the
	Publish FrontPage Web command (File menu) in FrontPage Explorer. If you
	installed the FrontPage Server Extensions on the destination Web server,
	FrontPage can communicate directly with the extensions on that server. If the
	FrontPage Server Extensions are not installed on the destination server, or if
	you are not sure if they are installed, you can install the Microsoft Web
	Publishing Wizard from the FrontPage compact disc and then publish your files to
	the destination server.
	
	Publishing Your FrontPage Web to an Internet Web Server
	-------------------------------------------------------
	
	1. In FrontPage Explorer, open the Web you want to publish.
	
	2. On the File menu, click Publish FrontPage Web.
	
	3. In the Destination Web Server box, type the Internet address of the Web
	  server. The address of the server appears immediately after the protocol
	  (http:) and the double slashes (//).
	
	4. In the "Name of destination of FrontPage Web" box, type the name of the
	  destination Web. (This should be the name of the folder that contains your
	  Web content.)
	
	  NOTE: If you want to publish the Web directly to the document root of the Web
	  server (usually only if you have a domain of your own), do not enter the name
	  of the destination Web. If you are unsure what to enter as the destination
	  Web, consult your Internet Service Provider (ISP) or intranet webmaster.
	
	5. Click to select the Copy Changed Pages Only check box. All your pages will be
	  published to the destination server. Click to select the "Add to existing
	  Web" check box if your ISP has already established your site.
	
	6. Click OK.
	
	ADDITIONAL INFORMATION
	----------------------
	
	FrontPage first attempts to communicate with the FrontPage Server Extensions on
	the destination Web server. If the server extensions are properly installed on
	the destination server, this is all you need to do. If the FrontPage Server
	Extensions are not found on the destination Web server, and if you installed the
	Microsoft Web Publishing Wizard, FrontPage automatically starts the wizard and
	uses it to connect with the Web server.
	
	The first time you start the Microsoft Web Publishing Wizard you may be prompted
	for the protocol, the name of the Web server on which you want to post your
	content, and other connection information. To obtain the correct values, contact
	your Internet Service Provider or intranet webmaster.
	
	The Web Publishing Wizard also asks you what files you want to post. To properly
	post your Web, FrontPage passes the Web Publishing Wizard a list of files. The
	files are stored in an "upload" folder in a temporary folder where FrontPage is
	installed. Do not edit this if you want to properly post your Web. Once
	configured successfully, all subsequent posts to the specified Web server occur
	automatically.
	
	For more information about the Microsoft Web Publishing Wizard, see the following
	Microsoft World Wide Web site:
	
	  http://corporate.windowsupdate.microsoft.com/
	
	Additional query words: 97 webpost
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
