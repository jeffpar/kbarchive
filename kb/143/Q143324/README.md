---
layout: page
title: "Q143324: FP: HTTP Error 404 Opening Deleted Web"
permalink: /kb/143/Q143324/
---

## Q143324: FP: HTTP Error 404 Opening Deleted Web

	Article: Q143324
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q193970.
	
	SYMPTOMS
	========
	
	When you attempt to open a Web in FrontPage Explorer, you receive the following
	error message:
	
	  HTTP error 404. The server may not have the FrontPage Server Extensions
	  installed or may be misconfigured, you may have specified an invalid proxy
	  server, or the Web you are accessing may have been deleted.
	
	CAUSE
	=====
	
	You deleted your Web using File Manager or Windows Explorer rather than
	FrontPage Explorer. When you click List Webs in the Open Web dialog box,
	FrontPage Explorer retrieves the list of Webs from the Services.cnf file located
	in the <x>:\<webroot>\_vti_pvt folder where <webroot> is the
	location of the Web server's root content and <x> is the drive where the
	Web server content resides. This file is updated when you delete your Web using
	FrontPage Explorer; it is not updated when you use File Manager or Windows
	Explorer to delete a Web.
	
	RESOLUTION
	==========
	
	Method 1: Delete the Web
	------------------------
	
	To delete a Web, click Delete FrontPage Web on the File menu in FrontPage
	Explorer.
	
	You cannot delete a Web that you cannot open. To work around this situation,
	create a folder using the same name as the deleted Web in the Content folder,
	open the Web (it will be empty) in FrontPage Explorer, and then delete the Web.
	
	Method 2: Edit the Services.cnf file
	------------------------------------
	
	Using a text editor, such as Notepad, edit the Services.cnf file in the
	<x>:\<webroot>\_vti_pvt folder, where <webroot> is the
	location of the Web server's root content and <x> is the drive where the
	Web server content resides, and then remove the line that references the deleted
	Web path.
	
	Additional query words: front page delete deletes deleted deleting deletion Web remove removed removing removal removes
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
