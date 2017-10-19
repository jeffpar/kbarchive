---
layout: page
title: "Q62648: Write Err Msg: Insufficient Memory to Complete Operation..."
permalink: /kb/062/Q62648/
---

## Q62648: Write Err Msg: Insufficient Memory to Complete Operation...

	Article: Q62648
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message occurs in Microsoft Write each time the temporary
	file attempts to grow larger than 64K.
	
	  Insufficient memory to complete this operation; save your document, then quit
	  to increase available memory
	
	CAUSE
	=====
	
	Attempting to Paste an image (captured using Print Screen) more than once may
	cause this error message. This is a limitation of Write, not of Windows.
	
	WORKAROUND
	==========
	
	The only way to recover from this situation is to save the document, exit and
	restart Write. Reload the file and attempt the operation again.
	
	MORE INFORMATION
	================
	
	The error message received in earlier versions of Microsoft Windows is
	
	  Session too long. Save now, then quit.
	
	The limitation remains the same; the message was changed to try to make the
	action more clear.
	
	Additional query words: 3.00 3.0 3.00a 3.0a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
