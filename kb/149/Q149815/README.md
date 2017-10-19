---
layout: page
title: "Q149815: WordPad Error Message: Cannot Find the File"
permalink: /kb/149/Q149815/
---

## Q149815: WordPad Error Message: Cannot Find the File

	Article: Q149815
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click a Rich Text Format (.rtf) file with a long file name
	containing one or more spaces, you may receive an error message indicating that
	the file cannot be found. For example, double-clicking a file named "Long File
	Name.rtf" may generate the following error message:
	
	  WordPad
	
	  C:\<path to file>\long
	  Cannot find the file.
	  Please verify that the correct path and file name are given.
	
	CAUSE
	=====
	
	This error can occur if the "%1" variable is not assigned to the Open action for
	the .rtf file type.
	
	NOTE: This behavior is not exclusive to WordPad. Other programs that use the "%1"
	variable in the Open action will generate similar error messages if the "%1"
	variable is missing.
	
	RESOLUTION
	==========
	
	Edit the Open action for the .rtf file type and add the "%1" variable. To do so,
	follow these steps:
	
	1. Double-click My Computer.
	
	2. On the View menu, click Options.
	
	3. On the File Types tab, click Rich Text Format in the Registered File Types
	  box, and then click Edit.
	
	4. In the Actions box, click Open, and then click Edit.
	
	5. In the Application Used To Perform Action box, add "%1" (including the
	  quotation marks) to the end of the line. Make sure there is a space between
	  the end of the command line and the "%1" variable.
	
	6. Click OK.
	
	MORE INFORMATION
	================
	
	This problem can occur if you install another word processing program that
	associates itself with .rtf files and you then change the association for .rtf
	files back to WordPad. When you do so, the "%1" variable may not be appended to
	the command line.
	
	Additional query words: lfn
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
