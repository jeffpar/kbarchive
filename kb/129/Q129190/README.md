---
layout: page
title: "Q129190: FIX: SourceSafe Command Line Fails to Create Output File"
permalink: /kb/129/Q129190/
---

## Q129190: FIX: SourceSafe Command Line Fails to Create Output File

	Article: Q129190
	Product(s): Microsoft SourceSafe
	Version(s): 3.04 3.10
	Operating System(s): 
	Keyword(s): kbSSafe400fix kbSSafe300bug
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SourceSafe fails to create an output file when executing the Checkout Command.
	This occurs when the file specified to be checked out is not a valid file in the
	current project or the specified path does not exist.
	
	The following won't create an output file if the filename doesn't exist in the
	current project:
	
	  SS CHECKOUT test -o&@filename.txt
	
	The ampersand (&) and at (@) characters make no difference.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Visual SourceSafe version
	3.1 for Windows, Windows NT, MS-DOS, and Macintosh.
	This bug was corrected in Microsoft Visual SourceSafe version 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400fix kbSSafe300bug 
	Version           : 3.04 3.10
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
