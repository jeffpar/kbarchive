---
layout: page
title: "Q160229: FP: New File Name Not Reflected in FrontPage Editor"
permalink: kb/160/Q160229/
---

## Q160229: FP: New File Name Not Reflected in FrontPage Editor

	Article: Q160229
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
	
	SYMPTOMS
	========
	
	When you rename a file in FrontPage Explorer while a page with a link to that
	file is open in FrontPage Editor, the open page may not reflect the new file
	name.
	
	This problem occurs if the link to the renamed file is located in a table cell or
	an HTML form.
	
	CAUSE
	=====
	
	The code which handles renaming of files in the FrontPage Explorer mistakenly
	omitted searching in Tables or Forms for possible links to the renamed item.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Refresh FrontPage Editor after renaming files
	-------------------------------------------------------
	
	1. Save all FrontPage Editor changes before you rename files in the FrontPage
	  Explorer.
	
	2. In FrontPage Editor, click Refresh on the View menu after you rename a file
	  in FrontPage Explorer.
	
	Method 2: Close the affected files before renaming
	--------------------------------------------------
	
	In FrontPage Editor, close and save any file with links within a table or HTML
	form before you make changes in FrontPage Explorer. When you reopen the file the
	updated link information will be accurate.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was corrected in FrontPage
	98.
	
	MORE INFORMATION
	================
	
	This behavior is most noticeable with images; however, it also affects files
	included with the WebBot Include component.
	
	Note that Java Applets are not automatically rebased under any circumstances.
	
	Additional query words: 97 front page
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : :1.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
