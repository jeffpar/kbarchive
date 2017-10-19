---
layout: page
title: "Q260986: WD97: Setting Ruby in a Certain Formed Table Makes Word Stop"
permalink: /kb/260/Q260986/
---

## Q260986: WD97: Setting Ruby in a Certain Formed Table Makes Word Stop

	Article: Q260986
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies to the 
	Japanese version(s) of Word 97.
	
	SYMPTOMS
	========
	
	In Microsoft Word 97 for Windows, when you set Ruby in a certain form table
	through a certain operation, Word 97 may stop responding (hang).
	
	CAUSE
	=====
	
	This problem can occur if the following conditions are true:
	
	- You create a table that has five columns.
	
	  -and-
	
	- You enter a string that contains four or more characters that are delimited
	  spaces.
	
	The problem is caused by a combination of how the EQ fields are created by the
	Power97.dot file and some field update code in Word 97. Power97.dot creates the
	EQ fields a bit at a time. At some stages, the fields are incomplete and
	therefore invalid; however, Word still tries to update them.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	
	
	
	Additional query words: qfe hangs freeze freezes
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
