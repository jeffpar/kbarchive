---
layout: page
title: "Q167216: WD97: REF Field Becomes Text Converting from Word 97 to MacWord"
permalink: kb/167/Q167216/
---

## Q167216: WD97: REF Field Becomes Text Converting from Word 97 to MacWord

	Article: Q167216
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbinterop kbusage
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you save a Word 97 document that contains a Ref field in Microsoft Word for
	the Macintosh version 5.x format, the Ref field is converted to text.
	
	For example, if your Word 97 document contains the following field
	
	  {Ref test}
	
	where test is a bookmark, and you open the document in Word for the Macintosh, it
	will look like this:
	
	  test
	
	CAUSE
	=====
	
	Word for the Macintosh does not support bookmarks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For additional information about what happens when you convert a document to
	another format, click the Office Assistant, type "conversion," click Search, and
	then click to view "Results of saving Word 97 documents in other formats."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For additional information, please see Chapter 15 of the "Microsoft Office 97
	Resource Kit," which is available on the Microsoft Web site at:
	
	  http://www.microsoft.com/office/ork/
	
	For more information about how to obtain the Office Resource Kit (ISBN:
	1-57231-329-3), call (800) MS-PRESS in the United States or (800) 667-1115 in
	Canada.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
