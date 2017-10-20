---
layout: page
title: "Q196555: WD97: Cannot Drag from Word to Another Program"
permalink: /kb/196/Q196555/
---

## Q196555: WD97: Cannot Drag from Word to Another Program

{% raw %}

	Article: Q196555
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to drag text or graphics from Microsoft Word to another program,
	the selection does not move to the other program.
	
	CAUSE
	=====
	
	The drag-and-drop feature works only if the destination program supports OLE
	2.0. If the program supports an earlier version of OLE, or if it does not
	support OLE at all, you cannot perform drag-and-drop editing between Word and
	that program. If you try to drag a selection to a program that does not support
	OLE 2.0, the operation does not occur.
	
	The following Microsoft applications support OLE 2.0:
	
	  Microsoft PowerPoint 4.0
	  Microsoft Excel 5.0 and later for Windows and Macintosh
	  Microsoft Word 6.0 and later for Windows and Macintosh
	
	MORE INFORMATION
	================
	
	It is more obvious in Microsoft Word for Windows when a program does not support
	OLE 2.0, because the pointer changes to a "not permitted" symbol when you drag
	an object into a program that does not support OLE 2.0.
	
	Additional query words: excel link dragging dropping
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
