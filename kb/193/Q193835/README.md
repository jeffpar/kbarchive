---
layout: page
title: "Q193835: FP97: Infinite Loop Creates Thousands of Temp Files"
permalink: /kb/193/Q193835/
---

## Q193835: FP97: Infinite Loop Creates Thousands of Temp Files

	Article: Q193835
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to publish or import a Web, thousands of .tmp files are created on
	the server, and the Author.exe or Inetinfo.exe process consumes all available
	resources, which will eventually cause the server to stop responding.
	
	CAUSE
	=====
	
	Two or more HTML pages include a style sheet reference to each other. This is
	caused by using the <BODY STYLESRC="pagename.html"> tag, which references
	another page from which to inherit page attributes. Using this method of style
	sheets causes an infinite loop when recalculating hyperlinks. For example:
	
	  Page1 includes the following tag in its HTML code:
	
	        <BODY STYLESRC="page2.html">
	
	  Page2 includes the following tag in its HTML code:
	
	        <BODY STYLESRC="page1.html">
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure there are no instances of the <BODY
	STYLESRC=""> tag that refer to pages that point back to the referring page.
	
	
	Additional query words: hang tmp temp
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
