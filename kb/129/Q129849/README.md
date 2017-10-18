---
layout: page
title: "Q129849: NET Commands Don't Have Hex 0D at the End of Lines"
permalink: kb/129/Q129849/
---

## Q129849: NET Commands Don't Have Hex 0D at the End of Lines

	Article: Q129849
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run an application that reads in text files and depends on carriage
	return Hex 0D or CHR$(13) at the end of each line of text, the application may
	fail when it reads text files created from NET commands.
	
	CAUSE
	=====
	
	Windows NT 3.5 places only a linefeed Hex 0A, or CHR$(10), at the end of each
	line of text generated from the NET commands.
	
	
	WORKAROUND
	==========
	
	If possible, modify the application you are using to look for Hex 0A or CHR$(10)
	at the end of each line (instead of the Hex 0D or CHR$(13)).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: 3.50 prodnt command line eol eof end of
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
