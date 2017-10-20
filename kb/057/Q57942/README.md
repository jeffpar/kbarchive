---
layout: page
title: "Q57942: PRB: UNKNOWN WARNING May Result from Corrupt Error Message File"
permalink: /kb/057/Q57942/
---

## Q57942: PRB: UNKNOWN WARNING May Result from Corrupt Error Message File

{% raw %}

	Article: Q57942
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,6.0,6.0a,6.0ax
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler
	Last Modified: 25-JUL-2001
	
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
	
	In the Microsoft products listed above, if a number of compiler warning messages
	contain the description "UNKNOWN WARNING", or if the error number is displayed
	with no message, the cause may be the use of an incorrect or corrupted error
	message file. The compiler generates the correct error number, but because the
	messages are retrieved from a separate file, the compiler displays either no
	text or "UNKNOWN WARNING" when it cannot find a match.
	
	In 16-bit Visual C++ version 1.0, these messages may also occur if there are not
	enough file handles available. Increasing the number set by the FILES= line in
	the CONFIG.SYS file may solve the problem.
	
	The error message files for the C compiler should contain messages for all errors
	and warnings generated. If you look up the number of a compiler error in the
	documentation and find a normally documented error, then you should be
	suspicious of your .ERR error message files.
	
	RESOLUTION
	==========
	
	The simplest check is to reinstall the error message files--CL.ERR, C1.ERR, and
	C23.ERR--from the original disks and then recompile to see if the error messages
	appear correctly. The required steps vary depending on the compiler you are
	using.
	
	- For Microsoft C versions 6.0x, put the Setup Disk in a disk drive, make it
	  the current drive, and type "setup /copy" (without the quotation marks) at
	  the MS-DOS command prompt. Setup prompts for the name of the file to copy
	  from the distribution disks and the name of the destination directory on your
	  hard disk.
	
	- For Microsoft C/C++ version 7.0, use the CSETUP.EXE program to copy the
	  files.
	
	- For Visual C++ version 1.0 and above distributed on diskettes, locate the
	  desired files on the Visual C++ disks and use the EXPAND.EXE utility to copy
	  and decompress the files. (For help with EXPAND.EXE, type "EXPAND /?"
	  (without the quotation marks) and press <Enter> at a command prompt.)
	  For Visual C++ version 1.0 and above distributed on CD-ROM, locate the
	  desired files on the Visual C++ CD and copy the files directly to the
	  destination directory.
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kberrmsg kbCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.0,6.0,6.0a,6.0ax
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
