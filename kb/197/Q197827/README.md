---
layout: page
title: "Q197827: WD97: SET Fields Within IF Field Evaluate Incorrectly"
permalink: kb/197/Q197827/
---

## Q197827: WD97: SET Fields Within IF Field Evaluate Incorrectly

	Article: Q197827
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use an IF field to determine how to set a bookmark, and you use SET
	fields inside the IF field, the bookmark being set always evaluates as the
	second SET statement.
	
	For example, these statements
	
	        {ask gender "What is the person's gender?"}
	   -->  {if gender = f {set pronoun she}{set pronoun he} }
	        {ref pronoun}
	
	always show the bookmark "pronoun" as "he". This is because Word evaluates fields
	from the inside out and from left to right. It evaluates the first SET
	statement, and the bookmark "pronoun" is set to "she". It then evaluates the
	next SET field, and the bookmark "pronoun" is reset to "he". When the IF
	instruction is carried out, both the true bookmark and the false bookmark are
	"he".
	
	WORKAROUND
	==========
	
	The correct way to use these fields together is to put the IF field inside the
	SET field, as in the following example:
	
	        {ask gender "What is the person's gender?"}
	   -->  {set pronoun {if gender = f "she" "he"} }
	        {ref pronoun}
	
	Additional query words: winword2 define assign wrong value incorrect
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
