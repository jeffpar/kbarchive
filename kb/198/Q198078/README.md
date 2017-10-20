---
layout: page
title: "Q198078: WD97: Go To Command Fails in Protected Document"
permalink: /kb/198/Q198078/
---

## Q198078: WD97: Go To Command Fails in Protected Document

{% raw %}

	Article: Q198078
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you protect a document for forms that does not contain form fields or
	unprotected sections, nothing happens when you click the Go To command on the
	Edit menu, even though the command is available.
	
	NOTE: To protect a document, click Protect Document on the Tools menu.
	
	CAUSE
	=====
	
	When you protect your document for forms, the document must contain at least one
	unprotected section or form field for the Go To feature to work. The Go To
	feature will not go to a protected section that does not contain at least one
	form field.
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
