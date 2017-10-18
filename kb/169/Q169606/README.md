---
layout: page
title: "Q169606: FP: Creating Links to Files Inside and Outside of a Web"
permalink: kb/169/Q169606/
---

## Q169606: FP: Creating Links to Files Inside and Outside of a Web

	Article: Q169606
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97; macintosh:1.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.0a, 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create hyperlinks to files inside and outside of a
	Web, using the FILE and FTP protocols.
	
	MORE INFORMATION
	================
	
	Using the FILE protocol to link to a file within a Web
	------------------------------------------------------
	
	1. Import the file you want to link to into your Web.
	
	2. In FrontPage Editor, select the text or graphic that you want to use as the
	  hyperlink source.
	
	3. On the Edit menu, click Hyperlink.
	
	4. Click the World Wide Web tab.
	
	5. In the URL box, type the Uniform Resource Locator (URL) for the file you want
	  to link to. (In FrontPage 1.1, click File in the Hyperlink Type drop-down
	  list.)
	
	6. Click OK.
	
	Using the FILE protocol to link to a file outside of a Web
	----------------------------------------------------------
	
	NOTE: To prevent security violations, Microsoft recommends that you only use this
	procedure on an Intranet. If you need additional help in performing the steps
	below, please see your network administrator or server documentation.
	
	1. Place the files you want to link to in a share on a server.
	
	2. Set up the shared server so that everyone has at least read-only access.
	
	3. In FrontPage Editor, select the text or graphic that you want to use as the
	  hyperlink source.
	
	4. On the Edit menu, click Hyperlink.
	
	5. Click the World Wide Web tab.
	
	6. In the Hyperlink Type drop-down list, click File.
	
	7. In the URL box, type the Uniform Resource Locator (URL) for the file you want
	  to link to. The path you designate will actually be in the form of a
	  Universal Naming Convention (UNC) path, such as the following:
	
	  file://\\ServerName\ShareName\Filename.zip
	
	  The file extension is required.
	
	8. Click OK.
	
	Using the FTP protocol to link to a file on a FTP server
	--------------------------------------------------------
	
	1. Place the files you want to link to in a directory on the FTP server.
	
	2. Set up the shared server so that everyone has at least read-only access.
	
	3. In FrontPage Editor, select the text or graphic that you want to use as the
	  hyperlink source.
	
	4. On the Edit menu, click Hyperlink.
	
	5. Click the World Wide Web tab.
	
	6. In the Hyperlink Type drop-down list, click FTP.
	
	7. In the URL box, type the Uniform Resource Locator (URL) for the file you want
	  to link to. For example:
	
	  ftp://FTPServerName/Directory/filename.zip
	
	  The file extension is required.
	
	8. Click OK.
	
	Using the FTP protocol to link to a file inside of a Web
	--------------------------------------------------------
	
	NOTE: Microsoft does not recommend having both HTTP and FTP access to a Web
	managed with FrontPage. Also, this requires an FTP server running alongside a
	WWW server and mapping directories on top of each other.
	
	Linking to files within the Web via FTP
	---------------------------------------
	
	1. Import the file you want to link to into your Web.
	
	2. In FrontPage Editor, select the text or graphic that you want to use as the
	  hyperlink source.
	
	3. On the Edit menu, click Hyperlink.
	
	4. Click the World Wide Web tab.
	
	5. In the Hyperlink Type drop-down list, click FTP.
	
	6. In the URL box, type the Uniform Resource Locator (URL) for the file you want
	  to link to. For example:
	
	  FTP://ServerName/Directory/filename.zip
	
	  The file extension is required.
	
	7. Click OK.
	
	Additional query words: 971.00 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage100 kbFrontPage100a kbFrontPage110
	Version           : windows:1.0,1.1,97; macintosh:1.0
	Hardware          : MAC
	Issue type        : kbhowto
	
	=============================================================================
	
