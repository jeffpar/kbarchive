---
layout: page
title: "Q159678: WD97: Incorrect SectionPages or NumPages When Printed"
permalink: kb/159/Q159678/
---

## Q159678: WD97: Incorrect SectionPages or NumPages When Printed

	Article: Q159678
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbdta word8 kbfield word97
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The result of the SectionPages field or NumPages field is printed incorrectly,
	although it is displayed correctly on the screen.
	
	NOTE: This problem occurs when the SectionPages or NumPages field is placed
	inside the header or footer. This problem also occurs when you use the Page X of
	Y AutoText entry.
	
	RESOLUTION
	==========
	
	To resolve the problem described in this article, obtain and install the latest
	Microsoft Word 97 update from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/Wd97mcrs.aspx
	
	IMPORTANT NOTE: Microsoft Word 97 post-service release fixes are cumulative. The
	latest update contains all of the fixes since Service Release 2. If you install
	the latest update for Word 97, you do not need to install any other updates
	after Service Release 2.
	
	For additional information about the fixes included in the latest update for Word
	97, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265374 WD97: Post Service Release Fixes for Word 97
	
	
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following methods before you print
	your document:
	
	NOTE: After you perform one of the workarounds, update the SectionPages or
	NumPages field before you print your document by doing one of the following:
	
	- Right-click the SectionPages or NumPages field that is not updating and click
	  Update Field on the shortcut menu.
	
	  -or-
	
	- On the Tools menu, click Options. On the Print tab, click to select the
	  Update fields check box and then click OK.
	
	Method 1: Turn off Show/Hide
	----------------------------
	
	To turn off Show/Hide, do one of the following:
	
	- On the Standard toolbar, click Show/Hide. If the Standard toolbar is missing,
	  point to Toolbars on the View menu and click to select Standard.
	
	  -or-
	
	- On the Tools menu, click Options. On the View tab, click to clear the All
	  check box, and then click OK.
	
	Method 2: Turn on Reverse Print Order
	-------------------------------------
	
	On the Tools menu, click Options. On the Print tab, click to select the Reverse
	print order check box, and then click OK.
	
	Method 3: Turn off Background Printing
	--------------------------------------
	
	Turn off Background Printing and then update the field before you print your
	document. To do this, follow these steps:
	
	1. On the Tools menu, click Options, and then click the Print tab.
	
	2. Click to clear the Background Printing check box.
	
	3. Click OK.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: 8.0 word8 word97 wrong broke doesn't won't isn't incorrect section page number
	
	======================================================================
	Keywords          : kbprint kbdta word8 kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
