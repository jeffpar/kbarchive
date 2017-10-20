---
layout: page
title: "Q196502: WD97: Sort Order Appears to Be Incorrect"
permalink: /kb/196/Q196502/
---

## Q196502: WD97: Sort Order Appears to Be Incorrect

{% raw %}

	Article: Q196502
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
	
	Microsoft Word appears to sort items in the wrong order. Any named items that
	contain numbers in their names, such as bookmarks, macros, or AutoText entries,
	may appear to be sorted incorrectly.
	
	For example, if you have three bookmarks named Test1, Test2, and Test11, they
	appear in the Bookmark Name list in the following order:
	
	  Test1
	  Test11
	  Test2
	
	CAUSE
	=====
	
	Word sorts numbers in the same way that it sorts words, that is, one character
	at a time. For example, Word places all numbers that begin with 1 (such as 12,
	156, or 1147) before all numbers that begin with 2 (such as 22, 256, or 2276).
	If two or more items begin with the same character, Word evaluates subsequent
	characters in each item to determine which item should come first. For example,
	Word places 124 before 19, based on the second digit (2 is less than 9, so 124
	comes before 19).
	
	WORKAROUND
	==========
	
	If you have named items that include numbers, change each name to include a
	leading 0 (zero). If the Bookmark names are Test1 and Test2 (and one of the
	items on the list has a two-digit number, like Test11), change the names to
	Test01 and Test02. Word now sorts them in the expected order.
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
