---
layout: page
title: "Q98748: How to Use the GETDIR() Function in FoxPro 2.5 and Later"
permalink: kb/098/Q98748/
---

## Q98748: How to Use the GETDIR() Function in FoxPro 2.5 and Later

	Article: Q98748
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.5,2.5a; WINDOWS:2.5,2.5a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The GETDIR() function can be used in FoxPro to display the FoxPro Select
	Directory dialog box. This function is not available in versions of FoxPro prior
	to version 2.5.
	
	The GETDIR() function accepts 0, 1, or 2 character strings as arguments and
	returns the name of the chosen directory as a character string in the dialog
	box.
	
	The following example uses the GETDIR() function to display the Select Directory
	dialog box with the C:\WINDOWS directory initially selected:
	
	     mdir = GETDIR("C:\WINDOWS", "SELECT A DIRECTORY")
	
	NOTE: The limit of the text string is related to the proportional size of the
	system font.
	
	For instance, in the following text, note that since the text is uppercase, only
	the first 12 characters display and the string truncates after the word
	'FIRST':
	
	  SELECT THE FIRST SUBDIRECTORY.
	
	However, in the following text, note that about 26 characters display and that
	the string truncates following the '-'.
	
	  Select the first subdirectory - which compares.
	
	REFERENCES
	==========
	
	For more information about the proper syntax for the GETDIR() function, please
	see the "Language Reference" manual or the FoxPro online Help file.
	
	Additional query words: FoxDos FoxWin kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MS-DOS:2.5,2.5a; WINDOWS:2.5,2.5a,3.0,3.0b,5.0,5.0a,6.0
	
	=============================================================================
	
