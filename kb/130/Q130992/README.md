---
layout: page
title: "Q130992: PRB: GETFILE() Caption Limited to 9 Characters in Windows 95"
permalink: /kb/130/Q130992/
---

## Q130992: PRB: GETFILE() Caption Limited to 9 Characters in Windows 95

	Article: Q130992
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you specify a title parameter that has more than nine characters in the
	GETFILE() function, only the first nine characters are displayed.
	
	CAUSE
	=====
	
	This is a limitation of the Windows 95 operating system.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Using FoxPro version 2.6 for Windows under Windows 95 does not exhibit the same
	behavior because the dialog box that appears is designed differently. However, a
	32-character title limitation does exist regardless of which Windows operating
	system you use.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From Windows 95, start Visual FoxPro version 3.0.
	
	2. In the Command window type the following command:
	
	     ? GETFILE("DBF","This is a really long title","Open",1)
	
	  The resulting title reads "This is a"
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
