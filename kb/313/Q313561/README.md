---
layout: page
title: "Q313561: HOW TO: Set HTTP Headers for Content Expiration in IIS"
permalink: kb/313/Q313561/
---

## Q313561: HOW TO: Set HTTP Headers for Content Expiration in IIS

	Article: Q313561
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbenv kbAudITPro kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - How to Set HTTP Headers for Content Expiration
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to set the expiration of Web site
	content in Internet Information Services (IIS) 5.0.
	
	If your Web site contains time-sensitive information, such as special offers or
	event announcements, you can configure settings to ensure that information that
	is no longer valid is not published. When you establish content expiration, you
	can configure site content to automatically expire any time.
	
	When you enable the content expiration feature, IIS includes the expiration
	information in the Hypertext Transport Protocol (HTTP) header of the Web page
	that is sent to the Web browser. The browser then compares the current date with
	the expiration date to determine whether to display a locally cached page, or
	request an updated page from the server.
	
	You can set content expiration for Web sites, for virtual folders, or for
	individual files. Site-level settings apply to all content in that site,
	folder-level settings apply to all folders and files in that folder, and
	file-level settings apply to an individual file.
	
	How to Set HTTP Headers for Content Expiration
	----------------------------------------------
	
	To set content expiration for a Web site, for a virtual folder, or for a file:
	
	1. Start Internet Services Manager, or open the MMC that contains the IIS
	  snap-in.
	
	2. In the Internet Information Services dialog box, click to expand "*
	  <server_name>", where <server_name> is the name of the server.
	
	3. Right-click the Web site, folder, or file for which you want to set content
	  expiration (for example, click Default Web Site), and then click Properties.
	
	4. Click the HTTP Headers tab.
	
	5. Click to select the Enable Content Expiration check box.
	
	6. In the "Content should" box, perform one of the following steps:
	
	   - Click Expire Immediately.
	
	     Use this option if you want Web content to expire immediately. The browser
	     does not display the page from the local cache. It requests and displays
	     the latest version of the page from the server.
	
	     -or-
	
	   - Click "Expire after", and then specify a period of time (in minutes,
	     hours, or days) after the content that expires in the appropriate boxes.
	
	     Use this option if you want Web content to expire after a specific length
	     of time.
	
	     -or-
	
	   - Click "Expire on", and then click an expiration date and time in the
	     appropriate boxes.
	
	     Use this option when you want Web content to expire after a specific date
	     and time.
	
	7. Click OK, and then quit Internet Services Manager, or close the IIS snap-in.
	
	Notes:
	
	- When you attempt to change the settings for a Web site or for a virtual
	  folder, IIS checks the existing settings on the child nodes (virtual folders
	  and files) that are contained in that Web site or in the virtual folder. If
	  the settings at the lower levels are different, IIS displays an Inheritance
	  Overrides dialog box. To specify which child nodes should inherit the
	  settings that you set at the higher level, click the node or click the nodes
	  in the Child Nodes list, and then click OK. The child node or child nodes
	  inherit the new content expiration settings.
	
	- Typically, content expiration is enabled for Web sites, for folders, or for
	  individual files. However, you can also set content expiration for all Web
	  sites on a server. To do this, right-click "* <server_name>", and then
	  click the Internet Information Services tab. Click WWW Service in the Master
	  Properties box, and then click Edit. Click the HTTP Headers tab, and then
	  configure the content expiration settings that you want.
	
	REFERENCES
	==========
	
	For more information about content expiration in IIS, see the "Enabling Content
	Expiration" topic in the "Web Site Management" section of the IIS 5.0 Online
	Documentation:
	
	  http://localhost/iishelp
	
	Note that this link works correctly only if you have IIS installed on your
	computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
