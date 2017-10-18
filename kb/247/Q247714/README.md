---
layout: page
title: "Q247714: Using PUT Command for a Long File Name Causes &quot;HTTP 404&quot; Error"
permalink: kb/247/Q247714/
---

## Q247714: Using PUT Command for a Long File Name Causes &quot;HTTP 404&quot; Error

	Article: Q247714
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp404 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt you use the put command to put a file to the Web server, you
	may receive the following error message:
	
	  HTTP/1.1 Error 404 - File not found
	
	CAUSE
	=====
	
	This is a known issue with Internet Information Services 5.0 that occurs when
	you attempt a put to a URL, where the name of the file is longer than the
	permitted NTFS file name length.
	
	WORKAROUND
	==========
	
	When you put a file to the Web server, do not exceed the permitted NTFS file
	name length of 256 characters, which does not include the path portion of the
	put command.
	
	Additional query words: IIS 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp404 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
