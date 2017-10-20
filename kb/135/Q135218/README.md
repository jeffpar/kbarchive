---
layout: page
title: "Q135218: Double-Clicking Document Does Not Open It in WordPad"
permalink: /kb/135/Q135218/
---

## Q135218: Double-Clicking Document Does Not Open It in WordPad

{% raw %}

	Article: Q135218
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WordPad may not open certain documents that you double-click in Windows Explorer
	or My Computer.
	
	CAUSE
	=====
	
	The Windows 95 version of the Write.exe file overwrites any version from an
	earlier version of Windows. The Windows 95 version of Write.exe is a link to
	WordPad, but it does not pass certain parameters (such as long filenames) to
	WordPad correctly.
	
	RESOLUTION
	==========
	
	Rename the document to use a short filename, or change the file's association
	from Write.exe to Wordpad.exe.
	
	MORE INFORMATION
	================
	
	To change a file's association to Wordpad.exe, follow these steps:
	
	1. In Windows Explorer or My Computer, press down and hold the SHIFT key while
	  you click the file with the right mouse button, and then click Open With on
	  the menu that appears.
	
	2. In the "Choose the program you want to use" box, click WordPad.
	
	3. Click the "Always use this program to open this type of file" check box to
	  select it.
	
	4. Click OK.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
