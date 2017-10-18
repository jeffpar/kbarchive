---
layout: page
title: "Q157615: WD97: Word Can't Open Data Source If String Is Too Long"
permalink: kb/157/Q157615/
---

## Q157615: WD97: Word Can't Open Data Source If String Is Too Long

	Article: Q157615
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta word97
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use MSQuery to generate a data source for a Word mail merge, you may
	receive the following error message:
	
	  Word was unable to open the data source.
	
	CAUSE
	=====
	
	This error message occurs when your query string exceeds 255 characters.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Shorten the search string. For example, shorten the path to the data source,
	  shorten the file name, or select fewer columns of data when you define your
	  query.
	
	  -or-
	
	- Connect to the data source using dynamic data exchange (DDE) instead of
	  MSQuery.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: print merge ms qfe
	
	======================================================================
	Keywords          : kbualink97 kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
