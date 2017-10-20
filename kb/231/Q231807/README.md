---
layout: page
title: "Q231807: WD97: Wildcard Calculates Search and Replace Text Improperly"
permalink: /kb/231/Q231807/
---

## Q231807: WD97: Wildcard Calculates Search and Replace Text Improperly

{% raw %}

	Article: Q231807
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you find or replace text using wildcard criteria of any character occurring
	from n to m occurrences (?{n,m}), Word may find or replace text that exceeds m.
	
	In the text example:
	
	  sample a 123
	  sample ab 123
	  sample abc 123
	  sample abcd 123
	
	to find all occurrences of text beginning with the word "Sample ", followed by
	just one to three characters and ending with " 123", you would build a wildcard
	search criteria of:
	
	  Sample (?{1,3})( 123)
	
	in the Find what box (in the Find and Replace dialog box on the Edit menu).
	
	This criteria, however, will find the last line in the example above, which
	contains more than three characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about find and replace, click Microsoft Word Help on the
	Help menu, type "find and replace" (without the quotation marks) in the Office
	Assistant or the Answer Wizard, and then click Search to view the topics
	returned.
	
	For additional information about wildcard search or replace, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q198047 WD97: Can't Find Text Using Wildcards with Find or Replace
	
	  Q198370 WD97: Find/Replace with Wildcard Finds All Punctuation
	
	  Q176776 WD: Searching for Special Characters When Use Wildcards Selected
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
