---
layout: page
title: "Q117898: Drag &amp; Drop of Word 6.0 Icon Fails to Open Document on Desktop"
permalink: /kb/117/Q117898/
---

## Q117898: Drag &amp; Drop of Word 6.0 Icon Fails to Open Document on Desktop

{% raw %}

	Article: Q117898
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 appscomp kbAppCompatibility kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Word for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you drag a Microsoft Word 6.0 for Windows document icon to a Microsoft Word
	6.0 application shortcut on the desktop, you receive an error indicating that
	Word cannot open the document two separate times. Word seems to be trying to
	open two separate documents.
	
	CAUSE
	=====
	
	This problem occurs because Word 6.0 for Windows recognizes only those files
	that conform to the 8.3 file specification. If the filename for the document
	contains a space, Word does not recognize it as a valid filename. Instead, Word
	interprets the filename as two different files: the first file using the letters
	before the space, and the second file using the letters after the space. For
	example, the filename "TEST FILE.DOC" is recognized as the files TEST.DOC and
	FILE.DOC.
	
	RESOLUTION
	==========
	
	To correct this problem, rename the file to a name that contains no spaces and
	conforms to the 8.3 file specification.
	
	Additional query words: err msg winword
	
	======================================================================
	Keywords          : diskmem win95 appscomp kbAppCompatibility kbDiskMemory 
	Technology        : kbWordSearch kbWin95search kbZNotKeyword2 kbZNotKeyword3 kbWord600
	Version           : 95
	
	=============================================================================
	

{% endraw %}
