---
layout: page
title: "Q114863: How to Update Other @ ... GET Fields While in a List Box"
permalink: kb/114/Q114863/
---

## Q114863: How to Update Other @ ... GET Fields While in a List Box

	Article: Q114863
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6x; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to update fields in a screen while a user is
	scrolling through a list box that is based on a database field (a "prompt field"
	in the Screen Builder in FoxPro 2.x for Windows).
	
	MORE INFORMATION
	================
	
	FoxPro 2.x for Windows
	----------------------
	
	When a list box is set up as a prompt field in the Screen Builder or is based on
	a POPUP defined with PROMPT FIELD, scrolling through the list box also moves the
	record pointer in the database. In order for other @ ... GET fields on the
	screen to be updated as the record pointer is moved, insert the following code
	in the WHEN clause of the list box:
	
	     SHOW GETS
	     RETURN
	
	The WHEN clause is reexecuted as the user moves through the list box, which
	allows this code to update those fields.
	
	Visual FoxPro for Windows
	-------------------------
	
	In a form, use the following code for the list box's WHEN clause:
	
	     THISFORM.REFRESH
	     RETURN
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin 2.50 2.50a 2.50b 2.50c 2.60 2.60a refresh show listbox
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbVFP300
	Version           : MACINTOSH:2.5x,2.6x; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
