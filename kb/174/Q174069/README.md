---
layout: page
title: "Q174069: WD97: Invalid Links from Link to Remote File Transfer Protocol"
permalink: kb/174/Q174069/
---

## Q174069: WD97: Invalid Links from Link to Remote File Transfer Protocol

	Article: Q174069
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a hyperlink to a remote FTP site (for example,
	ftp://ftp.microsoft.com) in a Microsoft Word 97 HTML document and then log on to
	the FTP server, the FTP page is loaded with a directory listing, but all the
	hyperlinks on the FTP page are invalid. If you click one of these hyperlinks,
	Microsoft Word will display the following error message:
	
	  Unable to open <directory or file name>. Cannot locate the Internet
	  server or proxy server.
	
	CAUSE
	=====
	
	The hyperlinks on the FTP page assume that the base hyperlink is the local cache
	directory.
	
	Internet browsers use the base hyperlink to locate links to other files. A base
	hyperlink allows you to insert relative links [or partial Uniform Resource
	Locators (URLs)] in your document. For example, if the base hyperlink is
	
	  http://example.microsoft.com.
	
	you can insert
	
	  /images/bullet.gif
	
	in your HTML document instead of the full path:
	
	  http://example.microsoft.com/images/bullet.gif
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For additional information about hyperlinks, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q159940 WD97: General Information About Hyperlinks
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
