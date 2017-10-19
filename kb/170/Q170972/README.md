---
layout: page
title: "Q170972: WD97: IExplorer Back Button Ignored After Hyperlink from Word"
permalink: /kb/170/Q170972/
---

## Q170972: WD97: IExplorer Back Button Ignored After Hyperlink from Word

	Article: Q170972
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:3.01,3.02,97
	Operating System(s): 
	Keyword(s): kbinterop word97
	Last Modified: 05-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Internet Explorer versions 3.01, 3.02 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a hyperlink in Word to open the link in Internet Explorer and
	then click the Back button to switch back to Word, nothing happens and Internet
	Explorer remains active.
	
	CAUSE
	=====
	
	This is a timing issue: This problem occurs when you start Internet Explorer 3.x
	from Word, and Internet Explorer finishes starting before Word can establish a
	connection to it.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Internet Explorer version 4.0 or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q157763 OFF97: Memory Problems When Hyperlinking Between Programs
	
	  Q166981 WD97: Back Button Not Available After Viewing HTML Source
	
	Additional query words: 8.0 ie iexplore
	
	======================================================================
	Keywords          : kbinterop word97 
	Technology        : kbWordSearch kbIEsearch kbWord97 kbWord97Search kbZNotKeyword2 kbIE95Search kbZNotKeyword3 kbIE301Win95 kbIE302Win95
	Version           : WINDOWS:3.01,3.02,97
	Issue type        : kbbug
	
	=============================================================================
	
