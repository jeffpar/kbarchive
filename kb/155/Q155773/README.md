---
layout: page
title: "Q155773: WD97: Changing Hypertext Display Text Doesn't Change URL"
permalink: kb/155/Q155773/
---

## Q155773: WD97: Changing Hypertext Display Text Doesn't Change URL

	Article: Q155773
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you replace hyperlinked text with new text, the Uniform Resource Locator
	(URL) does not change; only the display text changes. For example, if you type
	the following URL in a Microsoft Word document
	
	  http://www.microsoft.com
	
	both the hyperlink and the display text are http://www.microsoft.com.
	
	However, if you change your mind, select the URL link, and type
	
	  http://www.msn.com
	
	the underlying link remains http://www.microsoft.com, but the display text is now
	http://www.msn.com.
	
	CAUSE
	=====
	
	The hyperlinking feature in Microsoft Word 97 is designed to automatically
	create a hyperlink object when you type any text that begins with the following
	protocols:
	
	  http://
	  ftp://
	  gopher://
	  Mailto:
	
	As part of this design, you can change the display text by selecting the
	hyperlink and typing the new text. However, to change the URL, you need to open
	the Edit Hyperlink dialog box.
	
	WORKAROUND
	==========
	
	To work around this behavior, using the right mouse button, click the hyperlink,
	point to Hyperlink, click Edit Hyperlink, and then type the new URL in the Link
	To File or URL text box.
	
	Additional query words: 8.0 word8 word97 hypertext hyper
	
	======================================================================
	Keywords          : kbdta word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
