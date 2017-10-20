---
layout: page
title: "Q162559: WD97: Error Message: &quot;...Password-Protected with an Encryption S"
permalink: /kb/162/Q162559/
---

## Q162559: WD97: Error Message: &quot;...Password-Protected with an Encryption S

{% raw %}

	Article: Q162559
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
	
	When you open a password-protected document, the following error message may
	occur:
	
	  This document has been password protected with an encryption scheme not
	  available in this region. Word cannot open this document.
	
	CAUSE
	=====
	
	This functionality is by design. The document was saved with a password on a
	system with Regional Settings other than "French (Standard)."
	
	WORKAROUND
	==========
	
	To work around this problem, use a version of the document that is not password
	protected.
	
	
	MORE INFORMATION
	================
	
	When you save a Word document with a password, Word 97 encrypts the document
	based on your system's Windows Regional Settings. If a Word document is saved
	with a password on a system with Regional Settings set to "English (United
	States)" (or other regional settings other than "French (Standard)"), Word uses
	a stronger (40-bit) encryption method. If the system's Regional Settings are set
	to "French (Standard)", Word uses the "Windows 95 style weak encryption"
	method.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
