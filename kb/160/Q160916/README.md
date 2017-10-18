---
layout: page
title: "Q160916: HOWTO: Ensure Form Uses Tables from Correct .dbc File Location"
permalink: kb/160/Q160916/
---

## Q160916: HOWTO: Ensure Form Uses Tables from Correct .dbc File Location

	Article: Q160916
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you create a form and add tables to its DataEnvironment from a .dbc file in a
	certain directory, and you move the form and directory structure, you may find
	that it will continue to access the .dbc file in the original directory. If you
	wish to ensure that a form with tables in its Data Environment uses tables from
	a specific location (that is, from a specific .dbc file or files), specify the
	path to the .dbc file for each cursor object in the BeforeOpenTables event
	method code of the form's DataEnvironment object.
	
	MORE INFORMATION
	================
	
	In order to force your form to use tables from a .dbc file from the directory
	C:\Mydatadir, specify the path to the .dbc file in the DataEnvironment
	BeforeOpenTables event method code. The .dbc in this example is called
	Mydbc.dbc. Regardless of the location of the .dbc file used when a form is
	designed, if you use code like the one below, it uses the .dbc file in
	C:\Mydatadir when you run the form.
	
	   * Place this in the DataEnvironment.BeforeOpenTables() code
	   LOCAL lcDatapath, lnBufferMode, lnI, lcI
	
	   * This could be in a format of "\\<unc path name>\share\" or
	   * "<drive>:\directory\"
	   lcDatapath = "C:\myDataDir\"
	
	  lnBufferMode = 5
	
	  FOR lnI = 1 TO 10            && Assume only 10 or less Cursor objects
	     * This assumes that the cursors have been left with the default names
	     * in the format of Cursor1, Cursor2, etc.
	     IF TYPE("this.cursor"+ALLTR(STR(lnI)))=="O" && Is this cursor an object?
	
	        lcI=ALLTR(STR(lnI))    && Convert the counter to a string
	
	        * Macro substitute the string value into cursorname to set property
	        THIS.CURSOR&lcI..DATABASE=(lcDatapath)+'mydbc.dbc'
	
	        * You may also set other properties for cursors here
	        THIS.CURSOR&lcI..BUFFERMODEOVERRIDE=lnBufferMode
	     ENDIF
	  ENDFOR
	
	(c) Microsoft Corporation 1996, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
