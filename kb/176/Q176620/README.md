---
layout: page
title: "Q176620: WD97: Incorrect Result with Quotation Marks in Conditional Merge"
permalink: kb/176/Q176620/
---

## Q176620: WD97: Incorrect Result with Quotation Marks in Conditional Merge

	Article: Q176620
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a conditional MERGEFIELD for a result that includes quotation
	marks, the result of the field contains a backslash.
	
	For example, if you have the following conditional statement in your mail merge
	main document, which uses backslashes to have quotation marks appear in the
	result of a true condition for a record
	
	  {IF {MERGEFIELD name} = "Jo Brown" "\"Now is the time...\"" "false
	  condition"}
	
	you would expect to receive the result of "Now is the time" on a true statement.
	However, Word gives you the following result:
	
	  "Now is the time...\"
	
	NOTE: This problem may also occur with commas or backslashes.
	
	WORKAROUND
	==========
	
	Method 1: Use Two Apostrophes
	-----------------------------
	
	Instead of using \" (backslash double-quotation mark), use two apostrophes ('')
	and remove the backslash.
	
	Method 2: Use the Edit/Replace Command
	--------------------------------------
	
	To work around this problem, use a unique character in place of the quotation
	mark. After the merge is completed, use the Replace command to search for the
	unique character, and replace it with a quotation mark. (Note that the character
	you choose must not occur elsewhere in your document.)
	
	Example:
	
	In the merge field, use the pound sign instead of quotation marks.
	
	  {IF {MERGEFIELD name} = "Jo Brown" "#Now is the time...#" "false condition"}
	
	After the merge is completed, follow these steps to replace the pound sign with a
	quotation mark:
	
	1. On the Edit menu, click Replace.
	
	2. In the Find what box, type the unique character (the pound sign, in this
	  example).
	
	3. In the "Replace with" box, type a quotation mark.
	
	All instances of the unique character (the pound sign, in this example) are
	replaced with a quotation mark.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q197840 WD97: Certain Characters Do Not Display in Field Result
	
	Additional query words: quote mail merge else print condition
	
	======================================================================
	Keywords          : kbfield word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
