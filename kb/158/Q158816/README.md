---
layout: page
title: "Q158816: FP: Invalid Target Frame Reference Causes New Browser to Load"
permalink: /kb/158/Q158816/
---

## Q158816: FP: Invalid Target Frame Reference Causes New Browser to Load

	Article: Q158816
	Product(s): Word Front Page
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q197962.
	
	For a Microsoft FrontPage 98 version of this article, see Q193984.
	
	SYMPTOMS
	========
	
	When you click a hyperlink, another instance of the browser is loaded.
	
	CAUSE
	=====
	
	An invalid frame name was specified as the target frame for the hyperlink. An
	invalid name is a name that does not reference a frame in the current frame set.
	
	MORE INFORMATION
	================
	
	Most Web browsers allow you to target different frames within a frame set.
	Assigning a target frame that exists within the context of the current frame set
	activates this feature.
	
	When a frame is assigned as a target, the name must exactly match a frame that
	exists in the current frame set (note that these names are case-sensitive). If
	the name of the frame is incorrect, a new instance of the browser will be
	started.
	
	Take for example, a frame set page with two frames aligned vertically where the
	left frame is named "content" and the right frame is named "main." If you want a
	hyperlink that is activated in the "content" frame to load a specified page in
	the "main" frame, you must specify "main" as the target frame.
	
	If, however, you set a link in the "content" frame to display a page in the
	"Main" frame (and you use an uppercase "M" instead of a lowercase "m"), a
	separate instance of the Web browser will be started.
	
	For more information about frames and frame sets, click the Index tab in
	FrontPage Help, type the following text
	
	  "frames pages, creating" (without the quotation marks)
	
	double-click "overview," and then double-click the "About Frames and Frames
	Pages" topic.
	
	Additional query words: html
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage110
	Version           : :1.0,1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
