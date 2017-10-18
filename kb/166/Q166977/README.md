---
layout: page
title: "Q166977: WD97: Erratic Scrolling Caused by Large Objects"
permalink: kb/166/Q166977/
---

## Q166977: WD97: Erratic Scrolling Caused by Large Objects

	Article: Q166977
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbui kbusage word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The scroll box on the scroll bar may be erratic (it may "jump" or change size)
	when you scroll through your document. This problem occurs if the document
	includes tall pictures and if you view the document in online layout view.
	
	CAUSE
	=====
	
	This behavior is caused by sudden, radical changes in virtual page size. In
	online view, the virtual page size varies with the height of the
	
	window and is extended by drawing objects and inline pictures. In documents
	
	with large pictures, the current page size can differ drastically from the
	average page size, and the scroll bar calculations (visible height divided by
	the approximate total height) will be wrong. This same problem can occur in page
	layout view with multiple custom page sizes.
	
	This behavior should only be apparent when the scroll box is on a page with
	objects that meet this description.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
