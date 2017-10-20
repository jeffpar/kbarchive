---
layout: page
title: "Q197757: WD97: Conditional MERGEFIELD Lost When Converted to MacWord"
permalink: /kb/197/Q197757/
---

## Q197757: WD97: Conditional MERGEFIELD Lost When Converted to MacWord

{% raw %}

	Article: Q197757
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbfield kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you save a mail merge main document containing conditional MERGEFIELD
	statements as a Word for the Macintosh 4.0 or 5.x document, the information in
	the conditional MERGEFIELD statement is lost.
	
	WORKAROUND
	==========
	
	Re-create the conditional MERGEFIELD statement after you open the mail merge
	main document in Word.
	
	NOTE: You may need to reattach the data document when you open the mail merge
	main document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The conversion process does not correctly handle the conditional MERGEFIELD
	statement. For example, if the statement in Word 97 is
	
	     {IF {MERGEFIELD LastName}="Jones" "yes" "no"}
	
	the same statement after opening the converted document in Word for the Macintosh
	5.1 appears as:
	
	     <<IF=>><<ENDIF>>
	
	When you reopen the converted document back into Word, the conditional MERGEFIELD
	statement shows as:
	
	        {IF= "" ""}
	
	Additional query words: conditional print constructs field 8.0 8.00
	
	======================================================================
	Keywords          : kbfield kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
