---
layout: page
title: "Q184021: FP: List of WebBot Components that Require Server Extensions"
permalink: kb/184/Q184021/
---

## Q184021: FP: List of WebBot Components that Require Server Extensions

	Article: Q184021
	Product(s): Word Front Page
	Version(s): ; MACINTOSH:1.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 01-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194051.
	
	SUMMARY
	=======
	
	Some WebBot components do not work correctly if the FrontPage Server Extensions
	are not installed on the server. This article lists the WebBot components that
	require FrontPage Server Extensions.
	
	MORE INFORMATION
	================
	
	The following WebBot components rely on the FrontPage Server Extensions at
	browse-time:
	
	- FrontPage created server-side Image Maps
	- WebBot Confirmation Field component
	- WebBot Discussion component
	- WebBot Registration componentr
	- WebBot Save Results component
	- WebBot Scheduled Image
	- WebBot Scheduled Include component
	- WebBot Search component
	
	NOTE: If the FrontPage Server Extensions are not installed on the server and you
	use one of the WebBot components listed above, an HTTP 404 error appears in the
	Web browser when a visitor opens the Web page.
	
	The following design-time WebBot components do not rely on the FrontPage Server
	Extensions:
	
	- WebBot HTML Markup component
	- WebBot Include component
	- WebBot Substitution component
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q143101 FP: Using FrontPage Without the Server Extensions
	
	  Q167931 FP97: How to Install FrontPage Server Extensions for MSPWS
	
	  Q169529 FP97: How to Install FrontPage Server Extensions for IIS 3.0
	
	Additional query words: bots browse ISP WPP
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : :; MACINTOSH:1.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
