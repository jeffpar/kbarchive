---
layout: page
title: "Q221553: Setting File Attributes Causes 404 - File Not Found Error"
permalink: kb/221/Q221553/
---

## Q221553: Setting File Attributes Causes 404 - File Not Found Error

	Article: Q221553
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp404 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server versions 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the folder attributes to Hidden on a directory that resides in a
	Web folder, the following error message may occur:
	
	  404 - File Not Found
	
	For example:
	
	1. Set the folder attributes to Hidden on the WWWroot directory (provided you
	  are still using the default directory).
	
	2. Browse to the directory using your browser.
	
	3. You should receive a 404 - File Not Found error.
	
	4. Set the folder attribute back to its normal state (non-hidden).
	
	You should now be able to browse to this site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in IIS 2.0, 3.0, 4.0 and 5.0.
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp404 kbProd2Web 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200
	Version           : winnt:2.0,3.0,4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
