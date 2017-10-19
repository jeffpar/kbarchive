---
layout: page
title: "Q114194: PRB: Cannot Access Selected Table"
permalink: /kb/114/Q114194/
---

## Q114194: PRB: Cannot Access Selected Table

	Article: Q114194
	Product(s): Microsoft FoxPro
	Version(s): 2.60 3.00 | 2.60
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, version 2.6 
	- Microsoft FoxPro for Windows, version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	FoxPro produces a "Cannot access selected table" error message when a table is
	closed and that table is participating in a POPUP ... PROMPT FIELDS command that
	is active when the table is closed.
	
	CAUSE
	=====
	
	When the PROMPT FIELDS clause of a POPUP command is used to define a popup,
	FoxPro establishes a link between the POPUP command and the table from which the
	POPUP command derives its data. If the table on which the popup is based is
	closed while the POPUP command is active, the link between the POPUP command and
	the data is severed. FoxPro, therefore, cannot continue to display the popup.
	
	In dBASE IV, a popup created with the PROMPT FIELDS clause is loaded into memory.
	Since dBASE does not maintain a link between the POPUP command and the table
	from which the POPUP command derives data, it is possible to close a table on
	which a popup is based while that POPUP command is active. Therefore, the sample
	code in the "More Information" section below will not generate an error if it is
	executed in dBASE IV.
	
	RESOLUTION
	==========
	
	If a popup is created with the PROMPT FIELDS clause, do not close the table from
	which that popup derives its data while that POPUP command exists. Use the
	RELEASE POPUP command to release the POPUP command before closing any tables
	from which that popup obtains its data. Once the POPUP command has been
	released, close the desired tables.
	
	STATUS
	======
	
	This behavior is by design. FoxPro cannot accommodate the behavior found in
	dBASE in this instance due to differences in the way this type of popup is
	internally managed.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Place the following code in a .PRG file and execute the code. When the popup
	appears, press the ENTER key to cause the "getname" procedure to be executed.
	
	    USE c:\<FoxPro_directory>\sample\catalog\CUSTOMER
	          * In Visual FoxPro use c:\vfp\samples\data\customer
	
	    DEFINE POPUP testpop FROM 2,20 TO 21,25 PROMPT FIELD state
	         * In Visual FoxPro use the 'country' field instead of  'state'
	
	    ON SELECTION POPUP testpop DO getname
	    ACTIVATE POPUP testpop
	
	    RELEASE POPUP testpop
	
	    RETURN
	
	    PROCEDURE getname
	      USE
	
	      * The 'Cannot access selected table' error message
	      * will occur here because the table on which this
	      * popup was based has already been closed.
	
	      DEACTIVATE POPUP
	
	    RETURN
	
	Additional query words: VFoxWin FoxDos FoxWin differences errmsg err msg error 1152
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260DOS kbFoxPro260 kbVFP300
	Version           : 2.60 3.00 | 2.60
	
	=============================================================================
	
