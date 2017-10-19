---
layout: page
title: "Q192226: FIX: Edit/Clear From Menu Fails to Clear General Field in Editor"
permalink: /kb/192/Q192226/
---

## Q192226: FIX: Edit/Clear From Menu Fails to Clear General Field in Editor

	Article: Q192226
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You attempt to clear a general field while in the editor, by using the Clear
	option under the Visual FoxPro Edit menu. The general field appears to be
	cleared, but if you edit the general field again, you will see the original
	contents are again visible.
	
	RESOLUTION
	==========
	
	As a workaround, you can use the BLANK command, specifying the general field as
	the field to blank. For example:
	
	  BLANK FIELDS <general field name>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	The general field editor is opened by using MODIFY GENERAL <general field
	name> or, within a grid or browse window, by double-clicking the general
	field or pressing CTRL+PAGE DOWN while the general field has focus.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	        CREATE TABLE genfld (f1 c(5), f2 g)
	        APPEND BLANK
	        APPEND GENERAL f2 FROM (HOME()+'fox.bmp')
	        WAIT WINDOW "Select Edit/Clear from menu, and close edit window" ;
	         NOWAIT
	        MODIFY GENERAL f2
	        WAIT WINDOW "In VFP 5.0x this still has the image" NOWAIT
	        MODIFY GENERAL f2
	
	2. Select Edit/Clear from the menu.
	
	3. Close the editor window.
	
	The bitmap image reappears in the second editor window. To demonstrate the
	workaround, run the following code from a program (.PRG) file:
	
	     CREATE TABLE genfld (f1 c(5), f2 g)
	     APPEND BLANK
	     APPEND GENERAL f2 FROM (HOME()+'fox.bmp')
	     WAIT WINDOW "Close edit window to see workaround" NOWAIT
	     MODIFY GENERAL f2
	     WAIT WINDOW "The image will now be gone" NOWAIT
	
	     * The following code clears the general field.
	     BLANK FIELDS f2
	
	     MODIFY GENERAL f2
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600fix kbXBase KbDBFDBC kbDatabase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
