---
layout: page
title: "Q167859: FP: How to Move FrontPage PWS to Another Drive"
permalink: /kb/167/Q167859/
---

## Q167859: FP: How to Move FrontPage PWS to Another Drive

{% raw %}

	Article: Q167859
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194098.
	
	SUMMARY
	=======
	
	This article describes how to move the FrontPage Personal Web Server from the
	default drive (drive C) to a different drive.
	
	MORE INFORMATION
	================
	
	To move the FrontPage Personal Web Server content to another drive, follow these
	steps:
	
	1. Start the Server Administrator.
	
	  The icon you use to start the FrontPage Server Administrator is in different
	  locations depending on the version of FrontPage and the version of Windows
	  you are running. In all versions of FrontPage on Windows NT 3.51, the icon is
	  located in the Microsoft FrontPage program group. This is also true for
	  FrontPage 1.0 on Windows 3.x. In FrontPage 1.1 running under Windows 95 or NT
	  4.0, the icon to start Server Administrator is on the Start Menu. In
	  FrontPage 97 on Windows 95 or Windows NT 4.0, the icon is located in the
	  directory where you installed FrontPage.
	
	2. Click Uninstall.
	
	3. Copy the \FrontPage Webs directory to the new drive. If you are moving from
	  drive C to drive D, move the entire \FrontPage Webs directory from drive C to
	  drive D.
	
	4. Using a text editor, such as Notepad, open the httpd.cnf file in the
	  \FrontPage Webs\Server\conf folder. This file specifies the location of the
	  FrontPage Server.
	
	  In FrontPage 1.0, this file is located in the C:\Vermeer\http\conf
	  subdirectory.
	
	5. Modify the "ServerRoot" line so that it specifies the new drive location of
	  the server. For example, if you are moving the server from drive C to drive
	  D, change this line so that it looks like this:
	
	  ServerRoot D:/FrontPage webs/server/
	
	  NOTE: The slashes should be written in UNIX format (/). If the path to the
	  file contains spaces, it should be preceded by a backslash (\). For example,
	  C:\FrontPage Webs\content is written as follows:
	
	  C:/FrontPage\ Webs/content
	
	6. Save and close the httpd.cnf file.
	
	  NOTE: This change affects just the FrontPage Personal Web Server. Steps 7
	  through 10 change the location of the Web content directory.
	
	7. Using a text editor, such as Notepad, open the Srm.cnf file.
	
	  This file specifies the location of the server content. It is located in the
	  following default locations:
	
	     Version of FrontPage     Location
	     --------------------------------------
	
	     97              FrontPage Webs\Server\Conf
	     1.1              FrontPage Webs\Content
	     1.0              Vermeer\Httpd\Conf
	
	8. Modify the "DocumentRoot" line so that it specifies the new location of your
	  content. For example, if you are moving the server from drive C to drive D,
	  change this line so that it looks like this:
	
	  DocumentRoot D:/FrontPage webs/content
	
	  NOTE: The slashes should be written in UNIX format (/). If the path to the
	  file contains spaces, it should be preceded by a backslash (\). For example,
	  C:\FrontPage Webs\content is written as follows:
	
	  C:/FrontPage\ Webs/content
	
	9. Save and close the Srm.cnf file.
	
	10. Restart the Server Administrator.
	
	11. Click Install and select the httpd.cnf file on the new drive.
	
	Additional query words: 97 Server FPPWS
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
