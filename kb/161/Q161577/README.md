---
layout: page
title: "Q161577: HOWTO: Use Keyword Expansion in HTML Files"
permalink: kb/161/Q161577/
---

## Q161577: HOWTO: Use Keyword Expansion in HTML Files

	Article: Q161577
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to include the last update time, the name of the Web
	page, and other similar items in HTML files on the World Wide Web. You can
	automatically include these items through keyword expansion when you use Visual
	SourceSafe. You can also enter other items as regular comments so that they only
	appear in the source of the HTML document.
	
	MORE INFORMATION
	================
	
	Setting up keyword expansion for HTML files is slightly different than using
	keywords in regular source code files like those used in Visual C++ and Visual
	Basic.
	
	Enable Keywords for Web Documents
	---------------------------------
	
	1. Start the Visual SourceSafe Administrator.
	
	2. On the Tools -> Options menu, click the General tab.
	
	3. In "Expand Keywords in Files of Type," type: *.HTM, *.HTML, *.HTX
	
	4. Exit the Visual SourceSafe Administrator and restart the Visual SourceSafe
	  Explorer.
	
	You can use any keyword. However, because several keywords append historical data
	to files, the following keywords are recommended:
	
	  For external viewing:
	  $Date:     $
	  $JustDate: $
	  $Modtime:  $
	
	  For internal documentation:
	  $Author:   $
	  $Archive:  $
	  $Log:      $
	  $Header:   $
	
	Add Keywords to HTML Files
	--------------------------
	
	To add a keyword for external viewing, use the following syntax:
	
	     <!-- $$KeyWord: --><!-- $ -->
	
	for example:
	
	     <p>Last Updated on: <!-- $$JustDate: --><!-- $ --></p>
	
	The following prints out on the Web page when the .htm file is opened with a Web
	browser:
	
	  Last Updated on: 1/1/96
	
	To add a keyword for internal documentation, use the following syntax:
	
	     <!-- $KeyWord: $ -->
	
	This command acts like a "regular" keyword in that the expansion is only visible
	when you view the .htm file in a text editor.
	
	Note that any keyword that you want to display externally in HTML documents must
	be preceded by $$. :
	
	REFERENCES
	==========
	
	Microsoft Visual SourceSafe Help: HTML Keyword Expansion
	
	For more information on developing Web-based solutions for Internet Explorer,
	please see the following Web sites:
	
	  http://msdn.microsoft.com/workshop/default.asp
	
	  http://msdn.microsoft.com/ie/
	
	  http://support.microsoft.com/highlights/iep.asp?FR=0&SD=MSDN
	
	(c) Microsoft Corporation 1996, All Rights Reserved. Contributions by Brian
	Matsik, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
