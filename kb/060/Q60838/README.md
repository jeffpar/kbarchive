---
layout: page
title: "Q60838: Windows Err Msg: The Specified Path Is Invalid"
permalink: /kb/060/Q60838/
---

## Q60838: Windows Err Msg: The Specified Path Is Invalid

{% raw %}

	Article: Q60838
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error message soon after you select the Browse feature
	in the Program Item Properties dialog box of Microsoft Windows Program Manager:
	
	  The specified path is invalid
	
	CAUSE
	=====
	
	This message occurs only when the path statement in the Command Line box is
	invalid.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	1. Delete all text in the Command Line box, then choose Browse.
	
	2. Type an existing path in the Command Line box, then choose Browse.
	
	The Browse feature in the Program Item Properties dialog box uses the path in the
	Command Line box as its initial directory to browse. If this directory is
	invalid, the error message above is displayed.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
