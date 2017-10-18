---
layout: page
title: "Q138961: BUG: Only One File Extension Honored in Parameter of GETFILE()"
permalink: kb/138/Q138961/
---

## Q138961: BUG: Only One File Extension Honored in Parameter of GETFILE()

	Article: Q138961
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you pass more than one file extension to the first parameter of GETFILE(),
	only the first file extension in the list is honored. Therefore, only files that
	have an extension matching the first extension in your list are exposed in the
	dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	According to the Help file topic for GETFILE(), the first parameter
	(cFileExtensions) can contain a list of file extensions separated by vertical
	bars (for example: PRG | FXP). However, if you do this, all files with these
	extensions are displayed, even if the files have the same names, but GETFILE()
	exposes only those files that have extensions matching the first extension in
	the list. Separating the file extensions with a semicolon (for example: PRG ;
	FXP) behaves in the same incorrect manner.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Enter the following line into the Command window:
	
	  " ?GETFILE('DBF | EXE | SCX') " (without the quotation marks)
	
	2. Note that the Open dialog box that appears displays a directory containing
	  all files that have an extension of .dbf, .exe, or .scx. However, only those
	  files that have the .dbf extension are exposed.
	
	Additional query words: VFoxWin buglist3.00 buglist3.00b kbvfp300
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
