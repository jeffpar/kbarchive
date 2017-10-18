---
layout: page
title: "Q138495: PRB: Compile Dialog Boxes Appear Inconsistent or Incomplete"
permalink: kb/138/Q138495/
---

## Q138495: PRB: Compile Dialog Boxes Appear Inconsistent or Incomplete

	Article: Q138495
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro, clicking Compile on the Program menu offers a different
	Compile dialog box from what you get when you type the following in the Command
	window:
	
	     COMPILE ?
	
	Also, neither Compile dialog box offers an option to compile forms or databases.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Programs are the default file type for compiling. In each of the two dialog
	boxes, the following files are displayed:
	
	File Type        Source Extension  Compiled Extension
	-----------------------------------------------------
	program file          prg                 fxp
	form code             spr                 spx
	menu code             mpr                 mpx
	query                 qpr                 qpx
	format                fmt                 prx
	
	In Visual FoxPro, you can also compile forms and databases (databases for stored
	procedures). However, forms cannot be compiled from either Compile dialog box.
	You can, however, compile databases.
	
	To compile databases, select All Files from the List Files of the Type list. Then
	select the appropriate file. To compile forms, use COMPILE FORM command in the
	Command window.
	
	NOTE: Forms are automatically compiled when they are saved from the Form
	Designer.
	
	Source code for stored procedures and forms are stored in memo fields either in
	the .dbc file table or .scx file table. When each is compiled, the object code
	is placed into an additional memo field.
	
	Typing the following command in the Command window will open the same dialog box
	that GETFILE() offers:
	
	     COMPILE ?
	
	In this dialog box, the option to compile programs is offered, but only one
	program may be selected. Program files, forms, and databases may be compiled
	from this dialog box. No other compiling options are offered from this dialog.
	
	For much more in-depth compiling options, click Compile on the Program menu. The
	compile dialog box that appears allows you to compile multiple files at one
	time, as well create a log file, encrypt compiled files, include debugging
	information, and compile updated files only.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, type:
	
	     COMPILE ?
	
	  Notice that a GETFILE() style dialog box appears with a tailored prompt and
	  list of program extensions.
	
	2. On the Program menu, click Compile.
	
	  Notice that a different Compile dialog box comes up.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
