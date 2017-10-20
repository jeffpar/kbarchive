---
layout: page
title: "Q187847: FP: Explorer Automatically Updates Hyperlinks in Editor"
permalink: /kb/187/Q187847/
---

## Q187847: FP: Explorer Automatically Updates Hyperlinks in Editor

{% raw %}

	Article: Q187847
	Product(s): Word Front Page
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194247.
	
	SYMPTOMS
	========
	
	The hyperlink information that is displayed in FrontPage Explorer is not the
	same as the information that is stored in the Hypertext Markup Language (HTML)
	code of the Web page.
	
	CAUSE
	=====
	
	This problem occurs because FrontPage Explorer always updates the hyperlink
	information in FrontPage Editor if you rename a file.
	
	This problem occurs when the following conditions are true:
	
	- You create a Web page in FrontPage Editor that contains a hyperlink to
	  another Web page.
	
	  -and-
	
	- You rename the Web page that is referenced by the hyperlink in FrontPage
	  Explorer.
	
	  -and-
	
	- The page that contains the hyperlink to the Web page with the changed name is
	  open in FrontPage Editor.
	
	NOTE: The hyperlink is updated in FrontPage Editor even though you click No when
	you are prompted to update the link in FrontPage Explorer.
	
	RESOLUTION
	==========
	
	To resolve this problem, close FrontPage Editor before you rename files in
	FrontPage Explorer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
