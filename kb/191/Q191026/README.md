---
layout: page
title: "Q191026: WD97: Incorrect Pages Print with Odd/Even Print Order"
permalink: /kb/191/Q191026/
---

## Q191026: WD97: Incorrect Pages Print with Odd/Even Print Order

	Article: Q191026
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbfield
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you choose to print even pages or odd pages, Word does not print the
	correct pages. This behavior occurs when you include page numbers that are
	numbered differently from the physical pages in the document (for example, when
	the first page of your document is defined as page 2, the second page is defined
	as page 3, and so forth). In addition, this behavior occurs whether or not you
	choose a section start equal to odd or even pages.
	
	CAUSE
	=====
	
	Word looks to the physical pages in your document to determine which pages are
	odd and even. Word does not reference any logical page numbering placed in your
	document.
	
	RESOLUTION
	==========
	
	To correctly print pages that have odd or even page numbers, you can add a blank
	page to the beginning of your section or document. When you do this, the
	physical page numbers and the logical page numbers are equivalent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: print odd even pages range incorrect physical logical
	
	======================================================================
	Keywords          : kbprint kbfield 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
