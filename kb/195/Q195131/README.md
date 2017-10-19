---
layout: page
title: "Q195131: WD97: How to Sort Words Separated by a Space"
permalink: /kb/195/Q195131/
---

## Q195131: WD97: How to Sort Words Separated by a Space

	Article: Q195131
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to sort information that is separated by spaces, such
	as a list of names.
	
	MORE INFORMATION
	================
	
	To sort information that is delimited by spaces, follow these steps:
	
	1. Confirm that each row contains the same number of fields. For example, if you
	  are sorting a list of names and some names include a middle initial while
	  others do not, the sort is not completed correctly.
	
	  NOTE: If you add a non-breaking space between some fields and use the SPACEBAR
	  for others, and then sort on a space, only the space (not the non-breaking
	  space) will be used to sort. For example, if you want to sort on last names,
	  but your data includes honorifics or middle initials, insert non-breaking
	  (CTRL+SHIFT+SPACEBAR) spaces in the following positions:
	
	  Dr.<nonbreaking space>Andrew Gray (This will sort on the space between
	  Andrew and Gray.)
	
	  Andrew Gray<nonbreakingspace>,MD (This will sort on the space between
	  Andrew and Gray.)
	
	  Andrew<nonbreaking space>P. Gray (This will sort on the space between P.
	  and Gray.)
	
	2. Select the list.
	
	3. On the Table menu, click Sort.
	
	4. Click Options, select Other, type a space in the text box, and then click OK.
	
	5. Click OK again.
	
	  NOTE: This closes the Sort Text dialog box, which will not list all of the
	  fields to sort by until you reopen the dialog box.
	
	6. On the Table menu, click Sort.
	
	7. In the Select By list, select Word 2 (or another field you want to sort by),
	  choose a Type, select Ascending or Descending order, and then click OK.
	
	The list is now sorted by last name.
	
	Additional query words: space delimit delimited blank blanks delimiters 8.0 8.00
	
	======================================================================
	Keywords          : kbualink97 kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
