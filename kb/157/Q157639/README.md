---
layout: page
title: "Q157639: WD97: Incorrect Hyperlink, Error Inserting from Insert Field"
permalink: /kb/157/Q157639/
---

## Q157639: WD97: Incorrect Hyperlink, Error Inserting from Insert Field

	Article: Q157639
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert a hyperlink using the Field dialog box on the Insert menu, the
	hyperlink display text is displayed incorrectly. For example, if you insert this
	field:
	
	  {Hyperlink "C:\Windows\Desktop\Test1.html"}
	
	one or more back slashes are missing in the display text, so the hyperlink field
	result looks like this:
	
	  c:\windows\desktoptest1.html
	
	If you try to activate the link, you receive the following error message:
	
	  Cannot open the specified file.
	
	WORKAROUND
	==========
	
	To work around this problem and create a working hyperlink, use one of the
	following methods:
	
	Method 1
	--------
	
	In the Field dialog box, type two back slashes in the path so that the Field
	Codes box contains the following information, and then click OK.
	
	  Hyperlink "c:\\windows\\desktop\\test1.html"
	
	Method 2
	--------
	
	Click Hyperlink on the Insert menu, type the file or URL in the "Link to File or
	URL" box, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
