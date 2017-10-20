---
layout: page
title: "Q32069: INFO: No Error Message Text If .ERR Files Not in PATH"
permalink: /kb/032/Q32069/
---

## Q32069: INFO: No Error Message Text If .ERR Files Not in PATH

{% raw %}

	Article: Q32069
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,6.0,6.0a,6.0ax
	Operating System(s): 
	Keyword(s): kbCompiler
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a compiler error occurs, the error message does not include any text.
	
	CAUSE
	=====
	
	The C1.ERR and C23.ERR files are not installed in a directory listed in the PATH
	environment variable. Normally, Setup installs these files into the compiler BIN
	directory.
	
	RESOLUTION
	==========
	
	The required steps vary depending on the compiler you are using.
	
	- For Microsoft C versions 6.0x, put the Setup Disk in a disk drive, make it
	  the current drive, and type "setup /copy" (without the quotation marks) at
	  the MS-DOS command prompt. Setup prompts for the name of the file to copy
	  from the distribution disks and the name of the destination directory on your
	  hard disk.
	
	- For Microsoft C/C++ version 7.0, use the CSETUP.EXE program to copy the
	  files.
	
	- For Visual C++ version 1.0 and above, locate the files you want to copy on
	  the Visual C++ disks and use the EXPAND.EXE utility to copy and decompress
	  the files.
	
	NOTE: For help with EXPAND.EXE, type "EXPAND /?" (without the quotation marks)
	and press <Enter> at a command prompt.
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.0,6.0,6.0a,6.0ax
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
