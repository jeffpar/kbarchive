---
layout: page
title: "Q165773: WD97: Protected Document Stuck in Normal View After You Edit It"
permalink: /kb/165/Q165773/
---

## Q165773: WD97: Protected Document Stuck in Normal View After You Edit It

{% raw %}

	Article: Q165773
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your document will be forced into normal view from page layout view when all of
	the following are true:
	
	- You protect your document for tracked changes.
	
	  -and-
	
	- You immediately insert at least two drawing objects.
	
	  -and-
	
	- You click the Undo button until it is unavailable.
	
	  -and-
	
	- You click the Redo button.
	
	When you do this, you cannot change the view of the document and it remains in
	normal view. If you click either the Undo button or the Redo button, the
	following error message appears:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, the following error message appears:
	
	  WINWORD has caused an invalid page fault in module MSO97.dll at
	  <address>."
	
	WORKAROUND
	==========
	
	After you protect your document for tracked changes, type at least one character
	of text or press ENTER before you insert a drawing object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	Additional query words: protect mso97 invalid page fault re-do
	
	======================================================================
	Keywords          : kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
