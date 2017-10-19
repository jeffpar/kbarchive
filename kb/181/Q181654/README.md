---
layout: page
title: "Q181654: FP: Hyperlink Font Color Settings not Visible in Browser"
permalink: /kb/181/Q181654/
---

## Q181654: FP: Hyperlink Font Color Settings not Visible in Browser

	Article: Q181654
	Product(s): Word Front Page
	Version(s): WINDOWS:1.1,97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Even though you specified a color for a hyperlink in FrontPage Editor, the
	hyperlink will appear in the default color used by the Web browser not in the
	color you specified.
	
	CAUSE
	=====
	
	This behavior occurs when you change the color of a hyperlink by clicking Text
	Color on the Formatting toolbar or Font on the Format menu. When you use either
	of these commands, FrontPage applies a font (<Font>) tag to the hyperlink.
	Some Web browsers do not support using the font tag with the hyperlink tag.
	
	RESOLUTION
	==========
	
	To work around this behavior, you can define the hyperlink settings for the page
	as a background property. To do this, follow these steps:
	
	1. Open your page in FrontPage Editor.
	
	2. On the File menu, click Page Properties.
	
	3. Click the Background tab.
	
	  NOTE: If you applied a theme to the page, the Background tab will not be
	  available.
	
	4. In the Hyperlink, Visited Hyperlink, and Active Hyperlink boxes, select the
	  color you want.
	
	5. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft FrontPage
	98 for Windows.
	
	Additional query words: 98 97
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : WINDOWS:1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
