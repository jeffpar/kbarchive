---
layout: page
title: "Q130996: PRB: &quot;Save As&quot; Directory Isn't the Same as Default Directory"
permalink: /kb/130/Q130996/
---

## Q130996: PRB: &quot;Save As&quot; Directory Isn't the Same as Default Directory

	Article: Q130996
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
	
	After choosing Save As from the File menu, the current directory listed in the
	Save As dialog box is not the same as the directory set previously by the SET
	DEFAULT command.
	
	CAUSE
	=====
	
	Visual FoxPro uses the current directory, not the default directory as its
	default for system-level functionality such as opening or saving files.
	
	The SET DEFAULT command sets the directory that Visual FoxPro uses to look for
	data. It does not effect system-level functionality.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a directory off the root of drive C: called TEMP.
	
	2. Start Visual FoxPro.
	
	3. Enter the following commands, one at a time, in the Command window:
	
	     SET DEFAULT TO C:\ 
	     CD \TEMP
	     MODIFY COMMAND test.prg
	
	4. In the empty window that comes up for TEST.PRG type:
	
	  " This is a test. " (without the quotation marks)
	
	5. From the File Menu, choose Save As.
	
	6. Note that the currently selected "Save As" directory is C:\TEMP, not C:\ as
	  set by the SET DEFAULT command.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
