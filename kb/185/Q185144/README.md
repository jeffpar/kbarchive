---
layout: page
title: "Q185144: WD97: Multi-level Numbered List Converts Incorrectly"
permalink: kb/185/Q185144/
---

## Q185144: WD97: Multi-level Numbered List Converts Incorrectly

	Article: Q185144
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Word 97 for Windows, when you open a document created in another version of
	Word, numbered lists with multiple levels are converted incorrectly.
	
	Only the first item in the list remains numbered. For example, if the list looks
	like the following:
	
	  1. Dog
	     a. Shepherd
	     b. Collie
	  2. Cat
	     a. Tabby
	     b. Persian
	
	When opened in Word 97, the list is converted to the following:
	
	  1. Dog
	        Shepherd
	        Collie
	     Cat
	        Tabby
	        Persian
	
	CAUSE
	=====
	
	This problem occurs if the numbered list is inside a table.
	
	WORKAROUND
	==========
	
	Create the numbered list outside of a table for correct conversion.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	Additional query words: multilist multiple tiered sublist alphabetical alphabetic ordering ordered
	
	======================================================================
	Keywords          : kbdta word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
