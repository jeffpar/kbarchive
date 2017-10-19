---
layout: page
title: "Q125240: Bookshelf: Error Message During Search Using Word &quot;Near&quot;"
permalink: /kb/125/Q125240/
---

## Q125240: Bookshelf: Error Message During Search Using Word &quot;Near&quot;

	Article: Q125240
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1994 edition 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf for Windows, 1995 Intro Edition 
	- Microsoft Bookshelf 1996-97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Bookshelf for Windows, 1994 edition and in Bookshelf for Windows, 1995 Intro
	Edition, when you attempt to query on the word "near" (without the quotation
	marks) while the Find tab is selected, you receive the following error message:
	
	  The search query or a subexpression within parentheses begins or ends with a
	  search operator.
	
	In Bookshelf '95 for Windows 95 and Bookshelf '96-'97 for Windows, the error
	message is:
	
	  A part of the search query contains stop words or begins or ends with a
	  search operator.
	
	RESOLUTION
	==========
	
	To avoid this problem, perform the search after you select the Contents tab or
	enclose the word in quotes ("near").
	
	MORE INFORMATION
	================
	
	The error is generated because the Find search query uses 'near' as a Boolean
	operator in searches. Searching on this word alone is not a valid query.
	
	
	Additional query words: 1.00 '94 1994 95 1995 introedition msn web msweb msnet net
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1994 kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbBookShelf1995Intro
	Version           : :1994 edition; WINDOWS:
	
	=============================================================================
	
