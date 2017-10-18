---
layout: page
title: "Q191183: HOWTO: Navigate Between DHTML Designer Pages"
permalink: kb/191/Q191183/
---

## Q191183: HOWTO: Navigate Between DHTML Designer Pages

	Article: Q191183
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDHTML kbInternet kbPageDesigner kbVBp kbVBp600 kbDSupport
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have multiple page designers in your application, you can move from one
	page to another within your application, or you can navigate to a page outside
	of your DHTML application, including Active Server Pages (ASP) pages.
	
	MORE INFORMATION
	================
	
	The DHTML Designer page is an HTML page with a COM component. Therefore,
	navigating between multiple page designers is no different than navigating
	between HTML pages. Following are two examples of navigating between page
	designer pages.
	
	Using a Hyperlink
	-----------------
	
	If you want to navigate from Page1.htm to Page2.htm when the user clicks on a
	hyperlink, you need to:
	
	1. Insert a Hyperlink object from the toolbox into Page1.htm.
	
	2. Set the HREF property to "Page2.htm".
	
	NOTE: In step 2 you set the HREF to a relative file name. This is preferred
	because it works no matter where your files are stored as long as Page1.htm and
	Page2.htm are in the same location.
	
	You can use an absolute path for HREF as well. For example, you can set this
	property to http://msdn.microsoft.com/vbasic/Default.asp.
	
	You can change the caption of the hyperlink by simply editing it in the main
	designer screen.
	
	Additionally, you can convert existing plain text in the designer to a new
	hyperlink. To convert existing text to a hyperlink, highlight the text and click
	the "Make Selection into Link" icon from the designer toolbar.
	
	Navigating from Code
	--------------------
	
	You may want to navigate from within your Visual Basic code behind the DHTML page
	designer, as in the following examples:
	
	1. Use the location object available from BaseWindow:
	
	        BaseWindow.location.href = "Page2.htm"
	        BaseWindow.location.replace "page2.htm"   'History not maintained.
	        BaseWindow.location.hash = "#bookmark"    'Navigate to bookmark.
	
	2. Use the Navigate method from BaseWindow:
	
	        BaseWindow.navigate "http://www.microsoft.com/vbasic"
	
	You can use the preceding code within an Onclick event handler of a button
	element or other elements.
	
	REFERENCES
	==========
	
	Please see the following article here in the Microsoft Knowledge Base for more
	information on the DHTML Page Designer:
	
	  Q190249 INFO: VB 6.0 Readme Part 8: WebClass Designer Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDHTML kbInternet kbPageDesigner kbVBp kbVBp600 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
