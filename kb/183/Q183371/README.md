---
layout: page
title: "Q183371: Jumpmenu.htm Returns JavaScript Error"
permalink: /kb/183/Q183371/
---

## Q183371: Jumpmenu.htm Returns JavaScript Error

	Article: Q183371
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Running Microsoft FrontPage 98 ISBN 1-57231-645-4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Jump button on the \hello\jumpmenu.htm page, you may receive
	the following error message:
	
	  An error has occurred in the script on this page.
	  Line: 36
	  Char: 1
	  Error: 'Window' is undefined
	  Code: 0
	
	CAUSE
	=====
	
	The JavaScript code used on this page was written for Microsoft Internet
	Explorer 3.0. When using Microsoft Internet Explorer 4.0 and some other Web
	browsers, the code returns this error.
	
	RESOLUTION
	==========
	
	Change the source code of the page to read as follows:
	
	Change:
	
	   <input type="submit" name="btnJump" value="Jump"
	   language="JavaScript" onclick="Window.location.href = nexturl">
	
	To:
	
	   <input type="button" name="btnJump" value="Jump"
	   language="JavaScript" onclick="window.location.href = nexturl">
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Running Microsoft FrontPage 98.
	
	MORE INFORMATION
	================
	
	This behavior will not appear when using Microsoft Internet Explorer 3.0, 3.01,
	or 3.02.
	
	
	Additional query words: ms_press press bookbug 1-57231-645-4
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
