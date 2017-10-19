---
layout: page
title: "Q62469: WD97: Index Field &#92;E or &#92;L Switch Limited to Five Characters"
permalink: /kb/062/Q62469/
---

## Q62469: WD97: Index Field &#92;E or &#92;L Switch Limited to Five Characters

	Article: Q62469
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Word, if you use the INDEX field with the \E switch, there is an
	upper limit of five contiguous characters that you can use to separate the index
	from the page number. The default character is a blank space.
	
	Similarly, if you use the \L switch with the INDEX field to specify a page number
	separator, Word imposes a limit of five characters. The default character is a
	blank space.
	
	If you specify more than five characters to use with either switch, Word will use
	only the first five.
	
	In the following example, periods are used to separate the index from the page
	number, and a semicolon separates the page numbers:
	
	{index \E "..." \L ";"}
	
	Additional query words: seperater word97
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
