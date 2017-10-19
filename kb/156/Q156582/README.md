---
layout: page
title: "Q156582: PRB: Opening Database Named IN.DBC as a Table Causes Error"
permalink: /kb/156/Q156582/
---

## Q156582: PRB: Opening Database Named IN.DBC as a Table Causes Error

	Article: Q156582
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to open a .dbc file named In.dbc as a table with the USE command
	causes the following error message to appear:
	
	  Expression is not valid outside of With/EndWith.
	
	CAUSE
	=====
	
	The USE command has an IN clause. In this case, Visual FoxPro cannot determine
	whether the word "In" is a clause of the command or the file name.
	
	WORKAROUND
	==========
	
	The following syntax successfully opens the .dbc file as a table:
	
	     USE "In.dbc"
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In this case, the syntax of the USE command is ambiguous. The USE IN <exp>
	command closes a table located in the specified work area. Since it is not clear
	that "In" is a file name, FoxPro treats it like a clause of the USE command.
	
	When FoxPro interprets the USE command, it attempts to evaluate the .dbc file as
	a property. Since no such property exists, the error message appears.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, type the following code:
	
	        CREATE DATABASE In
	        CLOSE DATABASE
	        USE In.dbc
	
	2. After the above error appears, click the Cancel button.
	
	3. Type the following line in the Command window to open the database as a
	  table:
	
	        USE "In.dbc"
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
