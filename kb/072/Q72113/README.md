---
layout: page
title: "Q72113: Differences Between DOSSHELL.COM and DOSSHELL.EXE"
permalink: /kb/072/Q72113/
---

## Q72113: Differences Between DOSSHELL.COM and DOSSHELL.EXE

{% raw %}

	Article: Q72113
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To give the user quick response and a full set of MS-DOS Shell features, two
	files are used, DOSSHELL.COM and DOSSHELL.EXE.
	
	When MS-DOS finds an .EXE and .COM file with the same name, the .COM file takes
	precedence. The .COM file is a subset of the .EXE file. A .COM file contains
	only a single segment for its code and data, so it can be quickly loaded. The
	.EXE file, however, may contain many code and data segments, so it takes more
	time to load. The DOSSHELL.EXE program will not fit into a COM file's single 64K
	segment.
	
	The DOSSHELL.COM file is the resident part of MS-DOS Shell. It is not absolutely
	necessary to use the DOSSHELL.COM, because the same code is contained in
	DOSSHELL.EXE, but using DOSSHELL.COM speeds up the load time. When you execute
	the DOSSHELL command at the MS-DOS prompt, the DOSSHELL.COM file gets executed
	first and then the DOSSHELL.COM file calls the DOSSHELL.EXE file. If the
	DOSSHELL.COM file does not exist, DOSSHELL.EXE is executed. Finally, when you
	execute the DOSSHELL.COM file, you can save about 16 bytes of memory.
	
	MORE INFORMATION
	================
	
	For more information, query on the following words here in the Microsoft
	Knowledge Base:
	
	  " ms-dos" (without the quotation marks) and "<version number>" (without
	  the quotation marks) and "dosshell" (without the quotation marks)
	
	where <version number> is the MS-DOS version you are using; for example,
	5.00.
	
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}
