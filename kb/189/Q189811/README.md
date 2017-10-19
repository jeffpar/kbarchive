---
layout: page
title: "Q189811: FP: Cannot Import File After Parse Error"
permalink: /kb/189/Q189811/
---

## Q189811: FP: Cannot Import File After Parse Error

	Article: Q189811
	Product(s): Word Front Page
	Version(s): MACINTOSH:1.0; WINDOWS:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kberrmsg kbconversionkbbuglist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When importing a file that contains corrupted data into a Web, you may receive a
	parse error and FrontPage does not import the file into the Web. These symptoms
	appear even after you attempt to fix the file.
	
	NOTE: A file that contains corrupted data may be a corrupted HyperText Markup
	Language (HTML) file or an Internet Database Connector (IDC) or HyperText Markup
	Language Extension (HTX) file that is in an incorrect format.
	
	CAUSE
	=====
	
	This problem occurs because the configuration file that FrontPage uses to verify
	content has already been created in the _vti_cnf folder even though you have not
	imported the file. Because the configuration file now contains an error,
	FrontPage cannot import the corrected file until the damaged file is removed
	from the Web.
	
	RESOLUTION
	==========
	
	Remove the damaged file and then import the file after you have fixed it. To do
	this, follow these steps:
	
	1. Double-click My Computer.
	
	2. Open the folder that contains the Web root.
	
	  The default folder varies depending on the type of server you have installed.
	  You can use the following table as a guide in locating your folder:
	
	     Server                                 Default Folder
	     ------------------------------------------------------------------
	
	     FrontPage Personal Web Server          \FrontPage Webs\Content
	     Microsoft Personal Web Server
	       for Windows 95                       \Webshare\Wwwroot
	     Microsoft Internet Information
	       Server for Windows NT Server         \Inetpub\Wwwroot
	     Peer Web Services for Windows NT
	       Workstation                          \Inetpub\Wwwroot
	
	3. Open the folder that contains your Web.
	
	4. Open the _vti_cnf folder.
	
	5. Delete the file that you cannot import.
	
	6. Switch to FrontPage and reimport the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft FrontPage
	98 for Windows.
	
	Additional query words: 97 98 import parse error
	
	======================================================================
	Keywords          : kberrmsg kbconversion kbbuglist
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : MACINTOSH:1.0; WINDOWS:1.0,1.1,97
	Hardware          : MAC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
