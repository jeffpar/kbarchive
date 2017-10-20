---
layout: page
title: "Q169545: WD97: GetSpellingSuggestions Method Causes Errors"
permalink: /kb/169/Q169545/
---

## Q169545: WD97: GetSpellingSuggestions Method Causes Errors

{% raw %}

	Article: Q169545
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbprogramming word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Visual Basic for Applications GetSpellingSuggestions method,
	you may receive one of the following errors:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	When you click Details, you will receive the following error message:
	
	  WINWORD caused an invalid page fault in module WINWORD.exe at 0137:3000b8bb
	
	  -or-
	
	  Run-time error '-2147417851(80010105)':
	  Method 'GetSpellingSuggestions' of Object '_Application' failed
	
	CAUSE
	=====
	
	You may be calling the Visual Basic for Applications GetSpellingSuggestions
	method when there are no documents open in Word.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure there is a document open in Word before
	using the Visual Basic for Applications GetSpellingSuggestions method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 8.0 vb vbe vba ipf
	
	======================================================================
	Keywords          : kberrmsg kbprogramming word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
