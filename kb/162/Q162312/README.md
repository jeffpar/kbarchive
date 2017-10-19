---
layout: page
title: "Q162312: FP: Images Not Saved to Web Aren't Loaded"
permalink: /kb/162/Q162312/
---

## Q162312: FP: Images Not Saved to Web Aren't Loaded

	Article: Q162312
	Product(s): Word Front Page
	Version(s): windows:97; macintosh:1.0
	Operating System(s): 
	Keyword(s): kbgraphic kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage for the Macintosh, version 1.0 
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse a page using a Web browser or open a page in FrontPage Editor,
	the image does not load.
	
	CAUSE
	=====
	
	The image does not load if you clicked No in the "Save Image to FrontPage Web"
	dialog box that appears when you save your page. The IMG SRC tag contains a path
	to the location--usually the same folder as the rest or your Web content--where
	the image would have been saved if you clicked Yes in the "Save Image to
	FrontPage Web" dialog box. Since the image is not stored in this location, the
	image is not loaded when you load the page in a Web browser or when you open the
	page in FrontPage Editor.
	
	RESOLUTION
	==========
	
	Click Yes or Yes To All in the "Save Image to FrontPage Web" dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	By default, FrontPage prompts you to save images in the same directory where you
	save your Web page. If you specify a different location for the image than you
	specify for the page, FrontPage Editor will suggest the new directory the next
	time you save a page that includes a new image.
	
	
	Additional query words: 97 front page broken links
	
	======================================================================
	Keywords          : kbgraphic kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : windows:97; macintosh:1.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
