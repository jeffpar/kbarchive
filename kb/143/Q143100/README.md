---
layout: page
title: "Q143100: FP: Using a Folder (Directory) Other Than Content"
permalink: kb/143/Q143100/
---

## Q143100: FP: Using a Folder (Directory) Other Than Content

	Article: Q143100
	Product(s): Word Front Page
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 23-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194427.
	
	SUMMARY
	=======
	
	This article describes how to change the folder for your Web page content in the
	FrontPage Personal Web Server.
	
	MORE INFORMATION
	================
	
	You can select a default content area during installation. However, if you
	change your mind after installation, you can change the folder for your Web
	content by following these steps:
	
	1. Run the FrontPage Server Administrator.
	
	2. Click Uninstall to remove the FrontPage Server Extensions.
	
	3. On the Windows Start menu, point to Programs, point to Accessories and click
	  Notepad. Open the Srm.cnf file. This file is located in the following
	  locations:
	
	     Version            Folder
	     ----------------------------------------------
	
	     FrontPage 1.0      \Vermeer\Httpd\Conf
	     FrontPage 1.1      \FrontPage Webs\Server\Conf
	     FrontPage 97       \FrontPage Webs\Server\conf
	
	4. Modify the "DocumentRoot" line so that it specifies the new location of your
	  content. For example, if you are using a folder called "Webpages," change the
	  DocumentRoot line so that it looks like this:
	
	  DocumentRoot C:/Webpages
	
	  Note that the slashes should be written in UNIX format (/). If the path to the
	  file contains spaces, they should be preceded by a backslash (\). For
	  example, C:\FrontPage Webs\content is written as follows:
	
	  C:/FrontPage\ Webs/content
	
	5. Save and close the Srm.cnf file.
	
	6. Move your content files from the old location to the new content folder.
	
	7. Restart the FrontPage Server Administrator and reinstall the FrontPage Server
	  Extensions. The content folder will be updated automatically.
	
	NOTE: Microsoft recommends that you do not put the content directly in the
	\Vermeer or the \Program Files\Microsoft FrontPage folder. Although Microsoft
	does not recommend this alternative, you can create a subfolder in the \Vermeer
	or the \Program Files\Microsoft FrontPage folder if you want to store your pages
	in these folders.
	
	Additional query words: front page explorer editor personal Web server vermeer content pages new location folder subfolder change different
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : :1.0,1.1
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
