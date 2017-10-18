---
layout: page
title: "Q100429: How to Specify an External Editor for Text Files"
permalink: kb/100/Q100429/
---

## Q100429: How to Specify an External Editor for Text Files

	Article: Q100429
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.5x,2.6,2.6a; WINDOWS:2.5x,2.6,2.6a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft FoxPro supports the use of an external editor for the editing of text
	files. In Microsoft FoxPro for Windows, this can either be a Windows-based
	editor or an MS-DOS-based editor.
	
	You can use the TEDIT entry in the CONFIG.FPW file to control what text editor
	will be used.
	
	The normal format for the TEDIT entry in the CONFIG.FPW file is:
	
	  TEDIT=/0 <editor>
	
	The /0 (slash zero) parameter is used to tell FoxPro to give the editor as much
	memory as possible. This format can be used to start an MS-DOS-based editor such
	as EDIT.COM from MS-DOS versions 5.0 and later, as follows:
	
	  TEDIT=/0 EDIT.COM
	
	If you want to use a Windows-based editor, you must use the /N parameter. This
	parameter is used to specify that the program to be run is a Windows-based
	program. For example, if you want to use NOTEPAD.EXE as your editor, use the
	following line:
	
	  TEDIT=/N NOTEPAD.EXE
	
	REFERENCES
	==========
	
	For more information on the /0 and /N parameters, see the RUN command in the
	Help file, or see the "Language Reference" manual.
	
	Additional query words: FoxDos FoxWin 2.50 2.50a 2.50b
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro260a
	Version           : MS-DOS:2.5x,2.6,2.6a; WINDOWS:2.5x,2.6,2.6a
	
	=============================================================================
	
