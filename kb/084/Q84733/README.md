---
layout: page
title: "Q84733: FIX: Extra Characters Appear Using One-Line Response File"
permalink: /kb/084/Q84733/
---

## Q84733: FIX: Extra Characters Appear Using One-Line Response File

{% raw %}

	Article: Q84733
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:4.x,5.0x,5.1x,5.2,5.2x; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 4.x, 5.0x, 5.1x, 5.2, 5.2x 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application with a one-line linker response file causes
	extra characters to display in a command prompt, as in the following example:
	
	  Microsoft (R) Segmented Executable Linker Version 5.30
	  Copyright (C) Microsoft Corp 1984-1992. All rights reserved.
	
	  Object Modules [.obj]: hello_
	
	This problem does not always occur the first time LINK runs with a one-line
	linker response file. More than one attempt may be required to reproduce this
	behavior.
	
	RESOLUTION
	==========
	
	Even though LINK displays the additional characters, it searches for the correct
	object file name as specified in the response file. It is safe to ignore the
	extra characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LINK versions 5.01, 5.02, 5.03,
	5.05, 5.1, 5.11, 5.13, 5.15, 5.2, 5.3, and 5.31 for MS-DOS, LINK versions 5.01,
	5.02, 5.03, 5.05, 5.1, 5.11, 5.13, and 5.15 for OS/2, and QuickC linker versions
	4.06, 4.07, and 4.1 for MS-DOS. This problem was corrected in LINK version 5.5
	for MS-DOS.
	
	MORE INFORMATION
	================
	
	To reproduce this behavior, create a linker response file that contains only one
	line of text. For example, create a file called RESPONSE.LRF that contains the
	following line of text:
	
	  hello;
	
	LINK exhibits the behavior described above even if HELLO.OBJ does not exist. To
	demonstrate this problem, enter the following at the operating system command
	prompt:
	
	  " LINK @response.lrf " (without the quotation marks)
	
	Additional query words: qlink lrf 4.10 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.20 5.30 5.31.009
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK520xDOSSearch kbLINK50xOS2Search kbLINK520DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:4.x,5.0x,5.1x,5.2,5.2x; OS/2:5.0x,5.1,5.11,5.13,5.15
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
