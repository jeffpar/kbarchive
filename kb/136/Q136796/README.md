---
layout: page
title: "Q136796: PRB: Graphics Do Not Display When Using List Box with Pictures"
permalink: kb/136/Q136796/
---

## Q136796: PRB: Graphics Do Not Display When Using List Box with Pictures

	Article: Q136796
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the code example on page 289 of the Visual FoxPro Developer's Guide to
	display graphics next to list box items causes inconsistent results. Sometimes
	the graphics show and other times they do not. Occasionally, when you click an
	item in the list, the graphics show only momentarily; then they vanish. You may
	also discover some of the graphics are present as you scroll down in the list of
	file names and still others that are not.
	
	CAUSE
	=====
	
	There seems to be a limit to the number of graphics Visual FoxPro can display
	using this example. If you select a directory that has fewer files, resulting in
	a smaller number of items in the list box, the graphics tend to display more
	consistently.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Place a list box on the form.
	
	3. In the click event of the list box, enter the following code (also found on
	  page 289 of the Developer's Guide), ensuring the path to the graphic files is
	  correct:
	
	     FOR iItem = 5 TO THIS.ListCount
	        cExtension = UPPER(RIGHT(THIS.List(iItem),3))
	        DO CASE
	           CASE cExtension = "DBF"
	              THIS.Picture(iItem) = "tables.bmp"
	           CASE cExtension = "BMP"
	              THIS.Picture(iItem) = "other.bmp"
	           CASE cExtension = "PRG"
	              THIS.Picture(iItem) = "programs.bmp"
	           CASE cExtension = "SCX"
	              THIS.Picture(iItem) = "forms.bmp"
	           OTHERWISE
	              THIS.Picture(iItem) = IIF("]" $ cExtension, ;
	                 "", "textfile.bmp")
	        ENDCASE
	     ENDFOR
	
	4. Set the RowSourceType of the list box to 7 - Files.
	
	5. Save and run the form.
	
	6. Use the list box control on your form to find the
	  C:\Vfp\Samples\Graphics\Bmps\FoxPro directory and watch the graphics to the
	  left of the file names. Notice the behavior described above.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
