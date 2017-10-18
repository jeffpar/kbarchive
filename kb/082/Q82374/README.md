---
layout: page
title: "Q82374: Incorrect Indentation when Pasting Text into Virtual Machine"
permalink: kb/082/Q82374/
---

## Q82374: Incorrect Indentation when Pasting Text into Virtual Machine

	Article: Q82374
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you paste text into an MS-DOS text editor under Microsoft Windows, the text
	may be indented incorrectly.
	
	For example, if you repeatedly paste " line 1" (without the quotation marks) into
	a text editor running in an MS-DOS session under Windows, the text may appear as
	follows:
	
	line 1
	 line 2
	  line 3
	
	CAUSE
	=====
	
	This problem is caused by the editor.
	
	This behavior is not an error with Windows, but a result of the editor's built-in
	feature that automatically indents when the ENTER key is pressed. If the text
	being pasted into the editor has a space or tab at the beginning of each line,
	this problem occurs.
	
	When the carriage return from one line is pasted, the entry point is left
	directly under the first character from the previous line. Then the space or tab
	is pasted causing the incorrect results.
	
	WORKAROUND
	==========
	
	You can correct this problem by either modifying the text after it is pasted,
	cutting/copying the text in such a way so that the spaces or tabs are not
	present, or disabling the automatic-indent feature of the editor being run.
	
	Additional query words: 3.10 Pasting Paste text indent space 3.11 editor edit.com cut copy
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
