---
layout: page
title: "Q166049: WV: Relative Links Don't Work in Word Viewer"
permalink: kb/166/Q166049/
---

## Q166049: WV: Relative Links Don't Work in Word Viewer

	Article: Q166049
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbinterop kbusage kbviewer
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word Viewer 97-2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click to follow a relative hyperlink that was created with Internet
	Assistant, Microsoft Word Viewer 97-2000 is unable to parse the link information
	and open the document.
	
	Instead, the URL Open dialog box from Internet Explorer is displayed.
	
	CAUSE
	=====
	
	This problem occurs when both of the following conditions are true:
	
	- The hyperlink was created in Internet Assistant, an Internet add-in that you
	  can use to create Web pages in earlier versions of Microsoft Word (versions
	  earlier than Word 97).
	
	- The link is a relative link. That is, rather than having a full path to the
	  link, the location of the link is relative to the current directory.
	
	WORKAROUND
	==========
	
	Use the Internet Explorer URL Open dialog box that is displayed to go to the
	linked document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about Word Viewer 97-2000, please see the following
	Knowledge Base article:
	
	  
	
	  Q165908 WV: How to Obtain Microsoft Word Viewers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbusage kbviewer 
	Technology        : kbWordViewerSearch kbViewerSearch kbWordViewer97
	Version           : WINDOWS:
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
