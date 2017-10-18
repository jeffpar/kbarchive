---
layout: page
title: "Q94342: Alternative to List Prompt Files Option in .SCX"
permalink: kb/094/Q94342/
---

## Q94342: Alternative to List Prompt Files Option in .SCX

	Article: Q94342
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Screen Builder, selecting the Prompt Files option in the List dialog box
	(on the Screen menu) produces a list object of files and directories from a
	given path. You can select from this list as well as change to other directories
	or drives.
	
	To display only a list of files in a specific directory, use the function ADIR()
	and the From Array option instead. Using this option also prevents you from
	changing to other directories or drives.
	
	MORE INFORMATION
	================
	
	FoxPro 2.x for Windows
	----------------------
	
	To get a list object of .DBF files in the TUTORIAL subdirectory, do the
	following:
	
	1. Open the appropriate .SCX file, and include the code below in the Setup code
	  snippet:
	
	        =ADIR(MYLIST,"C:\FOXPRO2\TUTORIAL\*.DBF")
	
	2. Place the cursor on the .SCX form. From the Screen menu, choose List, and
	  select the From Array option. Use "MYLIST" as the array name.
	
	3. Assign a variable name to this list object; call it "DBFLIST" (without the
	  quotation marks).
	
	4. From the Program menu, choose Generate.
	
	Visual FoxPro for Windows
	-------------------------
	
	1. Add a property called "mylist(1)" (without the quotation marks) to the form.
	
	2. In the Load event, add the following lines of code:
	
	        DIMENSION THISFORM.mylist(1)
	        =ADIR(THISFORM.mylist,"c:\vfp\samples\data\*.dbf")
	
	3. For the listbox, change the RowSourceType to 5-Array, and then change the
	  RowSource to "THISFORM.mylist" (without the quotation marks).
	
	NOTE: The arguments used with the ADIR() function directly affect file searches.
	
	For more information about the arguments used with the ADIR() function, see the
	version 2.0 "Commands & Functions" manual or the version 2.5 "Language
	Reference" manual.
	
	Additional query words: VFoxWin FoxDos FoxWin 2.50 2.50a 2.50b 2.60 2.60a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbVFP300
	Version           : MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
