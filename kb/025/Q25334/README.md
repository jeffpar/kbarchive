---
layout: page
title: "Q25334: Imported Files Do Not Justify or Autowrap"
permalink: /kb/025/Q25334/
---

## Q25334: Imported Files Do Not Justify or Autowrap

{% raw %}

	Article: Q25334
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:1.x,2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 1.1, 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you import ASCII text files from other word-processing programs into
	Windows Write, the Write autowrap and text-justification features do not work
	properly.
	
	CAUSE
	=====
	
	This problem occurs because text files are stored in ASCII format. When creating
	a document, each word processor uses its own unique control codes to indicate a
	soft carriage return when autowrap is being used. When the document is converted
	to an ASCII file, these control codes are changed to hard carriage returns by
	convention. Therefore, these ASCII files do not autowrap or justify when
	initially brought into Windows Write.
	
	WORKAROUND
	==========
	
	For autowrap to work properly, you need to remove most of the hard carriage
	returns. To do this, use the Search Change command as follows:
	
	1. Enter ^p (^p is the Write program's control code for a hard carriage return)
	  in the Find What box, and leave the Change To box empty.
	
	2. Use the Find Next and Change buttons together (or use the Change, then the
	  Find button) to selectively delete only those hard carriage returns inserted
	  during the ASCII conversion. (Do not use the Change All button unless you
	  want to delete all hard carriage returns in the document, including those
	  marking the end of the paragraphs.)
	
	Additional query words: 3.00 3.0 3.0a 3.1 3.00a 3.10 3.11 win30 win31 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin110 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:1.x,2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
