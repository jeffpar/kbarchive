---
layout: page
title: "Q244516: WD97: Word Stops When Using VBA to Check List Format Properties"
permalink: /kb/244/Q244516/
---

## Q244516: WD97: Word Stops When Using VBA to Check List Format Properties

{% raw %}

	Article: Q244516
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
	
	Word stops responding (hangs) and CPU utilization goes to 100 percent when you
	use Visual Basic for Applications to determine properties of list formatting in
	a selection. For example, Word stops after running the following VBA command:
	
	  msgbox Selection.Range.listformat.list is nothing
	
	
	CAUSE
	=====
	
	This problem can occur in specific situations when Word accesses the lists
	collection, and the document contains sub-storages such as header\footer,
	textboxes, comments, footnotes, or autotext entries.
	
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
