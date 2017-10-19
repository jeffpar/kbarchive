---
layout: page
title: "Q77554: Text Copied from DOS Application Appends Carriage Return"
permalink: /kb/077/Q77554/
---

## Q77554: Text Copied from DOS Application Appends Carriage Return

	Article: Q77554
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Text copied from an MS-DOS application running in a window under Windows 3.0 to
	the Clipboard will have a carriage return added to it, if one does not already
	exist.
	
	Some Windows applications such as Word for Windows, Write, and Notepad show this
	added carriage return when this text is pasted. The insertion point of the
	Windows application begins on a new line after the pasted text.
	
	MORE INFORMATION
	================
	
	If a carriage return is copied from the MS-DOS application, then a carriage
	return is not appended to the existing carriage return copied with the text to
	the Clipboard.
	
	It is possible to save the Clipboard file and then view the file's contents with
	a sector or disk editing utility and see the added carriage return. A carriage
	return is represented by the value "0D."
	
	When a Windows application such as Write or Notepad has text copied to the
	Clipboard, this does not occur.
	
	Additional query words: 3.0 3.0a 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
