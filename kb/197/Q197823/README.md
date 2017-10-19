---
layout: page
title: "Q197823: WD97: Word Sorts Numeric Index Entries as Alphabetic Entries"
permalink: /kb/197/Q197823/
---

## Q197823: WD97: Word Sorts Numeric Index Entries as Alphabetic Entries

	Article: Q197823
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In an index, Microsoft Word incorrectly sorts INDEX ENTRY (XE) field text that
	contains numbers. For example, if your document contains the following numeric
	XE fields:
	
	  {XE "735"}
	  {XE "76"}
	  {XE "7123"}
	
	the entries appear in the following order when you compile the index:
	
	  7123
	  735
	  76
	
	CAUSE
	=====
	
	Word sorts numbers in the same way that it sorts alphabetic entries, that is,
	one character at a time. For example, Word places all numbers that begin with 1
	(such as 12, 156, or 1147) before all numbers that begin with 2 (such as 22,
	256, or 2276). If two or more items begin with the same character, Word
	evaluates subsequent characters in each item to determine which item should come
	first. For example, Word places 124 before 19, based on the second digit (2 is
	smaller than 9, so 124 comes before 19).
	
	
	WORKAROUND
	==========
	
	To work around this problem, add a sorting text argument to your XE field. The
	sorting text argument is the index entry number padded with leading zeros. Pad
	the number with leading zeros so all your numeric XE fields contain the same
	number of digits. In other words, the sorting text arguments should contain as
	many digits as the largest number used in an XE field.
	
	To correctly sort the numbers listed in the "Symptoms" section above, insert the
	following XE fields:
	
	  "{XE "735;0735"}
	  {XE "76;0076"}
	  {XE "7123;7123"}" (without the quotation marks)
	
	Word places these XE entries in the following order in your index (notice that
	Word sorts the entry based on the sorting text argument instead of the actual XE
	text, but places the actual XE text in the index):
	
	  76
	  735
	  7123
	
	Additional query words: sorting wrong order
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
