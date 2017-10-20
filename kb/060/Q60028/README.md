---
layout: page
title: "Q60028: PRB: rename() Function May Fail Unexpectedly"
permalink: /kb/060/Q60028/
---

## Q60028: PRB: rename() Function May Fail Unexpectedly

{% raw %}

	Article: Q60028
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the rename() function to change a subdirectory name may fail if the
	directory name you want to change is the current working directory for that
	drive. In addition, some versions of MS-DOS may return a success value, but the
	directory name apparently has not changed.
	
	CAUSE
	=====
	
	An access violation occurs attempting to rename the current directory.
	
	RESOLUTION
	==========
	
	To work around this problem, use the chdir() function to set the current
	directory of the specified drive to be the root directory on the drive. However,
	in Windows NT, this procedure does not guarantee success because an error occurs
	if another process uses the target directory.
	
	You can optimize this method by checking the active directory on the target
	drive. Change directories only if the directory to rename is the current
	directory.
	
	MORE INFORMATION
	================
	
	In MS-DOS versions 3.x when SHARE.EXE is not installed, the sample program shown
	below produces the following results:
	
	  C:\>cd olddir
	  C:\OLDDIR>d:
	  D:>test
	  Rename is successful  <--- Output from test program
	  D:>c:
	  C:\OLDDIR>      <--- The old directory is not renamed
	
	In MS-DOS version 3.3 when SHARE.EXE is installed, in MS-DOS versions 4.x and
	later, in an MS-DOS window in OS/2, or in an MS-DOS window in Windows NT, the
	sample program produces the following results:
	
	  C:\>cd olddir
	  C:\OLDDIR>d:
	  D:>test
	  Rename fails with errno = 13  <--- Output from test program
	  D:>c:
	  C:\OLDDIR>            <--- The old directory is not renamed
	
	NOTE: errno code 13 indicates an access violation.
	
	This behavior does not indicate a problem with the rename() function. It simply
	maps to an Interrupt 21h, Function 56h (Rename File) call in MS-DOS. The problem
	occurs because the operating system maintains a list of the current working
	directory (CWD) for each drive in its drive table in memory.
	
	In the MS-DOS 3.x example, the program successfully changed the directory name.
	However, because MS-DOS does not recognize the change, it does not update the
	CWD in the drive table. When the program ends, MS-DOS displays an invalid prompt
	that reflects the old directory name. If you type "CD \NEWDIR" at the MS-DOS
	prompt, the drive table is updated.
	
	In the second example, MS-DOS 3.3 with SHARE.EXE installed, MS-DOS versions 4.x
	and later, and MS-DOS running in OS/2 cannot determine if another process is
	using the directory and an access violation error occurs.
	
	On Windows NT and Windows 2000, if any process is active in the target directory,
	the system does not change the directory name. When this happens, the function
	returns an error code 13 that indicates an access violation. On Windows
	Millennium Edition (Me), the function succeeds.
	
	Sample Code
	-----------
	
	  #include <stdlib.h>
	  #include <stdio.h>
	
	  char szOldName[] = "c:\\olddir";
	  char szNewName[] = "c:\\newdir";
	
	  extern int errno;
	
	  void main (void)
	  {
	     if (0 != rename(szOldName, szNewName))
	        printf("Rename fails with errno = %d\n", errno);
	     else
	        printf("Rename is successful\n");
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
