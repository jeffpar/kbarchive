---
layout: page
title: "Q261223: File Download Dialog Box Appears When You Browse an ASP File"
permalink: kb/261/Q261223/
---

## Q261223: File Download Dialog Box Appears When You Browse an ASP File

	Article: Q261223
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to browse a .asp file, the File Download dialog box is
	displayed (instead of displaying the .asp file in the browser).
	
	CAUSE
	=====
	
	The .asp file has an error in it, which invokes the custom error handler for
	500;100 HTTP error messages.
	
	The custom error handler for 500;100 HTTP error messages has been set to open
	500-100.asp as a file rather than a URL. Therefore, when Internet Information
	Services (IIS) encounters the error in the .asp file, it tries to open the file
	associated with 500;100 error messages instead of browsing it.
	
	It is not apparent to the user that IIS is attempting to open the 500-100.asp
	file rather than the .asp file that was specified in the browser.
	
	RESOLUTION
	==========
	
	Add the folder that contains 500-100.asp file as a virtual directory, and then
	change the Custom Error page for 500;100 HTTP errors to invoke the 500-100.asp
	file using a URL instead of a file path. To do this, perform the following:
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Services snap-in for the Microsoft Management Console (MMC).
	
	2. Right-click the appropriate Web site, click New, and then click Virtual
	  Directory.
	
	3. In the Virtual Directory Creation Wizard, click Next. In the Alias text box,
	  type "IISHelp" (without the quotation marks), and then click Next.
	
	4. When you are prompted for the path to the content directory, click Browse,
	  select the WINNT\Help\IisHelp folder, and then click Next.
	
	5. On the Access Permissions page, accept all the defaults, click Next, and then
	  click Finish.
	
	6. Right-click the Web site again, and then click Properties.
	
	7. On the Custom Errors tab, select the "500;100" error line, and then click the
	  Edit Properties.
	
	8. In the Error Mapping Properties dialog box, change File to URL in the Message
	  Type list box, and then type "/iisHelp/common/500-100.asp" (without the
	  quotation marks) in the URL text box.
	
	9. Click OK twice to return to the ISM.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: iis 5 akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
