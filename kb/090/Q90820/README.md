---
layout: page
title: "Q90820: Permanently Converting Text Files to Write Format"
permalink: /kb/090/Q90820/
---

## Q90820: Permanently Converting Text Files to Write Format

	Article: Q90820
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load text files into Microsoft Windows Write, a dialog box asks if you
	want to convert the file to Write format. If you choose to convert the file and
	then save the file from Write, when you later open the same file, the same
	conversion dialog box is displayed.
	
	CAUSE
	=====
	
	This is because Write does not permanently save the file in Write format; it
	preserves the previous text format.
	
	WORKAROUND
	==========
	
	To permanently convert a text file to Write format, use the following steps:
	
	1. Open the text file in Write as usual.
	
	2. From the File menu, choose Save As.
	
	3. In the Save As dialog box, clear the Text Only check box to disable the
	  option.
	
	4. Change the file extension from .TXT to .WRI and choose the OK button to save
	  the text file in Write format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 2.x, 3.0, and
	3.0a. This problem was corrected in Windows version 3.1.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a
	Version           : WINDOWS:2.x,3.0,3.0a,95
	
	=============================================================================
	
