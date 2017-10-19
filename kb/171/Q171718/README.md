---
layout: page
title: "Q171718: FP: Editing HTML on Page w/Included Image Map Returns Error"
permalink: /kb/171/Q171718/
---

## Q171718: FP: Editing HTML on Page w/Included Image Map Returns Error

	Article: Q171718
	Product(s): Word Front Page
	Version(s): windows:97; macintosh:1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In FrontPage Editor, when you edit the HyperText Markup Language (HTML) source
	of a page that contains a WebBot Include component, which contains an image map,
	you receive the following error message:
	
	  The contents of a WebBot Component have been modified. These contents will be
	  overwritten when you save this page.
	
	In addition, FrontPage Editor creates another WebBot Include component that
	contains brackets ([]) formatted in italic. None of the changes you made are
	saved.
	
	RESOLUTION
	==========
	
	To edit the HTML code on a page that contains an included image map, use either
	of the following methods.
	
	Method 1: Modify the WebBot Include Component
	---------------------------------------------
	
	1. Select the WebBot Include component that contains the image map.
	
	2. On the Edit menu, click Cut.
	
	3. On the View menu, click HTML.
	
	4. Make the changes you want to your HTML source and then click OK.
	
	5. On the Edit menu, click Paste.
	
	Method 2: Modify the Web Page in a Text Editor
	----------------------------------------------
	
	1. In FrontPage Explorer, right-click the file that contains the WebBot Include
	  component (Windows) or press CONTROL and click the page that contains the
	  WebBot Include Component (Power Macintosh). Click Open With on the menu that
	  appears.
	
	2. From the Editor list, click Text Editor (Windows) or Simple Text (Power
	  Macintosh).
	
	3. Make the changes you want. Save and close the file.
	
	  FrontPage will reimport the file and update it within the Web.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft FrontPage
	98 for Windows.
	
	
	Additional query words: fp97 fpedit fphtml
	
	======================================================================
	Keywords          : kberrmsg kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : windows:97; macintosh:1.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
