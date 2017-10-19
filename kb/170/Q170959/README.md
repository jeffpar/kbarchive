---
layout: page
title: "Q170959: FP: Animation Starts Immediately After Page Opened in Browser"
permalink: /kb/170/Q170959/
---

## Q170959: FP: Animation Starts Immediately After Page Opened in Browser

	Article: Q170959
	Product(s): Word Front Page
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194270.
	
	SYMPTOMS
	========
	
	When you open a Web page that contains a Video for Windows (.avi) file in a Web
	browser, the animation starts immediately after the page is loaded even though
	you cleared the Start options on the Video tab in the Image Properties dialog
	box (Edit menu).
	
	CAUSE
	=====
	
	This behavior occurs when either of the following lines of code are included in
	the HyperText Markup Language (HTML) document:
	
	     <img dynsrc="filename.avi" start="">
	
	  -or-
	
	     <img dynsrc="filename.avi" start="FILEOPEN">
	
	RESOLUTION
	==========
	
	Use either of the following methods to resolve this behavior.
	
	Method 1: Start animation immediately after loading the page
	------------------------------------------------------------
	
	Set a start attribute to start animation immediately after loading the page. To
	do this, follow these steps:
	
	1. In FrontPage Editor, select the image.
	
	2. On the Edit menu, click Image Properties.
	
	3. Click the Video tab.
	
	4. Under Start, click to select the On File Open check box. Make sure the On
	  Mouse Over check box is not selected.
	
	  -or-
	
	  Click to clear both the On File Open and the On Mouse Over check boxes.
	
	5. Click OK.
	
	Method 2: Start animation when the mouse passes over the image
	--------------------------------------------------------------
	
	1. In FrontPage Editor, select the image.
	
	2. On the Edit menu, click Image Properties.
	
	3. Click the Video tab.
	
	4. Under Start, click to select the On Mouse Over check box. Make sure that the
	  On File Open check box is not selected.
	
	5. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : :1.0
	Hardware          : MAC x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
