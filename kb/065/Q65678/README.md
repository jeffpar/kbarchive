---
layout: page
title: "Q65678: Running the WordPerfect Tutorial from an Icon with Windows"
permalink: kb/065/Q65678/
---

## Q65678: Running the WordPerfect Tutorial from an Icon with Windows

	Article: Q65678
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The easiest way to access the WordPerfect 5.1 tutorial from Microsoft Windows
	version 3.0 is to create an icon that executes a batch file to the tutorial
	files. You need to know where the WP.EXE file is located on your hard drive and
	where the tutorial files have been placed to create this batch file.
	
	MORE INFORMATION
	================
	
	The following is an example of a batch file for the most common configuration:
	
	  cd\
	  cd\wp51
	  cd learn
	  path=C:\wp51
	  tutor
	
	Note that it doesn't matter what you name this file, nor where you save the file,
	as long as you save it with a ".BAT" extension.
	
	The next step is to create an icon to access the batch file. The following steps
	show how to create an icon:
	
	1. Select the group where you want to place the icon.
	
	2. From the File menu of Program Manager, choose New.
	
	3. Select Program Item, then choose OK.
	
	4. For the description, type "WP TUTORIAL" (without the quotation marks).
	
	5. On the command line, put C:\WP51\TUTOR.BAT (which indicates where you placed
	  the newly created batch file).
	
	6. Choose OK.
	
	7. You will now have an icon for the WordPerfect Tutorial.
	
	The WordPerfect product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty word perfect wp
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
