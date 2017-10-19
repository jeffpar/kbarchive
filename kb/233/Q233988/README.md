---
layout: page
title: "Q233988: WD97: Word Hangs with DocProperty &quot;Characters&quot; Field in Header"
permalink: /kb/233/Q233988/
---

## Q233988: WD97: Word Hangs with DocProperty &quot;Characters&quot; Field in Header

	Article: Q233988
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a DocProperty "Characters" field into the header or footer of a
	document, Microsoft Word may stop responding, or you may notice the CPU usage is
	at or near 100 percent.
	
	NOTE: Inserting a DocProperty "Characters" field into the body of a document does
	not cause Word to stop responding.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use a NumChars field to insert the number of
	characters contained within the document into a header or footer.
	
	For more information about the NumChars field, click the Office Assistant, type
	"NumChars field" (without the quotation marks), click Search, and then click to
	view "Field codes: NumChars field."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: ipf
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
