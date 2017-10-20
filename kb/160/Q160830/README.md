---
layout: page
title: "Q160830: FP: Cannot Remove Pages Error Attempting to Delete Folder"
permalink: /kb/160/Q160830/
---

## Q160830: FP: Cannot Remove Pages Error Attempting to Delete Folder

{% raw %}

	Article: Q160830
	Product(s): Word Front Page
	Version(s): windows:97,macintosh:1.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194285.
	
	SYMPTOMS
	========
	
	When you attempt to delete a folder that is located on a FrontPage 1.1 server,
	you receive the following error message:
	
	  Server error: Couldn't remove the following pages: <folder name>
	
	CAUSE
	=====
	
	This error occurs if you attempt to delete the folder from FrontPage Explorer in
	any of the versions of FrontPage listed at the beginning of this article.
	
	The FrontPage 1.1 Server Extensions were not designed to handle folder management
	tasks on the server.
	
	RESOLUTION
	==========
	
	To delete a folder on a Web server on which you installed the FrontPage 1.1
	Server Extensions, use either of the following methods.
	
	Method 1: Upgrade the FrontPage Server Extensions
	-------------------------------------------------
	
	1. Install the FrontPage 97 Server Extensions.
	
	2. From FrontPage Explorer, use the Delete command on the Edit menu to delete
	  the folder from the upgraded Web server.
	
	For more information about deleting folders, click the Index tab in FrontPage
	Help, type the following text
	
	  "Delete command" (without the quotation marks)
	
	and then double-click the selected text to go to the "Delete Command" topic.
	
	Method 2: Use File Manager or an Internet service, such as Telnet or FTP
	------------------------------------------------------------------------
	
	1. Directly access the file system of the Web content area by using Telnet, FTP,
	  or the file manager program for your operating system.
	
	2. Delete the folder you want to remove from the Web server.
	
	3. Start FrontPage Explorer, open the Web, and then click Recalculate Hyperlinks
	  on the Tools menu.
	
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : windows:97,macintosh:1.0
	Hardware          : MAC x86
	Issue type        : kbhowto
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
