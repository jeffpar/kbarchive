---
layout: page
title: "Q132084: NMAKE 1.4 on Windows 95 Won't Stop on Errors"
permalink: /kb/132/Q132084/
---

## Q132084: NMAKE 1.4 on Windows 95 Won't Stop on Errors

{% raw %}

	Article: Q132084
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.5,1.51,1.52
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.5, 1.51, 1.52 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On Windows 95, NMAKE version 1.4 will not stop building if a command in the
	makefile returns an error. For example, if the command invokes the Visual C++
	compiler (CL.EXE) and the file being compiled causes a compiler error, NMAKE
	ignores it and continues the build. This is not the expected behavior. By
	default, NMAKE should stop on error returns from commands in a makefile.
	
	NOTE: The problem occurs only when running NMAKE 1.4 on Windows 95. On Windows
	95, use version 1.5 or later of NMAKE.EXE or use NMAKER.EXE.
	
	NOTE: NMAKE version 1.5 is a 32-bit executable that requires a 32-bit operating
	system. It will not work on Windows version 3.x. You need to continue using
	NMAKE version 1.4 under Windows version 3.x.
	
	NMAKER.EXE ships with 16-bit Visual C++, versions 1.x, and is in the \MSVC\BIN
	directory. If you are building external makefiles from within the development
	environment, you must rename NMAKE.EXE to another filename, and then rename
	NMAKER.EXE to NMAKE.EXE.
	
	If you own Visual C++, 32-bit edition, version 2.x, NMAKE version 1.5 is
	available in the \msvc20\bin subdirectory. If you copy NMAKE.EXE to another
	directory, copy NMAKE.ERR (an error text file for this version of NMAKE) to the
	same directory.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Nmake15.exe
	  (http://download.microsoft.com/download/vc15/Patch/1.52/W95/EN-US/Nmake15.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in NMAKE version 1.5.
	
	Additional query words: win95 fail fails spawn spawnslaunch launches
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbVC151 kbVC152
	Version           : WINDOWS:1.5,1.51,1.52
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
