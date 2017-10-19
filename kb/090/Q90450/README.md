---
layout: page
title: "Q90450: Windows for Workgroups File Manager and Extended Characters"
permalink: /kb/090/Q90450/
---

## Q90450: Windows for Workgroups File Manager and Extended Characters

	Article: Q90450
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Windows for Workgroups File Manager may be unable to manipulate
	files or directories whose names contain extended characters. Starting an
	application from File Manager by double-clicking a filename that contains an
	extended character may fail, or File Manager may not display the extended
	characters correctly and attempt to change to a directory name containing an
	extended character.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups versions
	3.1 and 3.11. We are researching this problem and will place more information
	here as it becomes available.
	
	MORE INFORMATION
	================
	
	Each character available to the operating system has a unique number. MS-DOS
	reserves characters 0 through 31 for control characters. The keyboard contains
	characters 32 through 127. The characters 128 through 255 are referred to as
	"extended characters."
	
	Although MS-DOS may allow the use of these extended characters in filenames and
	directory names, the Windows for Workgroups File Manager may have difficulty
	manipulating files and directories named in this manner.
	
	Steps to Reproduce Problem for Directory Name
	---------------------------------------------
	
	1. At an MS-DOS command prompt, create a directory with an extended character
	  embedded in its name. For example,
	
	  a. Type:
	
	  md test
	
	  b. Press ALT+255 (255 on the numeric keypad not on the keyboard).
	
	  c. Type:
	
	  dir
	
	  d. Press ENTER.
	
	2. From the Windows for Workgroups File Manager, attempt to double-click the
	  newly created TEST DIR. Note that File Manager represents the directory as
	  TEST_DIR, and that attempts to make it the current directory result in being
	  returned to the root directory of the current drive.
	
	Steps to Reproduce Problem for a Filename
	-----------------------------------------
	
	1. At an MS-DOS command prompt, copy an existing ASCII text file to a filename
	  that contains an extended character. For example, to use the SETUP.TXT file
	  in the WINDOWS directory, type the following at the WINDOWS directory MS-DOS
	  command prompt:
	
	  copy \windows\setup.txt \windows\test<ALT+255>fil.txt
	
	  NOTE: <ALT+255> means press ALT+255 (255 on the numeric keypad and not
	  on the keyboard).
	
	2. From the Windows for Workgroup File Manager, double-click the newly created
	  TEST FIL.TXT. Note that File Manager represents the file as TEST_FIL.TXT, and
	  returns the follow message:
	
	  File Manager cannot find the specified file (or one of its components). Make
	  sure the path and filename are correct and that all required libraries are
	  available.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
