---
layout: page
title: "Q97809: FIX: C1024 or C1083 Error When INCLUDE Set to Root Directory"
permalink: /kb/097/Q97809/
---

## Q97809: FIX: C1024 or C1083 Error When INCLUDE Set to Root Directory

{% raw %}

	Article: Q97809
	Product(s): Microsoft C Compiler
	Version(s): 7.00 | 1.00 1.50 | 1.00
	Operating System(s): 
	Keyword(s): kbCompilerkbbuglist kbfixlist
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile an application fails and Microsoft C/C++ generates one of
	the following messages. For version 8.0:
	
	  fatal error C1083: Cannot open include file: 'stdio.h':
	  Permission denied
	
	For version 7.0:
	
	  fatal error C1024: cannot open include file 'stdio.h'
	
	The application compiles correctly in Microsoft C version 6.0 for MS-DOS.
	
	CAUSE
	=====
	
	The INCLUDE environment variable specifies the root directory of a drive and a
	required header file is located in the root directory. This occurs most often
	when the MS-DOS SUBST command creates a drive letter for a subdirectory on a
	drive.
	
	RESOLUTION
	==========
	
	To work around this problem, edit your AUTOEXEC.BAT file to replace the
	backslash character (\) in the directory specification with a forward slash
	character (/). For example, the modified SET statement would appear as follows:
	
	     set INCLUDE=C:/ 
	
	For a drive letter created with the SUBST command, omitting the backslash
	character entirely also works. For example:
	
	     set INCLUDE=M:
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This bug was corrected in C/C++ version 9.0, included with
	Visual C++ 32-bit Edition, version 2.0.
	
	MORE INFORMATION
	================
	
	Perform the following two steps to demonstrate this problem.
	
	1. Copy STDIO.H to the root directory on your C drive.
	
	2. Enter the following at the MS-DOS command prompt:
	
	     set INCLUDE=C:\ 
	     cl TEST.C
	
	If your C/C++ INCLUDE directory is C:\C700\INCLUDE, the error also occurs if you
	enter the following at the MS-DOS command prompt:
	
	     subst M: C:\C700\INCLUDE
	     set INCLUDE=M:\ 
	     cl TEST.C
	
	The compiler uses the INCLUDE environment variable to specify the directories it
	searches for header files listed in the #include statement.
	
	The MS-DOS SUBST command can be used to substitute a drive letter for a directory
	path. For more information on the SUBST command, please refer to your "MS-DOS
	User's Guide and Reference" manual. Also note that the online help for MS-DOS
	version 6.0 states "Do not use the SUBST command when you are running Windows."
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: none
	   */ 
	
	  #include <stdio.h>
	
	  void main (void)
	  {
	     printf("Hello World\n");
	  }
	
	Additional query words: 1.00 1.50 7.00 8.00 8.00c
	
	======================================================================
	Keywords          : kbCompiler kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 7.00 | 1.00 1.50 | 1.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
