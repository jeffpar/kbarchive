---
layout: page
title: "Q265623: WD97: Embedded Document's Custom/Built-in Properties Lost"
permalink: /kb/265/Q265623/
---

## Q265623: WD97: Embedded Document's Custom/Built-in Properties Lost

	Article: Q265623
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
	
	Custom and built-in properties of a Word document can be lost when a Microsoft
	Visual Basic for Applications (VBA) module is present and one of the following
	conditions is true:
	
	- You embed a Microsoft Word document object that contains a VBA module within
	  a Microsoft Excel or Microsoft Word document.
	
	  -or-
	
	- You add a VBA module to a Word document embedded within Excel or Word.
	
	
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
	
	To temporarily work around this problem, use linked instead of embedded
	documents.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in the Word
	97 Leap Year Fix.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
