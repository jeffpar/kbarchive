---
layout: page
title: "Q89083: Windows Err Msg: Failed to Carry Out Command"
permalink: /kb/089/Q89083/
---

## Q89083: Windows Err Msg: Failed to Carry Out Command

{% raw %}

	Article: Q89083
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a packaged object in an object-linking-and-embedding (OLE) client,
	the following error message may appear:
	
	  Failed to Carry Out Command
	
	CAUSE
	=====
	
	This error occurs if the file being packaged has no file extension. In a
	successful launch of a packaged object, SHELL.DLL finds the object's extension
	and associates this extension with a .COM, .EXE, .PIF, or .BAT file. This
	association can be set in File Manager by choosing Associate from the File menu.
	When the file being packaged has no extension, SHELL.DLL cannot find an
	associated application.
	
	Additional query words: 3.10 3.11 win31 object linking embedding
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
