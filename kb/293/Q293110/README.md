---
layout: page
title: "Q293110: Internet Standards And Protocols Comments and Corrections"
permalink: /kb/293/Q293110/
---

## Q293110: Internet Standards And Protocols Comments and Corrections

	Article: Q293110
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 14-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Internet Standards and Protocols ISBN 1-57231-692-6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Internet Standards and Protocols, ISBN
	1-57231-692-6.
	
	The following topics are covered:
	
	- Page 96: UTF-8 Clarification
	
	MORE INFORMATION
	================
	
	Page 96: UTF-8 Clarification
	----------------------------
	
	On page 96, under the section titled UTF-8, the following corrections can be made
	to the first paragraph.
	
	Change:
	"Universal Transformation Format, 8-bit form (UTF-8) converts a 16-bit Unicode
	character into a series of from 2 to 5 bytes, with the lead byte detailing how
	many bytes follow. The number of bytes depends on the value of the particular
	Unicode character, and all characters with ASCII values (from 0 through 127) are
	represented in a single byte following the lead byte. UTF-8 is considered fairly
	efficient, but when searching for a particular character in the middle of a byte
	stream, one might have to parse backward up to 4 bytes in order to find the
	start of a character. UTF-8 is also reversible (just like UTF-7); the original
	Unicode data can be obtained by doing a reverse transformation."
	
	To:
	"Universal Transformation Format, 8-bit form (UTF-8) converts a 31-bit ISO 10646
	character into a series of from 1 to 6 bytes, with the lead byte detailing how
	many bytes follow. The number of bytes depends on the value of the particular
	ISO 10646 character, and all characters with ASCII values (from 0 through 127)
	are represented in a single byte following the lead byte. UTF-8 is considered
	fairly efficient, but when searching for a particular character in the middle of
	a byte stream, one might have to parse backward up to 5 bytes in order to find
	the start of a character. UTF-8 is also reversible (just like UTF-7); the
	original ISO 10646 data can be obtained by doing a reverse transformation."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 1-57231-692-6 EUBook Naik
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Issue type        : kbinfo
	
	=============================================================================
	
