---
layout: page
title: "Q237339: WD97: Automating Word Creates an Additional Document"
permalink: /kb/237/Q237339/
---

## Q237339: WD97: Automating Word Creates an Additional Document

	Article: Q237339
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Word document object embedded in another file--for example, a Microsoft
	Excel workbook--is first manipulated via automation and then opened for editing
	in a separate Word window, an additional "phantom document" appears, called
	Documentx (where x corresponds to the number Word gives to the next newly
	created document; for example, Document1 or Document8).
	
	This problem can manifest itself in several ways:
	
	Scenario A
	
	The extra document appears at the first run of the program that automates and
	then opens the object. The extra document is listed in the document window list
	in Word. When you try to close the extra document by clicking on the X button in
	the upper right corner of the document window, the object document is closed
	instead.
	
	Scenario B
	
	The extra document appears at the first run of the program code that automates
	and then opens the object. The extra document is not listed in the document
	window list. When you try to close the extra document by clicking on the X
	button in the document window's upper right corner, Word hangs and can only be
	closed using Task Manager.
	
	Scenario C
	
	The extra document does not appear at the first run of the program code that
	automates and then opens the object. From the second run of the macro on, the
	extra document appears and is listed in the Window list. When you try to close
	the extra document by clicking on the X button in the upper right corner of the
	document window, the object document is closed instead.
	
	Scenario D
	
	The extra document does not appear at the first run of the program code that
	automates and then opens the object. From the second run of the macro on, the
	extra document appears and is not listed in the Window list. When you try to
	close the extra document, Word crashes with a Page Fault.
	
	
	CAUSE
	=====
	
	This happens only under the following circumstances:
	
	The embedded document object is manipulated via automation. After automation, the
	document is opened via program code, not manually.
	
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
	This problem does not occur with Microsoft Word 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
