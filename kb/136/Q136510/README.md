---
layout: page
title: "Q136510: Unexpected Behavior with ALT+&lt;num&gt; Key Combinations in Notepad"
permalink: kb/136/Q136510/
---

## Q136510: Unexpected Behavior with ALT+&lt;num&gt; Key Combinations in Notepad

	Article: Q136510
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): win31 win95
	Last Modified: 10-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type an ALT+<number> key combination in Notepad, you may
	experience unexpected results. Rather than generating an ANSI character from the
	current codepage, the key combination may perform a task, such as cut or copy.
	For example, the ALT+22 key combination performs a paste operation.
	
	CAUSE
	=====
	
	Each of the first 32 characters in the current codepage has an associated
	control character. If a control character also represents a task in Notepad,
	that task is performed when you enter the key combination. For example, ALT+22
	corresponds to the control character CTRL+V, which represents the Paste command
	in Notepad.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.10 3.11 alt+24 alt+26 ctrl+x ctrl+z
	
	======================================================================
	Keywords          : win31 win95 
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	
