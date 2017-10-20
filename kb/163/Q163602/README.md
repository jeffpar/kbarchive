---
layout: page
title: "Q163602: WD97: Temporary Parameter for Control Does Not Work"
permalink: /kb/163/Q163602/
---

## Q163602: WD97: Temporary Parameter for Control Does Not Work

{% raw %}

	Article: Q163602
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Temporary parameter for the Visual Basic for Applications Control object
	does not work as expected.
	
	CAUSE
	=====
	
	The Temporary parameter is an optional argument associated with the Control
	object. Setting this parameter to True should make the new control temporary.
	Temporary controls are automatically deleted when the container application is
	closed.
	
	In Word, when this parameter is set to True, the control should be temporary;
	however, Word ignores this parameter and the control becomes permanent.
	
	For more information about the Temporary parameter, from the Visual Basic Editor,
	click the Office Assistant, type "Add Method," click Search, and then click to
	view "Add Method (CommandBars Collection)."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Temporary feature was intended for other applications that did not support
	session-specific settings. Because Word can store information in global
	templates or local templates, you can get all of the Temporary functionality
	without using the Temporary flag.
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
