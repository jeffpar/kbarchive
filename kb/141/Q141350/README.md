---
layout: page
title: "Q141350: .inf File Install Fails with Error: &quot;A device attached to...&quot;"
permalink: kb/141/Q141350/
---

## Q141350: .inf File Install Fails with Error: &quot;A device attached to...&quot;

	Article: Q141350
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a program by using the right mouse button to click the
	program's .inf file and then clicking Install, you may receive the following
	error message:
	
	  <X>:\<path>\<.inf file>
	
	  A device attached to the system is not functioning
	
	CAUSE
	=====
	
	This error can occur if the combined length of the path and .inf file name
	exceeds 77 characters.
	
	RESOLUTION
	==========
	
	To work around this problem, move the folder containing the .inf file and its
	supporting files to another location with a shorter path. The total length of
	the path and .inf file name must not exceed 77 characters.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
