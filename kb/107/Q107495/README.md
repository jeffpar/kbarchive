---
layout: page
title: "Q107495: PRB: Phar Lap Error 58 Running Visual C++ on Read-Only Drive"
permalink: /kb/107/Q107495/
---

## Q107495: PRB: Phar Lap Error 58 Running Visual C++ on Read-Only Drive

{% raw %}

	Article: Q107495
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): kbprb
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 1.5 
	- Microsoft Visual C++, version 1.0 
	- Microsoft Macro Assembler (MASM), versions 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	An attempt to execute NMAKE.EXE, CL.EXE, LINK.EXE, or MASM.EXE in MS-DOS when
	Windows is not running fails and generates the following message:
	
	  Phar Lap err 58: Can't create VM swap file of size 0 in directory <root
	  directory name>:\
	
	H2INC.EXE and CREF.EXE that ship with MASM version 6.11 generate the same error.
	This error does not occur when running in an MS-DOS window under Microsoft
	Windows or Microsoft Windows NT.
	
	With Visual C++ for Windows and MASM version 6.1a, the error can also occur when
	the TMP environment variable is invalid or points to a read-only drive. For
	additional information about the TMP problem, please search in the Microsoft
	Knowledge Base on the following words:
	
	  " Phar Lap RW1016 " (without the quotation marks)
	
	CAUSE
	=====
	
	Visual C++ is installed on a read-only drive, possibly a network drive. The
	error occurs because the DOSXNT MS-DOS extender attempts to create a virtual
	memory swap file on the drive DOSXNT runs from when the operating system does
	not support virtual memory.
	
	RESOLUTION
	==========
	
	To work around this problem, you can run DOSXNT on a read/write drive listed in
	your PATH MS-DOS environment variable. Or you can specify one of the following
	environment variable settings to prevent DOSXNT from attempting to create a swap
	file on the read-only network drive:
	
	- Set the DOSX environment variable to prevent DOSXNT from using any virtual
	  memory. Edit your AUTOEXEC.BAT file to include the following:
	
	  set dosx=-novm
	
	  With this option, you may run out of memory due to virtual memory not being
	  used. If this is the case, use the second solution to set up a swap directory
	  for the virtual memory.
	
	-or-
	
	- Set the DOSX environment variable to specify where DOSXNT creates the virtual
	  memory swap file. Edit your AUTOEXEC.BAT file to include the following
	
	  set dosx=-swapdir <path>
	
	  where <path> specifies the drive and directory on which to create the
	  temporary swap file.
	
	- Set a TMP environment variable that points to a read/write drive with enough
	  free space for temporary files. If the TMP environment variable already
	  exists, check to see that it is valid and pointing to a read/write drive. The
	  TMP environment variable works only for the version of DOSXNT that comes with
	  Microsoft Visual C++ for Windows version 1.0 and Microsoft MASM 6.1a.
	
	NOTE: This is not a problem in Visual C++ 2.0, because DOSXNT is not used.
	
	Additional query words: PharLap DOSXNT 1.00 1.50 6.10 6.10a utilities masm noupdate
	
	======================================================================
	Keywords          : kbprb 
	Technology        : kbVCsearch kbMASMsearch kbAudDeveloper kbvc150 kbvc100 kbMASM610 kbMASM611 kbMASM610a
	Version           : :1.0,1.5,6.1,6.11,6.1a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
