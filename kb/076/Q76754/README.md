---
layout: page
title: "Q76754: Windows Err Msg: Unknown File Copy Failure"
permalink: /kb/076/Q76754/
---

## Q76754: Windows Err Msg: Unknown File Copy Failure

{% raw %}

	Article: Q76754
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When reinstalling Windows version 3.0 or 3.0a over a previous version of Windows
	3.0, you may receive the following error message:
	
	  
	
	                   File Copy Error !
	
	       Unknown File Copy Failure:   <filename>.
	
	          ENTER=Continue       F3=Exit
	
	CAUSE
	=====
	
	This error message occurs if the executable files of the previous version have
	been marked as read-only.
	
	RESOLUTION
	==========
	
	To successfully install over the previous files, change the file attributes by
	removing the read-only attribute for each file.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
