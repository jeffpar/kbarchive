---
layout: page
title: "Q116305: BUG: LINK Creates Zero-Size File if Insufficient Disk Space"
permalink: /kb/116/Q116305/
---

## Q116305: BUG: LINK Creates Zero-Size File if Insufficient Disk Space

{% raw %}

	Article: Q116305
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.5,5.60.22
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.5, 5.60.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to link an executable file and place the resulting file on a disk
	that does not have enough free space available causes Microsoft LINK to create
	an executable file with a size of 0 bytes. LINK does not issue any warnings or
	error messages when this happens.
	
	RESOLUTION
	==========
	
	Make sure there is enough available space on the target disk for the executable
	file being built.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Visual C++ for Windows, versions
	1.0 and 1.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	This is not a problem in Visual C++ 32-bit Edition.
	
	MORE INFORMATION
	================
	
	The version of LINK provided with Visual C++ 32-bit Edition issues the following
	error message when it is unable to create an executable because of insufficient
	disk space:
	
	  error LNK1108: cannot write file at 0x1000
	
	Additional query words: 5.50
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK550DOS
	Version           : MS-DOS:5.5,5.60.22
	
	=============================================================================
	

{% endraw %}
