---
layout: page
title: "Q170555: FP: Using the META Element with Web Spiders, Robots"
permalink: /kb/170/Q170555/
---

## Q170555: FP: Using the META Element with Web Spiders, Robots

	Article: Q170555
	Product(s): Word Front Page
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft  version of this article, see Q194310.
	
	SUMMARY
	=======
	
	Web Spiders or Robots are a great resource for people searching the Internet,
	but they present a problem to Web page designers who want their pages to be seen
	and properly indexed. One popular solution to this behavior is to use the
	Hypertext Markup Language (HTML) META element.
	
	MORE INFORMATION
	================
	
	The META element is used within the HEAD element to embed document meta-
	information that is not defined by other HEAD elements. This embedded
	information can be extracted by servers and clients to identify, index, and
	catalog specialized document meta-information. A META element can be written in
	one of two forms: META NAME and META HTTP-EQUIV. The NAME attribute is returned
	in the HEAD of the document, while the HTTP-EQUIV attribute is converted into
	the HTTP response header which is parsed by the Web server.
	
	If you plan to use a Robot, you should use the META NAME form as shown in these
	examples:
	
	     <META NAME="author" CONTENT="John Doe">
	     <META NAME="date" CONTENT="12/31/97">
	
	The NAME attribute declares a variable for the page and the CONTENT attribute
	assigns a value to the variable.
	
	A META element standard for Robots has evolved which consists of two parts:
	
	- Description A brief description of the Web page.
	- Keywords One or more words that refer to the content that can be found on the
	  page.
	
	Two examples of this standard follow.
	
	Example 1
	---------
	
	  <META NAME="description" CONTENT="Web Spider Information">
	  <META NAME="keywords" CONTENT="robots, spiders">
	
	Example 2
	---------
	
	  <META NAME="description" CONTENT="The Jogging Page">
	  <META NAME="keywords" CONTENT="jogging, health, fitness">
	
	NOTE: Some robots ignore the NAME attribute and use their own algorithm to
	generate a description of the page.
	
	To add a META tag like the ones shown in the examples to your Web page, follow
	these steps:
	
	1. Open your page in Front Page Editor.
	
	2. On the File menu, click Page Properties.
	
	3. Click the Custom tab.
	
	4. In the User Variables section, click Add.
	
	5. In the Name box, type the meta name.
	
	6. In the Value box, type the meta content.
	
	7. Click OK.
	
	8. Click OK again.
	
	9. Save the page to your Web.
	
	Additional query words: 97 kbhowto search engine engines
	
	======================================================================
	Keywords          : kb3rdparty kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage97 kbZNotKeyword kbZNotKeyword2 kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : :1.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
