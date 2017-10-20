---
layout: page
title: "Q241921: WD97: Copied Text Viewed as Metafile Appears Clipped in Viewer"
permalink: /kb/241/Q241921/
---

## Q241921: WD97: Copied Text Viewed as Metafile Appears Clipped in Viewer

{% raw %}

	Article: Q241921
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a section of text is formatted with a specific style in Word 97 and then
	copied, using either CTRL+C keys or the Copy command (Edit menu) and then viewed
	as an enhanced metafile through the Clipboard Viewer, the text is displayed with
	the style defined in Normal.dot. This can result in clipping of the copied and
	pasted section due to the font conversion.
	
	
	CAUSE
	=====
	
	Word is using the default style from Normal.dot to create the metafile, as
	opposed to using the style in the document from which the source text is copied.
	
	RESOLUTION
	==========
	
	To resolve the problem described in this article, obtain and install the latest
	Microsoft Word 97 update from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/Wd97mcrs.aspx
	
	IMPORTANT NOTE: Microsoft Word 97 post-service release fixes are cumulative. The
	latest update contains all of the fixes since Service Release 2. If you install
	the latest update for Word 97, you do not need to install any other updates
	after Service Release 2.
	
	For additional information about the fixes included in the latest update for Word
	97, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265374 WD97: Post Service Release Fixes for Word 97
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
