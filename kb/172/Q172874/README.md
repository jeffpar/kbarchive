---
layout: page
title: "Q172874: WD97: Web Publisher Does Not Make Absolute Paths Relative Paths"
permalink: kb/172/Q172874/
---

## Q172874: WD97: Web Publisher Does Not Make Absolute Paths Relative Paths

	Article: Q172874
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a Web page containing links with absolute paths, the absolute
	paths do not become relative paths after you post the page to the Web. (To post
	a web page, click Publish to Web, on the File menu, provided you have installed
	Web Authoring Tools Update version 1.5 .)
	
	CAUSE
	-----
	
	This functionality is by design. Word creates an absolute path whenever you do
	any of the following:
	
	- Create a link with an absolute path in the HTML source.
	
	  -or-
	
	- Insert a Video or Background Sound from the Insert menu in Word, and clear
	  the Use Relative Paths check box.
	
	  -or-
	
	- Insert a hyperlink in Word and clear the "Use relative path for hyperlink"
	  check box.
	
	WORKAROUND
	==========
	
	To work around this behavior, use the following methods:
	
	- Manually edit the link in the HTML source to make it a relative path.
	
	  -or-
	
	- When you insert a Video or Background Sound via the Insert menu in Word,
	  select the Use Relative Path check box.
	
	  -or-
	
	- When you insert a hyperlink in Word, select the "Use relative path for
	  hyperlink" check box.
	
	MORE INFORMATION
	================
	
	For additional information about hyperlinks, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q159940 WD97: General Information About Hyperlinks
	
	  Q172747 What's New in the Web Authoring Tools Update
	
	Additional query words: 8.0 8.00 authoring tools
	
	======================================================================
	Keywords          : winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
