---
layout: page
title: "Q181227: FP: Invalid Page URL Error Saving Page in FrontPage Editor"
permalink: kb/181/Q181227/
---

## Q181227: FP: Invalid Page URL Error Saving Page in FrontPage Editor

	Article: Q181227
	Product(s): Word Front Page
	Version(s): WINDOWS:1.1,97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q193965.
	
	SYMPTOMS
	========
	
	When you save your page in FrontPage Editor, you may receive the following error
	message
	
	  "http://localhost/myweb/<FileName>.htm" is not a valid page URL for the
	  current web. Do you want to save the page with this URL?
	
	where <FileName>.htm is the file name of your file. The error may be
	different depending on the location of your web.
	
	CAUSE
	=====
	
	This behavior occurs if you save a file with an extension that is not recognized
	by FrontPage as a text or HyperText Markup Language (HTML) formatted file.
	
	FrontPage recognizes the following extensions as text or HTML file formats:
	
	- htm
	- html
	- shtm
	- shtml
	- htx
	- asp
	
	RESOLUTION
	==========
	
	Save your page by using one of the extensions listed in the "Cause" section of
	this article.
	
	MORE INFORMATION
	================
	
	Web servers recognize file types by their extension. If the server does not
	recognize the extension, it may not serve the file correctly or the Web browser
	may interpret it incorrectly.
	
	If you save a file with an extension other than one of those listed in the
	"Cause" section of this article, FrontPage will not recognize it as an HTML
	document. Such features as themes, shared borders, hyperlink verification, and
	spelling will not be applied to the document if it is not recognized as HTML.
	
	Additional query words: 97 file types
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : WINDOWS:1.1,97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
