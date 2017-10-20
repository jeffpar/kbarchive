---
layout: page
title: "Q59578: Maximum File Size Limits for Notepad"
permalink: /kb/059/Q59578/
---

## Q59578: Maximum File Size Limits for Notepad

{% raw %}

	Article: Q59578
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following message when you open a file with Microsoft
	Notepad:
	
	  File (filename) is too large for Notepad; use another editor to change the
	  file
	
	-or-
	
	The following error message may be displayed while you are editing a file in
	Notepad:
	
	  Insufficient memory to continue this operation
	
	CAUSE
	=====
	
	Text files used by Notepad should be no larger than 45K. Notepad cannot open a
	file that exceeds 54 kilobytes (K) in size and does not allow you to continue
	editing a file if the file size reaches between 45K and 54K.
	
	WORKAROUND
	==========
	
	Use another text editor to edit the file.
	
	Additional query words: 3.00 win30 win31 3.00a 3.10 3.11 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
