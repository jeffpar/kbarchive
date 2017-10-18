---
layout: page
title: "Q156246: Bookshelf 1994: Find with &quot;?&quot; Wildcard Search Fails"
permalink: kb/156/Q156246/
---

## Q156246: Bookshelf 1994: Find with &quot;?&quot; Wildcard Search Fails

	Article: Q156246
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1994 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the ? symbol to search for word patterns, Microsoft Bookshelf fails
	and you receive an error message similar to the following:
	
	  Find!
	  Your search word or phrase, hon?y, was not found.
	
	RESOLUTION
	==========
	
	Use the * wildcard to search for word variations. For example, to find the word
	"honey", use the following query:
	
	  hon*
	
	MORE INFORMATION
	================
	
	Bookshelf 1994's online Help documents using the ? symbol to search for word
	patterns. As stated on the Tools menu, Advanced Find, Hints button:
	
	  search for hon?y
	
	should find the word "honey". However, this Help information is incorrect. The ?
	wildcard was not fully implemented in Bookshelf 1994.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Bookshelf for Windows,
	1994 edition. This documentation error was corrected in the 1995 edition of
	Microsoft Bookshelf for Windows.
	
	Additional query words: 1994 multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1994
	Version           : :1994 edition
	
	=============================================================================
	
